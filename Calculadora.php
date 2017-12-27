<style>
body{
	background:#000;
}

.resultado {
	color:#0033CC;
	font-size:36px;
	font-family:"Courier New", Courier, monospace;
	text-align: center;
	text-decoration:blink;
	border:3px dashed #0066FF;
	width: 25%;
	position:absolute;
	top:25%;
	left:35%;
	right:auto;
	background:#00FF00;
	border-radius:5px;
	

}
</style>

<?php
	if(isset($_POST["sendButton"])){
		$number =$_POST["number"];
		$number1 =$_POST["number1"];
		$operacion = $_POST["select"];
		
		calculadora($operacion);
		}
		
		function calculadora($calcular){
			
			if(!strcmp("Suma", $calcular)){
		        $Numero=$_POST["number"];
				global $number1;
				$calcula= $Numero+$number1;
				echo "<p class='resultado'>el resultado es: $calcula </p> "; 
			}
			if(!strcmp("Resta", $calcular)){
				global $number;
				global $number1;
				$calcula= $number-$number1;
				echo "<p class='resultado'>el resultado es: $calcula </p> "; 
			}
			if(!strcmp("Multiplicacion", $calcular)){
				global $number;
				global $number1;

				$calcula= $number*$number1;
				echo "<p class='resultado'>el resultado es: $calcula </p> "; 
			}
			if(!strcmp("Division", $calcular)){
				global $number;
				global $number1;

				$calcula= $number/$number1;
				echo "<p class='resultado'>el resultado es: $calcula </p> "; 
			}
			if(!strcmp("Modulo", $calcular)){
			 	global $number;
				global $number1;

				$calcula= $number%$number1;
				echo "<p class='resultado'>el resultado es: $calcula </p> "; 
			}
	}


?>