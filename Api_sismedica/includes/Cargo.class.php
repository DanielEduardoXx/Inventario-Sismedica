<?php

require_once('Database.class.php');

class Cargo
{

    public static function create_cargo($id, $nombre)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO cargo (id, nombre) VALUES (:id, :nombre)');

        $stmt->bindParam("id", $id);
        $stmt->bindParam("nombre", $nombre);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 Cargo Creado Correctamente');
        } else {
            header('HTTP/1.1 401 Cargo Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_cargo($id)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('DELETE FROM cargo WHERE id=:id');

        $stmt->bindParam("id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 Cargo Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 Cargo Eliminado Correctamente');
        }
    }

    public static function get_all_cargo(){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM cargo');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            echo json_encode($result);
            header('HTTP/1.1 200 Listado Correctamente');
        } else {
            header('HTTP/1.1 200 Listado No Correctamente');
        }
    }

    public static function update_cargo($id, $nombre){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE cargo SET nombre=:nombre WHERE id=:id');
 
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 Cargo Actualizado Correctamente');
        } else {
            header('HTTP/1.1 200 Cargo No Fue Actualizado Correctamente');
        }
    }
}
