<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>
<?php

	class Coche{
		protected $ruedas;
		var $color;
		var $motor;
		
		function Coche(){   //metodo constructor
			$this-> ruedas=4;
			$this-> color="";
			$this-> motor=1600;
		}
		function arrancar(){
			echo "Estoy arrancando<br />";
		}

		function get_ruedas(){
			return $this->ruedas;
		
		}
		
		function girar_derecha (){
			echo "Y girando a la derecha<br />";
		}
		
		function frenar_palanca(){
			echo "Estoy frenando con la palanca<br />";
		}
	
		function establece_color($color_coche, $nombre_coche){
		
			$this->color = $color_coche;
			$hola = "<br /> <br/>";
			echo "el color del $nombre_coche es: " . $this->color . $hola ;
		}
	}
	
	
	$Ferrari = new Coche();
	$Toyota = new Coche();
	$lamborgini = new Coche();
	$Bugatti = new Coche();
		
		echo "el coche tiene " . $Ferrari->get_ruedas() . " ruedas";
		$Ferrari->girar_derecha();
		
		echo "Tengo " . $Ferrari->get_ruedas() . " ruedas <br /> <br />";
		$Ferrari->establece_color("Rojo","Ferrari");


class Camion extends Coche{
		
		function Camion(){   //metodo constructor
			$this->ruedas = 8;
			$this->color = "gris";
			$this->motor = 2600;
		}
		function arrancar(){
			echo "<br />Estoy arrancando<br />";
		}
		
		function girar_derecha (){
			echo "Y girando a la derecha<br />";
		}
		
		function frenar_palanca(){
			echo "Estoy frenando con la palanca<br />";
		}
		
		function establece_color($color_camion, $nombre_camion){
		
			$this->color = $color_camion;
			$hola = "<br /> <br/>";
			echo "el color del $nombre_camion es: " . $this->color . $hola;
		}
		

}
	
	$Pegaso = new Camion();
	$Hino = new Camion();
echo "el camion tiene " . $Pegaso->get_ruedas() . " ruedas";
	$Pegaso->arrancar();	
	$Pegaso->establece_color("Verde", "Pegaso");



/*<----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/






?>
</body>
</html>
