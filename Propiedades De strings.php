<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
<style>
 .resaltar {
 	color:#FF0000;
	font-weight:bold;
 }
</style>
</head>
<?php
	$nada ="CASA";
	$algo ="CASa";
	$resultado= strcmp($nada, $algo);
	
	//echo $resultado;
	If(!$resultado) {
	  echo "coinciden";
	}else { 
		echo "no coinciden";
	}	
?>

<body>
</body>
</html>
