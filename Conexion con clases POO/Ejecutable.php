<?php
	require "conexion.php";

	class Ejecutar extends Conexion{

		public function Ejecutar (){
			parent::__construct();
		}

		public function conseguir_Productos($dato){

			$sentencia = "Select * From productos Where SECCION = '" . $dato ."'";
			$preparamos = $this->conexion_a_la_base->prepare($sentencia);
			$preparamos->execute(array());
			$tabla = $preparamos->fetchAll(PDO::FETCH_ASSOC);
			$preparamos->closeCursor();

			return $tabla;
			$this->conexion_a_la_base = NULL;

		/*	$sentencia ="Select * From productos Where SECCION = '". $dato . "'";

			$resultado = $this->conexion_a_la_base->query($sentencia);
			$productos = $resultado->fetch_all(MYSQLI_ASSOC);
			return $productos;*/
		}
	}
?>