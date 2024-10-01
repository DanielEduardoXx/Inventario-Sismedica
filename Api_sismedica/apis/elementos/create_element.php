<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}
require_once('../../includes/Elementos.class.php');



if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $input = json_decode(file_get_contents("php://input"), true);

    $serial_elemento = isset($input['serial_elemento']) ? $input['serial_elemento'] : null;
    $numero_inventario = isset($input['numero_inventario']) ? $input['numero_inventario'] : null;
    $marca = isset($input['marca']) ? $input['marca'] : null;
    $modelo = isset($input['modelo']) ? $input['modelo'] : null;
    $imei1 = isset($input['imei1']) ? $input['imei1'] : null;
    $imei2 = isset($input['imei2']) ? $input['imei2'] : null;
    $disponibilidad = isset($input['disponibilidad']) ? $input['disponibilidad'] : null;
    $id_tipo_elemento = isset($input['id_tipo_elemento']) ? $input['id_tipo_elemento'] : null;

    if (
        $serial_elemento !== null &&
        $numero_inventario !== null &&
        $marca !== null && $marca !== '' &&
        $modelo !== null &&
        $disponibilidad !== null &&
        $id_tipo_elemento !== null
    ) {
        try {
            Element::create_element(
                $serial_elemento,
                $numero_inventario,
                $marca,
                $modelo,
                $imei1,
                $imei2,
                $disponibilidad,
                $id_tipo_elemento
            );
            header('HTTP/1.1 200 OK');
            echo json_encode(['success' => true]);
        } catch (Exception $e) {
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => $e->getMessage()]);
        }
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Error, Hay campos Obligatorios Vacios']);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
