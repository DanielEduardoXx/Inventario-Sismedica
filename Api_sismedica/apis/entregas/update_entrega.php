<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Entregas.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {

    $input = json_decode(file_get_contents("php://input"), true);


    if (
        isset($input['id']) &&
        isset($input['observaciones']) &&
        isset($input['fecha_entrega']) &&
        isset($input['estado']) &&
        isset($input['id_serial_elemento']) &&
        isset($input['id_doc']) 
    ) {
        Entregas::update_entregas(

            $input['id'],
            $input['observaciones'],
            $input['fecha_entrega'],
            $input['estado'],
            $input['id_serial_elemento'],
            $input['id_doc']
        );
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Missing parameters']);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}