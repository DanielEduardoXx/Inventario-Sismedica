// hooks/useFetchElements.js
import { useState, useEffect } from 'react';
import { getAllUsers } from '../../services/usuarios/usuarios';
const useGetUsuarios = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const result = await getAllUsers();
                setData(result);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchElements();
    }, []);

    return { data, loading, error };
};

export default useGetUsuarios;
