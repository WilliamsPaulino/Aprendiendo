<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>
<body>

<?php
	$cod= $_GET["codigoA"];
	$nom= $_GET["nombreA"];
	$sec= $_GET["seccionA"];
	$pre= $_GET["precioA"];
	$impor= $_GET["importadoA"];
	$pais= $_GET["paisO"];
	$fec= $_GET["fechaA"];

	$nombrar= "ods_db";
	$alojar= "localhost";
	$usar= "root";
	$contra= "";
	$charset= "utf8";
	$sentencia= "INSERT INTO PRODUCTOS (CÓDIGOARTÍCULO, NOMBREARTÍCULO, SECCIÓN, IMPORTADO, FECHA, PAÍSDEORIGEN, PRECIO) VALUES (?,?,?,?,?,?,?)";
	$conexion= mysqli_connect("localhost","root","");
	if(mysqli_connect_errno()){
		echo "ErroR :" . mysqli_error();
		exit();
	}
	mysqli_select_db($conexion, $nombrar) or die ("La Base De Datos Npo Se Encuentra");

	$consulta= mysqli_prepare($conexion, $sentencia);
	mysqli_select_db($conexion, $nombrar);
	mysqli_set_charset($conexion, $charset);
	$ok= mysqli_stmt_bind_param($consulta, 'ssssssi', $cod, $nom, $sec, $impor, $fec, $pais, $pre);
	$ok= mysqli_stmt_execute($consulta) or die ("No Se Pudo Ejecutar" . mysqli_error($conexion));
	
	if($ok==false){
		echo "error al insertal";
		
		

	}else{
		//$ok= mysqli_stmt_bind_result($consulta, $codigo, $nombre, $seccion, $import, $fech, $paisO, $precioA);
			echo "<h2>insertado Correctamente  </h2>";
		
			//while( mysqli_stmt_fetch($consulta)){	
				//echo $codigo . " " . $nombre . " " . $seccion . " " . $import . "  " . $fech . "  " . $paisO ." " . $precioA . "<br />"; 
				
			//}
		mysqli_stmt_close($consulta);
	}	
	
	
?>

</body>
</html>
