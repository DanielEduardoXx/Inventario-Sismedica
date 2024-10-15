import { useState, useEffect } from "react";
import { create_regional } from "../../../services/datosSismedica.jsx/regional";

const useCreateRegional = () =>{
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const nueva_regional = async (formData) =>{
        setLoading(true);
        setError(null);
        try {
            const response = await create_regional(formData);
            if (response.error) {
                throw new Error(response.error);  // Lanza un error si la respuesta contiene un mensaje de error
            }
            setData(response);
        } catch (err) {
            setError(err.message || 'Error creating element');
            throw err; // Vuelve a lanzar el error para que pueda ser capturado por el catch en el componente
        } finally {
            setLoading(false);
        }
    };
    return {data, loading, error, nueva_regional}
};



export default useCreateRegional