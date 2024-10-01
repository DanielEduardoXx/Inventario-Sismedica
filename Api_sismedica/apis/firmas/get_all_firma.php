<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Firmas.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    Firma::get_all_firma();
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
