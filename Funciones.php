<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Funciones</title>
</head>
<?php

/*Bueno ahora realizar� un ejemplo de las funciones, su anidacion, paso de par�metros, llamada de una funcion, varias funciones predefinidas y valores predefinidos de par�metros*/

	function mayus( $frase , $operacion=true){
		
		$frase= strtolower($frase);
		
		if($operacion==true){
			$resultado	
			=ucwords($frase);
		
		}else {
			$resultado =strtoupper($frase);
		}
		return	$resultado;
	}	
	
	$hola="Hola se&ntilde;or!!, como le fu&eacute; en su dia?";
	echo mayus( $hola);
?>
<body>
</body>
</html>
