<?php 
// $pirata =$_GET['precio_real_kgon'];
// if(!isset($_GET['pagina'])){
// 	if(isset($pirata)){
// 		header("location:https://www.audsongs.com/index.php?pagina=1&precio_real_kgon=$pirata");
// 	}else{
// 		header("location:https://www.audsongs.com/index.php?pagina=1");
// 		// header("location:index.php?pagina=1");
// 	}
// }

?>
<!DOCTYPE html>
<html lang="es">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />	
<title>AudSOngs | Inicio | Aparatos Inalámbricos</title>
<link rel='icon' href='imagenes/f22.ico'/>
<link rel="stylesheet" type="text/css" href="Web/css/Css.css" />

<!-- <meta itemprop="image" content="http://www.audsongs.com/imagenes/SQ_80/1.jpg" /> -->

<meta property="og:url"                 content="https://www.audsongs.com/" />
<meta property="og:type" 			    content="website" />
<meta property="og:alt" 			    content="AudSOngs Inc." />
<meta property="og:title"               content="AudSOngs | Dispositivos Inalámbricos" />
<meta property="og:description"         content="Es la pagina web que buscabas!, en AudSOngs encontrarás toda clase de dispositivos inalámbricos desde teclados y mouse hasta aparátos tecnológicos y accesorios para tu SmartPhone. Comprometidos con la calidad de nuestros productos y la comodidad de nuestros clientes, brindamos los mejores precios del mercado y facilidad de pagos online con entregas a domicilio en un 2x3. " />
<meta property="og:image"           content="https://www.audsongs.com/imagenes/logo_audsongs_w.jpg" />
<meta property="og:image:url"           content="https://www.audsongs.com/imagenes/logo_audsongs_w.jpg" />
<meta name='description' content="AudSOngs ... dedicada a la venta de aparatos técnologicos basado en conexiónes inalámbricas via Bluetooth y Wifi, aquí encontrarás Audifonos, Gafas VR, toda clase de aparatos inalámbricos y muchos Accesorios interesantes para tu Smartphone, entre otros artefactos atractivos." />

<meta name="keywords" content="gafas VR,audosongs,aud songs, audsong, bluetooth, audifonos, accesorios moviles, tennis, tecnologia">
<script src='Web/JScript/JQuery.js'></script>



<!-- CDN para hacer pin con pinterest -->
<script type='text/javascript' async defer src='//assets.pinterest.com/js/pinit.js'></script>
<!-- /// -->


<!-- CDN para el boton de compartir de Google+. -->

<script src="https://apis.google.com/js/platform.js" async defer>
  {lang: 'es'}
</script>
<!-- //////////////////////////////////// -->
<?php

if(!isset($_COOKIE["acepto_cookie"])){
	echo "<script>
		$(document).ready(function(){
			$('.cookies').show();
		});
	</script>";
	echo "hole";
}else{
	echo "<script>
		$(document).ready(function(){
			$('.cookies').hide();
		});
		</script>";
}



require "Web/PHP/contenido.php";


