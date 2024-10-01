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