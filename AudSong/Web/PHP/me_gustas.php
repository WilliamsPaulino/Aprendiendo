<?php 
	try{
		$conexion = new PDO("mysql:hostname=50.62.177.193;dbname=audsongs", "WilliamsPaulino", "Washicolesten09");
		//nota: tratar estos datos con discreción
		$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		$articulo = $_REQUEST["cosa"];
	if(isset($articulo)){
		
		$query = "UPDATE Productos SET Likes = Likes + 1 WHERE Nombre = '". $articulo . "'";
		$resultado = $conexion->prepare($query);
		$resultado->execute();
		echo "si llego";
		$conexion = null;
}

	}catch(execption $e){
		die("Ocurrio un error grave " . $e->getMessage());
	}





?>