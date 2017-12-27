<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Consulta PHP bootstrap</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<?php
function consultar($articulo){
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

$query = "SELECT * FROM PRODUCTOS WHERE NOMBREARTICULO = '$articulo'";
$resultado = mysqli_query($conexion, $query);

if($resultado == false){
	echo '<br><center><h1>Fallo en la consulta</</center>';	
}

while($fila= mysqli_fetch_array($resultado, MYSQL_ASSOC)){
	echo"<div class='container table-responsive col-md-6 col-md-offset-3'><br> <table class='table table-bordered table-hover table-striped'> <tr> <td>";
	echo $fila['CODIGOARTICULO'] . "</td> <td>";
	echo $fila['NOMBREARTICULO'] . "</td> <td>";
	echo $fila['SECCION'] . "</td> <td>";
	echo $fila['PRECIO'] . "</td> <td>";
	echo $fila['IMPORTADO'] . "</td> <td>";
	echo $fila['PAISDEORIGEN'] . "</td> </tr>";

}
		echo "<tr><td>
		
		<center>
		<a href='Busqueda Php desde la misma pagina.php' class='row'>
		<span class='glyphicon glyphicon-hand-left'style='color:gray; font-size:30px;' ></span></center></a>;
</td></tr></table></div></center>";
	
mysqli_close($conexion);

}
?>


</head>

<body>
	
<?php

$acceso_articulo = $_GET["buscando"];
$pagina = $_SERVER["PHP_SELF"];

if($acceso_articulo!= NULL){
	consultar($acceso_articulo);
}else{
	echo "<div class='container'>
<br>
	<form action='" . $pagina . "' methof='get' class='form-horizontal'>
		<div class='form-group'>
			<label for='buscar' class='control-label col-md-2 col-md-offset-3'>Buscar:</label>
			<div class='col-md-4 ''>
				<input type='text' name='buscando' id='buscar' class='form-control' placeholder='Escribe el nombre de un producto'/>
			</div>
		</div>	
		<div class='form-group'>
		<center>
			<div class='col-md-2 col-md-offset-6'>
				<input type='submit' value='Buscar' name='busca' class='btn btn-danger'>
				</center>
			</div>
		</div>
	</form>
</div> ";
}


?>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>
