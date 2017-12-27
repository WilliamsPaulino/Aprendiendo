
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Página de pago</title>
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel='icon' href='../../imagenes/f22.ico' />
	<link rel="stylesheet" href="../css/css_pago.css" />
	<!-- CDN para Paypal -->
	<script src="https://www.paypalobjects.com/api/checkout.j"></script>

</head>
<body>
<!-- accediendo al codigo de conexion via php-->
<?php
		// require("conexion.php"); 
	require "conexion_de_prueba.php";
	//datos del articulo en general
	$nombre_art = $_GET['nm'];
	$descripcion = $_GET['dsc'];
	 
	$likes = $_GET['lk'];
	$collage= $_GET['cll'];
	$img = $_GET['img1'];
	$img2 = $_GET['img2'];
	$img3= $_GET['img3'];
	$codigo = $_GET['cod'];
	$dolar = $_GET['mn'] / 47;
	$sumar = $dolar * 0.057;
	$precio_sin_formato = $dolar + $sumar;
	$precio = number_format($precio_sin_formato, 2, ".", "," );
///////////////////////////////		
	$conexion = new Conexion;
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

if($_GET['mn'] != $precio_confirmado){
		
		header("location: ../../index.php?precio_real_kgon=$precio_confirmado");
}
//datos del articulo en general
	$nombre_art = $_GET['nm'];
	$descripcion = $_GET['dsc'];
	 
	$likes = $_GET['lk'];
	$collage= $_GET['cll'];
	$img = $_GET['img1'];
	$img2 = $_GET['img2'];
	$img3= $_GET['img3'];
	$codigo = $_GET['cod'];
	$dolar = $_GET['mn'] / 47;
	$sumar = $dolar * 0.057;
	$precio_sin_formato = $dolar + $sumar;
	$precio = number_format($precio_sin_formato, 2, ".", "," );
///////////////////////////////	
?>
<!-- scrip encargado de evitar la introduccion de letras en ciertos input -->
 <script>
				function validaNum(e){
				    tecla = (document.all) ? e.keyCode : e.which;

				    //Tecla de retroceso para borrar, siempre la permite
				    if (tecla==8){
				    	
				        return true;
				    }
				        
				    // Patron de entrada, en este caso solo acepta numeros
				   

				   	 patron =/[0-9]/;
				    tecla_final = String.fromCharCode(tecla);
				    return patron.test(tecla_final);
				}
	</script>
<!-- Empieza el código HTML maquetador	 -->
	<div class="visualizador"></div>
	<div class="cont_logo"><img src="../../imagenes/logo_audsongs.png" alt="Imagen Corporátiva AudSOngs" title="Imagen Corporátiva AudSOngs" class="imagen_corporativa"><span class='tipografia'>AudSOngs</span><p class='text_transaccion'>Completar transación</p></div>

<div class="contenedor">

	<div class="cont_tipos_pago">
	
	<span>Accede a tu cuenta Paypal.</span>
	<div class='elecciones'>
	<div class="paypal">
<!-- 		<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank"> -->
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">

<input type="hidden" name="cmd" value="_xclick">
<input type="hidden" name="business" value="LHBY8Y6L4JCT4">
<input type="hidden" name="lc" value="ES">
<input type="hidden" name="item_name" value="<?php echo $nombre_art ?> ">
<input type="hidden" name="item_number" value="<?php echo $nombre_art ?> ">
<input type="hidden" name="amount" value="<?php echo $precio ?>">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="button_subtype" value="services">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="cn" value="Dar instrucciones especiales al vendedor">
<input type="hidden" name="no_shipping" value="2">
<input type="hidden" name="tax_rate" value="0.000">
<input type="hidden" name="shipping" value="0.00">
<input type="hidden" name="bn" value="PP-BuyNowBF:btn_buynow_LG.gif:NonHosted">

<!-- <input type="hidden" name="cmd" value="_s-xclick"> -->
<input type="hidden" name="hosted_button_id" value="8KSG4KYPPT9NW">

<!-- ///////// -->

<!-- <input type="image" src="https://www.paypalobjects.com/es_XC/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"> -->

