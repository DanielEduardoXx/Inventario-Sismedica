import { TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import CardElementos from "../Common/CardElementos";
import useGetLaptops from "../../hooks/elementos/useGetLaptops";
import ImagenesElementos from "../Common/ImgComponent";
import { FormLaptops } from "../Common/FormulariosModal";


function Laptops() {

  const { data, loading, error } = useGetLaptops();
  console.log(data)
  
  return (
    <>
      <Box >
        <CardComponent
          titleForm={'Formulario Laptops'}
          childrenModal={{form1: <FormLaptops/>}}
          title={'Laptops'}
          children={
            <CardElementos
              data={data}
              imagen={
                <ImagenesElementos
                  imgNombre="ImagenPortatil.jpg"
                  refImg="Imagen Portatil"
                />}
              serial="serial_elemento"
              disponibilidad = 'disponibilidad'
              id_tipo_elemento={'id_tipo_elemento'}

            />
          }
        />

      </Box>
    </>
  );
}

export default Laptops;
