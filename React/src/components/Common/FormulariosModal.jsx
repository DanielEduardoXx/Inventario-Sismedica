
import { FormControl, TextField, Typography, Box, Select, MenuItem, InputLabel } from '@mui/material';
import { useState, useEffect } from 'react';

//Hook Create
import useCreateElemento from '../../hooks/elementos/useCreateElemento';
import useCreateUsuario from '../../hooks/usuarios/useCreateUsuario';
import useCreateCargo from '../../hooks/datosSismedica/cargos/useCreateCargo';
import useCreateArea from '../../hooks/datosSismedica/areas/useCreateArea';
import useCreateRegional from '../../hooks/datosSismedica/regional/useCreateRegional';

//Hook Get
import useGetCargos from '../../hooks/datosSismedica/cargos/useGetCargos';
import useGetRegional from '../../hooks/datosSismedica/regional/useGetRegional';
import useGetAreas from '../../hooks/datosSismedica/areas/useGetAreas';

import Alert from '@mui/material/Alert';

// Formulario Regional

export const FormRegional = () => {
    const [formData, setFormData] = useState({
        nombre: '',
    })
    const { data, loading, error, nueva_regional } = useCreateRegional();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {

            // Excluimos el `id` al enviar los datos
            const { id, ...dataToSend } = formData;

            await nueva_regional(dataToSend);
            setMessage({ text: 'Regional creado exitosamente', type: 'error' })

        } catch (error) {
            console.error("error0", error)
            setMessage({ text: 'Ups! Algo salió mal', type: 'error' });
        }
    }

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null)
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [message])


    return (

        <>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: 'flex', flexDirection: 'column' }} >
                    <Box>
                        <Typography variant="h6" align="center">
                            Información Personal
                        </Typography>
                        <Box sx={{ display: 'flex' }}>

                            <Box>
                                <TextField id="nombre" label="nombre" variant="outlined" onChange={handleChange} value={formData.nombre} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                            </Box>



                        </Box>
                    </Box>

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert severity={message.type} sx={{ mt: 2 }}>
                            {message.text}
                        </Alert>
                    )}
                </FormControl>
            </form>
        </>
    )
}


//Formulario Areas

export const FormAreas = () => {
    const { data: regionales, loading: loadingRegionales } = useGetRegional();

    const [formData, setFormData] = useState({
        nombre: '',
        id_regional: ''
    })
    const { data, loading, error, nueva_area } = useCreateArea();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value, name } = e.target;

        // Si el campo es 'id_regional', forzamos que sea un número
        if (id === 'id_regional' && isNaN(value)) {
            return;  // Evitar que se establezca un valor no numérico
        }

        setFormData({ ...formData, [id || name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Excluimos el `id` al enviar los datos
            const { id, ...dataToSend } = formData;

            console.log('Datos a enviar:', dataToSend);  // Verificar los datos enviados

            await nueva_area(dataToSend);  // Enviar datos sin `id`
            setMessage({ text: 'Área creada exitosamente', type: 'success' });
        } catch (error) {
            console.error("Error al crear el área:", error);
            setMessage({ text: 'Ups! Algo salió mal', type: 'error' });
        }
    }

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null)
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [message])


    return (

        <>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: 'flex' }} >
                    <Box>
                        <Typography variant="h6" align="center">
                            Información Personal
                        </Typography>
                        <Box sx={{ display: 'flex' }}>

                            <Box>
                                <TextField id="nombre" label="nombre" variant="outlined" onChange={handleChange} value={formData.nombre} sx={{ minWidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <FormControl fullWidth>
                                    <InputLabel id="regional-label">Regional</InputLabel>
                                    <Select labelId="regional-label" name="id_regional" onChange={handleChange} value={formData.id_regional}>
                                        {regionales.map((regional) => (
                                            <MenuItem key={regional.id} value={regional.id}>
                                                {regional.nombre}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Box>

                        </Box>
                    </Box>

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert severity={message.type} sx={{ mt: 2 }}>
                            {message.text}
                        </Alert>
                    )}
                </FormControl>
            </form>
        </>
    )
}

// Formulario Cargos

export const FormCargos = () => {
    const [formData, setFormData] = useState({
        nombre: '',
    })
    const { data, loading, error, nuevo_cargo } = useCreateCargo();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Excluimos el `id` al enviar los datos
            const { id, ...dataToSend } = formData;

            console.log('Datos a enviar:', dataToSend);  // Verificar los datos enviados

            await nuevo_cargo(dataToSend);  // Enviar datos sin `id`
            setMessage({ text: 'Cargo creada exitosamente', type: 'success' });
        } catch (error) {
            console.error("Error al crear el Cargo:", error);
            setMessage({ text: 'Ups! Algo salió mal', type: 'error' });
        }
    }

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null)
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [message])


    return (

        <>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: 'flex' }} >
                    <Box>
                        <Typography variant="h6" align="center">
                            Datos del nuevo Cargo
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

                            <Box >
                                <TextField id="nombre" label="nombre" variant="outlined" onChange={handleChange} value={formData.nombre} sx={{ minWidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                            </Box>

                        </Box>
                    </Box>

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert severity={message.type} sx={{ mt: 2 }}>
                            {message.text}
                        </Alert>
                    )}
                </FormControl>
            </form>
        </>
    )
}


