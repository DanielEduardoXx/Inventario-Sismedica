import api from "../api";

const END_POINT = '/usuarios'


export const getAllUsers = async () =>{
    const solicitudApi = '/get_all_users.php'
    try{
        const response = await api.get(`${END_POINT}${solicitudApi}`)
        console.log("respuesta", response.data)

        return response.data;
    }catch(error){
        console.error('Error fetching Regional')
        throw error;
    }
};

export const createUser = async (formData) => {
       const solicitudApi = '/create_user.php'
    try{
        const response = await api.post(`${END_POINT}${solicitudApi}`, formData)
        console.log("respuesta", response);

        return response.data;
        
    } catch (error){
        console.error('Error Create Usuario:', error);

        throw error;
    }
}