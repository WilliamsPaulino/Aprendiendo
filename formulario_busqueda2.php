<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Buscar productos</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<div class="container">
<br>
	<form action="conexion_busqueda.php" method='get' class="form-horizontal">
		<div class="form-group">
			<label for="buscar" class='control-label col-md-2 col-md-offset-3'>Buscar:</label>
			<div class="col-md-4 ">
				<input type="text" name="buscando" id="buscar" class="form-control" placeholder="Escribe el nombre de un producto"/>
			</div>
		</div>	
		<div class="form-group">
		<center>
			<div class="col-md-2 col-md-offset-6">
				<input type="submit" value="Buscar" name="busca" class="btn btn-danger">
				</center>
			</div>
		</div>
	</form>
</div>


<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>	
</body>
</html>