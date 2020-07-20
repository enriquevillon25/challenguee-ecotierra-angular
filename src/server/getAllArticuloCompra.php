
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "bd.php";
$sentencia1 = $bd->query("select id, idArticulo, idCompra, cantidad from articulos_compra");
$articulosCompras = $sentencia1->fetchall(PDO::FETCH_OBJ);
echo json_encode($articulosCompras);
