<?php
error_reporting(0); // Deshabilita la visualización de errores
ini_set('display_errors', 0); // Deshabilita la visualización de errores

require '/xampp/htdocs/Proyectos/ProyectoSismedica/Api_sismedica/vendor/autoload.php';
require_once '/xampp/htdocs/Proyectos/ProyectoSismedica/Api_sismedica/includes/Database.class.php';


use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class FormatosExcel
{
    public static function excel_entregas()
    {
        $sql = " SELECT 
            entregas.fecha_entrega,
            entregas.observaciones AS observaciones_entrega,
            usuarios.doc,
            usuarios.nombres AS nombre_usuario,
            usuarios.apellidos AS apellido_usuario,
            usuarios.telefono AS telefono_usuario,
            regional.nombre AS nombre_regional,
            cargo.nombre AS nombre_cargo,
            areas.nombre AS nombre_area,
            elementos.serial_elemento,
            elementos.numero_inventario,
            elementos.marca,
            elementos.modelo,
            elementos.imei1,
            elementos.imei2,
            elementos.disponibilidad,
            tipo_elemento.nombre AS nombre_tipo_elemento
            
            FROM entregas
            
            JOIN usuarios ON entregas.id_doc = usuarios.doc
            JOIN regional ON usuarios.id_regional = regional.id
            JOIN areas ON usuarios.id_area = areas.id
            JOIN cargo ON usuarios.id_cargo = cargo.id
            JOIN elementos ON entregas.id_serial_elemento = elementos.serial_elemento
            JOIN tipo_elemento ON elementos.id_tipo_elemento = tipo_elemento.id;
            
            ";
        // Conexión a la base de datos
        $database = new DataBase;
        $conn = $database->getConnection();

        // Ejecutar consulta
        $stmt = $conn->query($sql);
        $data = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // var_dump($data);
        // Verificar si hay datos
        if (empty($data)) {
            throw new Exception('No hay datos disponibles para exportar.');
        }

        // Crear una nueva hoja de cálculo
        $spreadsheet = new Spreadsheet();
        $sheet = $spreadsheet->getActiveSheet();

        // Agregar encabezados
        $sheet->setCellValue('A1', 'Fecha de Entrega');
        $sheet->setCellValue('B1', 'Obeservacion de Entrega');
        $sheet->setCellValue('C1', 'Documento');
        $sheet->setCellValue('D1', 'Nombre Usuario');
        $sheet->setCellValue('E1', 'Apellido Usuario');
        $sheet->setCellValue('F1', 'Telefono Usuario');
        $sheet->setCellValue('G1', 'Regional');
        $sheet->setCellValue('H1', 'Cargo');
        $sheet->setCellValue('I1', 'Area');
        $sheet->setCellValue('J1', 'Serial');
        $sheet->setCellValue('K1', 'Numero Inventario');
        $sheet->setCellValue('L1', 'Marca');
        $sheet->setCellValue('M1', 'Modelo');
        $sheet->setCellValue('N1', 'Imei1');
        $sheet->setCellValue('O1', 'Imei2');
        $sheet->setCellValue('P1', 'Disponibilidad');
        $sheet->setCellValue('Q1', 'Tipo de Elemento');

        // Ajustar el tamaño automático de las columnas
        foreach (range('A', 'Q') as $columnID) {
            $sheet->getColumnDimension($columnID)->setAutoSize(true);
        }

        // Aplicar el filtro a todas las columnas de la fila 1 (encabezados)
        $sheet->setAutoFilter($sheet->calculateWorksheetDimension());

        // Agregar datos
        $row = 2; // Empezamos en la fila 2 porque la 1 son los encabezados
        foreach ($data as $d) {
            $sheet->setCellValue('A' . $row, $d['fecha_entrega']);
            $sheet->setCellValue('B' . $row, $d['observaciones_entrega']);
            $sheet->setCellValue('C' . $row, $d['doc']);
            $sheet->setCellValue('D' . $row, $d['nombre_usuario']);
            $sheet->setCellValue('E' . $row, $d['apellido_usuario']);
            $sheet->setCellValue('F' . $row, $d['telefono_usuario']);
            $sheet->setCellValue('G' . $row, $d['nombre_regional']);
            $sheet->setCellValue('H' . $row, $d['nombre_cargo']);
            $sheet->setCellValue('I' . $row, $d['nombre_area']);
            $sheet->setCellValue('J' . $row, $d['serial_elemento']);
            $sheet->setCellValue('K' . $row, $d['numero_inventario']);
            $sheet->setCellValue('L' . $row, $d['marca']);
            $sheet->setCellValue('M' . $row, $d['modelo']);
            $sheet->setCellValue('N' . $row, $d['imei1']);
            $sheet->setCellValue('O' . $row, $d['imei2']);
            $sheet->setCellValue('P' . $row, $d['disponibilidad']);
            $sheet->setCellValue('Q' . $row, $d['nombre_tipo_elemento']);
            $row++;
        }

        // Enviar encabezados para la descarga del archivo
        header('Content-Type: application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        header('Content-Disposition: attachment; filename="exported_file.xlsx"');
        header('Cache-Control: max-age=0');


        // Evitar cualquier salida antes de enviar el archivo
        ob_end_clean(); // Limpia el buffer de salida
        ob_start(); // Inicia el buffer de salida

        // Crear el escritor y guardar el archivo en la salida
        $writer = new Xlsx($spreadsheet);
        $writer->save('php://output');
        exit;
    }
}
FormatosExcel::excel_entregas();
