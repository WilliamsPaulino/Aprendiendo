<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8" />
	
	<link rel="stylesheet" href="../css/estilos_del_formulario_compras.css" >
	<link rel='icon' href='../../imagenes/f22.ico'/>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />
</head>
<body>

<div id="cont_logo"><a href="https://www.audsongs.com" class='a'></a><img src="../../imagenes/logo_audsongs.png" alt="Logo AudSOngs" class="logo_compras"></div>
<p class="audsongs_text"><strong>AudSOngs<strong></p>

<?php 
require "conexion_de_prueba.php";
	// require("conexion.php");

//datos del articulo en general
	$nombre_art = $_GET['nm'];
	$descripcion = $_GET['dsc'];
	$precio = $_GET['mn'];
	$likes = $_GET['lk'];
	$collage= $_GET['cll'];
	$img = $_GET['img1'];
	$img2 = $_GET['img2'];
	$img3= $_GET['img3'];
	$codigo = $_GET['cod'];


///////////////////////////////

if(isset($_POST['agregar'])){
	
//Cuando Escribi este codigo Solo Dios y Yo sabiamos como funcionaba, ahora solo Dios Lo sabe, espero lo comprenda.

//creamos la conexion con la base de datos audsongs
	$conexion = new Conexion();
	$nombre = htmlentities(addslashes($_POST["nombre"]));
	$pais = htmlentities(addslashes($_POST["pais"]));
	$direccion = htmlentities(addslashes($_POST["direccion"]));
	$provincia = htmlentities(addslashes($_POST["provincia"]));
	$ciudad = htmlentities(addslashes($_POST["ciudad"]));
	$codigop = htmlentities(addslashes($_POST["codigop"]));
	$telefono = htmlentities(addslashes($_POST["telefono"]));
	$producto = htmlentities(addslashes($_GET["nm"]));;
////////////////////////////////

	$ejecutando_precio = $conexion->conexion_db->prepare("SELECT Precio FROM productos WHERE Producto='".$codigo."'");
	$ejecutando_precio->execute();
	$array_pre = $ejecutando_precio->fetch(PDO::FETCH_BOTH);

while($precio_art = $array_pre){
	
	$precio_confirmado= $precio_art[0];
	
	if($precio_confirmado != null){
		$array_pre = false;
		$ejecutando_precio->closeCursor();
	}
}


	if($precio != $precio_confirmado){
		$sql = "INSERT INTO pirata_kgon (Nombre, Pais, Direccion, Provincia, Ciudad, Codigo_Postal, Telefono, Producto) VALUES (:nombre, :pais, :direccion, :provincia, :ciudad, :codigop, :telefono, :prod)";
		$resultado = $conexion->conexion_db->prepare($sql);
		$resultado->bindValue(":nombre", $nombre);
		$resultado->bindValue(":pais", $pais);
		$resultado->bindValue(":direccion", $direccion);
		$resultado->bindValue(":provincia", $provincia);
		$resultado->bindValue(":ciudad", $ciudad);
		$resultado->bindValue(":codigop", $codigop);
		$resultado->bindValue(":telefono", $telefono);
		$resultado->bindValue(":prod", $producto);

		$resultado->execute();
		$resultado->closeCursor();
		$conexion = null;
		header("location: ../../index.php?precio_real_kgon=$precio_confirmado");
	}else{
		
		$sql = "INSERT INTO visitante_c (Nombre, Pais, Direccion, Provincia, Ciudad, Codigo_Postal, Telefono, Producto) VALUES (:nombre, :pais, :direccion, :provincia, :ciudad, :codigop, :telefono, :prod)";
		$resultado = $conexion->conexion_db->prepare($sql);
		$resultado->bindValue(":nombre", $nombre);
		$resultado->bindValue(":pais", $pais);
		$resultado->bindValue(":direccion", $direccion);
		$resultado->bindValue(":provincia", $provincia);
		$resultado->bindValue(":ciudad", $ciudad);
		$resultado->bindValue(":codigop", $codigop);
		$resultado->bindValue(":telefono", $telefono);
		$resultado->bindValue(":prod", $producto);

		$resultado->execute();
		$resultado->closeCursor();
	///////otra consulta para acceder al id del artículo
		$sql2 = "SELECT Id_Visitante FROM visitante_c WHERE Nombre = '". $nombre."' AND Pais = '". $pais."' AND Direccion = '". $direccion."' AND Provincia = '". $provincia."' AND Ciudad = '". $ciudad."' AND Telefono = '". $telefono."' AND Codigo_Postal = '". $codigop."'";
		$ejecutable = $conexion->conexion_db->prepare($sql2);
		$ejecutable->execute();
		$id = $ejecutable->fetchAll(PDO::FETCH_ASSOC);
		foreach($id as $dato){
			$id = $dato["Id_Visitante"];
		}

		$ejecutable->closeCursor();
		$conexion->conexion_db = NULL;
		header("location: pago.php?id=$id&dsc=$descripcion&nm=$nombre_art&lk=$likes&cll=$collage&img1=$img &mn=$precio&img2=$img2&img3=$img3&cd=$codigo");
	}

				// echo "<h2 name='lo_sentimos'> Lo sentimos, no se pudo procesar su pedido con exito, intentelo M&aacute;s Tarde </h2>";
				// echo "<center><div class='aviso'>
				// <h1 class='h1'>Su pedido se ha procesado con exito</h1>
				// <p class='informacion'>El Producto sera entregado el lunes de la proxima semana.</br>                   -Para Más informacion contactenos en: <a href='https://www.facebook.com'>Facebook</a> O <a href='https//:www.instagram.com'>Instagram</a></p>
				// </div></center>";
			
}
?>


<?php 

	if(!isset($_POST['agregar'])){	
		require("../Formulario.html");
	
		
	}else{
		require("../Formulario.html");		
		// header("Location: ../../index.php");		
	}
?>
<script>
	$(".gracias").click(function(){
		$(".gracias").hide();
		$(".aviso").hide();

	});

	// if(screen.availWidth <= 600){
	// 	console.log("hola");
	// 	$(".form_compras").css("left", "0%");
	// 	$(".form_compras").css("width", "100%");
	// }else if(screen.availWidth <= 800){
	// 			console.log("hola2");

	// 	$(".form_compras").css("left", "20%");
	// }

	

	
</script>

</body>
</html>	