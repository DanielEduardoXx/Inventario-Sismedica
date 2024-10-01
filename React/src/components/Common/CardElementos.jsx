import { Box, Paper, Typography, Grid, styled, Card, CardHeader, CardContent, TextField, Button } from "@mui/material";
import CardModal from "./CardModal";
import { useState } from "react";
import { TbPointFilled } from "react-icons/tb";

const StyledCard = styled(Card)(({ theme, bgColor }) => ({
    textAlign: 'center',
    transition: 'background-color 0.3s ease', // Añade una transición suave
    cursor: 'pointer', // Cambia el cursor a una mano
    backgroundColor: bgColor, // Usa el color de fondo dinámico
    '&:hover': {
        backgroundColor: theme.palette.grey[300], // Cambia el color de fondo al pasar el mouse
    },
}));

function    CardElementos({ data, imagen, serial, id_tipo_elemento, disponibilidad }) {

    if (!data) return <div>Loading...</div>;
    if (data.error) return <div>Error: {data.error.message}</div>;

    const [open, setOpen] = useState(false);
    const [openModalAsignacion, setOpenModalAsignacion] = useState(false);
    const [selectedElement, setSelectedElement] = useState(null);

    const [formData, setFormData] = useState({
        doc: '',
        observaciones: '',
        fecha_entrega: '',
        id_estado: ''
    })

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
        console.log('valor', value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleOpenModalAsignacion();
    };


    console.log('>> elemento date', selectedElement)
    const handleOpen = (element) => {
        setSelectedElement(element);
        setOpen(true);
    };


    const handleOpenModalAsignacion = () => {
        console.log('clickeado')
        setOpenModalAsignacion(true);
    };

    const handleCloseModalAsignacion = () => {
        setOpenModalAsignacion(false);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedElement(null);
    };

    return (
        <>
            <Grid container spacing={3}>
                {data.map((element) => {
                    // Determina el color de fondo basado en la disponibilidad
                    const bgDisponibilidad = element.disponibilidad === 1 ? '#7DDA58' : '#FF4647';

                    return (
                        <Grid item xs={'auto'} sm={'auto'} md={'auto'} key={element[serial]}>
                            <StyledCard >
                                <CardHeader
                                    title={element[serial]}
                                    sx={{ backgroundColor: '#f3f4f7' }}
                                />
                                <CardContent style={{ padding: 20, textAlign: 'center' }} onClick={() => handleOpen(element)}>
                                    {imagen}
                                    <TbPointFilled style={{ color: bgDisponibilidad, fontSize: '24px' }} />

                                </CardContent>
                            </StyledCard>
                        </Grid>
                    );
                })}
            </Grid>
            <CardModal
                open={open}
                handleClose={handleClose}
                title={selectedElement ? (

                    <Typography sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                        <strong>Serial: </strong> {selectedElement[serial]}
                    </Typography>) : ''}

                content={
                    selectedElement ? (
                        <Box sx={{ display: { md: 'flex', sm: 'column' }, justifyContent: 'space-around' }}>

                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                                {
                                    selectedElement[disponibilidad] === 1
                                        ? (
                                            <Paper sx={{ padding: '1rem', display: 'flex', flexDirection: 'column', width: '100%' }}>
                                                <TextField id="doc" label="Documento" variant="outlined" onChange={handleChange} value={formData.doc} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                                                <TextField id="observaciones" label="Observaciones" variant="outlined" onChange={handleChange} value={formData.observaciones} sx={{ width: '100%', margin: '0.5rem 0' }} />
                                                <TextField id="fecha_entrega" label="Fecha de Entrega" variant="outlined" onChange={handleChange} value={formData.fecha_entrega} sx={{ width: '100%', margin: '0.5rem 0' }} />
                                                <TextField id="id_estado" label="Estado" variant="outlined" onChange={handleChange} value={formData.id_estado} sx={{ width: '100%', margin: '0.5rem 0' }} />


                                                <button type='submit' onClick={handleSubmit} >
                                                    Asignar
                                                </button>

                                            </Paper>
                                        ) :
                                        ''
                                }

                            </Box>

                            <Box>

                                <Typography variant="body1">
                                    {
                                        selectedElement[id_tipo_elemento] === 1
                                            ? (
                                                <Box sx={{ display: 'flex' }}>

                                                    <Box>
                                                        <Typography sx={{ mt: 2 }}>
                                                            <strong>Número de Inventario:</strong> {selectedElement.numero_inventario}
                                                        </Typography>
                                                        <Typography sx={{ mt: 2 }}>
                                                            <strong>Marca:</strong> {selectedElement.marca}
                                                        </Typography>
                                                        <Typography sx={{ mt: 2 }}>
                                                            <strong>Modelo:</strong> {selectedElement.modelo}
                                                        </Typography>
                                                        <Typography sx={{ mt: 2 }}>
                                                            <strong>Disponibilidad:</strong> {selectedElement.disponibilidad === 1 ? 'Disponible' : 'No Disponible'}
                                                        </Typography>
                                                        <Typography sx={{ mt: 2 }}>
                                                            <strong>Estado:</strong> {selectedElement.id_estado}
                                                        </Typography>
                                                        <Typography sx={{ mt: 2 }}>
                                                            <strong>Tipo de Elemento:</strong> {selectedElement.nombre_tipo_elemento}
                                                        </Typography>
                                                        <Typography sx={{ mt: 2 }}>
                                                            <strong>Tipo de Elemento:</strong> {selectedElement.id_tipo_elemento}
                                                        </Typography>
                                                    </Box>

                                                </Box>

                                            )
                                            :
                                            (
                                                <Box>

                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>Número de Inventario:</strong> {selectedElement.numero_inventario}
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>Marca:</strong> {selectedElement.marca}
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>Modelo:</strong> {selectedElement.modelo}
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>IMEI1:</strong> {selectedElement.imei1}
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>IMEI2:</strong> {selectedElement.imei2}
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>Disponibilidad:</strong> {selectedElement.disponibilidad === 1 ? 'Disponible' : 'No Disponible'}
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>Estado:</strong> {selectedElement.id_estado}
                                                    </Typography>
                                                    <Typography sx={{ mt: 2 }}>
                                                        <strong>Tipo de Elemento:</strong> {selectedElement.nombre_tipo_elemento}
                                                    </Typography>
                                                </Box>

                                            )
                                    }

                                </Typography>
                            </Box>

                            {/* Puedes seguir agregando más componentes aquí */}
                        </Box>
                    ) : (
                        <Typography variant="body1">No se ha seleccionado ningún elemento</Typography>
                    )
                }
                selectedElement={selectedElement}

            />

            <CardModal
                open={openModalAsignacion}
                handleClose={handleCloseModalAsignacion}
                title={'Formulario'}
                content={
                    <Box>
                        <TextField id="doc" label="Documento" variant="outlined" onChange={handleChange} value={formData.doc} sx={{ width: '100%', margin: '0.5rem 0' }} />

                        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                            <button type='button' onClick={handleSubmit}>
                                Asignar
                            </button>
                        </Box>
                    </Box>
                }
            />
        </>
    );
};
export default CardElementos;