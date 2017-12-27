<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>
<?php

$usuario= "root";
$hosting= "localhost";
$contraseña= "";
$nombre_db= "ods_db";

$conexion= mysqli_connect($hosting, $usuario, $contraseña);
if(mysqli_connect_errno($conexion)){

	echo "Error En COnexion";
exit;

}

$_usuario=  $_GET["usuario"];
$_contrasena= $_GET["contrasena"];

mysqli_select_db($conexion, $nombre_db) or die ("La Base De Datos A La Que intenta acceder No Exite");

mysqli_set_charset( $conexion, "utf8");

$sentencia ="DELETE  FROM usuarios WHERE Nombre = '$_usuario' AND contraseña = '$_contrasena'";

$consulta= mysqli_query($conexion, $sentencia);

 if($consulta==false){

	echo "No Se Elimino";

}else {

	echo "se Elimino";
}

mysqli_close($conexion);
?>


</body>
</html>
