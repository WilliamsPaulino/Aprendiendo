<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Consultas Preparas</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>

<body>
<?php
	$paiso= $_GET["pais"];
	$nombrar= "pruebas";
	$charset= "utf8";
	
	$sentencia= "SELECT CODIGOARTICULO, NOMBREARTICULO, SECCION, PAISDEORIGEN FROM PRODUCTOS WHERE PAISDEORIGEN= ?";
	
	$conexion= mysqli_connect("localhost","root","");
	if(mysqli_connect_errno()){
		echo "Error :" . mysqli_error();
		exit();
	}
	mysqli_select_db($conexion, $nombrar) or die ("La Base De Datos Npo Se Encuentra");
	mysqli_set_charset($conexion, $charset);

	$consulta= mysqli_prepare($conexion, $sentencia);
	$ok= mysqli_stmt_bind_param($consulta, 's', $paiso);
	$ok= mysqli_stmt_execute($consulta);
	
	if($ok==false){
		echo "El objeto no esta vigente en la base de datos a la que usted quiere acceder";
		
		

	}else{
		$ok= mysqli_stmt_bind_result($consulta, $codigo, $nombre, $seccion, $pais);
			echo "<h2 align='center'>El resultado es: </h2>";
		
			while( mysqli_stmt_fetch($consulta)){
				echo "<div class='container'> <div class='table-responsive'></div> <table class='table table-hover table-bordered '><tr><td> " . $codigo . "</td> <td> " . $nombre . "</td><td> " . $seccion . "</td><td> " . $pais . "</td> </tr>"; 
				
			}
		echo'</table></div></div>';
		mysqli_stmt_close($consulta);
	}	
	
	
?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>
