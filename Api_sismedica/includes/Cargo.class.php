<?php

require_once('Database.class.php');

class Cargo
{

    public static function create_cargo($nombre)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO cargo (nombre) VALUES (:nombre)');

        $stmt->bindParam("nombre", $nombre);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 Cargo Creado Correctamente');
        } else {
            header('HTTP/1.1 401 Cargo Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_cargo($id)
    {
        try {
            $database = new DataBase();
            $conn = $database->getConnection();

            $stmt = $conn->prepare('DELETE FROM cargo WHERE id=:id');

            $stmt->bindParam("id", $id);

            if ($stmt->execute()) {
                header('HTTP/1.1 200 OK');
                return ['success' => true, 'message' => 'Cargo eliminado correctamente'];
            } else {
                header('HTTP/1.1 500 Internal Server Error');
                return ['success' => false, 'message' => 'Error al eliminar el Cargo'];
            }
        } catch (PDOException $e) {
            // Manejo de errores de PDO
            header('HTTP/1.1 500 Internal Server Error');
            return ['success' => false, 'message' => 'Error: ' . $e->getMessage()];
        }
    }

    public static function get_all_cargo()
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM cargo');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            header('HTTP/1.1 200 Listado Correctamente');
            echo json_encode($result);
        } else {
            header('HTTP/1.1 200 Listado No Correctamente');
        }
    }

    public static function update_cargo($id, $nombre)
    {
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
