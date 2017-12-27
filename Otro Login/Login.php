<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Login</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<?php 
	session_start();
	 $usuario_conectado = $_SESSION["user"];
	if(isset($usuario_conectado)){
		header("location:bienvenido.php");
	}

?>
	<div class="container" style='height: 700px'>
	<h1 class='text-info' align="center">Inicio de Sesion</h1>
		<form action="comprueba.php" class="form-horizontal" method="post">
			<div class="form-group">
			<label for="userr" class="control-label col-md-2 col-md-offset-2">Usuario</label>
			<div class="col-md-6">
				<input type="text" name="user" id="userr" class="form-control" placeholder="Usuario:">	
			</div>
			</div>
			<div class="form-group">
			<label for="contra" class="control-label col-md-2 col-md-offset-2">Password</label>
			<div class="col-md-6">
				<input type="password" name="contra" id="contra" class="form-control" placeholder="Contrasena:">	
			</div>
			</div>
			<div class="form-group">
				<div class="col-md-4 col-md-offset-6">
				<input type="submit" value="SUBMIT" class="btn btn-info"></div>
			</div>
		</form>



	</div>

	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>