import api from "../api";

const END_POINT = '/areas'


export const getAllAreas = async () =>{
    const solicitudApi = '/get_all_area.php'
    try{
        const response = await api.get(`${END_POINT}/${solicitudApi}`)
        console.log("respuesta", response.data)

        return response.data;
    }catch(error){
        console.error('Error fetching Regional')
        throw error;
    }
};

export const create_area = async (formData) =>{
    const solicitudApi = '/create_area.php'
    try{
        const response = await api.post(`${END_POINT}${solicitudApi}`,formData)
        console.log("respuesta", response.data)

        return response.data;
    }catch(error){
        console.error('Error fetching area')
        throw error;
    }
};


export const dropArea = async (id) => {
    const solicitudApi = '/delete_area.php';
    try {
        const response = await api.delete(`${END_POINT}${solicitudApi}`, {
            data: { id },
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al eliminar Área:', error);

        // Verifica si el error es del servidor (500) y lanza un mensaje personalizado
        if (error.response && error.response.status === 500) {
            throw new Error('El área está asociada a un usuario. No se puede eliminar.');
        }

        throw error; // Lanza el error para que se maneje en el componente
    }
};
