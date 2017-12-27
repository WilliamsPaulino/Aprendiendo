<?php
#session_start();
#$sesion = $_SESSION["usuario"];
#if(!isset($sesion)){


	try{
		//creamos la conexion pdo con mysql
		$conexion = new PDO("mysql:host=localhost; dbname=audsongs", "root", "");
		//llamamos al metodo setAttribute para que lanze errores
		$conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
		//hacemos la consulta
		$sql = "SELECT * FROM USERS WHERE USUARIO= :user AND PASS = :contra ";
		//la preparamos osea ya esta en consonancia con la conexion al a base de datos
		$resultado = $conexion->prepare($sql);
		//accedemos al contenido que se integro en el input usuario
		$usuario = htmlentities(addslashes($_POST["usuario"]));
		//accedemos al contenido que se integro en el input contrasena
		$contra = htmlentities(addslashes($_POST["pass"]));
		//relacionamos el contenido de los inputs con los marcadores mediante bindValue
		$resultado->bindValue(":user", $usuario);
		$resultado->bindValue(":contra", $contra);
		//ejecutamos la consulta
		$resultado->execute();
		//contamos las filas que lanza las consultas
		$cuenta_registros = $resultado->rowCount();
		//nos aseguramos de que la persona este en la base de datos
		if($cuenta_registros != 0){
			//iniciamos una sesion en el servidor
			session_start();
			//le damos el valor correspondiente a la sesion
			$_SESSION["usuario"] = $usuario;
			//lo lanzamos a la página de bienvenida
			header("location:bienvenido1.php");
		}else{
			//si no existe lo mandamos al login
			header("location:Inicio Sesion.html");
		}

	}catch(exception $e){
		die( "Error al conecta con la base de datos  " . $e->getMessage() );
	}

?>