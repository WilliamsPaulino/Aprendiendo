<?php 

$nombreDB = 'login';
$user = 'root';
$contra= '';
$host = 'localhost';

$conexion = mysqli_connect($host, $user, $contra, $nombreDB);

if(!$conexion){
	echo 'error al conectar con la base de datos' . mysql_error();
	exit();

}



$nombre = $_POST['username'];
$contrasena = $_POST['password'];
$confircontra = $_POST['password_r'];

$consulta = "INSERT INTO login (Nombre,Contra,ConfirmarContra) VALUES ('" . $nombre ."', '". $contrasena ."', '".  $confircontra ."')";

$resultado = mysqli_query($conexion, $consulta);

if(!$resultado){
	echo'error al ejecutar consulta';
}else{
	echo'la consulta se ejecuto exitosamente';
}

?>