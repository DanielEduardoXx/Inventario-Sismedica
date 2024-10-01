import { useState, useEffect } from "react";
import { createElemento } from "../../services/elementos/elementos";

const useCreateElemento = () =>{
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const nuevoElemento = async (formData) =>{
        setLoading(true);
        setError(null);
        try {
            const response = await createElemento(formData);
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
    return {data, loading, error, nuevoElemento}
};



export default useCreateElemento