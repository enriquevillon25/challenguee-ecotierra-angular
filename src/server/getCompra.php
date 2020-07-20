<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idCompra"])) {
    exit("No hay id de compra");
}
$idCompra = $_GET["idCompra"];
$bd = include_once "bd.php";
$sentenciaDetalleCompra = $bd->prepare("SELECT articulos.nombre, articulos_compra.cantidad, articulos.precio, articulos_compra.cantidad*articulos.precio as subTotal, articulos_compra.cantidad*articulos.precio*0.18 as igv
FROM compras
JOIN articulos_compra ON compras.id = articulos_compra.idCompra
JOIN articulos ON articulos.id = articulos_compra.idArticulo
WHERE compras.id = ?");
$sentenciaDetalleCompra->execute([$idCompra]);
$compraDetalle = $sentenciaDetalleCompra->fetchAll(PDO::FETCH_OBJ);
echo json_encode($compraDetalle);