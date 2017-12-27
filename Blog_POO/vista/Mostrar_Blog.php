<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>

<body>
<?php
	include("../modelo/Manejo_Objetos.php");
	
		
		
	try{
		$mi_conexion = new PDO("mysql:host=localhost; dbname=blogdb", "root", "");
		$mi_conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
		$Manejo_Objetos = new Manejo_Objetos($mi_conexion);
		
		$tabla= $Manejo_Objetos->getContenidoPorFecha();
		
		if(empty($tabla)){
			
			echo"<h1>No Hay Entradas de blog</h1>";	
			
		}else{
		
			foreach($tabla as $valor){
			
				echo "<h2>" . $valor->getTitulo() . "</h2>";
				echo "<h3>"	. $valor->getFecha() . "</h3>";
				echo "<div style='width:400px' >" . $valor->getComentario() . "</div>";
				
				if($valor->getImagen()!=""){
					
					echo "<img width='300px' src='../imagenes/". $valor->getImagen() ."' /> ";
					
					
				}
				
				echo '<hr/>';
				
			}
		}	
		
		
	
	}catch(Exception $e){
		
		die("Error " . $e->getMessage());
			
	}



?>

<a href='Formulario.php'>Volver al formulario</a>

</body>
</html>