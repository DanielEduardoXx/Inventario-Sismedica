import axios from 'axios';

// Configuración global de Axios
const api = axios.create({
    baseURL: 'http://sismedica.test', // URL base para las solicitudes
    timeout: 10000, // Tiempo máximo de espera en milisegundos
});

export default api;