<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");
    $jsonCliente = json_decode(file_get_contents("php://input"));
    if (!$jsonCliente) {
        exit("No hay datos");
    }
    $bd = include_once "bd.php";
    $sentencia = $bd->prepare("insert into clientes(nombre, apellido, edad, fechaNacimiento) values (?,?,?,?)");
    $resultado = $sentencia->execute([$jsonCliente->nombre, $jsonCliente->apellido,  $jsonCliente->edad, $jsonCliente->fechaNacimiento]);
    echo json_encode([
        "resultado" => $resultado,
    ]);
