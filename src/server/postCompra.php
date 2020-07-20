<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");
    $jsonCompra = json_decode(file_get_contents("php://input"));
    if (!$jsonCompra) {
        exit("No hay datos");
    }
    $idCliente = $jsonCompra->idCliente;
    $bd = include_once "bd.php";
    $sentenciaNuevaCompra = $bd->prepare("insert into compras(idCliente) values (?)");
    $resultadoNuevaCompra = $sentenciaNuevaCompra->execute([$idCliente]);
    $resultadoNuevaCompra = $bd->lastInsertId();

    echo json_encode([
        "resultado" => $resultadoNuevaCompra,
    ]);