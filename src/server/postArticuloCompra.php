<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");
    $jsonArticuloCompra = json_decode(file_get_contents("php://input"));
    if (!$jsonArticuloCompra) {
        exit("No hay datos");
    }
    $idCompra = $jsonArticuloCompra->idCompra;
    $articulos = $jsonArticuloCompra->articulos;
    $bd = include_once "bd.php";
    $sentenciaNuevoArticuloCompra = $bd->prepare("insert into articulos_compra(idArticulo,idCompra,cantidad) values (?,?,?)");

    for($i = 0; $i < count($articulos); ++$i) {
        /* echo $articulos[$i]; */
        $resultadoNuevaCompra = $sentenciaNuevoArticuloCompra->execute([$articulos[$i]->id,$idCompra, $articulos[$i]->cantidad]);
    }

    echo json_encode([
        "resultado" => $resultadoNuevaCompra,
    ]);