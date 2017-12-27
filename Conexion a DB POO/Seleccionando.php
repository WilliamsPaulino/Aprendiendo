<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>	
<?php
	
	$conexion= new mysqli("localhost", "root", "", "ods_db"); 

	
	$conexion->set_charset("utf8");

	$sentencia= "SELECT * FROM PRODUCTOS";
	$consulta= $conexion->query($sentencia);
	if($consulta=false){
		echo "adios";
	}else{
		while($consulta->fetch_assoc()){
			echo "<h1 align='center' >Resultado</h1>";
			echo "<table border='1' width='50%' align=\"center\" > <tr><td>";
			echo $resultado['CÓDIGOARTÍCULO'] . "</td><td> ";
			echo $resultado['SECCIÓN'] . " </td><td>";
			echo $resultado['NOMBREARTÍCULO'] . " </td><td>";
			echo $resultado['FECHA'] . " </td><td>";
			echo $resultado['PAÍSDEORIGEN'] . " </td><td>";
			echo $resultado['IMPORTADO'] . " </td><td>";
			echo $resultado['PRECIO'] . " </td><td> </tr> </table>" ;

}
	$conexion-close();
		}
	


	
	
?>
</body>
</html>
