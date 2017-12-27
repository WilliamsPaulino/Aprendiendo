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
echo "<table border='1' width='50%' align=\"center\" > <tr><td>";
echo $resultado['CÓDIGOARTÍCULO'] . "</td><td> ";
echo $resultado['SECCIÓN'] . " </td><td>";
echo $resultado['NOMBREARTÍCULO'] . " </td><td>";
echo $resultado['PRECIO'] . " </td><td>";
echo $resultado['FECHA'] . " </td><td> </tr> </table>" ;

}
	mysqli_set_charset($coneccion, $charset);

mysqli_close($coneccion);

?>

</body>
</html>
