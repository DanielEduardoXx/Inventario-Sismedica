import { useState, useEffect } from "react";
import { getAllRegional } from "../../../services/datosSismedica.jsx/regional";


const useGetRegional = () => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);
    

    useEffect(() => {

        const fetchRegional = async () => {
            try {
                const result = await getAllRegional();
                setData(result)
                setLoading(false)
                
            }catch(error){
                setError(error)
            }finally{
                setError(error)
                setLoading(false)
            }
        };
        fetchRegional();
     }, []);

     return {data, loading, error};
}

export default  useGetRegional;