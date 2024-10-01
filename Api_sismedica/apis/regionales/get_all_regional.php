<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Regional.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    Regional::get_all_regional();
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
