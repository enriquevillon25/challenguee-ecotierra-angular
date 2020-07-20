<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idArticuloCompra"])) {
    exit("No hay id de articulo compra");
}
$idArticuloCompra = $_GET["idArticuloCompra"];
$bd = include_once "bd.php";
$sentencia1 = $bd->prepare("select id, idArticulo, idCompra, cantidad from articulos_compra where id = ?");
$sentencia1->execute([$idArticuloCompra]);
$idArticuloCompra = $sentencia1->fetchObject();
echo json_encode($idArticuloCompra);