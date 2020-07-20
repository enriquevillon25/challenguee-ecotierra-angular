
<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Methods: PUT");
header("Access-Control-Allow-Headers: *");
if ($_SERVER["REQUEST_METHOD"] != "PUT") {
    exit("Solo acepto peticiones PUT");
}
$jsonCliente = json_decode(file_get_contents("php://input"));
if (!$jsonCliente) {
    exit("No hay datos");
}
$bd = include_once "bd.php";
$sentencia = $bd->prepare("UPDATE clientes SET nombre = ?, apellido = ?, edad = ?, fechaNacimiento = ? WHERE id = ?");
$resultado = $sentencia->execute([$jsonCliente->nombre, $jsonCliente->apellido,  $jsonCliente->edad,$jsonCliente->fechaNacimiento, $jsonCliente->id]);
echo json_encode($resultado);

