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
import { swalEliminar } from '../Swal';


export default function TablaInformacion({ rows, idKey, columna1, columna2, columna3, columna4, columna5 }) {

    const [open, setOpen] = useState(false)
    const [selectedElement, setSelectedElement] = useState(null)

    const handleopen = (row) => {
        console.log(row)
        setSelectedElement(row)
        setOpen(true)
    };

    const handleClose = () => {
        setOpen(false)
        setSelectedElement(null)
    }

    if (!rows) return <div>Loading...</div>;

    return (

        <>

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead sx={{ backgroundColor: '#f3f4f7' }}>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center" variant="h6" >{columna1}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center" variant="h6" >{columna2}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center" variant="h6" >{columna3}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center" variant="h6" >{columna4}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center" variant="h6" >{columna5}</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center" variant="h6" >Configuración</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row[idKey] || index} // Usa un identificador único si está disponible, de lo contrario usa el índice
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell align="center" component="th" scope="row" >
                                    {row.doc}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row" >
                                    {row.nombres} {row.apellidos}
                                </TableCell>

                                <TableCell align="center" component="th" scope="row">
                                    {row.cargo}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {row.area}
                                </TableCell>
                                <TableCell align="center" component="th" scope="row">
                                    {row.regional}
                                </TableCell>

                                <TableCell align="center" sx={{ display: 'flex', justifyContent:'center'}}>
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
                                            onClick={() => swalEliminar({children:"Seguro que quiere eliminar "})}
                                        />
                                    </Box>


                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <CardModal
                open={open}
                handleClose={handleClose}
                title={selectedElement ? `${selectedElement.nombres} ${selectedElement.apellidos}` : ''}
                content={selectedElement ? `Detalles del elemento ${selectedElement.doc}` : ''}
            />


        </>

    );
}