$Audsong = $_SERVER["PHP_SELF"];
$enviado = $_POST["submit"];
$admin = $_POST["submit_admin"];
$input = $_POST["nombre_prod"];


	
if(isset($enviado)){
	
	

	 $nombre = htmlentities(addslashes($_POST["nombre_prod"]));
	 $seccion = htmlentities(addslashes($_POST["seccion_prod"]));
	 $imagen1 = htmlentities(addslashes("imagenes/" . $nombre . "/" . $_POST["imagen1"]));
	 $imagen2 = htmlentities(addslashes("imagenes/" . $nombre . "/" . $_POST["imagen2"]));
	 $imagen3 = htmlentities(addslashes("imagenes/" . $nombre . "/" . $_POST["imagen3"]));
	 $collage = htmlentities(addslashes("imagenes/" . $nombre . "/" . $_POST["collage"]));
	 $descripcion = htmlentities(addslashes($_POST["descripcion_prod"]));
	 $precio = htmlentities(addslashes($_POST["precio_prod"]));
	 $fecha_agregado = date("Y-m-d H:i:s");

		$conexion = new Conexion();

		$sentenciaSQL = "INSERT INTO Productos (Nombre, Seccion, Imagen1, Imagen2, Imagen3, Collage, Descripcion, Precio, Fecha_agregado)VALUES (:nombre,:seccion,:imagen1,:imagen2,:imagen3,:collage,:descripcion,:precio, :fecha_agregado)";

			$resultado = $conexion->conexion_db->prepare($sentenciaSQL); 


			$resultado->bindValue(":nombre", $nombre);
			$resultado->bindValue(":seccion", $seccion);
			$resultado->bindValue(":imagen1", $imagen1);
			$resultado->bindValue(":imagen2", $imagen2);
			$resultado->bindValue(":imagen3", $imagen3);
			$resultado->bindValue(":collage", $collage);
			$resultado->bindValue(":descripcion", $descripcion);
			$resultado->bindValue(":precio", $precio);
			$resultado->bindValue(":fecha_agregado", $fecha_agregado);
			$resultado->execute();

	if(isset($input)){
		
		echo ( "<script src='Web/JScript/JQuery.js'></script> <script>$(document).keyup(function(e){if(e.which == 8){ $('.quick_keeping').show();}});</script>");
	}

	
	
}else if(isset($admin)){
	
	
	$yo = htmlentities(addslashes($_POST["YO"]));
	$clave = htmlentities(addslashes($_POST["Clave"]));

	$conexion = new Conexion();
	$sentencia = "Select * from admin where YO= :admin AND CLAVE = :contra ";
	$resultado = $conexion->conexion_db->prepare($sentencia);
	
	$resultado->bindValue(":admin", $yo);
	$resultado->bindValue(":contra", $clave);
	$resultado->execute();

	$acceso = $resultado->rowCount();

	if($acceso != 0){
		$quick_keeping = true;
		echo("<style>

				.quick_keeping{
					display: inline-block;
				}

				body{
					overflow-x:visible;
				}

			</style>");
		echo ( "<script src='Web/JScript/JQuery.js'></script> <script>$(document).keyup(function(e){if(e.which == 8){ $('.quick_keeping').show(); $('body').css('overflow-x', 'visible'); }});</script>");
	}


}//condicional




?>

</head>
<body>

<!-- Codigo de Twitter -->

<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');</script>

<!-- Esta parte de codigo es la que conecta con facebook para compartir el contenido de la pagina -->	
	<div id="fb-root"></div>
	<script>
		(function(d, s, id) {
	  		var js, fjs = d.getElementsByTagName(s)[0];
	 		 if (d.getElementById(id)) return;
	 		 js = d.createElement(s); js.id = id;
	  		js.src = 'https://connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.11';
	 		 fjs.parentNode.insertBefore(js, fjs);
		}
			(document, 'script', 'facebook-jssdk'));
	</script>

<!-- <div id="contenedor_formulario"><a class='equis'>X</a><iframe src='Web/JScript/Formulario_compras.php' id='form' width="100%" height="100%"></iframe></div> 	 -->


<header>
	<div class='imagen_logo'>
		<img src="imagenes/Logo.png" class="logo" />	
	</div> 
<div class="menu_celulares"><div class='menu' ><p>Menú<p> <p align="center">&#10095;</p></div>
</div>
	<nav>	
    <ul>
		<li id="Inicio" class="navigator"><a href="index.php?pagina=1">Inicio</a></li> 
	   <li id="HeadPhones" class="navigator"><a href="index.php?pagina=1&seccion=Bluetooth">Bluetooth</a></li>
	  <li id="Peticiones" class="navigator"><a href="index.php?pagina=1&seccion=Moda">Flow Shoes</a></li>
		<li id="COntactos" class="navigator">COntacto</li>
	</ul>
	</nav>

</header>



<section class="welcome">
	<article>
		<h2 class="Bienvenido">Bienvenido</h2>
	<p class="Welcome welcome2">Gracias&nbsp; por&nbsp; visitar&nbsp;  AudSOng&nbsp;  nuestra&nbsp;  tienda&nbsp;  virtual&nbsp;  de&nbsp;  Dispositivos&nbsp;  Bluetooth,&nbsp;  Tecnologia,&nbsp;  y&nbsp;  Calzado&nbsp;  ;),&nbsp;  con&nbsp;  productos&nbsp;  Innovadores&nbsp;  de&nbsp;  Vanguardia,&nbsp;  Moda&nbsp;  y&nbsp;  Est&iacute;lo&nbsp;  que&nbsp;  le&nbsp;  dar&aacute;n&nbsp;  un&nbsp;  plus&nbsp; a&nbsp;  tu&nbsp;  actitud&nbsp;  y&nbsp;  te&nbsp;  facilitar&aacute;n&nbsp;  la &nbsp; vida.&nbsp; Nuestros&nbsp;  Prod&uacute;cto$&nbsp; se&nbsp;  caracter&iacute;zan&nbsp; por&nbsp;  el&nbsp;  s&eacute;llo&nbsp; <i><b> "3Tres-B"&nbsp;</b></i>  Son&nbsp;  Buenos,&nbsp;  Son&nbsp;  Bon&iacute;tos&nbsp;  y&nbsp; son&nbsp; Bar&aacute;tos.&nbsp;  Esper&aacute;mos&nbsp;  que&nbsp;  les&nbsp; gusten.<!-- La pagina está en proceso de contrucción, por favor no haga ninguna acción, ni ejecute ninguna consulta, pero le exortamos que mantenga el contácto con la pagina para proxima activación.--></p>
	</article>
