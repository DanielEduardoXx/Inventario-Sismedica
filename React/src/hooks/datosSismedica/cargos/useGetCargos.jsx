import { useState, useEffect } from "react";
import { getAllCargos } from "../../../services/datosSismedica.jsx/cargos";


const useGetCargos = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    

    useEffect(() => {

        const fetchCargos = async () => {
            try {
                const result = await getAllCargos();
                setData(result)
                setLoading(false)
                
            }catch(error){
                setError(error)
            }finally{
                setError(error)
                setLoading(false)
            }
        };
        fetchCargos();
     }, []);

     return {data, loading, error};
}

export default  useGetCargos;