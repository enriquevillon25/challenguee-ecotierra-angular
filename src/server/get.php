<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idCliente"])) {
    exit("No hay id de cliente");
}
$idCliente = $_GET["idCliente"];
$bd = include_once "bd.php";
$sentencia = $bd->prepare("select id, nombre, apellido, edad, fechaNacimiento from clientes where id = ?");
$sentencia->execute([$idCliente]);
$cliente = $sentencia->fetchObject();
echo json_encode($cliente);