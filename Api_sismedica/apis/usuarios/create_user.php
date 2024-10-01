<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");


if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    exit;
}
require_once('../../includes/Usuarios.class.php');



if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $input = json_decode(file_get_contents("php://input"), true);


    if (
        isset($input['doc']) &&
        isset($input['nombres']) &&
        isset($input['apellidos']) &&
        isset($input['telefono']) &&
        isset($input['id_cargo']) &&
        isset($input['id_regional']) &&
        isset($input['id_area']) 
 
    ) {
        Users::create_users(
                $input['doc'],
                $input['nombres'],
                $input['apellidos'],
                $input['telefono'],
                $input['id_cargo'],
                $input['id_regional'],
                $input['id_area']
            );
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Missing parameters']);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
