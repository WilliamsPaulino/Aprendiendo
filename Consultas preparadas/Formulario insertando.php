<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>|Admin of the market|</title>
<link rel="stylesheet" type="text/css" href="StyleSheet.css" />
</head>

<body bgcolor="#000">
<div>
	<h1>Agregar art&iacute;culos</h1>	
</div>
<form class="formulario" action="Insertando.php" method="get" class="formulario_avanzado">
		<label for="codigo">Codigo del Art&iacute;culo:</label>
			<input type="text" class="alinear" name="codigoA" id="codigo"  />
<br /><br /> 	
		<label for="nombre">Nombre del Art&iacute;culo:</label>
			<input type="text" name="nombreA" class="alinearlo" id="nombre" /> 
<br /> <br />	
			<label for="seccion">Seccion del Art&iacute;culo:</label>
			<input type="text" name="seccionA" id="seccion" class="alinear" /> 	
<br /><br /> 	
	
			<label for="importado">Es importado?:</label>
			<select  name="importadoA" id="importado"> 
				<option>Verdadero</option>
				<option>Falso</option>
			</select> 	
<br /><br /> 	 	
		<label for="pais">Pais de origen:</label>
			<input type="text" name="paisO" id="pais" />
<br /><br /> 	 	

		<label for="precio"> Precio: </label>
		<input type="text" id="precio" name="precioA" /> 	
<br /><br /> 	 		
		<label for="fecha"> Fecha: </label>
		<input type="text" id="fecha" name="fechaA" /> 	
<input type="Submit" name="enviarA" id="enviar" value="Agregar" />
<a href="Formulario_eliminar.php"> Ir a eliminar registros...</a>
	</form>
</body>
</html>
