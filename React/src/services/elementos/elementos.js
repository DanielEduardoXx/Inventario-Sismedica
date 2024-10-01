import api from '../api';

const END_POINT = '/elementos/get_all_element.php';

// Función para obtener todos los elementos
export const getAllElements = async () => {
    try {
        const response = await api.get(END_POINT)
        console.log("respuesta", response);

        return response.data; // Devuelve solo los datos
    } catch (error) {
        console.error('Error fetching elements:', error);
        throw error; // Propaga el error para manejo posterior
    }
};

export const createElemento = async (formData) => {
    try{
        const response = await api.post('/elementos/create_element.php', formData)
        console.log("respuesta", response);

        return response.data;
        
    } catch (error){
        console.error('Error fetching elements:', error);

        throw error;
    }
}