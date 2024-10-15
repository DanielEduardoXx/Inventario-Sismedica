import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";

import TablaInformacion from "../Common/TablaInformacion";

import useGetCargos from "../../hooks/datosSismedica/cargos/useGetCargos";

import { FormCargos } from "../Common/FormulariosModal";
//Modal Confirmacion Drop
import { swalEliminar } from '../Swal';
//Hook
import useDropCargo from "../../hooks/datosSismedica/cargos/useDropCargo";
//Componente Snackbar
import SnackbarComponent from "../Snackbar";
//useState
import React, { useState, useEffect } from 'react';


function Cargos() {
  const { data, loading, error } = useGetCargos();
  const { deleteCargo, loading: eliminarLoading } = useDropCargo();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [cargos, setCargos] = useState(data || []);


  // Actualiza las áreas cuando los datos cambian
  React.useEffect(() => {
    if (data) {
      setCargos(data);
    }
  }, [data]);


  // Función para eliminar un área
  const eliminarCargo = async (id) => {
    swalEliminar(id, "cargo", async () => {
      console.log("Cargo a eliminar:", id);
      console.log("Cargo a eliminar:", data.id);
      try {
        // Llama al servicio para eliminar el área
        await deleteCargo(id);

        // Actualiza el estado local para reflejar la eliminación
        const updatedCargos = cargos.filter(cargo => cargo.id !== id);
        setCargos(updatedCargos);


        setSnackbarMessage('Cargo eliminada correctamente.');
        setSnackbarSeverity('success');
        console.log('Cargo eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar Cargo:', error);

        // Verifica si el error es 500 (asociada a un usuario)
        if (error.message === 'El Cargo está asociada a un Compnente. No se puede eliminar.') {
          setSnackbarMessage('Error al eliminar el Cargo: está asociada a un usuario.');
        } else {
          setSnackbarMessage('Error al eliminar el Cargo. Por favor, inténtalo de nuevo.');
        }

        setSnackbarSeverity('error');
      } finally {
        setSnackbarOpen(true); // Muestra el Snackbar
      }
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  // Prepara los datos en el formato requerido por la tabla
  const rows = cargos.map(item => ({
    id: item.id, // ajusta según el formato de tus datos
    nombre: item.nombre // ajusta según el formato de tus datos
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Box >
        <CardComponent
          titleForm={'Formulario Cargos'}
          title={"Cargos"}
          childrenModal={{ form1: <FormCargos /> }}
          children={
            <TablaInformacion
              rows={rows}
              idKey={"id"}
              columnas={[
                { titulo: "Id", campo: "id" },
                { titulo: "Nombre", campo: "nombre" },

              ]}
              eliminarFila={eliminarCargo}
            />

          }
        />

      </Box>
      <SnackbarComponent
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}

export default Cargos;
