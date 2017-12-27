<?php
	session_start();
	$personaje = $_SESSION["usuario"];
	if(!isset($personaje)){
		header("location:Inicio Sesion.php");
	}else{
		echo "<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br>
		<br><h1 align='center'>Bienvenido Seas</h1><h3 align='center'>" . $personaje . "</h3><h4 align='center'><a href='cerrar.php'>Cerrar Sesion</a></h4>";

	}




?>