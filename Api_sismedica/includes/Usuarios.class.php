<?php
require_once('Database.class.php');

class Users
{
    public static function create_users($doc, $nombres, $apellidos, $telefono, $id_cargo, $id_regional, $id_area)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO usuarios (doc, nombres, apellidos, telefono, id_cargo, id_regional, id_area) VALUES (:doc, :nombres, :apellidos, :telefono, :id_cargo, :id_regional, :id_area)');

        $stmt->bindParam(':doc', $doc);
        $stmt->bindParam(':nombres', $nombres);
        $stmt->bindParam(':apellidos', $apellidos);
        $stmt->bindParam(':telefono', $telefono);
        $stmt->bindParam(':id_cargo', $id_cargo);
        $stmt->bindParam(':id_regional', $id_regional);
        $stmt->bindParam(':id_area', $id_area);


        if ($stmt->execute()) {
            header('HTTP/1.1 201 Cliente creado correctamente');
        } else {
            header('HTTP/1.1 500 Cliente no se a creado correctamente');
        }
    }

    public static function delete_user($doc)
    {
        try {
            $conexion = new DataBase();
            $conn = $conexion->getConnection();

            $stmt = $conn->prepare('DELETE FROM usuarios WHERE doc=:doc');

            $stmt->bindParam(":doc", $doc);


            if ($stmt->execute()) {
                header('HTTP/1.1 200 OK');
                return ['success' => true, 'message' => 'Usuario eliminada correctamente'];
            } else {
                header('HTTP/1.1 500 Internal Server Error');
                return ['success' => false, 'message' => 'Error al eliminar el Usuario'];
            }
        } catch (PDOException $e) {
            // Manejo de errores de PDO
            header('HTTP/1.1 500 Internal Server Error');
            return ['success' => false, 'message' => 'Error: ' . $e->getMessage()];
        }
    }

    public static function  get_all_users()
    {
        $conexion = new DataBase();
        $conn = $conexion->getConnection();

        // $stmt = $conn->prepare('SELECT * FROM usuarios');
        $stmt = $conn->prepare('SELECT
	usuarios.doc,
    usuarios.nombres as nombres_usuario,
    usuarios.apellidos as apellidos_usuario,
    usuarios.telefono,
    cargo.nombre as nombre_cargo,
    regional.nombre as nombre_regional,
    areas.nombre as nombre_area
    
    From usuarios
    
    Join cargo on usuarios.id_cargo = cargo.id
    join areas on usuarios.id_area = areas.id
    join regional on usuarios.id_regional = regional.id;
	');


        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            header('HTTP/1.1 201 Cliente creado correctamente');
            echo json_encode($result);
        } else {
            header('HTTP/1.1 500 Cliente no se a cargado correctamente');
        }
    }

    public static function update_user($doc, $nombres, $apellidos, $telefono, $id_cargo, $id_regional)
    {
        $conexion = new DataBase();
        $conn = $conexion->getConnection();


        $stmt = $conn->prepare('UPDATE usuarios SET nombres=:nombres, apellidos=:apellidos, telefono=:telefono, id_cargo=:id_cargo, id_regional=:id_regional WHERE doc=:doc');


        $stmt->bindParam(':nombres', $nombres);
        $stmt->bindParam(':apellidos', $apellidos);
        $stmt->bindParam(':telefono', $telefono);
        $stmt->bindParam(':id_cargo', $id_cargo);
        $stmt->bindParam(':id_regional', $id_regional);
        $stmt->bindParam(':doc', $doc);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 Cliente creado correctamente');
        } else {
            header('HTTP/1.1 500 Cliente no se a actualizado correctamente');
        }
    }
}
