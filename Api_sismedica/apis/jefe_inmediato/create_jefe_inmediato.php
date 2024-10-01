<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

    require_once('../../includes/Jefe_Inmediato.class.php');

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $input = json_decode(file_get_contents("php://input"), true);

        if(

            isset($input['usuario_doc'])&&
            isset($input['jefe_doc'])
        ){
            Jefe_Inmediato::create_jefe_inmediato(
                $input['usuario_doc'],
                $input['jefe_doc']
            );
        }else {
            header('HTTP/1.1 400 Bad Request');
            echo json_encode(['error' => 'Missing parameters']);
        }
    } else {
        header('HTTP/1.1 405 Method Not Allowed');
    }

?>