import { useState } from 'react';
import { dropRegional } from '../../../services/datosSismedica.jsx/regional';

const useDropRegional = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteRegional = async (id) => {
        setLoading(true);
        setError(null); // Resetea el error al iniciar
        try {
            const result = await dropRegional(id);
            return result; // Retorna el resultado para manejarlo externamente
        } catch (error) {
            setError(error.response?.data?.message || 'Error al eliminar el Regional');
            throw error; // Lanza el error para que el componente pueda manejarlo
        } finally {
            setLoading(false);
        }
    };

    return { deleteRegional, loading, error };
};

export default useDropRegional;
