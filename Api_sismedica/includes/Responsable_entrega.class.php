<?php

require_once('Database.class.php');

class Responsable_entrega
{

    public static function create_responsable_entrega($usuario_doc, $responsable_doc)
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO responsable_entrega (usuario_doc, responsable_doc) VALUES (:usuario_doc, :responsable_doc)');

        $stmt->bindParam("usuario_doc", $usuario_doc);
        $stmt->bindParam("responsable_doc", $responsable_doc);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 responsable_entrega Creado Correctamente');
        } else { 
            header('HTTP/1.1 401 responsable_entrega Pudo Ser Creado Correctamente');
        }
    }

    public static function delete_responsable_entrega($usuario_doc)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('DELETE FROM responsable_entrega WHERE usuario_doc=:usuario_doc');

        $stmt->bindParam("usuario_doc", $usuario_doc);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 responsable_entrega Eliminado Correctamente');
        } else {
            header('HTTP/1.1 200 responsable_entrega Eliminado Correctamente');
        }
    }

    public static function get_all_responsable_entrega(){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('SELECT * FROM responsable_entrega');

        if ($stmt->execute()) {
            $result = $stmt->fetchAll();
            echo json_encode($result);
            header('HTTP/1.1 200 Listado Correctamente');
        } else {
            header('HTTP/1.1 200 Listado No Correctamente');
        }
    }

    public static function update_responsable_entrega($usuario_doc, $responsable_doc){
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE responsable_entrega SET responsable_doc=:responsable_doc WHERE usuario_doc=:usuario_doc');
 
        $stmt->bindParam(":responsable_doc", $responsable_doc);
        $stmt->bindParam(":usuario_doc", $usuario_doc);

        if ($stmt->execute()) {
            header('HTTP/1.1 200 responsable_entrega Actualizado Correctamente');
        } else {
            header('HTTP/1.1 200 responsable_entrega No Fue Actualizado Correctamente');
        }
    }
}
