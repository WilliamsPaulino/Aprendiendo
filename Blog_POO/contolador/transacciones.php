<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sin título</title>
</head>

<?php
	
	include_once("../modelo/Objeto_Blog.php");
	include_once("../modelo/Manejo_Objetos.php");
	
	try{
	$mi_conexion = new PDO("mysql:host=localhost; dbname=blogdb", "root", "");
	$mi_conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
		
	
	
	
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
			
				$destino_ruta = "../imagenes/";
				
				move_uploaded_file($_FILES["imagen"]["tmp_name"], $destino_ruta . $_FILES["imagen"]["name"]);
				
				echo "el archivo " . $_FILES["imagen"]["name"] . " se ha copiado al direcctorio";			
		}else{
			
			echo"no se a podido enviar la imagen al directorio";
				
		}
	}
	
		$Manejo_Objetos = new Manejo_Objetos($mi_conexion);
		$blog = new Objeto_Blog();
		
		$blog->setTitulo(htmlentities(addslashes($_POST["campo_titulo"]), ENT_QUOTES));
		$blog->setFecha(date("Y-m-d H:i:s"));
		$blog->setComentario(htmlentities(addslashes($_POST["area_comentarios"]), ENT_QUOTES));
		$blog->setImagen($_FILES['imagen']['name']);
		$Manejo_Objetos->insertaContenido($blog);
		
		echo"<h2> la insercion de los campos se ha realizado correctamente!</h2>";
		
	
	}catch(Exception $e){
		
		die("Error " . $e->getMessage());
			
	}

?>

</body>
</html>