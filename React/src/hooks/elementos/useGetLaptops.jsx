// hooks/useFetchElements.js
import { useState, useEffect } from 'react';
import { getAllLaptops } from '../../services/elementos/laptops';

const useGetLaptops = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchElements = async () => {
            try {
                const result = await getAllLaptops();
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

export default useGetLaptops;