<!-- <img alt="" border="0" src="https://www.paypalobjects.com/es_XC/i/scr/pixel.gif" width="1" height="1">
 -->

<!-- <input type="image" src="https://www.paypalobjects.com/es_ES/ES/i/btn/btn_buynow_LG.gif" border="0" name="submit" alt="PayPal, la forma rápida y segura de pagar en Internet."> -->
		<button class='paypal_button' name='submit'><label for="paypal" class="lab_paypal"><img src="../../imagenes/paypal_logo.png" alt=""></label></button>
		<input type="radio" class='radio_paypal' id='paypal' name='paypal' />
		
</form>	
	</div>
	<!-- <hr> -->
	<div class="card">
		<input type="radio" class='radio_card' id='card' name='card' />
		<span class='radio_card_span'></span>
		<label for="card" class="lab_card"><img src="../../imagenes/tarjeta.png" alt=""><span class='span'>Tarjeta de débito o crédito</span></label>
		<div class="iconos_tarjetas"><img src="../../imagenes/visa.png" alt="Visa" title="Visa"><img src="../../imagenes/mastercard.png" alt="Mastercard" title="Mastercard"></div>
	</div>
	</div>
	<div class="cont_formulario">	
			<form action='' method="post" id='formulario_card'>
	<div class="grupo">	
	<label for="num_card">N.° de tarjeta</label>
	<input type="text" id="num_card" name="num_card" class="num_card_class" maxlength="19" onkeypress="return validaNum(event)" />
	<img src="../../imagenes/mastercard_icon.png" alt="Mastercard" title="Mastercard" class='icon'/>
	<span></span>
	</div>
	<div class="grupo">	
	<label for="expiracion">Fecha de expiración</label>
	<input type="text" id="expiracion" name="expiracion" class="expiracion_class" maxlength="7" onkeypress="return validaNum(event)"/>
	<span></span>
	</div>
	<div class="grupo">	
	<label for="seguridad">Código de seguridad</label>
	<input type="text" id="seguridad" name="seguridad" class="seguridad_class" maxlength="3" placeholder="3 digits" onkeypress="return validaNum(event)"/>
	<span></span>

	</div>
	<div class="grupo" id='nombre_completo'>	
	<label for="nombre">Nombre Completo</label>
	<input type="text" id="nombre" name="nombre" class="nombre_class" maxlength="40" />
	<span></span>
	</div>
	<!-- <div class="grupo">	
	<label for="apellidos">Apellidos</label>
	<input type="text" id="apellidos" name="apellidos" class="apellidos_class" />
	<span></span>
	</div> -->
			</form>
	</div>
	</div>
	

<!-- aqui es donde maquetamos la caja de la información de la persona-->

	<div class="info_persona">
	<input type="hidden" value="<?php echo $_GET['id']?>" id='id_visitante' />				
	<?php
	if(isset($_GET["id"])){
		$conexion = new Conexion();
		$sql = "SELECT * FROM visitante_c WHERE Id_Visitante = " . $_GET['id'] ."";
		$resultado = $conexion->conexion_db->prepare($sql);
		$resultado->execute();
		$datos = $resultado->fetchAll(PDO::FETCH_ASSOC);

		foreach($datos as $data){
			echo "
			<div class='spanes'>
				<span class='quien'>Enviar a</span><br>
				<span class='Nombre'> ". $data['Nombre'] . "</span><br>
				<span class='Direccion'> ". $data['Direccion']."</span><br>
				<span class='Ciudad'> ".$data['Ciudad'] ." &nbsp;</span>
				<span class='Provincia'> ". $data['Provincia'] . "  &nbsp;</span><br>
				<span class='Codigo'>". $data['Codigo_Postal'] . "</span><br>
				<span class='Pais'> ". $data['Pais'] . "</span><br>
				<span class='Telefono'> ".$data['Telefono'] . "</span><br>
			</div>
				";
		}
	}		

		?>
		
