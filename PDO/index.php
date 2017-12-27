<?php 
require ("DevuelveProductos.php");
$productos = new DevuelveProductos();
$array_productos = $productos->get_productos();
	
?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>
<body>

	<?php 
	foreach($array_productos as $elementos){
		echo "<table> <tr><td>";
		echo $elementos['CODIGOARTICULO'] . "</td> <td>";
		echo $elementos['NOMBREARTICULO'] . "</td> <td>";
		echo $elementos['SECCION'] . "</td> <td>";
		echo $elementos['PRECIO'] . "</td> <td>";
		echo $elementos['FECHA'] . "</td> <td>";
		echo $elementos['IMPORTADO'] . "</td> <td>";
		echo $elementos['PAISDEORIGEN'] . "</td> <td> </tr></table>";
		
		echo "<br/>";
		echo "<br/>";
	}
	?>
</body>
</html>