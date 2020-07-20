<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idArticulo"])) {
    exit("No hay id de articulo");
}
$idArticulo = $_GET["idArticulo"];
$bd = include_once "bd.php";
$sentencia1 = $bd->prepare("select id, nombre, precio from articulos where id = ?");
$sentencia1->execute([$idArticulo]);
$articulo = $sentencia1->fetchObject();
echo json_encode($articulo);