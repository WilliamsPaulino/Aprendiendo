<?php
session_start();
$usuario = $_SESSION["user"];
if(!isset($usuario)){
	header("location:Login.php");
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title><?php echo $usuario . " ";?> Bienvenido.</title>
</head>
<body>
	<h1>Bienvenido seas</h1>
<br>
<br>
<br>
<br>
	<a href="logOut.php" align="center">Cerrar sesión.</a>
</body>
</html>