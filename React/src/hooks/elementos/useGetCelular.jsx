// hooks/useFetchElements.js
import { useState, useEffect } from 'react';
import { getAllCelular } from '../../services/elementos/celular';

const useGetCelular = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const result = await getAllCelular();
                setData(result);
                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setError(error)
                setLoading(false);
            }
        };

        fetchElements();
    }, []);

    return { data, loading, error };
};

export default useGetCelular;
