<?php
	
class Conexion{
	public $conexion_db;
	public function Conexion(){
		try{
			$this->conexion_db = new PDO("mysql:host=localhost; dbname=audsongs","root", "");
			$this->conexion_db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
			$this->conexion_db->exec("SET CHARACTER SET utf8");
			
			return $this->conexion_db;
		
		}catch(Exception $error){
			
			die("<div style='color:gray;'><h1 align='center' >Lo lamentamos pero mire: </h1> <br> <center><i align='center'> " . $error->getMessage() . " </i> </center><h2>Ve lo grave que es esto... ¿fatal no?</h2> </div>");
		

	}
}

}


?>