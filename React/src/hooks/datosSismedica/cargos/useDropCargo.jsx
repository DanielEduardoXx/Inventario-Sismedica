import { useState } from 'react';
import { dropCargos } from '../../../services/datosSismedica.jsx/cargos';

const useDropCargo = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteCargo = async (id) => {
        setLoading(true);
        setError(null); // Resetea el error al iniciar
        try {
            const result = await dropCargos(id);
            return result; // Retorna el resultado para manejarlo externamente
        } catch (error) {
            setError(error); // Guarda el error en el estado
            throw error; // Lanza el error para que el componente pueda manejarlo
        } finally {
            setLoading(false);
        }
    };

    return { deleteCargo, loading, error };
};

export default useDropCargo;
