import api from "../api";

const END_POINT = '/entregas'

export const getAllUsers = async (id_doc) => {
    const solicitudApi = '/get_for_user.php'
    try {
        const response = await api.get(`${END_POINT}${solicitudApi}`, id_doc)
        console.log("respuesta", response.data)

        return response.data;
    } catch (error) {
        console.error('Error fetching Regional')
        throw error;
    }
};