</section>

 <section class="COntacto main_cont "><a class='equis'>X</a><iframe src='COntacto/COntactos.html' id='iframe_contacto'  width="100%" height="100%"></iframe></section> 												
<div class='pupulen'>

<?php
// echo"hola <br>";	
	$productos = new Mostrar_Contenido();
	$pagina = $_GET['pagina'];
	$seccion = $_GET['seccion']; // aquí almacenamos la seccion a la que se pueda hacer referencia
	
	// echo"conexion establecida y cojos la pagina y las secciones ";	
if(isset($seccion)){//este if se encarga de verificar si acaso no sé llamo desde una seccion como criterio de contenido

	$cant_prod = $productos->cantidad_seccion($seccion);
// echo"busque la cantidad de articulos que hay por secciones";
	$cant_paginas = ceil($cant_prod/25);
	if($pagina<=0){
		$pagina= 1;
	}else if($pagina>$cant_paginas){
		$pagina= $cant_paginas;
	}	
	$pagina_atras = $pagina -1;
	$pagina_siguiente= $pagina +1;
// echo"calcule las paginas que iran";
	$contador = 0;
	$articulos = $productos->mostrar_seccion($pagina, $seccion);

	echo"<script>

			$('body, html').animate({scrollTop:$('nav').offset().top}, 500);
		</script>";


		

	echo "<script>
			$(document).ready(function(){
				var num_pag = ".$cant_paginas.";

				for(var i =0; i<num_pag; i++){
					var num = num_pag -i;

					$('#izq').after('<a>'+num+ '</a>');
					$('#izq + a').attr('id', num).attr('href', 'index.php?pagina='+num+'&seccion=".$seccion."');

					$('a').removeClass('acutal');
					$('a#".$pagina."').addClass('actual');
	
					
				}
				
			

			});

		</script>";

	foreach($articulos as $dato){
		$contador++;
		$dolar = $dato["Precio"] / 47;
		$sumar = $dolar * 0.057;
		$precio = $dolar + $sumar;
		
		if($contador == 1){
			echo "<section class='main_cont' id='main_section'>";

		}

		
		
		echo ("

				<article class='" . $dato["Nombre"] . " Productos " . $dato["Seccion"]. "' >  
					<span class='triangle'></span>
					<input type='text' id='named' value='". $dato["Nombre"] ."' />
					<input type='text' id='description' value='". $dato["Descripcion"] ."' />
					<input type='text' id='precio' value='". number_format($precio, 2,".", ",") ."' />
					<input type='hidden' id='precio_en_pesos' value='". $dato["Precio"] ."' />
					<input type='text' id='cod' value='". $dato["Producto"] ."' />
		
					<a class='flecha_atras'>&#10094;</a>
					<a class='flecha_siguiente'>&#10095;</a>
					<div class='clickme'></div>
					<div class='hover'>
						<a  data-pin-do='buttonBookmark' data-pin-round='true' href='https://www.pinterest.com/pin/create/button/'  id='pin_hover'><img src='//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png'/></a>
					</div>	
					<img src='". $dato["Imagen1"] ."' class='imagen1 imagenes' ></img>
					<img src='". $dato["Imagen2"] ."' class='imagen2 imagenes' ></img>
					<img src='". $dato["Imagen3"] ."' class='imagen3 imagenes' ></img>
					<img src='imagenes/cargando.png' class='cargando' /> 
					<img src='imagenes/cargando_blue.png' class='cargando' />
					<img src='". $dato["Collage"] ."' class='collage'></img>
					<p class='ver_mas primero'>Ver m&aacute;s</p><input type='text' class= 'cant_megusta' value= '" . $dato["Likes"] ."' />

				
				</article>
					
			
	");


		if($contador == 5){
			echo "</section>";
			$contador = 0;

		}
	}

	echo'</section>';	
	// echo "<script>
	// 	$('.Productos').hide();
	// </script>";

}else{//aqui entra si no se le halló relacion con una seccion
	// echo"<br>entro en la integracion de inicio <br>";
	$cant_prod = $productos->registros();
	// echo"<br>encuentro la cantidad de productos que tengo <br>";
	$cant_paginas = ceil($cant_prod/25);
	if($pagina<=0){
		$pagina= 1;
	}else if($pagina>$cant_paginas){
		$pagina= $cant_paginas;
	}	
	$pagina_atras = $pagina -1;
	$pagina_siguiente= $pagina +1;
	// echo"<br>saco el calculo y ya se cuantas paginas habrán <br>";

	echo"<script>

			$('body, html').animate({scrollTop:$('nav').offset().top}, 500);
		</script>";


		

	echo "<script>
			$(document).ready(function(){
				var num_pag = ".$cant_paginas.";

				for(var i =0; i<num_pag; i++){
					var num = num_pag -i;

					$('#izq').after('<a>'+num+ '</a>');
					$('#izq + a').attr('id', num).attr('href', 'index.php?pagina='+num+'');

					$('a').removeClass('acutal');
					$('a#".$pagina."').addClass('actual');
	
					
				}
				
			

			});

		</script>";

		// echo"<br>agregé la paginacion <br>";
	$contador = 0;
	$registro_de_productos = $productos->mostrar($pagina);
	// echo"<br>llame a los articulos! con mostrar() en contenido <br>";
	foreach($registro_de_productos as $dato){
		$contador++;
		$dolar = $dato["Precio"] / 47;
		$sumar = $dolar * 0.057;
		$precio = $dolar + $sumar;
		if($contador == 1){
			echo "<section class='main_cont' id='main_section'>";

		}
		
		
		echo ("

				<article class='" . $dato["Nombre"] . " Productos " . $dato["Seccion"]. "' ><!-- > 1 < --> 
					<span class='triangle'></span>
					<input type='text' id='named' value='". $dato["Nombre"] ."' />
					<input type='text' id='description' value='". $dato["Descripcion"] ."' />
					<input type='text' id='precio' value='". number_format($precio, 2,".", ",") ."' />
					<input type='hidden' id='precio_en_pesos' value='". $dato["Precio"] ."' />
					<input type='text' id='cod' value='". $dato["Producto"] ."' />
		
					<a class='flecha_atras'>&#10094;</a>
					<a class='flecha_siguiente'>&#10095;</a>
					<div class='clickme'></div>
					<div class='hover'>
						<a  data-pin-do='buttonBookmark' data-pin-round='true' href='https://www.pinterest.com/pin/create/button/'  id='pin_hover'><img src='//assets.pinterest.com/images/pidgets/pinit_fg_en_round_red_16.png'/></a>
					</div>	
					<img src='". $dato["Imagen1"] ."' class='imagen1 imagenes' ></img>
					<img src='". $dato["Imagen2"] ."' class='imagen2 imagenes' ></img>
					<img src='". $dato["Imagen3"] ."' class='imagen3 imagenes' ></img>
					<img src='imagenes/cargando.png' class='cargando' /> 
					<img src='imagenes/cargando_blue.png' class='cargando' /> 
					<img src='". $dato["Collage"] ."' class='collage'></img>
					<p class='ver_mas primero'>Ver m&aacute;s</p><input type='text' class= 'cant_megusta' value= '" . $dato["Likes"] ."' />
				
				</article>
					
			
	");


		if($contador == 5){
			echo "</section>";
			$contador = 0;

		}
	}//aqui termina el ciclo que inserta los articulos;


	echo'</section>';
}//aquí acaba el if que divide el contenido general de el de las secciones
// echo"<br>agrege todos los articulos ya estan en la pagina queloke <br>";
?>

</div>

<br/>
<br/>

<center>
<div class='quick_keeping'>
	
	<h2 align='center' >Quick Keeping</h2>
	
	<form method="post" action='<?php $Audsong ?>' >
	<hr/>
		<br/>
		<label for='nombre_prod'>Nombre</label>	
		<input type='text' class='quick_input' name='nombre_prod' id='nombre_prod' placeholder='Nombre del producto' /> 
		<label for='seccion_prod'>Seccion</label>	
		<input type='text' class='quick_input' name='seccion_prod' id='seccion_prod' placeholder='Seccion del producto' /> 
		
		<div class='cont_file'>	
			<label for='imagen1'>1ra Imagen</label>			
			
            <div class='_file'>
				<p align='center'>+</p>
				<input type='file' name='imagen1' id='imagen1' />
                <canvas Id="muestras1"></canvas> 
			</div>
            
		</div>
		
		<div class='cont_file'>
			<label for='imagen2'>2da Imagen</label>		
			<div class='_file'>
				<p align='center'>+</p>
            <input type='file' name='imagen2' id='imagen2' />
            <canvas Id="muestras2" class='fiol'></canvas>    
			</div>
           
        </div>
		
		<div class='cont_file'>
			<label for='imagen3'>3ra Imagen</label>		
			<div class='_file'>	
				<p align='center'>+</p>
				<input type='file' name='imagen3' id='imagen3' />
                <canvas Id="muestras3"></canvas> 
			</div>
		</div>
		
		<div class='cont_fileCollage'>
			<label for='collage'>Collage</label>		
			<div class='_fileCollage'>
				<p align='center'>+</p>
				<input type='file' class='Collage' name='collage' id='collage' />
                <canvas id="muestraCollage"></canvas>
                
			</div>
		</div>
		
        <textarea class='quick_textarea' name='descripcion_prod' id='descripcion_prod' placeholder='Describa el producto' maxlength="250" ></textarea>
        
		<label for='precio_prod'>$RD</label>	
		<input type='number' class='quick_precio' name='precio_prod' id='precio_prod' placeholder='$$$' /> 
		
		<input type='submit' class='submit' name='submit' id='submit' value='SUBMIT'/> 
	</form>

</div> <!-- Finaliza el div del quick Keeping-->
</center>
	
	<form class='form_admin' action='<?php $Audsong ?>' method="post" >
		<div id="fondoX"> 
			<div class='adminX'>
				<p id='quitar_admin'>x</p>
			</div>
		</div>	
		<hr />
		<center>
		<label for='admin_' >Admin:</label>
		<input type='text' class='admin' name='YO' id='admin_' />
	</center>
		<label for='contra_admin_' >Contraseña:</label>
		<input type='password' class='contra_admin' name='Clave' id='contra_admin_' />
        <input type='submit' value ="envia" id='envio_admin' name='submit_admin'/>
	</form>
    
    
<div class="referencia"></div>
<div class="cookies">
		<p><b style="text-align: left; font-size: 130%; margin-bottom: 15px;"><a style='color:#fff; text-decoration: underline;' href="Políticas/Politica de privacidad.html" target="_blank">Uso de Cookies.</a></b></p>
    	<p align='center' style='font-size: 125%;  text-indent: 10px; display: inline;'>
Este sitio utiliza cookies propias y de terceros para analisis, contenido personalizado y publicidad. Si continua en esta página web, consideramos que acepta su uso.  &nbsp;&nbsp; &nbsp;</p>

		<button class='acept_cookies'style="" >Acepto</button>
    </div>    
<footer name="descripcion" clase='clase'>
	<div class="cont_pag paginacion_numbers">
    	<a id="izq" href="<?php if(isset($seccion)){
    			echo "index.php?pagina=". $pagina_atras ."&seccion=".$seccion."";
    		}else{echo "index.php?pagina=". $pagina_atras .""; } ?>" >&#10094;</a>
    	<a id="derch" href="<?php if(isset($seccion)){
    			echo "index.php?pagina=". $pagina_siguiente ."&seccion=".$seccion."";
    		}else{echo "index.php?pagina=". $pagina_siguiente .""; } ?>" >&#10095;</a>
    </div>
    <div class="cont_comienzo paginacion" title='Ir al comienzo de la paginación'>	
		<a class="comienzo" href="index.php?pagina=1">&#10094;</a>
		<a class="comienzo" href="index.php?pagina=1">&#10094;</a>
	</div>
		<p class="foote"> <b>Padilla Core.</b> - Derechos reservados 2017</p>

	<p class="foot"> <b>Manana</b> 23 #36 <Strong>Las Caobas</strong> <strong>Santo Domingo</strong> Oeste <b>Cel:</b> 809-405-5531 y 809-447-5531 </p>
	<p align="center"><a href="Políticas/Politica de privacidad.html" target="_blank" class='politicas'>Políticas de privacidad </a>&nbsp;|&nbsp; <a href="Políticas/Politicas de reembolso.html" target="_blank" class='politicas'>Politicas de reembolso</a></p>
		<img src='imagenes/Codigo.png' class='codigo' width='7%' heigth='50%' alt='Logotipo' title='Logotipo AudSong'/>
		<img src='imagenes/Codigo.png' class='codigo2' width='7%' heigth='50%' alt='Logotipo' title='Logotipo AudSong'/>

	<div class="cont_final paginacion"  title='Ir al final de la paginación'>	
		<a class="final" href="<?php echo "index.php?pagina=".$cant_paginas.""; ?>">&#10095;</a>
		<a class="final" href="<?php echo "index.php?pagina=".$cant_paginas.""; ?>">&#10095;</a>
	</div>

