import { useState } from 'react';
import { dropArea } from '../../../services/datosSismedica.jsx/areas';


const useDropArea = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteArea = async (id) => {
        setLoading(true);
        setError(null); // Resetea el error al iniciar
        try {
            const result = await dropArea(id);
            return result; // Retorna el resultado para manejarlo externamente
        } catch (error) {
            setError(error); // Guarda el error en el estado
            throw error; // Lanza el error para que el componente pueda manejarlo
        } finally {
            setLoading(false);
        }
    };

    return { deleteArea, loading, error };
};

export default useDropArea;
