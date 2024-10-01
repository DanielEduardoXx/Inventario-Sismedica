<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Usuarios.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

    $input = json_decode(file_get_contents("php://input"), true);


    if (
        isset($input['serial']) &&
        isset($input['numero_inventario']) &&
        isset($input['tipo_elemento']) &&
        isset($input['marca']) &&
        isset($input['modelo']) &&
        isset($input['imei1']) &&
        isset($input['imei2']) &&
        isset($input['disponibilidad'])
    ) {
        Element::update_elements(

            $input['serial'],
            $input['numero_inventario'],
            $input['tipo_elemento'],
            $input['marca'],
            $input['modelo'],
            $input['imei1'],
            $input['imei2'],
            $input['disponibilidad'],
        );
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Missing parameters']);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}