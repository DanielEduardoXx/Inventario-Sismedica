import api from "../api";

const END_POINT = '/regionales'


export const getAllRegional = async () =>{
    const solicitudApi = '/get_all_regional.php'
    try{
        const response = await api.get(`${END_POINT}/${solicitudApi}`)
        console.log("respuesta", response.data)

        return response.data;
    }catch(error){
        console.error('Error fetching Regional')
        throw error;
    }
};

export const create_regional = async (formData) =>{
    const solicitudApi = '/create_regional.php'
    try{
        const response = await api.post(`${END_POINT}${solicitudApi}`,formData)
        console.log("respuesta", response.data)

        return response.data;
    }catch(error){
        console.error('Error fetching regional')
        throw error;
    }
};


export const dropRegional = async (id) => {
    const solicitudApi = '/delete_regional.php';
    try {
        const response = await api.delete(`${END_POINT}${solicitudApi}`, {
            data: { id },
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error al eliminar regional:', error);

        // Verifica si el error es del servidor (500) y lanza un mensaje personalizado
        if (error.response && error.response.status === 500) {
            throw new Error('La regional está asociada a un Componente. No se puede eliminar.');
        }

        throw error; // Lanza el error para que se maneje en el componente
    }
};
