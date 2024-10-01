<?php
    require_once('Database.class.php');

    class Users
    {
        public static function create_users($doc,$nombres,$apellidos,$telefono,$id_cargo,$id_regional, $id_area){
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


            if($stmt -> execute() ){
                header('HTTP/1.1 201 Cliente creado correctamente');
            }else{
                header('HTTP/1.1 500 Cliente no se a creado correctamente');
            }
        }

        public static function delete_user($doc){
            $conexion = new DataBase();
            $conn = $conexion->getConnection();

            $stmt = $conn->prepare('DELETE FROM usuarios WHERE doc=:doc');

            $stmt->bindParam(":doc", $doc);


            if($stmt -> execute() ){
                header('HTTP/1.1 201 Cliente creado correctamente');
            }else{
                header('HTTP/1.1 500 Cliente no se a creado correctamente');
            }   
        }


        public static function  get_all_users(){
            $conexion = new DataBase();
            $conn = $conexion->getConnection();
        
            $stmt = $conn->prepare('SELECT * FROM usuarios');
    

            if($stmt -> execute() ){
                $result = $stmt->fetchAll();
                echo json_encode($result);
                header('HTTP/1.1 201 Cliente creado correctamente');
            }else{
                header('HTTP/1.1 500 Cliente no se a creado correctamente');
            }   

        }

        public static function update_user($doc, $nombres,$apellidos,$telefono,$id_cargo,$id_regional){
            $conexion = new DataBase();
            $conn = $conexion->getConnection();


            $stmt = $conn->prepare('UPDATE usuarios SET nombres=:nombres, apellidos=:apellidos, telefono=:telefono, id_cargo=:id_cargo, id_regional=:id_regional WHERE doc=:doc');


            $stmt->bindParam(':nombres', $nombres);
            $stmt->bindParam(':apellidos', $apellidos);
            $stmt->bindParam(':telefono', $telefono);
            $stmt->bindParam(':id_cargo', $id_cargo);
            $stmt->bindParam(':id_regional', $id_regional);
            $stmt->bindParam(':doc', $doc);
            
        if($stmt -> execute() ){
            header('HTTP/1.1 201 Cliente creado correctamente');
        }else{
            header('HTTP/1.1 500 Cliente no se a creado correctamente');
        }

        }
    }


?>