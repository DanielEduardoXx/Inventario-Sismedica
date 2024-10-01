import { useState, useEffect } from "react";
import { getAllAreas } from "../../../services/datosSismedica.jsx/areas";


const useGetAreas = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    

    useEffect(() => {

        const fetchCargos = async () => {
            try {
                const result = await getAllAreas();
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

export default  useGetAreas;