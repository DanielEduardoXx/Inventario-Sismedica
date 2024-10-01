import api from "../api";

const END_POINT = '/cargos'


export const getAllCargos = async () =>{
    const solicitudApi = '/get_all_cargo.php'
    try{
        const response = await api.get(`${END_POINT}/${solicitudApi}`)
        console.log("respuesta", response.data)

        return response.data;
    }catch(error){
        console.error('Error fetching Regional')
        throw error;
    }
};