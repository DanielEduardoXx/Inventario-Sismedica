import api from '../api';

const END_POINT = '/elementos/get_all_celular.php';

// Función para obtener todos los elementos
export const getAllCelular = async () => {
    try {
        const response = await api.get(END_POINT)
        console.log("respuesta", response.data);

        return response.data; // Devuelve solo los datos
    } catch (error) {
        console.error('Error fetching elements:', error);
        throw error; // Propaga el error para manejo posterior
    }
};