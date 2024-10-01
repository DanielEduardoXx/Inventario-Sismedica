<?php

require_once('Database.class.php');

class Areas
{

    public static function create_areas($id, $nombre, $id_regional)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO areas (id, nombre, id_regional) VALUES (:id, :nombre, :id_regional)');

        $stmt->bindParam("id", $id);
        $stmt->bindParam("nombre", $nombre);
        $stmt->bindParam("id_regional", $id_regional);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 areas Creado Correctamente');
        } else {
            header('HTTP/1.1 401 areas Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_areas($id)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('DELETE FROM areas WHERE id=:id');

        $stmt->bindParam("id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 areas Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 areas Eliminado Correctamente');
        }
    }

    public static function get_all_areas(){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM areas');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            echo json_encode($result);
            header('HTTP/1.1 200 Listado Correctamente');
        } else {
            header('HTTP/1.1 200 Listado No Correctamente');
        }
    }

    public static function update_areas($id, $nombre, $id_regional){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE areas SET nombre=:nombre, id_regional=:id_regional WHERE id=:id');
 
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":id_regional", $id_regional);
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 areas Actualizado Correctamente');
        } else {
            header('HTTP/1.1 200 areas No Fue Actualizado Correctamente');
        }
    }
}
