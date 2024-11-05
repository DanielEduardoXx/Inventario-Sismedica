import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import TablaInformacion from "../Common/TablaInformacion";
//Formulario para crear nueva Area
import { FormAreas } from "../Common/FormulariosModal";
//Modal Confirmacion Drop
import { swalEliminar } from '../Swal';
//Hook traer Areas
import useGetAreas from "../../hooks/datosSismedica/areas/useGetAreas";
//Hook Eliminar Area
import useDropArea from "../../hooks/datosSismedica/areas/useDropArea";
//Componente Snackbar
import SnackbarComponent from "../Snackbar";
//useState
import React, { useState, useEffect } from 'react';


function Areas() {
  const { data, loading, error } = useGetAreas();
  const { deleteArea, loading: eliminarLoading } = useDropArea();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const [areas, setAreas] = useState(data || []); // Estado local para las áreas


  // Actualiza las áreas cuando los datos cambian
  React.useEffect(() => {
    if (data) {
      setAreas(data);
    }
  }, [data]);


  // Función para eliminar un área
  const eliminarArea = async (id) => {
    swalEliminar(id, "Área", async () => {
      console.log("Área a eliminar:", id);
      try {
        // Llama al servicio para eliminar el área
        await deleteArea(id);

        // Actualiza el estado local para reflejar la eliminación
        const updatedAreas = areas.filter(area => area.id !== id);
        setAreas(updatedAreas);


        setSnackbarMessage('Área eliminada correctamente.');
        setSnackbarSeverity('success');
        console.log('Área eliminada correctamente');
      } catch (error) {
        console.error('Error al eliminar área:', error);

        // Verifica si el error es 500 (asociada a un usuario)
        if (error.message === 'El área está asociada a un usuario. No se puede eliminar.') {
          setSnackbarMessage('Error al eliminar el área: está asociada a un usuario.');
        } else {
          setSnackbarMessage('Error al eliminar el área. Por favor, inténtalo de nuevo.');
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
    const rows = areas.map(item => ({
      id: item.id,
      nombre: item.nombre
    }));
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
  

  return (
    <>
      <Box>
        <CardComponent
          titleForm={'Formulario Areas'}
          title={"Áreas"}
          childrenModal={{ form1: <FormAreas /> }}
          children={
            <TablaInformacion
              rows={rows}
              idKey={"id"}
              columnas={[
                { titulo: "Nombres", campo: "nombre" },
              ]}
              eliminarFila={eliminarArea}
            />
          }
        />
      </Box>

      {/* Snackbar para mostrar mensajes */}
      <SnackbarComponent
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}

export default Areas;