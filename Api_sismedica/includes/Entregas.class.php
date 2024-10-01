<?php

require_once("Database.class.php");


class Entregas
{

    public static function create_entregas($id, $observaciones, $fecha_entrega, $id_serial_elemento, $id_doc, $id_estado)
    {
        $database = new DataBase();
        $conn = $database->getConnection();
    
        try {
            $conn->beginTransaction();
    
            // Verificar si el elemento ya tiene una entrega registrada
            $stmt = $conn->prepare('SELECT COUNT(*) FROM entregas WHERE id_serial_elemento = :id_serial_elemento');
            $stmt->bindParam(":id_serial_elemento", $id_serial_elemento);
            $stmt->execute();
            $count = $stmt->fetchColumn();
    
            if ($count > 0) {
                throw new Exception('El elemento ya tiene una entrega registrada.');
            }
    
            // Insertar en la tabla entregas
            $stmt = $conn->prepare('INSERT INTO entregas (id, observaciones, fecha_entrega, id_serial_elemento, id_doc, id_estado) VALUES (:id, :observaciones, :fecha_entrega, :id_serial_elemento, :id_doc, :id_estado)');
            $stmt->bindParam(":id", $id);
            $stmt->bindParam(":observaciones", $observaciones);
            $stmt->bindParam(":fecha_entrega", $fecha_entrega);
            $stmt->bindParam(":id_serial_elemento", $id_serial_elemento);
            $stmt->bindParam(":id_doc", $id_doc);
            $stmt->bindParam(":id_estado", $id_estado);
            $stmt->execute();
    
            // Actualizar la disponibilidad en la tabla elementos
            $stmt = $conn->prepare('UPDATE elementos SET disponibilidad = 0 WHERE serial_elemento = :id_serial_elemento');
            $stmt->bindParam(":id_serial_elemento", $id_serial_elemento);
            $stmt->execute();
    
            $conn->commit();
            header('HTTP/1.1 201 Created');
        } catch (Exception $e) {
            $conn->rollBack();
            header('HTTP/1.1 500 Internal Server Error');
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public static function delete_entregas($id)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        try {
            $conn->beginTransaction();

            // Obtener el id_serial_elemento antes de eliminar la entrega
            $stmt = $conn->prepare('SELECT id_serial_elemento FROM entregas WHERE id = :id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();
            $resultado = $stmt->fetch();
            $id_serial_elemento = $resultado['id_serial_elemento'];

            // Eliminar la entrega
            $stmt = $conn->prepare('DELETE FROM entregas WHERE id = :id');
            $stmt->bindParam(":id", $id);
            $stmt->execute();

            // Verifica si se insertó correctamente
            if ($stmt->rowCount() > 0) {
                echo "Eliminacion en entregas exitosa\n";
            } else {
                echo "No se insertaron datos en la tabla entregas\n";
            }

            // Actualizar la disponibilidad en la tabla elementos
            $stmt = $conn->prepare('UPDATE elementos SET disponibilidad = 1 WHERE serial_elemento = :id_serial_elemento');
            $stmt->bindParam(":id_serial_elemento", $id_serial_elemento);
            $stmt->execute();

            $conn->commit();
            header('HTTP/1.1 201 Entrega eliminada y disponibilidad actualizada correctamente');
        } catch (Exception $e) {
            $conn->rollBack();
            header('HTTP/1.1 500 No se pudo eliminar la entrega y actualizar la disponibilidad');
        }
    }


    public static function get_all_entregas()
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare("SELECT * FROM entregas");

        if ($stmt->execute()) {
            $resultado = $stmt->fetchAll();
            echo json_encode($resultado);
            header('HTTP/1.1 201 entregaso Listado correctamente');
        } else {
            header('HTTP/1.1 500 entregaso no Listado correctamente');
        }
    }

    public static function update_entregas($id, $observaciones, $fecha_entrega, $estado, $id_serial_elemento, $id_doc)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE entregas SET observaciones:=observaciones, fecha_entrega:=fecha_entrega, estado:=estado, id_serial_elemento:=id_serial_elemento, id_doc:=id_doc WHERE id:=id ');


        $stmt->bindParam(":observaciones", $observaciones);
        $stmt->bindParam(":fecha_entrega", $fecha_entrega);
        $stmt->bindParam(":estado", $estado);
        $stmt->bindParam(":id_serial_elemento", $id_serial_elemento);
        $stmt->bindParam(":id_doc", $id_doc);
        $stmt->bindParam(":id", $id);


        if ($stmt->execute()) {
            header('HTTP/1.1 201 entregaso Actualizado Correctamente');
        } else {
            header('HTTP/1.1 500 entregaso no se a creado correctamente');
        }
    }
}
