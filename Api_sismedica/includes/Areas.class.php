<?php

require_once('Database.class.php');

class Areas
{

    public static function create_areas($nombre, $id_regional)
    {
        $database = new DataBase;
        $conn = $database->getConnection();
    
        // Sentencia SQL sin el campo `id`, que será autogenerado por la base de datos
        $stmt = $conn->prepare('INSERT INTO areas (nombre, id_regional) VALUES (:nombre, :id_regional)');
    
        // Vinculamos solo los parámetros `nombre` e `id_regional`
        $stmt->bindParam("nombre", $nombre);
        $stmt->bindParam("id_regional", $id_regional);
    
        if ($stmt->execute()) {
            header('HTTP/1.1 201 areas Creado Correctamente');
        } else {
            header('HTTP/1.1 401 areas Pudo Ser Creado Correctamente');
        }
    }
    

    public static function delete_area ($id)
    {
        try {
            $database = new DataBase();
            $conn = $database->getConnection();
    
            $stmt = $conn->prepare('DELETE FROM areas WHERE id = :id');
            $stmt->bindParam(":id", $id, PDO::PARAM_INT); // Especificar el tipo de parámetro
    
            if ($stmt->execute()) {
                header('HTTP/1.1 200 OK');
                return ['success' => true, 'message' => 'Área eliminada correctamente'];
            } else {
                header('HTTP/1.1 500 Internal Server Error');
                return ['success' => false, 'message' => 'Error al eliminar el área'];
            }
        } catch (PDOException $e) {
            // Manejo de errores de PDO
            header('HTTP/1.1 500 Internal Server Error');
            return ['success' => false, 'message' => 'Error: ' . $e->getMessage()];
        }
    }

    
    public static function get_all_areas()
    {
        $database = new DataBase();
        $conn = $database->getConnection();
        $stmt = $conn->prepare('SELECT * FROM areas');
        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            header('HTTP/1.1 200 Listado Correctamente');
            echo json_encode($result); // Después de las cabeceras
        } else {
            header('HTTP/1.1 200 Listado No Correctamente');
        }
    }

    public static function update_areas($id, $nombre, $id_regional)
    {
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
