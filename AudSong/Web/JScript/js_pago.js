$(document).ready(function(){
	var paypal = $(".paypal_button");
	var card = $("#card + span");
	var img_card = $(".lab_card img");
	var img_paypal = $(".lab_paypal img");
	var caracteres= 0;
	var pago_final_top = $(".contenedor_derecho").offset().top;
	var tarjeta = false;

 
	$(window).on("scroll", function(){
	
		if(screen.availWidth > 550){
			if($(window).scrollTop() > pago_final_top){
				$(".contenedor_derecho").css("position", "fixed");
				$(".contenedor_derecho").css("top", "0px");
				$(".contenedor_derecho").css("margin", "0px");
			}else{
				$(".contenedor_derecho").css("position", "absolute");
				$(".contenedor_derecho").css("margin-top", "5%");
				$(".contenedor_derecho").css("top", "auto");
					
			}
		}
	});
	$(card, img_card).on("click", function(){
		$("#formulario_card").css("display", "block");
		$(paypal).show();
		$(card).hide();
		$(".span").addClass("elegio");
		$(".lab_paypal img").removeClass("elegio");
		$(".iconos_tarjetas").hide();
		// $(".lab_paypal img").attr("src", "../../imagenes/paypal_logo.png");
			// $.ajax({
			// 	url: $(location).attr("href"),
			// 	type: "post",
			// 	data: {nombre_completo: "nombre"},
			// 	success: function(resp){
			// 		console.log("exito");
			// 		$("#nombre").val(resp);
			// 	},error: function(){
			// 		Alert("ocurrio un error con la conexion");
			// 	}
			// });
	});

	$(paypal).on("click", function(){
		$(card).show();
		$("#formulario_card").css("display", "none");
		$(card).show();
		$(".span").removeClass("elegio");
		$(".iconos_tarjetas").show();
		$("#formulario_card input").val("");
		
		// $(".lab_paypal img").attr("src", "../../imagenes/paypal_tipografia.png");
	});


	$(".imagenes img").on("click", function(e){

		var imagen1 = e.target;
		var clase = $(imagen1).attr("class");

		$(".imagen1").addClass(clase);
		$(".imagen1").removeClass("imagen1");
		$("#clicked").attr("id", "");
		$(imagen1).removeClass("imagen2 imagen3");
		$(imagen1).addClass("imagen1");
		$(imagen1).attr("id", "clicked");

	});

	$(".arriba img").on("click", function(e){
		var imagen = $(e.target).attr("src");
		$(".visualizador").show();
		$("html, body").animate({scrollTop:0},0);	
		$("html").css("overflow-y", "hidden");	
		$("body").append("<div class='cont_imagen_visualizada'><img src='"+ imagen+"' class='imagen_visualizada' alt='Click aquí'/></div>");
		
		$(".cont_imagen_visualizada").on("click", function(){
			
			$(".visualizador").hide();
			$(".cont_imagen_visualizada").hide();
			$("html").css("overflow-y", "visible");
		});

	});
		var blokeo = false;
		var original = false;
	$("#formulario_card input").on("keyup", function(e){
		
		var tecla = (document.all) ? e.keyCode : e.which;
		
			if(document.getElementById(e.target.id).value.length < 19){
				blokeo = false;
			}

	
		if(blokeo == true){
	
		}else{
		
			if(e.target.id == "num_card"){
					var patron = /[0-9]/;
					var tecla_final = String.fromCharCode(tecla);

					if(tecla==8){
						// $("#num_card").val("");						
						caracteres--;
						if(caracteres <= 0){
							caracteres = 0;
						}

						$(".grupo").first().children("span").hide();
					}else if(patron.test(tecla_final)== false){
						caracteres = caracteres;
					}else{
						caracteres++;
						
					}

				

				if(caracteres ==4 || caracteres==9 || caracteres==14){
					if(tecla != 8){
						document.getElementById("num_card").value = document.getElementById("num_card").value + " "; 
						caracteres++;
						console.log("espaciado");
					}
				}

				var codigo = $("#num_card").val();
				var codigo1 = codigo.replace(" ", "");
				var codigo2 = codigo1.replace(" ", "");
				var num = codigo2.replace(" ", "");
				var charCount = num.length;
				console.log("caracter " +caracteres);
				if(charCount == 15 ){
				
					console.log($("#num_card").val());
				}
			
			
			if( codigo.substring(0,2) == "51" || codigo.substring(0,2) == "53" || codigo.substring(0,2) == "55"){
				$(".icon").attr("src", "../../imagenes/mastercard_icon.png");
				$(".icon").css("height", "20px");
				$(".icon").show();
				tarjeta = true;
				
			}else if(codigo.substring(0,1) == "4"){
				$(".icon").attr("src", "../../imagenes/visa_icon.png");
				$(".icon").css("height", "15px");
				$(".icon").show();
				tarjeta = true;

			}else{
				$(".icon").hide();	

			}
				original = false;
			if(charCount == 16){
		        var valid = isValid(num, charCount);
		        if(valid && tarjeta){
		            console.log("Valida");
					caracteres = 0;
					original = true;
					$(".grupo").first().children("span").hide();
		        	$("label[for=num_card]").css("color", "gray");

		        } else {
		            console.log("Invalida");
		            original = false;
		            $("#num_card").css("border_bottom", "crimson");
		        	$("label[for=num_card]").css("color", "crimson");
		        	$(".grupo").first().children("span").addClass("error").html("Error al autenticar la tarjeta").show();
		        	
		        }
		    }
		if(document.getElementById(e.target.id).value.length == 19){
			blokeo = true;
		}

		}else if(e.target.id == "expiracion"){
			if(original == false){
				console.log("no se autentico la tarjeta");
				$("#expiracion").val("");
			}else{
				caracteres++;
				if(tecla==8){
					$("#expiracion").val("");						
					caracteres = 0;
						
					}
			}
			
			if(caracteres ==2){
					document.getElementById("expiracion").value = document.getElementById("expiracion").value + " / "; 

					
				}
		}//aquí finaliza el input card
	}//aqui la funcion que avisa si se pasaron los caracteres



	});// aqui acaba el keydown del formulario de la tarjeta

///////////////////////Aqui estan las funciones que se encargan de validar la tarjeta de credito
function isValid(ccNum, charCount){
    var double = true;
    var numArr = [];
    var sumTotal = 0;
    for(i=0; i<charCount; i++){
        var digit = parseInt(ccNum.charAt(i));

        if(double){
            digit = digit * 2;
            digit = toSingle(digit);
            double = false;
        } else {
            double = true;
        }
        numArr.push(digit);
    }

    for(i=0; i<numArr.length; i++){
        sumTotal += numArr[i];
    }
    var diff = eval(sumTotal % 10);
    console.log(diff);
    console.log(diff == "0");
    return (diff == "0");
}

function toSingle(digit){
    if(digit > 9){
        var tmp = digit.toString();
        var d1 = parseInt(tmp.charAt(0));
        var d2 = parseInt(tmp.charAt(1));
        return (d1 + d2); 
    } else {
        return digit;
    }
}
//aqui es donde acaban las funciones que se encargan de validar la tarjeta de crédito




//Aqui empieza el dinamismo del boton cambiar que se encarga de cambiar la información de envio

$(".cambiar").on("click", function(){

	var Nombre = $(".Nombre").text();
	var Direccion = $(".Direccion").text();
	var Ciudad = $(".Ciudad").text();
	var Provincia = $(".Provincia").text();
	var Codigo = $(".Codigo").text();
	var Pais = $(".Pais").text();
	var Telefono = $(".Telefono").text();

	
	 $(".spanes").hide();
	 $(".cambiar").hide();
	 $("#form_cambio").show();
	 $("#form_cambio input[type='text']").addClass("ejecutar_go_center");
	setTimeout(function(){
		$("#nombre_cambio").val(Nombre);
		$("#direccion_cambio").val(Direccion);
		$("#ciudad_cambio").val(Ciudad);
		$("#provincia_cambio").val(Provincia);
		$("#codp_cambio").val(Codigo);
		$("#pais_cambio").val(Pais);
		$("#telefono_cambio").val(Telefono);
		$(".cambiar_btn").show();
		$(".cancelar").show();
	}, 1500);


});

$(".cancelar").on("click", function(){
	$("#form_cambio").hide();
	$(".spanes").show();
	$(".cambiar_btn").hide();
	$(".cancelar").hide();
	$(".cambiar").show();

});

$(".cambiar_btn").on("click", function(){
	var nombre= $("#nombre_cambio").val();
	var direccion= $("#direccion_cambio").val();
	var ciudad= $("#ciudad_cambio").val();
	var provincia= $("#provincia_cambio").val();
	var codigop= $("#codp_cambio").val();
	var pais= $("#pais_cambio").val();
	var telefono= $("#telefono_cambio").val();
	var id_visitante = $("#id_visitante").val();

	var datos = {"id": id_visitante, "nombre":nombre, "direccion":direccion,"ciudad": ciudad,"provincia": provincia, "codigo":codigop,"pais": pais, "telefono":telefono};

	$.ajax({
		url: "../PHP/cambiar_envio.php",
		type: "POST",
		data: {"info": datos},
		success: function(resp){
				location.reload();
				// $(".spanes").show();
				// $("#form_cambio").hide();

			
		},error: function(jqXHR, estado, error){
			console.log(estado);
			console.log(error);
		}



	});	
});


});