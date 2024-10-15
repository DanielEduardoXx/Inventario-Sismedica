import React from 'react';
import { Card, CardHeader, CardContent, Box } from '@mui/material';
import { BotonSuccess } from '../Button';
import { useState } from 'react';
import CardModal from './CardModal';
import { SearchComponent } from '../Search';

function CardComponent({ titleForm, title, children, childrenModal, showAction = true }) {

    const [open, setOpen] = useState(false);
    const [selectFormulario, setSelectFormulario] = useState(null)

    const handleOpen = (formulario) => {
        setSelectFormulario(formulario);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (

        <>
            <Card sx={{ width: 'auto', margin: '30px', borderRadius: '10px' }}>

                <CardHeader
                    title={title}
                    sx={{ backgroundColor: '#f3f4f7' }}
                    action={
                        showAction && (
                            <BotonSuccess mensaje="Agregar" onClick={() => handleOpen('form1')} />
                        )
                    }
                />

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <SearchComponent />
                </Box>

                    
                <CardModal

                    open={open}
                    handleClose={handleClose}
                    title={titleForm}
                    content=
                    {
                        childrenModal[selectFormulario] || <div>No content available</div>
                    }


                />

                {/* Contenido dentro del card */}
                <CardContent>
                    {children}
                </CardContent>
            </Card>

        </>

    );
}

export default CardComponent;