import React from 'react';
import { CButton } from '@coreui/react';
import { Box } from '@mui/material';
// #ff6240
// Componente funcional para un botón de éxito
export const BotonSuccess = ({ mensaje, onClick }) => {
    return (

        <Box sx={{ marginRight: "10px" }}>
            <CButton color="success" variant="outline" onClick={onClick}>
                {mensaje}
            </CButton>
        </Box>


    );
};

export const BotonError = ({ mensaje, onClick }) => {
    return (
        <Box sx={{ marginRight: "10px" }}>
            <CButton
                variant="outline"
                onClick={onClick}
                sx={{
                    color: "#ff6240",
                    borderColor: "#ff6240",
                    '&:hover': {
                        backgroundColor: "rgba(255, 0, 0, 0.1)", // Color de fondo cuando pasas el mouse
                        borderColor: "#ff6240"
                    }
                }}
            >
                {mensaje}
            </CButton>
        </Box>
    );
};


export const BotonDetail = ({ mensaje, onClick }) => {
    return (

        <Box sx={{ marginRight: "10px" }}>
            <CButton color="warning" variant="outline" onClick={onClick}>
                {mensaje}
            </CButton>
        </Box>

    );
};


