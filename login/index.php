<?php session_start();



if (isset($_session['usuario'])) {
	
	header('location: views/contenido.view.php');
}
	else {

	header('location: views/registro.views.php');
}






?>