//Formulario Usuario

export const FormUsuario = () => {
    const { data: areas, loading: loadingAreas } = useGetAreas();
    const { data: cargos, loading: loadingCargos } = useGetCargos();
    const { data: regionales, loading: loadingRegionales } = useGetRegional();

    const [formData, setFormData] = useState({
        doc: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        id_cargo: '',
        id_regional: '',
        id_area: ''
    })

    const { data, loading, error, nuevoUser } = useCreateUsuario();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, name, value } = e.target;
        setFormData({ ...formData, [id || name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await nuevoUser(formData);
            setMessage({ text: 'Usuario creado exitosamente', type: 'success' })

        } catch (error) {
            console.error("error0", error)
            setMessage({ text: 'Ups! Algo salió mal', type: 'error' });
        }
    }

    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null)
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [message])


    return (

        <>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: 'flex' }} >
                    <Box>
                        <Typography variant="h6" align="center">
                            Información Personal
                        </Typography>
                        <Box sx={{ display: { md: 'flex', sm: 'column' } }}>

                            <Box sx={{ width: 'auto', padding: { md: ' 0 1rem' } }}>
                                <TextField id="doc" label="Documento" variant="outlined" onChange={handleChange} value={formData.doc} sx={{ minWidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <TextField id="nombres" label="Nombres" variant="outlined" onChange={handleChange} value={formData.nombres} sx={{ minWidth: '100%', margin: '0.5rem 0', }} />
                            </Box>
                            <Box>

                                <TextField id="apellidos" label="Apellidos" variant="outlined" onChange={handleChange} value={formData.apellidos} sx={{ minWidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <TextField id="telefono" label="Telefono" variant="outlined" onChange={handleChange} value={formData.telefono} sx={{ minWidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                            </Box>


                        </Box>
                        <Typography variant="h6" align="center">
                            Información Empresarial
                        </Typography>
                        <Box sx={{ display: 'flex' }}>

                            <FormControl fullWidth>
                                <InputLabel id="area-label">Área</InputLabel>
                                <Select labelId="area-label" name="id_area" onChange={handleChange} value={formData.id_area || ''}>
                                    {areas.map((area) => (
                                        <MenuItem key={area.id} value={area.id}>
                                            {area.nombre}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="cargo-label">Cargo</InputLabel>
                                <Select labelId="cargo-label" name="id_cargo" onChange={handleChange} value={formData.id_cargo}>
                                    {cargos.map((cargo) => (
                                        <MenuItem key={cargo.id} value={cargo.id}>
                                            {cargo.nombre}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                            <FormControl fullWidth>
                                <InputLabel id="regional-label">Regional</InputLabel>
                                <Select labelId="regional-label" name="id_regional" onChange={handleChange} value={formData.id_regional}>
                                    {regionales.map((regional) => (
                                        <MenuItem key={regional.id} value={regional.id}>
                                            {regional.nombre}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>

                        </Box>
                    </Box>

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert severity={message.type} sx={{ mt: 2 }}>
                            {message.text}
                        </Alert>
                    )}
                </FormControl>
            </form>
        </>
    )
}


//Formulario Celulares

export const FormCelulares = () => {

    const [formData, setFormData] = useState({
        serial_elemento: '',
        numero_inventario: '',
        marca: '',
        modelo: '',
        imei1: '',
        imei2: '',
        id_tipo_elemento: 2,
        disponibilidad: 1
    })

    const { data, loading, error, nuevoElemento } = useCreateElemento();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await nuevoElemento(formData);
            setMessage({ text: 'Elemento creado exitosamente', type: 'success' })

        } catch (error) {
            console.error("error0", error)
            setMessage({ text: 'Ups! Algo salió mal', type: 'error' });
        }
    }



    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null)
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [message])


    return (

        <>
            <form onSubmit={handleSubmit}>
                <FormControl sx={{ display: 'flex' }} >

                    <TextField id="serial_elemento" label="Serial" variant="outlined" onChange={handleChange} value={formData.serial_elemento} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="numero_inventario" label="Numero Inventario" variant="outlined" onChange={handleChange} value={formData.numero_inventario} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="marca" label="Marca" variant="outlined" onChange={handleChange} value={formData.marca} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="modelo" label="Modelo" variant="outlined" onChange={handleChange} value={formData.modelo} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="imei1" label="imei1" variant="outlined" onChange={handleChange} value={formData.imei1} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="imei2" label="imei2" variant="outlined" onChange={handleChange} value={formData.imei2} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="disponibilidad" label="Tipo de Elemento" variant="outlined" onChange={handleChange} value={formData.disponibilidad} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0', display: 'none' }} />

                    <TextField id="id_tipo_elemento" label="Tipo de Elemento" variant="outlined" onChange={handleChange} value={formData.id_tipo_elemento} sx={{ minidth: '100%', margin: '0.5rem 0 0.5rem 0', display: 'none' }} />

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert severity={message.type} sx={{ mt: 2 }}>
                            {message.text}
                        </Alert>
                    )}
                </FormControl>
            </form>
        </>
    )

}


//Formulario Laptops

export const FormLaptops = () => {

    const [formData, setFormData] = useState({
        serial_elemento: '',
        numero_inventario: '',
        marca: '',
        modelo: '',
        id_tipo_elemento: 1,
        disponibilidad: 1
    })

    const { data, loading, error, nuevoElemento } = useCreateElemento();
    const [message, setMessage] = useState(null);


    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await nuevoElemento(formData);
            setMessage({ text: 'Elemento creado exitosamente', type: 'success' })

        } catch {
            setMessage({ text: 'Ups! Algo salió mal', type: 'warning' });
        }
    }


    useEffect(() => {
        if (message) {
            const timer = setTimeout(() => {
                setMessage(null)
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [message])

    return (

        <>
            <form onSubmit={handleSubmit}>

                <FormControl sx={{ display: 'flex' }} >

                    <TextField id="serial_elemento" label="Serial" variant="outlined" onChange={handleChange} value={formData.serial_elemento} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="numero_inventario" label="Numero Inventario" variant="outlined" onChange={handleChange} value={formData.numero_inventario} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="marca" label="Marca" variant="outlined" onChange={handleChange} value={formData.marca} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="modelo" label="Modelo" variant="outlined" onChange={handleChange} value={formData.modelo} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                    <TextField id="disponibilidad" label="Tipo de Elemento" variant="outlined" onChange={handleChange} value={formData.disponibilidad} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0', display: 'none' }} />

                    <TextField id="id_tipo_elemento" label="Tipo de Elemento" variant="outlined" onChange={handleChange} value={formData.id_tipo_elemento} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0', display: 'none' }} />

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>


                </FormControl>

            </form>

            {message && (
                <Alert severity={message.type} sx={{ mt: 2 }}>
                    {message.text}
                </Alert>
            )}
        </>
    )

}
