import { useState } from 'react';
import { dropUser } from '../../services/usuarios/usuarios';

const useDropUsers = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteUser = async (doc) => {
        setLoading(true);
        setError(null); // Resetea el error antes de una nueva solicitud
        try {
            const result = await dropUser(doc);
            return result; // Retorna el resultado para manejarlo externamente
        } catch (error) {
            setError(error.response?.data?.message || 'Error al eliminar el usuario');
            console.error('Error al eliminar el usuario:', error);
            throw error; // Lanza el error para manejarlo en el componente
        } finally {
            setLoading(false);
        }
    };

    return { deleteUser, loading, error };
};

export default useDropUsers;
