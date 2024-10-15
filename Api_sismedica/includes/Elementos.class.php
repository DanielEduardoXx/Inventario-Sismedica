<?php

require_once("Database.class.php");


class Element
{

    public static function create_element($serial_elemento, $numero_inventario, $marca, $modelo, $imei1, $imei2, $disponibilidad, $id_tipo_elemento)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('INSERT INTO elementos (serial_elemento, numero_inventario, marca, modelo, imei1, imei2, disponibilidad, id_tipo_elemento) VALUES (:serial_elemento, :numero_inventario, :marca, :modelo, :imei1, :imei2, :disponibilidad, :id_tipo_elemento)');

        $stmt->bindParam(":serial_elemento", $serial_elemento);
        $stmt->bindParam(":numero_inventario", $numero_inventario);
        $stmt->bindParam(":marca", $marca);
        $stmt->bindParam(":modelo", $modelo);
        $stmt->bindParam(":imei1", $imei1);
        $stmt->bindParam(":imei2", $imei2);
        $stmt->bindParam(":disponibilidad", $disponibilidad);
        $stmt->bindParam(":id_tipo_elemento", $id_tipo_elemento);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 Elemento creado correctamente');
        } else {
            header('HTTP/1.1 500 Elemento no se a creado correctamente');
        }
    }

    public static function delete_element($serial_elemento)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare("DELETE FROM elementos WHERE serial_elemento=:serial_elemento");

        $stmt->bindParam(":serial_elemento", $serial_elemento);

        if ($stmt->execute()) {
            header('HTTP/1.1 201 Elemento Eliminado correctamente');
        } else {
            header('HTTP/1.1 500 Elemento no a sido Eliminado correctamente');
        }
    }

    public static function get_all_elements()
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        // Ajusta la consulta para incluir los datos de la tabla relacionada
        $stmt = $conn->prepare("
                SELECT elementos.*, tipo_elemento.nombre AS nombre_tipo_elemento
                FROM elementos
                JOIN tipo_elemento ON elementos.id_tipo_elemento = tipo_elemento.id
            ");

        if ($stmt->execute()) {
            $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC); // Asegúrate de obtener un array asociativo
            header('HTTP/1.1 201 Elemento Listado correctamente');
            echo json_encode($resultado);
        } else {
            header('HTTP/1.1 500 Elemento no Listado correctamente');
        }
    }

    public static function update_elements($serial_elemento, $numero_inventario, $marca, $modelo, $imei1, $imei2, $disponibilidad, $id_tipo_elemento)
    {
        $database = new DataBase();
        $conn = $database->getConnection();

        $stmt = $conn->prepare('UPDATE elementos SET numero_inventario:=numero_inventario, marca:=marca, modelo:=modelo, imei1:=imei1, imei2:=imei2, disponibilidad:=disponibilidad, id_tipo_elemento:=id_tipo_elemento WHERE serial_elemento:=serial_elemento ');


        $stmt->bindParam(":numero_inventario", $numero_inventario);
        $stmt->bindParam(":marca", $marca);
        $stmt->bindParam(":modelo", $modelo);
        $stmt->bindParam(":imei1", $imei1);
        $stmt->bindParam(":imei2", $imei2);
        $stmt->bindParam(":disponibilidad", $disponibilidad);
        $stmt->bindParam(":id_tipo_elemento", $id_tipo_elemento);
        $stmt->bindParam(":serial_elemento", $serial_elemento);


        if ($stmt->execute()) {
            header('HTTP/1.1 201 Elemento Actualizado Correctamente');
        } else {
            header('HTTP/1.1 500 Elemento no se a creado correctamente');
        }
    }


    public static function get_portatil()
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        // Consulta combinada que filtra por id_tipo_elemento = 1 y obtiene el nombre del tipo
        $stmt = $conn->prepare("
        SELECT elementos.*, tipo_elemento.nombre AS nombre_tipo_elemento
        FROM elementos
        JOIN tipo_elemento ON elementos.id_tipo_elemento = tipo_elemento.id
        WHERE elementos.id_tipo_elemento = 1
    ");

        if ($stmt->execute()) {
            $resultado = $stmt->fetchAll();
        
            header('HTTP/1.1 201 Elemento Listado correctamente');
            echo json_encode($resultado);
        } else {
            header('HTTP/1.1 500 Elemento no Listado correctamente');
        }
    }

    public static function get_celular()
    {
        $database = new DataBase;
        $conn = $database->getConnection();

        // Consulta combinada que filtra por id_tipo_elemento = 1 y obtiene el nombre del tipo
        $stmt = $conn->prepare("
        SELECT elementos.*, tipo_elemento.nombre AS nombre_tipo_elemento
        FROM elementos
        JOIN tipo_elemento ON elementos.id_tipo_elemento = tipo_elemento.id
        WHERE elementos.id_tipo_elemento = 2
    ");

        if ($stmt->execute()) {
            $resultado = $stmt->fetchAll();

            header('HTTP/1.1 201 Elemento Listado correctamente');
            echo json_encode($resultado);
        } else {
            header('HTTP/1.1 500 Elemento no Listado correctamente');
        }
    }
}
