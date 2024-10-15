import api from "../api";

const END_POINT = '/usuarios'


export const getAllUsers = async () => {
    const solicitudApi = '/get_all_users.php'
    try {
        const response = await api.get(`${END_POINT}${solicitudApi}`)
        console.log("respuesta", response.data)

        return response.data;
    } catch (error) {
        console.error('Error fetching Regional')
        throw error;
    }
};

export const createUser = async (formData) => {
    const solicitudApi = '/create_user.php'
    try {
        const response = await api.post(`${END_POINT}${solicitudApi}`, formData)
        console.log("respuesta", response);

        return response.data;

    } catch (error) {
        console.error('Error Create Usuario:', error);

        throw error;
    }
}

export const dropUser = async (doc) => {
    const solicitudApi = '/delete_user.php';
    try {
        const response = await api.delete(`${END_POINT}${solicitudApi}`, {
            data: { doc }, // Asegúrate de enviar `doc` en el cuerpo de la solicitud
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log("respuesta", response);

        return response.data;
    } catch (error) {
        console.error('Error al eliminar Usuario:', error.response ? error.response.data : error.message);

        // Verifica si el error es del servidor (500) y lanza un mensaje personalizado
        if (error.response && error.response.status === 500) {
            throw new Error('El Usuario está asociada a otro Componente. No se puede eliminar.');
        }

        throw error; // Lanza el error para que se maneje en el componente
    }
};
