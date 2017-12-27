<?php
	require"Ejecutable.php";
	$seccion = $_GET["seccion"];
	$conectar = new Ejecutar();
	$productos = $conectar->conseguir_Productos($seccion);



?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Articulos de la tabla productos</title>
</head>
<body>
	<?php 
		foreach($productos as $registros){
			echo"<b>Codigo:</b> " . $registros["CODIGOARTICULO"] . "<br><b>Nombre:</b> " . $registros["NOMBREARTICULO"] . "<br> <b>Seccion:</b> " . $registros["SECCION"] . "<br> <b>Precio:</b" / $registros["PRECIO"] . "<br><b>Pais de origen:</b> " . $registros["PAISDEORIGEN"] . "<br>
			<br>
			<br>" ;
		}



	?> 
</body>
</html>