import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import TablaInformacion from "../Common/TablaInformacion";
//Hook
import useGetRegional from "../../hooks/datosSismedica/regional/useGetRegional";
//Hook
import useDropRegional from "../../hooks/datosSismedica/regional/useDropRegional";
//Formulario Regional
import { FormRegional } from "../Common/FormulariosModal";
//Modal Confirmacion Drop
import { swalEliminar } from '../Swal';
//Componente Snackbar
import SnackbarComponent from "../Snackbar";
//useState
import React, { useState, useEffect } from 'react';

function Regionales() {
  const { data, loading, error } = useGetRegional();
  const { deleteRegional, loading: eliminarLoading } = useDropRegional();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [regionales, setRegionales] = useState(data || []); // Estado local para las áreas


  // Actualiza las áreas cuando los datos cambian
  React.useEffect(() => {
    if (data) {
      setRegionales(data);
    }
  }, [data]);


  // Función para eliminar un área
  const eliminarRegional = async (id) => {
    swalEliminar(id, "Regional", async () => {
      console.log("Regional a eliminar:", id);
      try {
        // Llama al servicio para eliminar el área
        await deleteRegional(id);

        // Actualiza el estado local para reflejar la eliminación
        const updatedRegionales = regionales.filter(regional => regional.id !== id);
        setRegionales(updatedRegionales);


        setSnackbarMessage('Regional eliminada correctamente.');
        setSnackbarSeverity('success');
        console.log('Regional eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar Regional:', error);

        // Verifica si el error es 500 (asociada a un usuario)
        if (error.message === 'El Regional está asociada a un usuario. No se puede eliminar.') {
          setSnackbarMessage('Error al eliminar la Regional: está asociada a un usuario.');
        } else {
          setSnackbarMessage('Error al eliminar la Regional. Por favor, inténtalo de nuevo.');
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
  const rows = regionales.map(item => ({
    id: item.id, // ajusta según el formato de tus datos
    nombre: item.nombre // ajusta según el formato de tus datos
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box>
      <CardComponent
        titleForm={'Formulario Regionales'}
        title={"Regionales"}
        childrenModal={{ form1: <FormRegional /> }}
        children={
          <TablaInformacion
            rows={rows}
            idKey={"id"}
            columnas={[
              { titulo: "Nombre", campo: "nombre" },
            ]}
            eliminarFila={eliminarRegional}
          />
        }
      />

      <SnackbarComponent
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
}

export default Regionales;
