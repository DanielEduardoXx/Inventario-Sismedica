import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import TablaInformacion from "../Common/TablaInformacion";
import useGetRegional from "../../hooks/datosSismedica/regional/useGetRegional";
import { FormRegional } from "../Common/FormulariosModal";

function Regionales() {
  const { data, loading, error } = useGetRegional();

  // Prepara los datos en el formato requerido por la tabla
  const rows = data.map(item => ({
    nombres: item.nombre // ajusta según el formato de tus datos
  }));

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Box>
      <CardComponent
        titleForm={'Formulario Regionales'}
        title={"Regionales"}
        childrenModal={{ Form1: <FormRegional /> }}
        children={
          <TablaInformacion
            nombreTabla={"Regional"}
            rows={rows}
            idKey={"id"}
            columna2={"Nombre Regional"}
          />
        }
      />
    </Box>
  );
}

export default Regionales;
