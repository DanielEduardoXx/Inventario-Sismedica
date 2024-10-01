import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import TablaInformacion from "../Common/TablaInformacion";
import useGetCargos from "../../hooks/datosSismedica/cargos/useGetCargos";
import { FormLaptops } from "../Common/FormulariosModal";


function Cargos() {
  const { data, loading, error } = useGetCargos();

  // Prepara los datos en el formato requerido por la tabla
  const rows = data.map(item => ({
    nombres: item.nombre // ajusta según el formato de tus datos
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <>
      <Box >
        <CardComponent
          titleForm={'Formulario Cargos'}
          title={"Cargos"}
          childrenModal={{ Form1: <FormLaptops /> }}
          children={
            < TablaInformacion
              rows={rows}
              idKey={"id"}
              columna2={"Nombre Regional"}
            />

          }
        />

      </Box>
    </>
  );
}

export default Cargos;
