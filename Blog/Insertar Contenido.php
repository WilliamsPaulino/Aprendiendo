<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>

<body>
<?php
	$mi_conexion= mysqli_connect("localhost", "root", "", "blogdb");
	//Comprobamos la conexion
	
	if(!$mi_conexion){
		echo"compruebe su conexion a internet " . mysqli_error();
		exit(); 	
	}
	
	//comprobamos los posibles errores 
	if($_FILES["imagen"]["error"]){
		
		switch($_FILES["imagen"]["error"]){
			
			case 1: //error exceso de tamano de archivo en php.ini
				
				echo "se ha excedido el tamano disponible del servidor ";
				break;
			
			case 2: //error por si se excede el tamano especificado en el codigo html
				
				echo "Has excedido el tamano disponible para el soporte de la imagen"; 			
				break;
			
			case 3: //el archivo no se subio por completo
				
				echo "La subida del archivo se ha interrumpido (verifique conexion)";
				break;
			
			case 4: //el archivo no se subio
				
				echo "No se subio ningun archivo";
				break;
			
		}	
		
	}else{
		echo"Imagen subida majestusamente</br>";
		
		if(isset($_FILES["imagen"]["name"]) && ($_FILES["imagen"]["error"]==UPLOAD_ERR_OK)){
			
				$destino_ruta = "imagenes/";
				
				move_uploaded_file($_FILES["imagen"]["tmp_name"], $destino_ruta . $_FILES["imagen"]["name"]);
				
				echo "el archivo " . $_FILES["imagen"]["name"] . " se ha copiado al direcctorio";			
		}else{
			
			echo"no se a podido enviar la imagen al directorio";
				
		}
	}
	
	$titulo= $_POST["campo_titulo"];
	$fecha= date("Y-m-d H:i:s");
	$comentario = $_POST["area_comentarios"];
	$imagen= $_FILES["imagen"]["name"];
	
	$mi_consulta= "INSERT INTO contenido(TITULO, FECHA, COMENTARIO, IMAGENES) VALUES('". $titulo ."', '". $fecha ."', '". $comentario ."', '". $imagen ."')";
	
	
	
	
	$resultado = mysqli_query($mi_conexion, $mi_consulta);
	
	if(!$resultado){
		echo"</br>error al ejecutar consulta</br>";
	}else{
		echo"</br>se ejecuto muy bien la consulta </br>";
	}
	
	
	mysqli_close($mi_conexion);
	
	echo "<br/>se ha agregado el blog con exito</br>";
?>

<a href='Mostrar Blog.php'>Ver Tu Blog</a><br/>
<a href='Formulario.php'>Insertar Blog</a><br/>

</body>
</html>