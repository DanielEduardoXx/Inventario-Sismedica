<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}

require_once('../../formatos/EntregasXml.php'); // Asegúrate de que esta ruta sea correcta

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    // Llamar a la función que genera el Excel
    FormatosExcel::excel_entregas();
} else {
    header('Content-Type: application/json');
    echo json_encode(['error' => 'Método no permitido']);
}