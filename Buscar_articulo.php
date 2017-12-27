<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>
<?php
	function Ejecutar_Consulta($LaBusqueda){
//	$busqueda= $_GET["buscar"];
	

require("conexion.php"); 
	$coneccion= mysqli_connect($hosting, $usuario, $contra);
		if(mysqli_connect_errno()){
			echo "<h2>Error En Coneccion! :(</h2>";
			exit();

}
	
	mysqli_select_db( $coneccion, $nombre) or die ("<h2 align='center'>La base De Datos No Existe! :'( </h2>");
	
	
	$sentencia= "SELECT * FROM PRODUCTOS WHERE NOMBREARTÍCULO = %$LaBusqueda%";
	
	$consulta= mysqli_query($coneccion, $sentencia );
	
	$charset = "UTF8";
    mysqli_set_charset($coneccion, $charset);

while($resultado= mysqli_fetch_array($consulta, MYSQL_ASSOC)){ 
echo "<table border='1' width='50%' align=\"center\" > <tr><td>";
echo $resultado['CÓDIGOARTÍCULO'] . "</td><td> ";
echo $resultado['SECCIÓN'] . " </td><td>";
echo $resultado['NOMBREARTÍCULO'] . " </td><td>";
echo $resultado['PRECIO'] . " </td><td>";
echo $resultado['FECHA'] . " </td><td> </tr> </table>" ;

 }
$charset = "UTF8";
	
mysqli_close($coneccion);
}


?>
<body>

<?php
 	$Busco= $_GET["buscar"];
	$MiPag= $_SERVER['PHP_SELF'];

	if($Busco!=NULL){	
		Ejecutar_Consulta($Busco);
}else{
	
	echo ("<form action='". $MiPag ."'method='get'>
	<label for='buscar'>Buscar:</label>
	<input type='text' name='buscar' id='buscar' />
	<input type='submit' value='Dale!' />	
	</form>");
}

?>


</body>
</html>
