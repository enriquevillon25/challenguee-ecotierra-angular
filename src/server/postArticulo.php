<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");
    $jsonArticulo = json_decode(file_get_contents("php://input"));
    if (!$jsonArticulo) {
        exit("No hay datos");
    }
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("insert into articulos(nombre, precio) values (?,?)");
    $resultado = $sentencia->execute([$jsonArticulo->nombre, $jsonArticulo->precio]);
    echo json_encode([
        "resultado" => $resultado,
    ]);