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

export const create_area = async () =>{
    const solicitudApi = '/create_area.php'
    try{
        const response = await api.get(`${END_POINT}/${solicitudApi}`)
        console.log("respuesta", response.data)

        return response.data;
    }catch(error){
        console.error('Error fetching Regional')
        throw error;
    }
};