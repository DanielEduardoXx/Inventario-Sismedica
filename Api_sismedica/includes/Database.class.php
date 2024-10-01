<?php
class DataBase
{
    private $host = 'localhost';
    private $user = 'root';
    private $password = '';
    private $database = 'sismedicaDB';


    public function getConnection()
    {
        $hostDB = "mysql:host=" . $this->host . ";dbname=" . $this->database . ";";

        try {
            $conexion = new PDO($hostDB, $this->user, $this->password);
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $conexion;
        } catch (PDOException $e) {
            die("ERROR: " . $e->getMessage());
        }
    }
}
