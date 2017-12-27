<?php 
	require "conexion_de_prueba.php";
		// require("conexion.php");
	$dato = $_POST["dato"];	

if($dato == "pais"){
	
	function getPaises(){
		$conexion = new Conexion();
		$query = "SELECT * FROM paises ORDER BY Nombre";
		$resultado = $conexion->conexion_db->prepare($query);
		$resultado->execute();
		$paises = "<option value='0'></option>";
		while ($dato = $resultado->fetch(PDO::FETCH_BOTH)){

			$paises .= "<option value='$dato[1]'>$dato[1]</option>"; 
			
		}
		echo $paises;
		$conexion = null;
	}
	getPaises();

		
} 

if($dato ==  "provincia"){
		
	function getProv(){	
		$pais = $_POST["selected"];

		$conexion = new Conexion();
		$query = "SELECT * FROM provincias WHERE Pais = '" .  $pais . "' ORDER BY Provincia";
		$resultado = $conexion->conexion_db->prepare($query);
		$resultado->execute();
		$provincias = "<option value='0'></option>";
		while ($dato = $resultado->fetch(PDO::FETCH_BOTH)){
			
			$provincias .= "<option value='$dato[1]'>$dato[1]</option>"; 
			
		}

		echo $provincias;
		$conexion = null;
	}
	
	getProv();
}




?>