</footer>


<div class="compartir">

<!-- facebook -->	
	<div><div class='fb-share-button' data-href='https://www.audsongs.com' data-layout='button' data-size='small' data-mobile-iframe='true'><a class='fb-xfbml-parse-ignore' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.audsongs.com%2F&amp;src=sdkpreparse'><img class='facebook2' alt='Compartir en Facebook' title='Compartir En Facebook'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojM0E1NTlGOyIgZD0iTTAsMHY0NTUuNzNoMjQyLjcwNFYyNzkuNjkxaC01OS4zM3YtNzEuODY0aDU5LjMzdi02MC4zNTNjMC00My44OTMsMzUuNTgyLTc5LjQ3NSw3OS40NzUtNzkuNDc1ICBoNjIuMDI1djY0LjYyMmgtNDQuMzgyYy0xMy45NDcsMC0yNS4yNTQsMTEuMzA3LTI1LjI1NCwyNS4yNTR2NDkuOTUzaDY4LjUyMWwtOS40Nyw3MS44NjRoLTU5LjA1MVY0NTUuNzNINDU1LjczVjBIMHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==' /></a></div>
	
<!-- google -->
	<div><a href="http://plus.google.com/share?url=https://www.audsongs.com" target="_blank"><img class='google2' alt='Compartir En Google+' title='Compartir Con Google+'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojREQ0QjM5OyIgZD0iTTAsMHY0NTUuNzNoNDU1LjczVjBIMHogTTI2NS42NywyNDcuMDM3Yy03Ljc5Myw1MS4xOTQtNDUuOTYxLDgwLjU0My05NS4zNzYsODAuNTQzICBjLTU1LjUzMSwwLTEwMC41NTItNDUuMDIxLTEwMC41NTItMTAwLjU1MmMwLTU1LjUxNyw0NS4wMjEtMTAwLjUzOCwxMDAuNTUyLTEwMC41MzhjMjYuODYyLDAsNTAuMzk5LDkuNTg2LDY3LjUzMSwyNi4yMjYgIGwtMjguODU3LDI4Ljg1N2MtOS43NzMtOS44NDYtMjMuMTQ3LTE1LjA5NC0zOC42NzQtMTUuMDk0Yy0zMi42ODgsMC01OS4xODksMjcuODc0LTU5LjE4OSw2MC41NDggIGMwLDMyLjcwMywyNi41MDEsNTkuNzY4LDU5LjE4OSw1OS43NjhjMjcuMzk3LDAsNDguMTQ0LTEzLjI0Myw1NC4xMjktMzkuNzU4aC01NC4xMjl2LTQwLjM4aDk1LjEzMSAgYzEuMTQyLDYuNTA2LDEuNzIsMTMuMzE1LDEuNzIsMjAuMzdDMjY3LjE0NCwyMzQuMDI1LDI2Ni42MzgsMjQwLjY5LDI2NS42NywyNDcuMDM3eiBNMzg2LjQxOSwyMzQuNTE3aC0zNS4yMzN2MzUuMjE4SDMyNi4xNiAgdi0zNS4yMThoLTM1LjIzM3YtMjUuMDQxaDM1LjIzM3YtMzUuMjMzaDI1LjAyNnYzNS4yMzNoMzUuMjMzVjIzNC41MTd6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' /></a></div>
	
