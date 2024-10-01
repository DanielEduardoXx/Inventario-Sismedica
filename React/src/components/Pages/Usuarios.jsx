import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import TablaInformacion from "../Common/TablaInformacion";
import useGetUsuarios from "../../hooks/usuarios/useGetUsuarios";
import { FormUsuario } from "../Common/FormulariosModal";


function Usuarios() {
  const { data, loading, error } = useGetUsuarios();

  // Prepara los datos en el formato requerido por la tabla
  const rows = (data || []).map(item => ({
    doc: item.doc,
    nombres: item.nombres, // ajusta según el formato de tus datos
    apellidos: item.apellidos, // ajusta según el formato de tus datos
    cargo: item.id_cargo, // ajusta según el formato de tus datos
    regional: item.id_regional, // ajusta según el formato de tus datos
    area: item.id_area, // ajusta según el formato de tus datos


  }));
  console.log("<<", rows)
  console.log(">>", data)

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Box >
        <CardComponent
          titleForm={'Formulario Usuarios'}
          title={"Usuarios"}
          childrenModal={{ form1: <FormUsuario /> }}
          children={
            < TablaInformacion
              rows={rows}
              idKey={"doc"}
              columna1={"Documento"}
              columna2={"Nombres"}
              columna3={"Cargo"}
              columna4={"Area"}
              columna5={"Regional"}
            />

          }
        />

      </Box>
    </>
  );
}

export default Usuarios;