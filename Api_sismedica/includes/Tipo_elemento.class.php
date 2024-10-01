<?php

require_once('Database.class.php');

class Tipo_elemento
{

    public static function create_tipo_elemento($id, $nombre)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO tipo_elemento (id, nombre) VALUES (:id, :nombre)');

        $stmt->bindParam("id", $id);
        $stmt->bindParam("nombre", $nombre);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 tipo_elemento Creado Correctamente');
        } else {
            header('HTTP/1.1 401 tipo_elemento Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_tipo_elemento($id)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('DELETE FROM tipo_elemento WHERE id=:id');

        $stmt->bindParam("id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 tipo_elemento Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 tipo_elemento Eliminado Correctamente');
        }
    }

    public static function get_all_tipo_elemento(){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM tipo_elemento');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            echo json_encode($result);
            header('HTTP/1.1 200 tipo_elemento Tipo de Elementos Listada Correctamente');
        } else {
            header('HTTP/1.1 200 Tipo de Elementos No Listada Correctamente');
        }
    }

    public static function update_tipo_elemento($id, $nombre){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE tipo_elemento SET nombre=:nombre WHERE id=:id');
 
        $stmt->bindParam(":nombre", $nombre);
        $stmt->bindParam(":id", $id);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 tipo_elemento Actualizado Correctamente');
        } else {
            header('HTTP/1.1 200 tipo_elemento No Fue Actualizado Correctamente');
        }
    }
}
