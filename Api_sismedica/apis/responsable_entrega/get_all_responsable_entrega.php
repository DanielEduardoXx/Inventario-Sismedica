<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Responsable_entrega.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    Responsable_entrega::get_all_responsable_entrega();
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
