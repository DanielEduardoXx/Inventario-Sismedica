import React from 'react';
import { saveAs } from 'file-saver';

const DescargarFormatoEntregas = () => {
    const downloadFile = () => {
        fetch('http://sismedica.test/formatos/descarga_entregas.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            },
        })
        .then(response => response.blob())
        .then(blob => {
            saveAs(blob, 'entregas.xlsx');
        })
        .catch(error => console.error('Error descargando el archivo:', error));
    };

    return (
        <button onClick={downloadFile}>Descargar Excel</button>
    );
};

export default DescargarFormatoEntregas;
