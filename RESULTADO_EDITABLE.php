<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
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
	$busqueda = $_GET["buscar"];
	mysqli_select_db( $coneccion, $nombre) or die ("<h2 align='center'>La base De Datos No Existe! :'( </h2>");

	$sentencia= "select * from PRODUCTOS where NOMBREARTÍCULO = '$busqueda'";
	$charset = "UTF8";
	$consulta= mysqli_query($coneccion,  $sentencia);


while($resultado= mysqli_fetch_assoc($consulta)){ 
echo "<form method='get' action='ACTUALIZAR.PHP'>";
echo "<input name='codigo' value='" . $resultado['CÓDIGOARTÍCULO'] . "'<br> <br/>"; 
echo "<input name='seccion' value='" . $resultado['SECCIÓN']  . "'<br> <br/>"; 
echo "<input name='nombre' value='" . $resultado['NOMBREARTÍCULO'] . "'<br> <br/>"; 
echo "<input name='precio' value='" .  $resultado['PRECIO'] . "'<br> <br/>"; 
echo "<input name='fecha' value='" .  $resultado['FECHA'] . "'<br> <br/>";
echo "<input name='pais' value='" .  $resultado['PAÍSDEORIGEN'] . "'<br> <br/> "; 
echo "<input name='importado' value='" .  $resultado['IMPORTADO'] . "'<br> <br/> "; 
echo "<input type='submit' value='Actualizar' />";
echo "</form> " ;

}
	mysqli_set_charset($coneccion, $charset);

mysqli_close($coneccion);

?>

</body>
</html>
