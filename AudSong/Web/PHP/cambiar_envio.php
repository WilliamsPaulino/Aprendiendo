<?php
	require "conexion_de_prueba.php";
		// require("conexion.php");
	$datos = $_POST["info"];
	if(isset($datos)){
		$conexion = new Conexion();
		$sql = "UPDATE visitante_c SET Nombre='" . $datos["nombre"] . "', Ciudad='".$datos['ciudad']."', Provincia='".$datos['provincia']."', Direccion='".$datos['direccion']."', Pais='".$datos['pais']."', Codigo_Postal='".$datos['codigo']."', Telefono='".$datos['telefono']."' WHERE Id_Visitante='".$datos["id"]."'";
		$ejecutador = $conexion->conexion_db->prepare($sql);
		$ejecutador->execute();
		$ejecutador->closeCursor();
		$conexion = null;
	}



?>