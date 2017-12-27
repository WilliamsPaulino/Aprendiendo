<?php 
try{
	$conexion = new PDO("mysql:hostname=localhost;dbname=audsongs", "root", "");
	$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = "SELECT * FROM users WHERE USUARIO= :user AND PASS= :pass";
	$results = $conexion->prepare($sql);
	$usuario = htmlentities(addslashes($_POST["user"]));
	$contra = htmlentities(addslashes($_POST["contra"]));
	$results->bindValue(":user", $usuario);
	$results->bindValue(":pass", $contra);
	$results->execute();
	$bool = $results->rowCount();
	if($bool != 0){
		session_start();
		$_SESSION["user"] = $usuario;
		header("location:bienvenido.php");
	}else{
		header("location:Login.php");
	}
}catch (exception $e){
	echo "Ah ocurrido un error en la linea " . $e->getLine() ." y dice " . $e->getMessage();
}


?>dn