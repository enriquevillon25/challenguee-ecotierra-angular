<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
if (empty($_GET["idCliente"])) {
    exit("No hay id de cliente");
}
$idCliente = $_GET["idCliente"];
$bd = include_once "bd.php";
$sentenciaListaCompras = $bd->prepare("SELECT compras.id as idCompra, SUM(articulos_compra.cantidad) as cantidadTotal, SUM(articulos.precio*articulos_compra.cantidad) as subTotal, SUM(articulos.precio*articulos_compra.cantidad) * 0.18 as igv, SUM(articulos.precio*articulos_compra.cantidad) * 1.18 as total
FROM compras
JOIN articulos_compra ON compras.id = articulos_compra.idCompra
JOIN articulos ON articulos.id = articulos_compra.idArticulo
WHERE compras.idCliente = ?  
GROUP by idCompra");
$sentenciaListaCompras->execute([$idCliente]);
$compras = $sentenciaListaCompras->fetchAll(PDO::FETCH_OBJ);
echo json_encode($compras);