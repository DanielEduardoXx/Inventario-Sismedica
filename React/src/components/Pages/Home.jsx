import { Card, TextField, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import CardComponent from "../Common/CardComponent";
import DescargarFormatoEntregas from "../../hooks/descargasFormato/useDescargaEntregas";

function Home() {
  return (
    <>
      <Box >
        <CardComponent
          titleForm={'Formulario Celulares'}
          showAction={false}
          title={'Descargas'}
          childrenModal={{}}
          children={
            <Box sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column' },  justifyContent: 'space-around' }}>

              <Card >
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '1rem' }}>
                  <Typography>Descargar Todas las Relaciones</Typography>
                  <DescargarFormatoEntregas />

                </Box>
              </Card>

              <Card sx={{ display: 'flex', flexDirection: { md: 'row', sm: 'column' } }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding: '1rem' }}>
                  <Typography>Descargar Todas las Relaciones</Typography>
                  <DescargarFormatoEntregas />

                </Box>
              </Card>

            </Box>


          }
        />

      </Box>
    </>
  );
}

export default Home;
