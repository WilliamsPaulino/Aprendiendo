$.ajax({
	type: 'POST',
	url: 'paises.php',
	data: {dato: "pais"}	
})
.done(function(paises){

	$("#pais").html(paises);

}).fail(function(){
	alert("ocurrio un error temporal, recargar la página");
});


$("#pais").on("change", function(){

	var pais = $("#pais option:selected").text();
	$.ajax({
		type: 'POST',
		url: 'paises.php',
		data: {dato: "provincia", selected : pais}	
	})
	.done(function(provincias){
		
		$("#provincia").html(provincias);

	}).fail(function(){
		alert("ocurrio un error temporal, recargar la página");
	});

});


var icono_instagram = "";
	
var icono_fb ="";
	var formulario = document.formulario_compras;
	var elementos = formulario.elements;
	

for( var i=0; i<elementos.length; i++){
		if(elementos[i].type=="text" || elementos[i].id=="pais" || elementos[i].id=="provincia"){
			
		elementos[i].addEventListener("focus", focus_compras);
		elementos[i].addEventListener("blur", blur_compras);
		}
	}
		
	
	function focus_compras(){
	this.parentElement.children[1].className= "label_text label_compras escribiendo";
	this.parentElement.children[0].className= this.parentElement.children[0].className.replace("error2", "");
		

	}
	
	function blur_compras(){
		if(this.value<=0){
		this.parentElement.children[1].className = "label_text label_compras error";
		this.parentElement.children[0].className = this.parentElement.children[0].className + " error2";
		}
	}
	var click = 0;
	var fuera = 0;
	//para hacer aparecer el formulario completo si le ddas click al radio si

		
	//para aparecer el mensaje de de 
$("#no").click(function(){
	
	
var tiempo = setTimeout(function(){
	$(".form_compras").after("<center><div class='aviso'>                                                                 <p class='texto'>Lo sentimos, pero nuestros servicios solo estan disponibles dentro del POMARAY (Polit&eacute;cnico Madre Rafaela Ybarra).</p>                                                                   <p class='informacion'>Para m&aacute;s informaci&oacute;n cont&aacute;ctenos en:</p> <p class='nuestro'>Nuestro</p><p class='nuestro2'>Nuestro</p><a href='https://www.instagram.com' target='_blank' class='instagram'>" + icono_instagram + "</a><a href='https://www.facebook.com' target='_blank' class='facebook'>" + icono_fb + "     </a>     <input type='button' class='okay' value='Okay!'></div></center>");
	
	 $(".okay").click(function(){
		var tiempo = setTimeout(function(){
			$(".mostrar").addClass('oculto');
			$(".oculto").removeClass("mostrar");
			}, 300);
		$(".aviso").fadeOut(300);
		$(".form_compras").hide();
		$("body").append("<h2 class='h2'>Grácias</h2>");

		});
	 
	
	 $("body, html").click(function(){
	 	var tiempo = setTimeout(function(){
			$(".mostrar").addClass('oculto');
			$(".oculto").removeClass("mostrar");
			}, 300);
		$(".aviso").fadeOut(300);
		$(".form_compras").hide();
		$("body").append("<h2 class='h2'>Grácias</h2>");

	 });

	}, 300);

});

$("#lo_quiero").on("click", function(e){
	
	
	var validados = 0;
	var intruso = 0;
	var incompletos ="";

	var textos = document.querySelectorAll("input");
	var option =  document.querySelectorAll("select");
	for(var i = 0; i< textos.length; i++){
		
		if($(textos[i]).val().length >= 10){
			
			validados++;
		}
		if($(textos[i]).val().length < 4){
			incompletos += $(textos[i]).attr("name") + ", ";
			$(textos[i]).addClass("error2");
		}
		if($(textos[i]).val().length == 0){
			
			$(textos[i]).addClass("error2");
			var grupo_compras = $(textos[i]).parent().children();
			$(grupo_compras[1]).addClass("error");
			intruso++;
			console.log(intruso);
		}

	}
	if(validados < 3){
		
		alert("Por favor, completa " + incompletos + " adecuadamente.");
		alert("Se requiere que llene el formulario con precausión y exactitud");
		
		e.preventDefault();	

	}else if(intruso > 0){
		alert( "Por favor asegurese de que llenó los campos adecuadamente.");
		e.preventDefault();	
	}else if(incompletos != 0){
		alert("Por favor llene " + incompletos + " adecuadamente.");
		e.preventDefault();	
	}else if ($("select").val().length < 2){
		alert("Seleccione el País y Provincia, para hacerle llegar el producto por favor.");
		$("select").addClass("error2");
		e.preventDefault();
	}

});
