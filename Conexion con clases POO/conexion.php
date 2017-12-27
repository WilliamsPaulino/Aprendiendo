<?php 
	require"config.php";

	class Conexion{
		protected $conexion_a_la_base;

		public function Conexion(){
			try{
				$this->conexion_a_la_base = new PDO("mysql:hostname=localhost; dbname=pruebas", "root", "");

				$this->conexion_a_la_base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
				$this->conexion_a_la_base->exec("SET CHARACTER SET " . CHARSET);

				return $this->conexion_a_la_base;


			}catch(Exception $error) {
				echo"Lo lamentamos pero mire: " . $error->getMessage() . " Ve lo grave que es esto";
			}	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		/*	$this->conexion_a_la_base = new mysqli(DB_HOST, DB_USER, DB_PASSWORD, DB_NAME);
			if($this->conexion_a_la_base->connect_errno){
				echo "Lo lamentamos: pero mire: " . $this->conexion_a_la_base->connect_error . " Ve lo grave que es esto"; 
			}


			$this->conexion_a_la_base->set_charset(CHARSET);
		}*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	}
}





?>