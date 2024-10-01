<?php

require_once('Database.class.php');

class Jefe_inmediato
{

    public static function create_jefe_inmediato($usuario_doc, $jefe_doc)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO jefe_inmediato (usuario_doc, jefe_doc) VALUES (:usuario_doc, :jefe_doc)');

        $stmt->bindParam("usuario_doc", $usuario_doc);
        $stmt->bindParam("jefe_doc", $jefe_doc);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 jefe_inmediato Creado Correctamente');
        } else { 
            header('HTTP/1.1 401 jefe_inmediato Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_jefe_inmediato($usuario_doc)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('DELETE FROM jefe_inmediato WHERE usuario_doc=:usuario_doc');

        $stmt->bindParam("usuario_doc", $usuario_doc);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 jefe_inmediato Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 jefe_inmediato Eliminado Correctamente');
        }
    }

    public static function get_all_jefe_inmediato(){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM jefe_inmediato');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            echo json_encode($result);
            header('HTTP/1.1 200 Listado Correctamente');
        } else {
            header('HTTP/1.1 200 Listado No Correctamente');
        }
    }

    public static function update_jefe_inmediato($usuario_doc, $jefe_doc){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE jefe_inmediato SET jefe_doc=:jefe_doc WHERE usuario_doc=:usuario_doc');
 
        $stmt->bindParam(":jefe_doc", $jefe_doc);
        $stmt->bindParam(":usuario_doc", $usuario_doc);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 jefe_inmediato Actualizado Correctamente');
        } else {
            header('HTTP/1.1 200 jefe_inmediato No Fue Actualizado Correctamente');
        }
    }
}
