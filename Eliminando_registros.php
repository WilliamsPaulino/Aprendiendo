<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="StyleSheet.css" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>

<?php
require("conexion.php"); 
	$coneccion= mysqli_connect($hosting, $usuario, $contra);
		if(mysqli_connect_errno()){
			echo "<h2>Error En Coneccion! :(</h2>";
			exit();

}

	$Codigo= $_GET["codigoA"];
	
	mysqli_select_db( $coneccion, $nombre) or die ("<h2 align='center'>La base De Datos No Existe! :'( </h2>");
$charset = "UTF8";
	$sentencia= "DELETE FROM PRODUCTOS WHERE CÓDIGOARTÍCULO ='$Codigo'" ;
	
	$consulta= mysqli_query($coneccion,  $sentencia);
if($consulta==false){
	echo "Lo sentimos no se pudo eliminar el registro con exit&oacute";
}else{
	echo "<h1 align='center'>Felicidades!! se ha eliminado el registro con exit&oacute;!</h1>";
	echo "<a href='Formulario_eliminar.php'>Volver A la Pagina</a>	";	
	
}
mysqli_close($coneccion);
?>


</body>
</html>