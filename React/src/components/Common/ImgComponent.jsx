import  Box from "@mui/system/Box"
import Typography  from "@mui/material/Typography"

const ImagenesElementos = ({imgNombre, refImg}) => {
    return (
        <>
            <Box>
                <Box>
                    <img src={`../../../img/${imgNombre}`} alt={`${refImg}`} style={{ width: '130px', height: '130px' }} />
                </Box>
      
            </Box>

        </>
    )
}

export default ImagenesElementos