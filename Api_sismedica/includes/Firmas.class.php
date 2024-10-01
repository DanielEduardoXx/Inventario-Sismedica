<?php

require_once('Database.class.php');

class Firma
{

    public static function create_firma($id, $foto_firma)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO firma (id, foto_firma) VALUES (:id, :foto_firma)');

        $stmt->bindParam("id", $id);
        $stmt->bindParam("foto_firma", $foto_firma);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 firma Creado Correctamente');
        } else {
            header('HTTP/1.1 401 firma Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_firma($id)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('DELETE FROM firma WHERE id=:id');

        $stmt->bindParam("id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 firma Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 firma Eliminado Correctamente');
        }
    }

    public static function get_all_firma(){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM firma');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            echo json_encode($result);
            header('HTTP/1.1 200 Listado Correctamente');
        } else {
            header('HTTP/1.1 200 Listado No Correctamente');
        }
    }

    public static function update_firma($id, $foto_firma){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE firma SET foto_firma=:foto_firma WHERE id=:id');
 
        $stmt->bindParam(":foto_firma", $foto_firma);
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 firma Actualizado Correctamente');
        } else {
            header('HTTP/1.1 200 firma No Fue Actualizado Correctamente');
        }
    }
}
