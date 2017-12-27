<?php 

try{
	$seccion = $_GET['seccion'];
	$base = new PDO("mysql:host=localhost; dbname=pruebas", 'root', '');
	$base->exec("set character set utf8");
	$base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	$sql ="SELECT CODIGOARTICULO, NOMBREARTICULO, SECCION, PRECIO FROM productoss WHERE SECCION= ? ";
	
	$tabla = $base->prepare($sql);

	$tabla->execute(array($seccion ));

	while($registros = $tabla->fetch(PDO::FETCH_ASSOC)){
		echo "nombre del articulo: " . $registros["NOMBREARTICULO"] . " <br> Codigo del articulo: " . $registros["CODIGOARTICULO"] . "<br> Sección del articulo: " . $registros["SECCION"] . "<br> Precio del articulo: " . $registros["PRECIO"] . "<br><br><br>";
	}

	$tabla->closeCursor();
}catch (Exception $Mensaje_de_error){
	die("Error: " . $Mensaje_de_error->GetMessage());
}finally{
	$base = null;
}





?>