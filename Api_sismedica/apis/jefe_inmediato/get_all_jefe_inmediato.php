<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Jefe_Inmediato.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    Jefe_inmediato::get_all_jefe_inmediato();
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
