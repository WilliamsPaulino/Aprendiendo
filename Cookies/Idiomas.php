<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>

<body>
<?php
	
	
	if(isset($_COOKIE["idioma_seleccionado"])){
			
	 if($_COOKIE["idioma_seleccionado"] == "es"){
		
		header("Location:esp.php");
	
	}else if($_COOKIE["idioma_seleccionado"] == "en"){
		header("Location:eng.php");	
	}

}

?>
<center>
<h2>Elige tu idioma</h2>
</center>
<center>
<a href='espanol.php?idioma=es'><img src="es.jpg" width='60px' height="60px"/></a>
<a href='espanol.php?idioma=en'><img src="en.jpg" width='60px' height="60px"/></a>
</center>
</body>
</html>