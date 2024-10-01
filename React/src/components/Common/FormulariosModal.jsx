
import { FormControl, TextField, Typography, Box } from '@mui/material';
import { useState, useEffect } from 'react';
import useCreateElemento from '../../hooks/elementos/useCreateElemento';
import useCreateUsuario from '../../hooks/usuarios/useCreateUsuario';
import Alert from '@mui/material/Alert';


// Formulario Regional

export const FormRegional = () => {
    const [formData, setFormData] = useState({
        id_regional: '',
        nombre: '',
    })
    const { data, loading, error, nuevoUser } = useCreateUsuario();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await nuevoUser(formData);
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
                <FormControl sx={{ display: 'flex' }} >
                    <Box>
                        <Typography variant="h6" align="center">
                            Información Personal
                        </Typography>
                        <Box sx={{ display: 'flex' }}>

                            <Box>
                                <TextField id="id_regional" label="id_regional" variant="outlined" onChange={handleChange} value={formData.id_regional} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <TextField id="nombre" label="nombre" variant="outlined" onChange={handleChange} value={formData.nombre} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                            </Box>



                        </Box>
                    </Box>

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert
                            severity={message.severity}
                            sx={{ mt: 2 }}
                        >
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
    const [formData, setFormData] = useState({
        id_area: '',
        nombre: '',
    })
    const { data, loading, error, nuevoUser } = useCreateUsuario();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await nuevoUser(formData);
            setMessage({ text: 'Area creado exitosamente', type: 'error' })

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
                        <Box sx={{ display: 'flex' }}>

                            <Box>
                                <TextField id="id_area" label="id_area" variant="outlined" onChange={handleChange} value={formData.id_regional} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <TextField id="nombre" label="nombre" variant="outlined" onChange={handleChange} value={formData.nombre} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                            </Box>



                        </Box>
                    </Box>

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert
                            severity={message.severity}
                            sx={{ mt: 2 }}
                        >
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
    const [formData, setFormData] = useState({
        doc: '',
        nombres: '',
        apellidos: '',
        telefono: '',
        id_cargo: '',
        id_regional: '',
        id_firma: '',
        id_area: ''
    })

    const { data, loading, error, nuevoUser } = useCreateUsuario();
    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await nuevoUser(formData);
            setMessage({ text: 'Usuario creado exitosamente', type: 'error' })

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
                        <Box sx={{ display: 'flex' }}>

                            <Box>
                                <TextField id="doc" label="Documento" variant="outlined" onChange={handleChange} value={formData.doc} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <TextField id="nombres" label="Nombres" variant="outlined" onChange={handleChange} value={formData.nombres} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                            </Box>
                            <Box>


                                <TextField id="apellidos" label="Apellidos" variant="outlined" onChange={handleChange} value={formData.apellidos} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <TextField id="telefono" label="Telefono" variant="outlined" onChange={handleChange} value={formData.telefono} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                            </Box>


                        </Box>
                        <Typography variant="h6" align="center">
                            Información Empresarial
                        </Typography>
                        <Box sx={{ display: 'flex' }}>
                            <Box>

                                <TextField id="id_cargo" label="Cargo" variant="outlined" onChange={handleChange} value={formData.id_cargo} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />


                                <TextField id="id_regional" label="Regional" variant="outlined" onChange={handleChange} value={formData.id_regional} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                            </Box>

                            <Box >
                                <TextField id="id_area" label="Area" variant="outlined" onChange={handleChange} value={formData.id_area} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />

                                <TextField id="id_firma" label="Firma" variant="outlined" onChange={handleChange} value={formData.id_firma} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0' }} />
                            </Box>

                        </Box>
                    </Box>





                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert
                            severity={message.severity}
                            sx={{ mt: 2 }}
                        >
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
            setMessage({ text: 'Elemento creado exitosamente', type: 'error' })

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

                    <TextField id="id_tipo_elemento" label="Tipo de Elemento" variant="outlined" onChange={handleChange} value={formData.id_tipo_elemento} sx={{ minwidth: '100%', margin: '0.5rem 0 0.5rem 0', display: 'none' }} />

                    <button type='submit'>
                        {loading ? 'Enviando...' : 'Enviar'}
                    </button>

                    {message && (
                        <Alert
                            severity={message.severity}
                            sx={{ mt: 2 }}
                        >
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
                <Alert
                    severity={message.severity}
                    sx={{ mt: 2 }}
                >
                    {message.text}
                </Alert>
            )}
        </>
    )

}
