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
	$Nombre= $_GET["nombreA"];
	$Seccion= $_GET["seccionA"];
	$Importado= $_GET["importadoA"];
	$Pais= $_GET["paisO"];
	
	
	mysqli_select_db( $coneccion, $nombre) or die ("<h2 align='center'>La base De Datos No Existe! :'( </h2>");
$charset = "UTF8";
	$sentencia= "INSERT INTO PRODUCTOS (CÓDIGOARTÍCULO, SECCIÓN, NOMBREARTÍCULO, IMPORTADO, PAÍSDEORIGEN) VALUES ('$Codigo', '$Seccion', '$Nombre' ,'$Importado', '$Pais') ";
	
	$consulta= mysqli_query($coneccion,  $sentencia);
if($consulta==false){
	echo "Lo sentimos no se pudo agregar el registro con exito";
}else if(mysqli_affected_rows($coneccion)==0){
	echo "<h2 align='center'>Lo Sentimos El Codigo De articulo No es valido</h2>";
	echo "<a href='Formulario_Agregar.php'>Volver A la Pagina</a>	";	
}else if(mysqli_affected_rows($coneccion)==1){

	echo "<h1 aling='center'>Felicidades! El Registro ha sido AGREGADO con exito</h1>";
	echo "<a href='Formulario_Agregar.php'>Volver</a> <br/>	";
	echo "<b>CODIGO:</b>  " . $Codigo . "<br/>";
	echo "<b>SECCION:</b>  " . $Seccion . "<br/>";
	echo "<b>NOMBRE:</b>  " . $Nombre . "<br/>";
	echo "<b>IMPORTADO:</b>  " . $Importado . "<br/>";
	echo "<b>PAIS DE ORIGEN:</b>  " . $Pais . "<br/>";
	


}else {
	echo "<h1 align='center'>Felicidades! los Registros han sido AGREGADOS con exit$oacute;</h1>"; 
	echo "<p align='center'>Se han Eliminado" . mysqli_affected_rows($coneccion) . "registros </p>";
	echo "<a href='Formulario_Agregar.php'>Volver A la Pagina</a>	";	

}

	

mysqli_close($coneccion);
?>


</body>
</html>
