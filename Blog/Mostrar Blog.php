<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>
<body>
		<center><h1>Mi Blog Williams</h1> </center>

<?php

$mi_conexion= mysqli_connect("localhost", "root", "", "blogdb");
	//Comprobamos la conexion
	
	if(!$mi_conexion){
		echo"compruebe su conexion a internet " . mysqli_error();
		exit(); 	
	}
	
	$mi_consulta = "SELECT * FROM contenido ORDER BY FECHA DESC";
	
	if($resultado= mysqli_query($mi_conexion, $mi_consulta)){
		
		while($registro= mysqli_fetch_assoc($resultado)){
			
			echo "<h2 align='center'> ". $registro['TITULO']. "</h2>";
			echo "<h3 align='center'> ". $registro['FECHA'] ."</h3>";
			echo "<center> <div style='width:400px'>". $registro['COMENTARIO']	. " </div> </center>";
			
			if($registro["IMAGENES"]!= ""){
			
				echo "<center><img src='imagenes/". $registro['IMAGENES'] . "' width='300px'> </img></center>";
			
			}
			echo "<hr/>";
		} 	
		
	}
	
	
	
?>

</body>
</html>