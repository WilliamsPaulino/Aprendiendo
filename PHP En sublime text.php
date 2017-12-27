<?php

	class Coche{
		var $ruedas;
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
		
		function girar_derecha (){
			echo "Y girando a la derecha<br />";
		}
		
		function frenar_palanca(){
			echo "Estoy frenando con la palanca<br />";
		}
	
		function establece_color($color_coche){
		
			$this->color = $color__coche;
			echo "el color del coche es: " , $this->color;
		}
	}
	
	
	$Ferrari = new Coche();
	$Toyota = new Coche();
	$lamborgini = new Coche();
	$Bugatti = new Coche();
		
		$Ferrari->arrancar();
		$Ferrari->girar_derecha();
		
		echo "Tengo " . $Ferrari->ruedas . " ruedas <br /> <br />";
		$Ferrari->establece_color("Rojo");


?>