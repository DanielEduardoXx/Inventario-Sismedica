<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../../includes/Entregas.class.php");


if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    // Si es una solicitud preflight (OPTIONS), responde con 200 OK
    header('HTTP/1.1 200 OK');
    exit();
}

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $input = json_decode(file_get_contents("php://input"), true);


    if (
        isset($input['id_doc'])
    ) {
        Entregas::get_entrega_user(
            $input['id_doc']
        );
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Missing parameters']);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}