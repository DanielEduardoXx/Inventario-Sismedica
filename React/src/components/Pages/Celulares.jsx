import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import CardElementos from "../Common/CardElementos";
import useGetCelular from "../../hooks/elementos/useGetCelular";
import ImagenesElementos from "../Common/ImgComponent";
import { FormCelulares } from "../Common/FormulariosModal";
import { FormUsuario } from "../Common/FormulariosModal";




function Celular() {

  const { data, loading, error } = useGetCelular();
  console.log("hola", data)
  return (
    <>
      <Box >
        <CardComponent
          titleForm={'Formulario Celulares'}
          title={'Celulares'}
          childrenModal={{ form1: <FormCelulares /> }}
          children={
            <CardElementos
              data={data}
              imagen={<ImagenesElementos
                imgNombre="ImagenCelular.png"
                refImg="Imagen Celular"
              />}
              serial="serial_elemento"
              disponibilidad='disponibilidad'
              id_tipo_elemento={'id_tipo_elemento'}
            />
          }
        />

      </Box>
    </>
  );
}

export default Celular;
