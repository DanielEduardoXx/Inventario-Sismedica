// hooks/useFetchElements.js
import { useState, useEffect } from 'react';
import { getAllElements } from '../../services/elementos/elementos';

const useGetElementos = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const result = await getAllElements();
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

export default useGetElementos;
