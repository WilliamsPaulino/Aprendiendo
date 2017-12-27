<?php 
		require("conexion_de_prueba.php");
			// require("conexion.php");

class Mostrar_Contenido extends Conexion{

	public $cantidad_de_registros;
	public $hasta = 25;
	public $pagina = 1;
	public $desde;
	public $cantidad_registros_seccion;
	
	public function Mostrar_Contenido(){
		parent::__construct();
	}

	public function registros(){
		$consulta = "SELECT * FROM productos";
		$resultado=	$this->conexion_db->prepare($consulta);
		$resultado->execute(array());
	
		$this->cantidad_de_registros= $resultado->rowCount(); 

		$resultado->closeCursor();
		return $this->cantidad_de_registros;
		$this->conexion_db = NULL;
			
	}

	public function mostrar($pagina){
			
			$this->desde = ($pagina-1)*$this->hasta;

			$consulta = "SELECT * FROM productos ORDER BY Fecha_Agregado LIMIT $this->desde,$this->hasta";
			$resultado=	$this->conexion_db->prepare($consulta);
			$resultado->execute(array());
			
			$contenido = $resultado->fetchAll(PDO::FETCH_ASSOC);


			$resultado->closeCursor();
			return $contenido;

			$this->conexion_db = NULL;
			
	}

		public function mostrar_seccion($pagina, $seccion){
			
			$this->desde = ($pagina-1)*$this->hasta;

			$consulta = "SELECT * FROM productos WHERE Seccion='".$seccion."' ORDER BY Fecha_Agregado LIMIT $this->desde,$this->hasta";
			$resultado=	$this->conexion_db->prepare($consulta);
			$resultado->execute(array());
			$this->cantidad_registros_seccion = $resultado->rowCount();//por siacaso no sé 
			$contenido = $resultado->fetchAll(PDO::FETCH_ASSOC);


			$resultado->closeCursor();
			return $contenido;

			$this->conexion_db = NULL;
			
	}

	public function cantidad_seccion($seccion){


			$consulta = "SELECT * FROM productos WHERE Seccion='".$seccion."'";
			$resultado=	$this->conexion_db->prepare($consulta);
			$resultado->execute(array());
			
			$resultado->closeCursor();
			return $resultado->rowCount();

			$this->conexion_db = NULL;
			
	}



}  //aqui acaba la clase Mostrar_Registros
// $mostrar = new Mostrar_Contenido();
// echo "hola " .$mostrar->registros();
?>