<!-- twitter -->
	<div><a href='https://twitter.com/intent/tweet?text=La mejor pagina para encontrar dispositivos inalámbricos de toda clase!&url=https://www.audsongs.com' target='_blank' class='twitter-share-button' data-size='large' data-hashtags='audsongs'><img class='twitter2' alt='Compartir En Twitter' title='Twittear la página' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojNTBBQkYxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02MC4zNzcsMzM3LjgyMmMzMC4zMywxOS4yMzYsNjYuMzA4LDMwLjM2OCwxMDQuODc1LDMwLjM2OGMxMDguMzQ5LDAsMTk2LjE4LTg3Ljg0MSwxOTYuMTgtMTk2LjE4ICAgYzAtMi43MDUtMC4wNTctNS4zOS0wLjE2MS04LjA2N2MzLjkxOS0zLjA4NCwyOC4xNTctMjIuNTExLDM0LjA5OC0zNWMwLDAtMTkuNjgzLDguMTgtMzguOTQ3LDEwLjEwNyAgIGMtMC4wMzgsMC0wLjA4NSwwLjAwOS0wLjEyMywwLjAwOWMwLDAsMC4wMzgtMC4wMTksMC4xMDQtMC4wNjZjMS43NzUtMS4xODYsMjYuNTkxLTE4LjA3OSwyOS45NTEtMzguMjA3ICAgYzAsMC0xMy45MjIsNy40MzEtMzMuNDE1LDEzLjkzMmMtMy4yMjcsMS4wNzItNi42MDUsMi4xMjYtMTAuMDg4LDMuMTAzYy0xMi41NjUtMTMuNDEtMzAuNDI1LTIxLjc4LTUwLjI1LTIxLjc4ICAgYy0zOC4wMjcsMC02OC44NDEsMzAuODA1LTY4Ljg0MSw2OC44MDNjMCw1LjM2MiwwLjYxNywxMC41ODEsMS43ODQsMTUuNTkyYy01LjMxNC0wLjIxOC04Ni4yMzctNC43NTUtMTQxLjI4OS03MS40MjMgICBjMCwwLTMyLjkwMiw0NC45MTcsMTkuNjA3LDkxLjEwNWMwLDAtMTUuOTYyLTAuNjM2LTI5LjczMy04Ljg2NGMwLDAtNS4wNTgsNTQuNDE2LDU0LjQwNyw2OC4zMjljMCwwLTExLjcwMSw0LjQzMi0zMC4zNjgsMS4yNzIgICBjMCwwLDEwLjQzOSw0My45NjgsNjMuMjcxLDQ4LjA3N2MwLDAtNDEuNzc3LDM3Ljc0LTEwMS4wODEsMjguODg1TDYwLjM3NywzMzcuODIyeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' /></a></div>
</div>
<script src="Web/JScript/JQuery.js"></script>
<script src="Web/JScript/JScript.js"></script>
<?php
	if(isset($seccion)){
		echo "<script>
		$(document).ready(function(){
			var seccion = '".$seccion."';
			if(seccion == 'Bluetooth'){

				focus('HeadPhones');

			}else{
				focus('Peticiones');


			}				

		});
		</script>";
	}


?>

</body>
</html>