<!-- 	<div class="spanes">
				<span class='quien'>Enviar a</span><br>
				<span class='Nombre'> ". $data['Nombre'] . "</span><br>
				<span class='Direccion'> ". $data['Direccion']."</span><br>
				<span class='Ciudad'> ".$data['Ciudad'] ." &nbsp;</span>
				<span class='Provincia'> ". $data['Provincia'] . "  &nbsp;</span><br>
				<span class='Codigo'>". $data['Codigo_Postal'] . "</span><br>
				<span class='Pais'> ". $data['Pais'] . "</span><br>
				<span class='Telefono'> ".$data['Telefono'] . "</span><br>
	</div>-->	
	<form  id='form_cambio'>
		<div class='nombre_cambio'><input type='text' id='nombre_cambio' placeholder="Nombre:"></div>
		<div class='direccion_cambio'><input type='text' id='direccion_cambio' placeholder="Direccion:"></div>
		<div class='ciudad_cambio'><input type='text' id='ciudad_cambio' placeholder="Ciudad:"></div>
		<div class='provincia_cambio'><input type='text' id='provincia_cambio' placeholder="Provincia o estado:"></div>
		<div class='codp_cambio'><input type='text' id='codp_cambio' placeholder="Código Postal:" onkeypress="return validaNum(event)"></div>
		<div class='pais_cambio'><input type='text' id='pais_cambio' placeholder="País:"></div>
		<div class='telefono_cambio'><input type='text' id='telefono_cambio' placeholder="Teléfono:" onkeypress=" return validaNum(event)"></div>
	
	</form>
		<span class='cambiar'>Cambiar</span><br>
		<button class='cambiar_btn'>Cambiar</button>
		<span class='cancelar'>Cancelar</span>

<!-- 	para arriba se encuentra en formulario de cambio -->
	</div>	
<!-- aqui es donde maquetamos la caja de la información del artículo-->

	<div class="info_articulo">
		
		<div class='arriba'>
			<img src="<?php echo $collage ?>" alt="Imagen descriptiva del articulos que quieres comprar" title="Imagen descriptiva del articulos que quieres comprar" class="imagen_art">
			 <p class="precio_desc"><?php echo "US $" .$precio ?></p> <p class="nombre_desc"><?php echo $nombre_art ?></p>
		</div>
		<div class="cont_corazon">
			<img src="../../imagenes/Like.png" alt="Likes" title='Likes' class='corazon'/>
			<span class="likes">&nbsp;&nbsp;<?php echo $likes ?></span>
		</div>
		<span class="accesorios">Accesorios</span>
			<ul>
				<li>Cable</li>
				<li>Auxiliar</li>
				<li>Caja</li>
			</ul>
		<span class="descripcion">Descripción</span>
			<p><?php echo $descripcion ?></p>
			<br>
		<span class="envio">Enviado por</span>
			<br>
			<img src='../../imagenes/caribe_express.png' alt='Caribe Express Inc.' title='Caribe Express Inc.' class="agencia"><br><br>
			<p class="empresa"><i>Vendido através de AudSOngs Inc.</i></p>
	</div>
	

</div>
<div class="contenedor_derecho">
		<div class="pago_final">
	<div class="cont_img">
		<div class="imagenes">
			<span class='precio_arriba'><span>Envío:</span><b class='gratis'>Grátis</b> </span>	
			<span class='precio_arriba'><span>Artículo:</span> <b class='precio_pago_final'><?php echo "US $" . $precio ?></b></span>
			<img src="<?php echo $img ?>" alt="" class="imagen1" >
			<img src="<?php echo $img2 ?>" alt="" class="imagen2">
			<img src="<?php echo $img3 ?>" alt="" class="imagen3">
		</div>
	</div>
	<br>
	<hr>
		<div class="precio">
			Total: <span>  <?php echo "US $" .
			$precio ?></span>
		</div>
		<div class="boton_pagar">
			<button class='lock'>Confirmar y pagar</button>
			
		</div>
		<div class="costo_envio">
			<span>Selecciona una forma de pago</span>
		</div>
		
	</div>
</div>
<script src="../JScript/JQuery.js"></script>
<script src="../JScript/js_pago.js"></script>
</body>
</html>