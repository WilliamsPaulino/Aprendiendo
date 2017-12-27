<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Consulta PHP bootstrap</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>


<body>
	

<?php

$usuario = 'root';
$contra = '';
$host= 'localhost';
$nombreDB = 'pruebas';
$charset = 'UTF-8';
$conexion = mysqli_connect($host, $usuario, $contra);

if(mysqli_connect_errno()){
	echo '<br><center><h1>Fallo en conexión</</center>';
}

mysqli_select_db($conexion, $nombreDB) or die ("<br><center><h1>No se encontro la base de datos</h1></center>");
mysqli_set_charset($conexion, $charset);

$query = 'SELECT * FROM PRODUCTOS';
$resultado = mysqli_query($conexion, $query);

if($resultado == false){
	echo '<br><center><h1>Fallo en la consulta</</center>';	
}

while($fila= mysqli_fetch_array($resultado, MYSQL_ASSOC)){
	echo"<div class='container table-responsive col-md-6 col-md-offset-3'> <table class='table table-bordered table-hover table-striped'> <tr> <td>";
	echo $fila['CODIGOARTICULO'] . "</td> <td>";
	echo $fila['NOMBREARTICULO'] . "</td> <td>";
	echo $fila['SECCION'] . "</td> <td>";
	echo $fila['PRECIO'] . "</td> <td>";
	echo $fila['IMPORTADO'] . "</td> <td>";
	echo $fila['PAISDEORIGEN'] . "</td> </tr>";

	
	

}

	echo "</table></div></center>";

?>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>
