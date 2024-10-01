<?php

require_once('Database.class.php');

class Regional
{

    public static function create_regional($id, $nombre)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO regional (id, nombre) VALUES (:id, :nombre)');

        $stmt->bindParam("id", $id);
        $stmt->bindParam("nombre", $nombre);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 regional Creado Correctamente');
        } else {
            header('HTTP/1.1 401 regional Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_regional($id)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('DELETE FROM regional WHERE id=:id');

        $stmt->bindParam("id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 regional Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 regional Eliminado Correctamente');
        }
    }

    public static function get_all_regional(){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM regional');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            echo json_encode($result);
            header('HTTP/1.1 200 regional Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 regional No Fue Eliminado Correctamente');
        }
    }

    public static function update_regional($id, $nombre){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE regional SET nombre=:nombre WHERE id=:id');
 
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 regional Actualizado Correctamente');
        } else {
            header('HTTP/1.1 200 regional No Fue Actualizado Correctamente');
        }
    }
}
