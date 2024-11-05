import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import TablaInformacion from "../Common/TablaInformacion";
//Funciones API
import useGetUsuarios from "../../hooks/usuarios/useGetUsuarios";
import { FormUsuario } from "../Common/FormulariosModal";
import useDropUsers from "../../hooks/usuarios/useDropUsuario";
import { swalEliminar } from '../Swal';

//Componente Snackbar
import SnackbarComponent from "../Snackbar";

//useState
import React, { useState, useEffect } from 'react';


// Componente Usuarios

function Usuarios() {
  const { data: usuariosData, loading: usuariosLoading, error: usuariosError } = useGetUsuarios();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');
  const { deleteUser, loading: eliminarLoading } = useDropUsers();
  const [usuarios, setUsuarios] = useState(usuariosData || []); // Estado local para los usuarios


  // Actualiza los usuarios cuando los datos cambian
  React.useEffect(() => {
    if (usuariosData) {
      setUsuarios(usuariosData);
    }
  }, [usuariosData]);

// Función para eliminar un usuario
const eliminarUsuario = async (doc) => {
  swalEliminar(doc, "Usuarios", async () => {
    try {
      console.log('Iniciando eliminación del usuario con doc:', doc);

      await deleteUser(doc); // Llama al hook para eliminar
      console.log('Usuario eliminado en el servidor, doc:', doc);

      // Actualiza el estado local para reflejar la eliminación solo si no hubo errores
      const updatedUsuarios = usuarios.filter(usuario => usuario.doc !== doc);
      setUsuarios(updatedUsuarios);
  
      setSnackbarMessage('Usuario eliminado correctamente.');
      setSnackbarSeverity('success');
    } catch (error) {
      console.error('Error al eliminar usuario:', error);

      // Muestra el mensaje personalizado si existe
      setSnackbarMessage(error.message || 'Error al eliminar el usuario. Por favor, inténtalo de nuevo.');
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
  const rows = usuarios.map(item => ({
    doc: item.doc,
    nombres: item.nombres_usuario,
    apellidos: item.apellidos_usuario,
    cargo: item.nombre_area,
    regional: item.nombre_regional,
    area: item.nombre_area,
  }));


  if (usuariosLoading) return <div>Cargando...</div>;
  if (usuariosError) return <div>Error al traer Usuarios: {usuariosError.message}</div>;

  return (
    <Box>
      <CardComponent
        titleForm={'Formulario Usuarios'}
        title={"Usuarios"}
        childrenModal={{ form1: <FormUsuario /> }}
        children={

          <TablaInformacion
            rows={rows}
            idKey={"doc"}
            columnas={[
              { titulo: "Documento", campo: "doc" },
              { titulo: "Nombres", campo: "nombres" },
              { titulo: "Apellidos", campo: "apellidos" },
              { titulo: "Cargo", campo: "cargo" },
              { titulo: "Regional", campo: "regional" },
              { titulo: "Área", campo: "area" }
            ]}
            eliminarFila={eliminarUsuario}
          />
        }
      />
      {eliminarLoading && <div>Eliminando usuario...</div>}

      {/* Snackbar para mostrar mensajes */}
      <SnackbarComponent
        open={snackbarOpen}
        message={snackbarMessage}
        severity={snackbarSeverity}
        onClose={handleCloseSnackbar}
      />
    </Box>


  );
}

export default Usuarios;