import { useState, useEffect } from "react";
import { create_cargo } from "../../../services/datosSismedica.jsx/cargos";

const useCreateCargo = () =>{
    
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const nuevo_cargo = async (formData) =>{
        setLoading(true);
        setError(null);
        try {
            const response = await create_cargo(formData);
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
    return {data, loading, error, nuevo_cargo}
};



export default useCreateCargo