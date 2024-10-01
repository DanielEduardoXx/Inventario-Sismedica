<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Entregas.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    $input = json_decode(file_get_contents("php://input"), true);

    $id = isset($input['id']) ? $input['id'] : null;
    $observaciones = isset($input['observaciones']) ? $input['observaciones'] : null;
    $fecha_entrega = isset($input['fecha_entrega']) ? $input['fecha_entrega'] : null;
    $id_serial_elemento = isset($input['id_serial_elemento']) ? $input['id_serial_elemento'] : null;
    $id_doc = isset($input['id_doc']) ? $input['id_doc'] : null;
    $id_estado = isset($input['id_estado']) ? $input['id_estado'] : null;

    if (
        $id !== null &&
        $observaciones !== null &&
        $fecha_entrega !== null &&
        $id_serial_elemento !== null &&
        $id_doc !== null &&
        $id_estado !== null 
    ) {
        try {
            Entregas::create_entregas(
                $id,
                $observaciones,
                $fecha_entrega,
                $id_serial_elemento,
                $id_doc,
                $id_estado
            );

            // La respuesta se maneja dentro de la función create_entregas, no es necesario otro header aquí.
            echo json_encode(['success' => true]);
        } catch (Exception $e) {
            // Mejorar la depuración: incluir el mensaje de error
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => $e->getMessage()]);
        }
    } else {
        header('HTTP/1.1 400 Bad Request');
        echo json_encode(['error' => 'Missing parameters']);
    }
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
