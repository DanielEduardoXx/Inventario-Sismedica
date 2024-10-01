<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once("../../includes/Elementos.class.php");

if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    Element::get_all_elements();
} else {
    header('HTTP/1.1 400 Bad Request');
    echo json_encode(['error' => 'Missing parameters']);
}
