import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import { TableHead, Box } from '@mui/material';
// import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import CardModal from './CardModal';

//Botones
import { BotonError, BotonSuccess } from '../Button';

//iconos
import DeleteIcono from '../Icons/Detele';
import VistaIcon from '../Icons/Vista';
import UpdateIcon from '../Icons/Update';


export default function TablaInformacion({
    rows,
    idKey,
    columnas, // Ahora pasamos las columnas como un array
    eliminarFila
}) {

    const [open, setOpen] = useState(false)
    const [selectedElement, setSelectedElement] = useState(null)

    const handleopen = (row) => {
        setSelectedElement(row)
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
        setSelectedElement(null)
    }


    if (!rows) return <div>Loading...</div>;
    if (rows <= 0) return <div>No hay usuarios para mostrar</div>;

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead sx={{ backgroundColor: '#f3f4f7' }}>
                        <TableRow>
                            {columnas.map((col, index) => (
                                <TableCell key={index} sx={{ fontWeight: 'bold' }} align="center">
                                    {col.titulo}
                                </TableCell>
                            ))}
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Configuración</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow key={row[idKey] || index}>
                                {columnas.map((col, i) => (
                                    <TableCell key={i} align="center">
                                        {row[col.campo]}
                                    </TableCell>
                                ))}

                                <TableCell align="center" sx={{ display: 'flex', justifyContent: 'center' }}>
                                    <Box>
                                        <BotonError
                                            mensaje={<UpdateIcon />}
                                            onClick={() => handleopen(row)}
                                        />
                                    </Box>

                                    <Box>
                                        <BotonError
                                            mensaje={<VistaIcon />}
                                            onClick={() => handleopen(row)}
                                        />
                                    </Box>

                                    <Box>
                                        <BotonError
                                            mensaje={<DeleteIcono />}
                                            onClick={() => eliminarFila(row[idKey])}
                                        />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>


            {/* Detalle de las filas */}
            <CardModal
                open={open}
                handleClose={handleClose}
                title={selectedElement ? `${selectedElement.nombres} ${selectedElement.apellidos}` : ''}
                content={selectedElement ? `Detalles del elemento ${selectedElement[idKey]}` : ''}
            />
        </>
    );
}