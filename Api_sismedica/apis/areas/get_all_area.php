<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

require_once('../../includes/Areas.class.php');

if ($_SERVER['REQUEST_METHOD'] == 'GET') {

    Areas::get_all_areas();
} else {
    header('HTTP/1.1 405 Method Not Allowed');
}
