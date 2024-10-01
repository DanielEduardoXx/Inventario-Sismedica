<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Responsable_entrega.class.php');

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $input = json_decode(file_get_contents("php://input"), true);

    if(

        isset($input['usuario_doc'])&&
        isset($input['responsable_doc'])
    ){
        Responsable_entrega::create_responsable_entrega(
            $input['usuario_doc'],
            $input['responsable_doc']
        );
    }else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Missing parameters']);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}

?>