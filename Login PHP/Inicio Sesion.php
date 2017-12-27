<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Form para PDO</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>
<body>
<?php 

session_start();
$sesion = $_SESSION["usuario"];
	
	if(isset($sesion)){

			//lo lanzamos a la página de bienvenida
			header("location:bienvenido1.php");
	}

?>
<div class='container'>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<h1 align='center' >Iniciar Sesion</h1>	
<br>
	<form action='comprobando_login.php' method='post' class='form-horizontal'>
		<div class='form-group'>
			<label for='usuario' class='control-label col-md-2 col-md-offset-2'>Usuario:</label>
			<div class='col-md-4'>
				<input type='text' name='usuario' id='usuario' class='form-control' placeholder='Escribe tu Usuario'/>
			</div>		
		</div>	
		<div class="form-group">
			<label for='pass' class='control-label col-md-2 col-md-offset-2'>Password:</label>
			<div class='col-md-4 ''>
				<input type='password' name='pass' id='pass' class='form-control' placeholder='Escribe tu password'/>
			</div>
		</div>
		<div class='form-group'>
		<center>
			<div class='col-md-2 col-md-offset-5'>
				<input type='submit' value='Iniciar Sesión' name='busca' class='btn btn-danger'>
				</center>
			</div>
		</div>
	</form>
</div>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>