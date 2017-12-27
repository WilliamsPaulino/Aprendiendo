<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>

<?php

include("Concesionario_POO.php");
	Compra_Coche::ayuda_gobierno();

	$compra_will = new Compra_Coche("alta");
	$compra_will->pieles("blanco");
	$compra_will->climatizador();
	echo $compra_will->precio_final() . "<br/>";
	
	$compra_ana = new Compra_Coche("media");
	$compra_ana->pieles("rojo");	
	$compra_ana->climatizador();
	echo $compra_ana->precio_final() . "<br/>";
	
	$compro_yo = new Compra_Coche("alta");
	$compro_yo->pieles("blanco");
	$compro_yo->climatizador();
	
echo $compro_yo->precio_final();
	
?>
</body>
</html>
