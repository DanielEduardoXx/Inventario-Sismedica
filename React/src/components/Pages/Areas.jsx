import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import { FormCelulares } from "../Common/FormulariosModal";
import TablaInformacion from "../Common/TablaInformacion";
import useGetAreas from "../../hooks/datosSismedica/areas/useGetAreas";
import { FormAreas } from "../Common/FormulariosModal";



function Areas() {
  const { data, loading, error } = useGetAreas();

  // Prepara los datos en el formato requerido por la tabla
  const rows = data.map(item => ({
    nombres: item.nombre, // ajusta según el formato de tus datos
    id:item.id
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (


    <>
      <Box >
        <CardComponent
          titleForm={'Formulario Areas'}
          title={"Areas"}
          childrenModal={{ Form1: <FormCelulares /> }}
          children={
            <TablaInformacion
              rows={rows}
              idKey={"id"}
              columna2={"Nombres"}
            />

          }
        />

      </Box>
    </>
  );
}

export default Areas;
