// JavaScript Document
//Empezamos dejando que el DOM inicie para correr el programa atraves de la libreria JQuery
	
	function focus(e){

		var productos = document.querySelectorAll(".Productos");
		var bluetooth = document.querySelectorAll(".Bluetooth"); //accedemos a todos los productos bluetooth
		var moda = document.querySelectorAll(".Moda");	//accedemos a todos los productos moda
		var i = 0;
		var cambios;
		var nav_top = $("nav").offset().top;//la altura del menú
		var espera = 400;
		var last_father;
//bueno aqui estare poniendo las propiedades del boton quitar para cuando la persona habra la descripcion y no la cierre al pasar a otra pagina		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
      
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////        
        
        
		$(".cont_especial").hide();
		$(productos).removeClass("adios");

	if(last_father== "COntactos" || last_father== "Inicio" || last_father== "Peticiones" || last_father== "HeadPhones"){
		
		clearInterval(cambios);
		clearInterval(intervalo2);
		
		if(last_father== "inicio"){
			
			$(productos).addClass("elementosOff").hide(500);

		
		}else if(last_father=='HeadPhones'){
			$(".Moda").addClass("elementosOff").hide(500);

		}else if(last_father == "Peticiones"){
			$(".Bluetooth").addClass("elementosOff").hide(500);

		}


		$(".cambio").addClass("elementosOff").hide(500);
		
		espera += 600;
	}
		if(e== "Inicio"){
			$("title").html("AudSOngs | Inicio | Aparátos Inalámbricos");
            $(".Bienvenido").html("Bienvenido");
            $(".logo").addClass("logo2");
            $(".logo").attr("src", "imagenes/Logo.png");
			$("html, body").animate({scrollTop: nav_top},1000);
			
                
				if($("#Inicio").hasClass("presente")){
					$("#Inicio").removeClass("estas_aqui");
					setTimeout(function(){
						$("#Inicio").addClass("estas_aqui");
					}, 200);
				}else if(last_father=="COntactos"){
                   
                    $(".pupulen .main_cont").children().addClass("elementosOn").removeClass("adios").removeClass("elementosOff").show(500);
                    
                    $(".COntacto").addClass("elementosOff").hide(500);

					setTimeout(function(){ 
						$(".COntacto").removeClass("elementosOff").hide(500);

						$(".pupulen .main_cont").children().removeClass("elementosOn").show();
					}, 500);		
				
				}else{
					var avanza = 0;
						$(productos).addClass("elementosOff").hide(500);
					
					setTimeout(function(){ 
						$(productos).removeClass("elementosOff").hide();
			
					var integrense = setInterval(function(){ 
						var vaina = 400 * productos.length;

						
						if(avanza<= productos.length){


							$(productos[avanza]).addClass("cambio").show();

							setTimeout(function(){
								$(productos).removeClass("cambio");

							}, vaina);
							
							avanza++;

						}else{

							clearInterval(avanza);
						}

				},300);

			}, 500);
		
				}
			//verificamos si ya esta presente
			if($("#Inicio").hasClass("presente")){
			
            
				$("#Inicio").removeClass("estas_aqui");//para eliminar esta clase por motivos de choque
				setTimeout(function(){
					$("#Inicio").addClass("estas_aqui");//aqui ya se agrega y no se interrumpe nada
				},200);
			//si no esta presente entonces	
			}else{
				

				$("#HeadPhones a").removeClass("presente");
				$("#Peticiones a").removeClass("presente");
				$("#COntactos").removeClass("presente");
				
				$("#Inicio a").addClass("presente");
				//con el last father nos damos cuenta de que control viene el click
				if(last_father == "HeadPhones"){ 
					$(".welcome .disp_bluetooth").addClass("elementosOff").hide(500);
					$(".welcome p.Welcome").removeClass("elementosOff");
					$(".welcome p.Welcome").addClass("elementosOn").show(500);
					
				}else if(last_father == "Peticiones"){
					$(".welcome .shoes").addClass("elementosOff").hide(500);
					$(".welcome p.Welcome").removeClass("elementosOff");
					$(".welcome p.Welcome").addClass("elementosOn").show(500);	
				}
			}	

			last_father = "Inicio";

		}else if(e== "HeadPhones"){
			$("title").html("AudSOngs | Bluetooth | Aparátos Inalámbricos");
            $(".Bienvenido").html("Bienvenido");
            
           
			$("html, body").animate({scrollTop:nav_top}, 1000);
			
			if(last_father == "COntactos"){
			
				$(".COntacto").addClass("elementosOff").hide(500);
				espera = 900;
				
			}
			

			$(".logo").attr("src", "imagenes/Logo.png");

			//le damos el stilo al control que se este usando en el momento
			if($("#HeadPhones").hasClass("presente")){

				$("#HeadPhones").removeClass("estas_aqui");

				setTimeout(function(){
					$("#HeadPhones").addClass("estas_aqui").show();
				},200);			
			
			}else {	
				$("#HeadPhones a").addClass("presente");
				$("#Peticiones a").removeClass("presente");
				$("#COntactos").removeClass("presente");
				$("#Inicio a").removeClass("presente");
				$(".welcome .Welcome").addClass("elementosOff").hide(500);//ocultamos el texto de bienvenida principal
				$(".welcome .shoes").addClass("elementosOff").hide(500);
				//lo sustituimos por este que habla de dispositivos bluetooth
				setTimeout(function(){
				$(".welcome").append("<p class='disp_bluetooth welecome2'>Ahora estas en nuestra seccion de <strong>Dispositivos Bluetooth</strong> y <strong>Tecnolog&iacute;a</strong>, Aqu&iacute; puedes encontrar desde <strong>Audifonos Bluetooth</strong> hasta controles para tu SmartPhone. Esperamos que encuentres algo que te guste.</p>");
				}, 500);
				$(productos).addClass("elementosOff").hide(500);//desaparecemos los articulos
				//hacemos aparecer solo los articulos bluetooth
				// 	var seccion = $(".pupulen > .main_cont").clone();
				// 	var index_articulo = 0;
							
				// for(var e = 0 ; e<5; e++){	
				// 	$(seccion).children().first().remove();
				// }
			
				// for(var c = 0; c< 5; c++){
				// 	index_articulo++;
				// 	if(c<5){
				// 		$(seccion).append(bluetooth[c]);
				// 	}
				// }
				// $(".pupulen").append(seccion);

				setTimeout(function(){	
					 i = 0;
					 cambios= setInterval(function(){ 

						if( i <= bluetooth.length){
						
							var audifonos_bluetooth = document.querySelectorAll(".Bluetooth");
							var cant_bluetooth = audifonos_bluetooth.length;
							var all = 400 * cant_bluetooth;

								
								$(bluetooth[i]).addClass("cambio").show();
								setTimeout(function(){

									$(bluetooth).removeClass("cambio elementosOff");
								//	$(moda).addClass("elementosOff").hide(500);
							}, all);
							
								i++;	
						}else{
							clearInterval(cambios);
						}			
					},300);
				}, espera);
			///---
			}

			$(".main_cont").css("margin-top", "0px");
	
			last_father = "HeadPhones";
	
		}else if(e== "COntactos"){
          	$("title").html("AudSOngs | Created By | Williams Padilla");  
          
			$("html, body").animate({scrollTop:nav_top}, 1000);
            

		if($("#COntactos").hasClass("presente")== false){	
			var secc = document.querySelectorAll(".pupulen .main_cont");
			var cosa2= 0;
			var numero = 0;
			var cant_secc = $(".main_cont").length * 1000;

		var intervalo2 = setInterval(function(){
				if(numero <= secc.length){
				
				var art = $(secc[cosa2]).children();
					var cosa = 0;
					cosa2++;
			var intervalo =	setInterval(function(){
				//if(last_father== "Inicio"){	
					if(cosa<= art.length){
						$(art[cosa]).addClass("adios");

						cosa++;
					}else{
						$(art).hide(1000);
						clearInterval(intervalo);
						//$(".adios").hide(1600);						
					}
				
				}, 300);
						
				numero++;
			}else{
				clearInterval(intervalo2);

			}			

		},0);
		
		setTimeout(function(){ 
              $(".Bienvenido").html("Williams Jesus Padilla");
			$(".COntacto").removeClass("elementosOff").addClass("elementosOn").show(500);
            $("#iframe_contacto").show();
		}, cant_secc -1000);
		
			$("#HeadPhones a").removeClass("presente");
			$("#Peticiones a").removeClass("presente");
			$("#COntactos").addClass("presente");
			$("#Inicio a").removeClass("presente");
			$(".Welcome, .disp_bluetooth, .shoes").addClass("elementosOff").hide(500);
		
		}else{
			$("#COntactos").removeClass("estas_aqui");
			setTimeout(function(){
				$("#COntactos").addClass("estas_aqui");
			},100);
		}	

			last_father = "COntactos";
		
		}else if(e== "Peticiones"){
            $("title").html("AudSOngs | Flow | Prendas y accesorios");
            $(".Bienvenido").html("Bienvenido");
            
			if(last_father == "COntactos"){
				$(".COntacto").addClass("elementosOff").hide(500);
				espera = 900;
				
			}
			
            
			if($("#Peticiones").hasClass("presente")){

				$("html, body").animate({scrollTop:nav_top}, 1000);

				$("#Peticiones").removeClass("estas_aqui");//para eliminar esta clase por motivos de choque
				setTimeout(function(){
					$("#Peticiones").addClass("estas_aqui");//aqui ya se agrega y no se interrumpe nada
				},200);
			//si no esta presente entonces	
			}else{

				$("#HeadPhones a").removeClass("presente");
				$("#Peticiones a").addClass("presente");
				$("#COntactos").removeClass("presente");
				$("#Inicio a").removeClass("presente");
				
				$(".welcome .Welcome").addClass("elementosOff").hide(500);//ocultamos el texto de bienvenida principal
				$(".welcome .disp_bluetooth").addClass("elementosOff").hide(500);
				//lo sustituimos por este que habla de Snickers
				setTimeout(function(){
					$(".welcome").append("<p class='shoes welcome2'>Ahora estas en nuestra seccion de <strong>Tennis y Prendas</strong>, tennis y prendas de primera a precio de por mayor, con Calidad, Est&iacute;lo y Comodidad. Esperamos encuentre algo que les guste. <b><i>Aviso!</i> está sección está en construcción.</b></p>");
				}, 500);

			
				$(".logo").removeClass("logo2");
					$("html, body").animate({scrollTop: $("html").offset().top}, 400);
				setTimeout(function(){
					$(".logo").attr("src", "imagenes/logo4.png").addClass("logo2");
				},300);

				setTimeout(function(){ 
					$("html, body").animate({scrollTop:nav_top}, 400);
				}, 1600);

		
				$(productos).addClass("elementosOff").hide(300);
			setTimeout(function(){
				i = 0;
			cambio= setInterval(function(){
				if(i <= moda.length){
							var audifonos_moda = document.querySelectorAll(".Moda");
							var cant_moda = audifonos_moda.length;
							var all = 400 * cant_moda;
							
								$(moda[i]).addClass("cambio").show();
								setTimeout(function(){

									$(moda).removeClass("cambio elementosOff");
									//$(bluetooth).addClass("elementosOff").hide(500);
							}, all);			
					$(moda[i]).addClass("cambio").show();
					
						i++;
					}else{
							clearInterval(cambio);
						}
						
									
					},300);
				}, espera);
			last_father = "Peticiones";
			
		}//finaliza el else 
	}//finaliza el else if que da paso al control peticiones
}//finaliza la funcion focus
//Aqui ya finalizan las configuraciones de los controles del navigator
		
$(document).ready(function () {

var pinterest_image="<img class='google red_social' alt='Compartir en Pinterest' title='Pin it'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojQzkzNTNEOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0xNjAuNjAxLDM4MkM4Ni4yMjMsMzUwLjkxOSwzNy44MDcsMjYyLjM0Myw2OC41OTgsMTcyLjM4MiAgIEM5OS4wNTcsODMuMzkxLDE5Ny41ODksMzYuNzg4LDI4Ni4zMDksNjkuNzM0Yzg4Ljk3MiwzMy4wNCwxMzIuOTc4LDEzMS4yMTMsOTguNDg2LDIxOS4yMiAgIGMtMzUuNzA5LDkxLjExMi0xMzEuNDQyLDEyMy4zNDgtMjAzLjIyLDEwMC42MTdjNS4zNjYtMTMuMjUzLDExLjQ3Mi0yNi4zMywxNS45NDUtMzkuOTQzYzQuNDkyLTEzLjY3Miw3LjM1Ni0yNy44NzgsMTAuNzI1LTQxLjAzNyAgIGMyLjksMi40NCw1LjgxNCw1LjAyNyw4Ljg2Niw3LjQzOWMxNS44NjEsMTIuNTM1LDMzLjgwNSwxMy43NTIsNTIuNjA1LDkuMjMyYzE5Ljk3Ny00LjgwMywzNS43NjQtMTYuMTMsNDcuNDU1LTMyLjc4ICAgYzE5Ljc3My0yOC4xNiwyNi43NTEtNjAuMDE5LDIxLjk3Mi05My41NDZjLTQuOTQyLTM0LjY2OC0yNS40NjktNTkuNzU2LTU3LjY1LTcyLjM4OWMtNDguNDg3LTE5LjAzNC05NC40NTMtMTIuNjI2LTEzNC4yNjksMjIuMjU5ICAgYy0zMC42MjIsMjYuODMtNDAuOTE2LDcyLjMxNC0yNi4xODcsMTA3LjcyNGM1LjEwNSwxMi4yNzQsMTMuMTczLDIxLjkwNywyNS4zNzksMjcuNjk1YzYuMTg2LDIuOTMzLDguODEyLDEuNzM3LDEwLjYwMi00LjcyNCAgIGMwLjEzMy0wLjQ4MSwwLjI5NS0wLjk1NSwwLjQ3MS0xLjQyMmMzLjQyOC05LjA0LDIuNjI4LTE2LjQ3Mi0zLjQ3My0yNS4xOTljLTExLjExOC0xNS45MDYtOS4xMzUtMzQuMzE5LTMuNzcxLTUxLjk2MSAgIGMxMC4xNzItMzMuNDU1LDQwLjA2Mi01NS43NzcsNzUuMTE2LTU2LjEwMWM5LjM5LTAuMDg3LDE5LjA1NiwwLjcxOCwyOC4xNSwyLjkzN2MyNy4wNDksNi41OTksNDQuNTE0LDI3LjUxOCw0Ni4yNjQsNTUuMjUzICAgYzEuNDA0LDIyLjI0Mi0yLjA3Miw0My44NDktMTEuNzQyLDY0LjE1OWMtNC43ODgsMTAuMDU1LTExLjEwNywxOC45OTYtMjAuNTEyLDI1LjMyNWMtOC44MzUsNS45NDUtMTguNDk2LDguMzQxLTI4Ljk3OSw1LjYwMiAgIGMtMTQuNDQzLTMuNzc0LTIyLjY0Mi0xNi45NS0xOC45ODktMzEuNDA3YzMuNzg2LTE0Ljk4NSw4LjY4NS0yOS42OSwxMi4zOTktNDQuNjljMS41Ny02LjM0NCwyLjM5NS0xMy4yMzQsMS43NTEtMTkuNjk2ICAgYy0xLjc1Ny0xNy42MDEtMTguMzg3LTI1LjgwOS0zMy45MzMtMTcuMjE2Yy0xMC44ODksNi4wMTktMTYuMTMyLDE2LjA3OS0xOC41NjQsMjcuNzE5Yy0yLjUwNSwxMS45OTItMS4yOTIsMjMuODExLDIuNjEsMzUuNDM5ICAgYzAuNzg0LDIuMzM3LDAuOSw1LjIyNCwwLjM0Nyw3LjYzNGMtNy4wNjMsMzAuNzk5LTE0LjYxNyw2MS40OS0yMS4zMDYsOTIuMzY5Yy0xLjk1Miw5LjAxMS0xLjU5LDE4LjUyNy0yLjIzOSwyNy44MTUgICBDMTYwLjQ5NSwzNzcuODM5LDE2MC42MDEsMzc5LjYzNSwxNjAuNjAxLDM4MnoiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' /></a>";
// var google= "<img class='google red_social' alt='Compartir En Google+' title='Compartir Con Google+'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojREQ0QjM5OyIgZD0iTTAsMHY0NTUuNzNoNDU1LjczVjBIMHogTTI2NS42NywyNDcuMDM3Yy03Ljc5Myw1MS4xOTQtNDUuOTYxLDgwLjU0My05NS4zNzYsODAuNTQzICBjLTU1LjUzMSwwLTEwMC41NTItNDUuMDIxLTEwMC41NTItMTAwLjU1MmMwLTU1LjUxNyw0NS4wMjEtMTAwLjUzOCwxMDAuNTUyLTEwMC41MzhjMjYuODYyLDAsNTAuMzk5LDkuNTg2LDY3LjUzMSwyNi4yMjYgIGwtMjguODU3LDI4Ljg1N2MtOS43NzMtOS44NDYtMjMuMTQ3LTE1LjA5NC0zOC42NzQtMTUuMDk0Yy0zMi42ODgsMC01OS4xODksMjcuODc0LTU5LjE4OSw2MC41NDggIGMwLDMyLjcwMywyNi41MDEsNTkuNzY4LDU5LjE4OSw1OS43NjhjMjcuMzk3LDAsNDguMTQ0LTEzLjI0Myw1NC4xMjktMzkuNzU4aC01NC4xMjl2LTQwLjM4aDk1LjEzMSAgYzEuMTQyLDYuNTA2LDEuNzIsMTMuMzE1LDEuNzIsMjAuMzdDMjY3LjE0NCwyMzQuMDI1LDI2Ni42MzgsMjQwLjY5LDI2NS42NywyNDcuMDM3eiBNMzg2LjQxOSwyMzQuNTE3aC0zNS4yMzN2MzUuMjE4SDMyNi4xNiAgdi0zNS4yMThoLTM1LjIzM3YtMjUuMDQxaDM1LjIzM3YtMzUuMjMzaDI1LjAyNnYzNS4yMzNoMzUuMjMzVjIzNC41MTd6Ii8+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' />";
var twitter = "<a href='https://twitter.com/share' target='blank' class='twitter-share-button' data-size='large' data-hashtags='audsongs'><img class='twitter red_social' alt='Compartir En Twitter' title='Twittear la página' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MzEgNDU1LjczMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDU1LjczMSA0NTUuNzMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjUxMnB4IiBoZWlnaHQ9IjUxMnB4Ij4KPGc+Cgk8cmVjdCB4PSIwIiB5PSIwIiBzdHlsZT0iZmlsbDojNTBBQkYxOyIgd2lkdGg9IjQ1NS43MzEiIGhlaWdodD0iNDU1LjczMSIvPgoJPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik02MC4zNzcsMzM3LjgyMmMzMC4zMywxOS4yMzYsNjYuMzA4LDMwLjM2OCwxMDQuODc1LDMwLjM2OGMxMDguMzQ5LDAsMTk2LjE4LTg3Ljg0MSwxOTYuMTgtMTk2LjE4ICAgYzAtMi43MDUtMC4wNTctNS4zOS0wLjE2MS04LjA2N2MzLjkxOS0zLjA4NCwyOC4xNTctMjIuNTExLDM0LjA5OC0zNWMwLDAtMTkuNjgzLDguMTgtMzguOTQ3LDEwLjEwNyAgIGMtMC4wMzgsMC0wLjA4NSwwLjAwOS0wLjEyMywwLjAwOWMwLDAsMC4wMzgtMC4wMTksMC4xMDQtMC4wNjZjMS43NzUtMS4xODYsMjYuNTkxLTE4LjA3OSwyOS45NTEtMzguMjA3ICAgYzAsMC0xMy45MjIsNy40MzEtMzMuNDE1LDEzLjkzMmMtMy4yMjcsMS4wNzItNi42MDUsMi4xMjYtMTAuMDg4LDMuMTAzYy0xMi41NjUtMTMuNDEtMzAuNDI1LTIxLjc4LTUwLjI1LTIxLjc4ICAgYy0zOC4wMjcsMC02OC44NDEsMzAuODA1LTY4Ljg0MSw2OC44MDNjMCw1LjM2MiwwLjYxNywxMC41ODEsMS43ODQsMTUuNTkyYy01LjMxNC0wLjIxOC04Ni4yMzctNC43NTUtMTQxLjI4OS03MS40MjMgICBjMCwwLTMyLjkwMiw0NC45MTcsMTkuNjA3LDkxLjEwNWMwLDAtMTUuOTYyLTAuNjM2LTI5LjczMy04Ljg2NGMwLDAtNS4wNTgsNTQuNDE2LDU0LjQwNyw2OC4zMjljMCwwLTExLjcwMSw0LjQzMi0zMC4zNjgsMS4yNzIgICBjMCwwLDEwLjQzOSw0My45NjgsNjMuMjcxLDQ4LjA3N2MwLDAtNDEuNzc3LDM3Ljc0LTEwMS4wODEsMjguODg1TDYwLjM3NywzMzcuODIyeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=' /></a>";
var facebook = "<div class='fb-share-button' data-href='https://www.audsongs.com' data-layout='button' data-size='small' data-mobile-iframe='true'><a class='fb-xfbml-parse-ignore' target='_blank' href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.audsongs.com%2F&amp;src=sdkpreparse'><img class='facebook red_social' alt='Compartir en Facebook' title='Compartir En Facebook'  src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQ1NS43MyA0NTUuNzMiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ1NS43MyA0NTUuNzM7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNTEycHgiIGhlaWdodD0iNTEycHgiPgo8cGF0aCBzdHlsZT0iZmlsbDojM0E1NTlGOyIgZD0iTTAsMHY0NTUuNzNoMjQyLjcwNFYyNzkuNjkxaC01OS4zM3YtNzEuODY0aDU5LjMzdi02MC4zNTNjMC00My44OTMsMzUuNTgyLTc5LjQ3NSw3OS40NzUtNzkuNDc1ICBoNjIuMDI1djY0LjYyMmgtNDQuMzgyYy0xMy45NDcsMC0yNS4yNTQsMTEuMzA3LTI1LjI1NCwyNS4yNTR2NDkuOTUzaDY4LjUyMWwtOS40Nyw3MS44NjRoLTU5LjA1MVY0NTUuNzNINDU1LjczVjBIMHoiLz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==' /></a></div>";
var carrito = "	<img class='carrito' src='data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA1MTEuOTk5IDUxMS45OTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS45OTkgNTExLjk5OTsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHdpZHRoPSIzMnB4IiBoZWlnaHQ9IjMycHgiPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0yMTQuNjg1LDQwMi44MjhjLTI0LjgyOSwwLTQ1LjAyOSwyMC4yLTQ1LjAyOSw0NS4wMjljMCwyNC44MjksMjAuMiw0NS4wMjksNDUuMDI5LDQ1LjAyOXM0NS4wMjktMjAuMiw0NS4wMjktNDUuMDI5ICAgIEMyNTkuNzEzLDQyMy4wMjgsMjM5LjUxMyw0MDIuODI4LDIxNC42ODUsNDAyLjgyOHogTTIxNC42ODUsNDY3Ljc0MmMtMTAuOTY2LDAtMTkuODg3LTguOTIyLTE5Ljg4Ny0xOS44ODcgICAgYzAtMTAuOTY2LDguOTIyLTE5Ljg4NywxOS44ODctMTkuODg3czE5Ljg4Nyw4LjkyMiwxOS44ODcsMTkuODg3QzIzNC41NzIsNDU4LjgyMiwyMjUuNjUsNDY3Ljc0MiwyMTQuNjg1LDQ2Ny43NDJ6IiBmaWxsPSIjRkZGRkZGIi8+Cgk8L2c+CjwvZz4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcyLjYzLDQwMi44MjhjLTI0LjgyOSwwLTQ1LjAyOSwyMC4yLTQ1LjAyOSw0NS4wMjljMCwyNC44MjksMjAuMiw0NS4wMjksNDUuMDI5LDQ1LjAyOXM0NS4wMjktMjAuMiw0NS4wMjktNDUuMDI5ICAgIEM0MTcuNjU4LDQyMy4wMjgsMzk3LjQ1OCw0MDIuODI4LDM3Mi42Myw0MDIuODI4eiBNMzcyLjYzLDQ2Ny43NDJjLTEwLjk2NiwwLTE5Ljg4Ny04LjkyMi0xOS44ODctMTkuODg3ICAgIGMwLTEwLjk2Niw4LjkyMi0xOS44ODcsMTkuODg3LTE5Ljg4N2MxMC45NjYsMCwxOS44ODcsOC45MjIsMTkuODg3LDE5Ljg4N0MzOTIuNTE3LDQ1OC44MjIsMzgzLjU5NSw0NjcuNzQyLDM3Mi42Myw0NjcuNzQyeiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTM4My43MTYsMTY1Ljc1NUgyMDMuNTY3Yy02Ljk0MywwLTEyLjU3MSw1LjYyOC0xMi41NzEsMTIuNTcxYzAsNi45NDMsNS42MjksMTIuNTcxLDEyLjU3MSwxMi41NzFoMTgwLjE0OSAgICBjNi45NDMsMCwxMi41NzEtNS42MjgsMTIuNTcxLTEyLjU3MUMzOTYuMjg3LDE3MS4zODIsMzkwLjY1OSwxNjUuNzU1LDM4My43MTYsMTY1Ljc1NXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KCTxnPgoJCTxwYXRoIGQ9Ik0zNzMuOTExLDIzMS4wMzVIMjEzLjM3M2MtNi45NDMsMC0xMi41NzEsNS42MjgtMTIuNTcxLDEyLjU3MXM1LjYyOCwxMi41NzEsMTIuNTcxLDEyLjU3MWgxNjAuNTM3ICAgIGM2Ljk0MywwLDEyLjU3MS01LjYyOCwxMi41NzEtMTIuNTcxQzM4Ni40ODEsMjM2LjY2NCwzODAuODUzLDIzMS4wMzUsMzczLjkxMSwyMzEuMDM1eiIgZmlsbD0iI0ZGRkZGRiIvPgoJPC9nPgo8L2c+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUwNi4zNDEsMTA5Ljc0NGMtNC43OTQtNS44ODQtMTEuODk4LTkuMjU4LTE5LjQ4OS05LjI1OEg5NS4yNzhMODcuMzcsNjIuMDk3Yy0xLjY1MS04LjAwOC03LjExMy0xNC43MzItMTQuNjE0LTE3Ljk4OSAgICBsLTU1LjE3Ny0yMy45NWMtNi4zNy0yLjc2Ny0xMy43NzMsMC4xNTYtMTYuNTM2LDYuNTI0Yy0yLjc2Niw2LjM3LDAuMTU3LDEzLjc3NCw2LjUyNCwxNi41MzdMNjIuNzQ1LDY3LjE3bDYwLjgyNiwyOTUuMjYxICAgIGMyLjM5NiwxMS42MjgsMTIuNzUyLDIwLjA2OCwyNC42MjUsMjAuMDY4aDMwMS4xNjZjNi45NDMsMCwxMi41NzEtNS42MjgsMTIuNTcxLTEyLjU3MWMwLTYuOTQzLTUuNjI4LTEyLjU3MS0xMi41NzEtMTIuNTcxICAgIEgxNDguMTk3bC03LjM5OS0zNS45MTZINDUxLjY5YzExLjg3MiwwLDIyLjIyOS04LjQ0LDI0LjYyNC0yMC4wNjhsMzUuMTYzLTE3MC42NzUgICAgQzUxMy4wMDgsMTIzLjI2Niw1MTEuMTM2LDExNS42MjcsNTA2LjM0MSwxMDkuNzQ0eiBNNDUxLjY5LDI5Ni4zMDFIMTM1LjYxOWwtMzUuMTYxLTE3MC42NzRsMzg2LjM5MywwLjAwMUw0NTEuNjksMjk2LjMwMXoiIGZpbGw9IiNGRkZGRkYiLz4KCTwvZz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K' /> ";
$(".imagen1").addClass("mostrar1")
//$(".hover").addClass("mostrar1");	
var hover=	document.querySelectorAll(".hover");
var imagenes= document.querySelectorAll(".imagen1, .imagen2, .imagen3");  
var collages = document.querySelectorAll(".collage");  
var productos = document.querySelectorAll(".Productos");
var vermases = document.querySelectorAll(".ver_mas");
var correr;	
var comback;
var contar;
var contado= 0;
var turno = 1;
var produ;	
var capa = document.querySelectorAll(".capa");
var clickme = document.querySelectorAll(".clickme");
var velocidad; 
var mostrar;
var mostrar1;
var una = 0;
var grados = 0;
var veces = 0;
//aqui pondremos el id del boton al que se le dio click lugo de desplegar la descripcion del articulo pertinente
var descripcion_presente;
/////////////////////////////////////
//aqui almacenaremos un valor que nos dira si esta o no abierta la descripcion del articulo
var oculto_mostrar = 0;

////////////////////////////////////
$("#Inicio a").addClass("presente");	



	for(var i = 0; i< productos.length; i++){
		var id_prod = i;
		id_prod.toString();
		id_prod = "prod" + id_prod;
		$(productos[i]).attr("id", id_prod);
		var id_vermas = "vermas";
		id_vermas = id_vermas + i;
		$(vermases[i]).attr("id", id_vermas);
		
	}
	
for (var i= 0; i <	hover.length ; i++){
	var id_hover = i;
	id_hover.toString();
	id_hover = "art" + id_hover;
	$(hover[i]).attr("id", id_hover);
	hover[i].addEventListener("mouseover", acceso, false);
	hover[i].addEventListener("click", desglozar, false);
	$(clickme[i]).attr("id", "clickme" + i);
    
    
   
    
	vermases[i].addEventListener("click", desglozar, false);
	//hover[i].addEventListener("mouseout", predeterminado, false);
	//alert(id_hover);
}
// for(var i= 0; i < productos.length; i++){
// 	var id_prod = i;
// 	id_prod.toString();
// 	id_prod = "prod" + id_prod;
// 	$(productos[i]).attr("id", id_prod);
// 	//productos[i].addEventListener("mouseout", predeterminado, false);
// }

for(var i = 0; i < imagenes.length; i++){
	var id_imagenes = i;
	id_imagenes.toString();
	id_imagenes= "img" + id_imagenes; 
	$(imagenes[i]).attr("id", id_imagenes);
	
	id_collage= "collage" + id_imagenes; 
	$(collages[i]).attr("id", id_collage);
	
	
}
	
    
	function acceso(e) {   //entramos a la funcion que da comienzo a la diapositiva de imagenes del articulo en cuestion
      predeterminado();
      if(e[1] != "main"){

    	velocidad = 2000; 
    	mostrar = " mostrar " ;
    	mostrar1 = " mostrar1 " ;
    	$(acceso_art  + " .imagenes").removeClass("mostrar_n mostrar mostrar1");
    	$(acceso_art  + " + .imagen1").addClass("mostrar");
    	clearInterval(correr);

		for(var i = 0; i < productos.length; i++){ //empezamos un ciclo para hallar el objeto al que hace referencia el mouseover
			var acceso_art =  i;
			acceso_art.toString();
			acceso_art = "art" + acceso_art;
			
			if(e.target.id == acceso_art){ //nos aseguramos de que sea su id
				
				acceso_art = "#" + acceso_art; //agregamos la almoadila para acceder a el via JQuery
			 comback=  acceso_art; //almacenamos el id que corresponde para sa
				//alert(acceso_art);
			
				break;
			}
		
	}

			$(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .cargando").show();
			$(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .cargando").css("z-index","1000");
			// $(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .cargando + .cargando").show();
		  	$(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .cargando").css("transform", "rotate(0deg)");
			// $(acceso_art + " + .imagen1 + .imagen2 + .imagen3 .cargando + .cargando").css("transform", "rotate(0deg)");

		  			grados =0;
		  			veces=0;
		  contar= setInterval(function(){	//empezamos un intervalo para pasar las imagenes luego
		  		grados +=470;
		  		veces++;
		  		$(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .cargando").css("transform", "rotate("+grados+"deg)");
		  		// $(acceso_art + " + .imagen1 + .imagen2 + .imagen3 + .cargando + .cargando").css("transform", "rotate("+grados+"deg)");

		  		if(veces == 3){
		  			grados =0;
		  			veces=0;
		  			clearInterval(contar);
		  		}
		  	//  contado++; //empezamos a enumerar los circulos
			//  if(contado == 1){ //si es el circulo 1 entonces este se encargara de pasar
                                
			
			// 	$(acceso_art + " .esperar1").show(300); 
				
			// 	$(acceso_art + " .esperar1").hide(300);
			 
			//  }else if(contado==2){ //si es el circulo 2 entonces este se encargara de pasar
                    
			//  	$(acceso_art + " .esperar1 + .esperar2").show(300);
				 
			// 	$(acceso_art + " .esperar1 + .esperar2").hide(300);
		 // 	 }else if(contado ==3){ //si es el circulo 3 entonces este se encargara de pasar
				 
			//  $(acceso_art + " .esperar1 + .esperar2 + .esperar3").show(300);
				 
			// 	 $(acceso_art + " .esperar1 + .esperar2 + .esperar3").hide(300);
			//  }else {
			// 		contado= 0; //el contador vuele a 0 para cuando se vuelva  a correr el intervalo 
			// 	}
			 
		  }, 450);
	
}else{

	var acceso_art = "#" + e[0];
	comback=  acceso_art; //almacenamos el id que corresponde para sa
	velocidad = 2000; 
	mostrar = " mostrar_n " ;
  
    $(acceso_art  + " + .imagen1 .imagen2, .imagen3").removeClass("mostrar mostrar1 mostrar_n");
    $(acceso_art  + " + .imagen1").addClass("mostrar_n");

	
			
}
		  //al final de todo este proceso tardará exactamente 2 segundos y asi le dara paso a la diapositiva
	correr= setInterval(function(){ //en este intervalo la diapositiva empieza
		
		$(acceso_art + "  + .imagen1 + .imagen2 + .imagen3 + .cargando").hide();
		// $(acceso_art + "  + .imagen1 + .imagen2 + .imagen3 + .cargando + .cargando").hide();
		$(acceso_art  + " + .imagen1").removeClass("mostrar_n mostrar mostrar1");			
            turno++; //este hace la tarea de contador para ir enumerando las imagenes y representandolas con un numero
			if(turno > 3){ //
				turno= 0; //aqui nos aseguramos que el contador no pase de 3
			}
			if(turno == 2){//hacemos pasar a la imagen 2 luego de los 2 segundos anterires
							
				//clearInterval(contar);	//nos aseguramos de detener el intervalo anterior 
				contado= 0; // y lo reiniciamos como hicimos anteriormente con el condicinal al final del intervalo de los circulos
				$(acceso_art + " + .imagen1").removeClass(mostrar + mostrar1); //empezamos a cambiar las clases de las imagenes ↓
				$(acceso_art + " + .imagen1 + .imagen2").addClass(mostrar);	//para ir mostrandolas y ocultandolas	
			
			}else if(turno == 3){ //mostramos a la imagen 3
					
				$(acceso_art + " + .imagen1 + .imagen2").removeClass(mostrar + mostrar1); //ocultamos la imagen 2 ↓
				$(acceso_art + " + .imagen1 + .imagen2 + .imagen3").addClass(mostrar); //para mostrar a la 3 
			
			}else if (turno == 0){ //mostraremos a la imagen 1
				$(acceso_art + " + .imagen1 + .imagen2 + .imagen3").removeClass(mostrar + mostrar1);
				$(acceso_art + " + .imagen1").addClass(mostrar);
			}else if(turno == 1){//mostramos a la imgen 2
				$(acceso_art + " + .imagen1").removeClass(mostrar + mostrar1);
				$(acceso_art + " + .imagen1 + .imagen2").addClass(mostrar);		
				turno = 2; //hacemos que el intervalo no vuelva a pasar por el numero 2 ovbiando así la primera opcion del condicional.
	 		}else{
				alert("Ha ocurrido un problema inesperado, recarge nuestra pagina y asegurese de estar conectado a una red."); //na'.. fantasmas en el sistema...
			}		
			
		
	},velocidad); //en esta variable se amacena el valor corredpodiente a 2000 que equivale a 2 segundos.

		

}//finaliza ACCESO.

$(".hover").on("mouseout", function(){
		$(".cargando").hide();
		$(".cargando").css("transform","rotate(0deg)");
		grados =0;
	  	veces=0;
		clearInterval(contar);
		

	});
function predeterminado(){//esta es la funcion que se va a encrgar de hacer volver a la normalidad al slideshow
			grados = 0;
			veces = 0;
	      //  clearInterval(contar);//lo primero es que cancela el intervalo creado anteriormente para el conteo regresivo de las imagenes		
			contado= 0;		//tambien reinicia su valor iniciar

			if (turno == 2 ){ //pregunta cual imagen iva pasando
				$(comback + " + .imagen1 + .imagen2").removeClass("mostrar mostrar1 mostrar_n");//luego de saber que imagen, le quita los poderes otorgados mediante las clases
			}else if (turno == 3){                                                     //asi sigue haciendo segun la imagen en la que se quedo
				$(comback + " + .imagen1 + .imagen2 + .imagen3").removeClass("mostrar mostrar1 mostrar_n");
				
			}else if (turno == 1){
				$(comback + " + .imagen1 + .imagen2").removeClass("mostrar mostrar1 mostrar_n");
				
			}else if (turno == 0){//en el caso de que la imagen1 sea la que este pasando entonces ↓
				turno = 1;//se reinicia la variable y ↓
				clearInterval(correr);//se cancela el intervalo 
			
				return false;//hasta aqui llega la funcionm no será necesario lo que sigue 
			}
			//en caso de que el slideshow no halla estado pasando por la imagen.
			$(comback + " + .imagen1").addClass("mostrar"); //volvemos a mostrar la imagen1
			clearInterval(correr);//cancelamos el intervalo
			turno = 1;//reiniciamos la variable
			
}
	
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
	var atras = document.querySelectorAll(".flecha_atras");//accedemos a la flecha izquierda de todos los objetos
	var siguiente = document.querySelectorAll(".flecha_siguiente");//accedemos a la flecha derecha de todos los objetos
    //iniciamos un ciclo para agregarle una fucion a todas las flechas izquierdas.	
    for( var i = 0; i < atras.length; i++){ 
		atras[i].addEventListener("click", atrasado, false);
	}
      //iniciamos un ciclo para agregarle una fucion a todas las flechas derechas.	
	for(var i =0; i< siguiente.length ; i++){
		siguiente[i].addEventListener("click", seguir, false);
	}
	//esta es la funcion que corresponde a la flecha izquierda.
	
	$(".flecha_atras, .flecha_siguiente").on("mouseout", function(){ una=0;});

	function atrasado(){//la funcion se ejecutara, cada click.
		
		if(una == 0){
			$(comback + " + .imagen1").removeClass("mostrar_n mostrar");
			clearInterval(correr);
			
		}	

		clearInterval(correr);//eliminamos el intervalo que muestra las imagenes
		
			
			turno--; //decrementamos la variable con cada paso del intervalo
			if(turno < 0){ //evitamos que llegue a un numero negativo
				turno= 3;
			}
            
            //esto ya lo entendemos no quiero documentarlo de nuevo, no me gustan los pleonasmos
			if(turno == 1){ 
				$(comback + " + .imagen1").addClass("mostrar1");
				$(comback + " + .imagen1 + .imagen2").removeClass("mostrar1 mostrar");		
			
			}else if(turno == 2){
					
				$(comback + " + .imagen1 + .imagen2").addClass(mostrar1);
				$(comback + " + .imagen1 + .imagen2 + .imagen3").removeClass("mostrar1 mostrar");
			
			}else if (turno == 3){
				$(comback + " + .imagen1 + .imagen2 + .imagen3").addClass("mostrar1");
				$(comback + " + .imagen1").removeClass("mostrar1 mostrar");
			}else if(turno == 0){
				$(comback + " + .imagen1").removeClass("mostrar1 mostrar");
				$(comback + " + .imagen1 + .imagen2 + .imagen3").addClass("mostrar1");		
				turno = 3;
	 		}else{
				alert("Ha ocurrido un problema inesperado, recarge nuestra pagina, sera compensado con mas velocidad");
			}		
		
		una = 1;
	}
    
    //esta funcion hace mismo que la otra pero lo contrario... (va hacia adelante)
	function seguir(){
			
		if(una == 0){
			// console.log("se van!");
			$(comback + " + .imagen1").removeClass("mostrar_n mostrar");
			
			
		}
		
			clearInterval(correr);
			turno++;
			if(turno > 3){
				turno= 0;
			}
			if(turno == 2){
			
					
				$(comback + " + .imagen1").removeClass(mostrar + mostrar1);
				$(comback + " + .imagen1 + .imagen2").addClass(mostrar1);		
			
			}else if(turno == 3){
					
				$(comback + " + .imagen1 + .imagen2").removeClass(mostrar1 + mostrar);
				$(comback + " + .imagen1 + .imagen2 + .imagen3").addClass(mostrar1);
			
			}else if (turno == 0){
				$(comback + " + .imagen1 + .imagen2 + .imagen3").removeClass(mostrar1 + mostrar);
				$(comback + " + .imagen1").addClass(mostrar1);
			}else if(turno == 1){
				$(comback + " + .imagen1").removeClass(mostrar1 + mostrar);
				$(comback + " + .imagen1 + .imagen2").addClass(mostrar1);		
				turno = 2;
	 		}else{
				alert("Ha ocurrido un problema inesperado, recarge nuestra pagina, sera compensado con mas velocidad");
			}		
		
		una = 1;
}
	
////////////////////Aqui esta el codigo de el "Stiky Menu"//////////////////////////////////////////////

	var altura;	
	$(window).on("scroll", function(e){

		altura = $(".referencia").offset().top;
		if( altura > $(".Productos").last().offset().top + parseInt($(".Productos").last().css("height"))){
			$("footer").css("position", "fixed");//el footer se pone fijo	
			$(".paginacion").addClass("bajar");
			setTimeout(function(){
				$(".paginacion_numbers").addClass("subir");
			}, 300);
		}else{
			$(".paginacion").removeClass("bajar");
			$(".paginacion_numbers").removeClass("subir");
			$("footer").css("position", "absolute");
		}

		
			

		
	});
/////////////////////////////////////////sencillo//////////////////////////////////////////////////////////////////
//esto es hermoso no lo creeran, pero estoy cansado no abundare mucho...↓↓
//accedemos a los botones del menú uno por uno
	var inicio = document.getElementById("Inicio");
	var headphones=document.getElementById("HeadPhones");
	var contactos=document.getElementById("COntactos");
	var peticiones = document.getElementById("Peticiones");
///////////////////////aqui lo hice más alcáico de la cuenta. solo hago que cada boton llame a la misma función
	// inicio.addEventListener("click", focus, false);
	// headphones.addEventListener("click", focus, false);
	 contactos.addEventListener("click", focus, false);
	// peticiones.addEventListener("click", focus, false);
	var last_father;//aqui almacenamos 
//Aqui se encuentran las confifuraciones para los controles del navigator
	function focus(e){
		// console.log("queloke contigo");
		var bluetooth = document.querySelectorAll(".Bluetooth"); //accedemos a todos los productos bluetooth
		var moda = document.querySelectorAll(".Moda");	//accedemos a todos los productos moda
		var i = 0;
		var cambios;
		var nav_top = $("nav").offset().top;//la altura del menú
		var espera = 400;
//bueno aqui estare poniendo las propiedades del boton quitar para cuando la persona habra la descripcion y no la cierre al pasar a otra pagina		
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
		
       if(oculto_mostrar == 1){ 
       
        $("." + descripcion_presente + " .cont_especial").addClass("quitarOff");
		$("." + descripcion_presente + " .cont_especial .especial").addClass("quitarOff");
		$("." + descripcion_presente + " .cont_especial .especial").children().addClass("elementosOff");
		$(".nombre_aud").css("display", "none");

		setTimeout(function(){
			$("." + descripcion_presente + " .cont_especial .especial").css("display", "none");
				
		}, 700);
		setTimeout(function(){
			$("." + descripcion_presente + " .cont_especial").addClass("desaparecer").hide(300);
			
		}, 950);
		clicks=0;
		posicion= 0;
		$(".Productos").removeClass("destacar");	
		$(".Productos").removeClass("fix_trans");	
        
       }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////        
        
        
		$(".cont_especial").hide();
		$(productos).removeClass("adios");

	if(last_father== "COntactos" || last_father== "Inicio" || last_father== "Peticiones" || last_father== "HeadPhones"){
		
		clearInterval(cambios);
		clearInterval(intervalo2);
		
		if(last_father== "inicio"){
			
			$(productos).addClass("elementosOff").hide(500);

		
		}else if(last_father=='HeadPhones'){
			$(".Moda").addClass("elementosOff").hide(500);

		}else if(last_father == "Peticiones"){
			$(".Bluetooth").addClass("elementosOff").hide(500);

		}


		$(".cambio").addClass("elementosOff").hide(500);
		
		espera += 600;
	}
		if(e.target.id == "Inicio"){
            $(".Bienvenido").html("Bienvenido");
            $(".logo").addClass("logo2");
            $(".logo").attr("src", "imagenes/Logo.png");
			$("html, body").animate({scrollTop: nav_top},1000);
			
                
				if($("#Inicio").hasClass("presente")){
					$("#Inicio").removeClass("estas_aqui");
					setTimeout(function(){
						$("#Inicio").addClass("estas_aqui");
					}, 200);
				}else if(last_father=="COntactos"){
                   
                    $(".pupulen .main_cont").children().addClass("elementosOn").removeClass("adios").removeClass("elementosOff").show(500);
                    
                    $(".COntacto").addClass("elementosOff").hide(500);

					setTimeout(function(){ 
						$(".COntacto").removeClass("elementosOff").hide(500);

						$(".pupulen .main_cont").children().removeClass("elementosOn").show();
					}, 500);		
				
				}else{
					var avanza = 0;
						$(productos).addClass("elementosOff").hide(500);
					
					setTimeout(function(){ 
						$(productos).removeClass("elementosOff").hide();
			
					var integrense = setInterval(function(){ 
						var vaina = 400 * productos.length;

						
						if(avanza<= productos.length){


							$(productos[avanza]).addClass("cambio").show();

							setTimeout(function(){
								$(productos).removeClass("cambio");

							}, vaina);
							
							avanza++;

						}else{

							clearInterval(avanza);
						}

				},300);

			}, 500);
		
				}
			//verificamos si ya esta presente
			if($("#Inicio").hasClass("presente")){
			
            
				$("#Inicio").removeClass("estas_aqui");//para eliminar esta clase por motivos de choque
				setTimeout(function(){
					$("#Inicio").addClass("estas_aqui");//aqui ya se agrega y no se interrumpe nada
				},200);
			//si no esta presente entonces	
			}else{
				

				$("#HeadPhones a").removeClass("presente");
				$("#Peticiones a").removeClass("presente");
				$("#COntactos").removeClass("presente");
				
				$("#Inicio a").addClass("presente");
				//con el last father nos damos cuenta de que control viene el click
				if(last_father == "HeadPhones"){ 
					$(".welcome .disp_bluetooth").addClass("elementosOff").hide(500);
					$(".welcome p.Welcome").removeClass("elementosOff");
					$(".welcome p.Welcome").addClass("elementosOn").show(500);
					
				}else if(last_father == "Peticiones"){
					$(".welcome .shoes").addClass("elementosOff").hide(500);
					$(".welcome p.Welcome").removeClass("elementosOff");
					$(".welcome p.Welcome").addClass("elementosOn").show(500);	
				}
			}	

			last_father = "Inicio";

		}else if(e.target.id == "HeadPhones"){
			
            $(".Bienvenido").html("Bienvenido");
            
           
			$("html, body").animate({scrollTop:nav_top}, 1000);
			
			if(last_father == "COntactos"){
			
				$(".COntacto").addClass("elementosOff").hide(500);
				espera = 900;
				
			}
			

			$(".logo").attr("src", "imagenes/Logo.png");

			//le damos el stilo al control que se este usando en el momento
			if($("#HeadPhones").hasClass("presente")){

				$("#HeadPhones").removeClass("estas_aqui");

				setTimeout(function(){
					$("#HeadPhones").addClass("estas_aqui").show();
				},200);			
			
			}else {	
				$("#HeadPhones").addClass("presente");
				$("#Peticiones").removeClass("presente");
				$("#COntactos").removeClass("presente");
				$("#Inicio").removeClass("presente");
				$(".welcome .Welcome").addClass("elementosOff").hide(500);//ocultamos el texto de bienvenida principal
				$(".welcome .shoes").addClass("elementosOff").hide(500);
				//lo sustituimos por este que habla de dispositivos bluetooth
				setTimeout(function(){
				$(".welcome").append("<p class='disp_bluetooth welecome2'>Ahora estas en nuestra seccion de <strong>Dispositivos Bluetooth</strong> y <strong>Tecnolog&iacute;a</strong>, Aqu&iacute; puedes encontrar desde <strong>Audifonos Bluetooth</strong> hasta controles para tu SmartPhone. Esperamos que encuentres algo que te guste.</p>");
				}, 500);
				$(productos).addClass("elementosOff").hide(500);//desaparecemos los articulos
				//hacemos aparecer solo los articulos bluetooth
				// 	var seccion = $(".pupulen > .main_cont").clone();
				// 	var index_articulo = 0;
							
				// for(var e = 0 ; e<5; e++){	
				// 	$(seccion).children().first().remove();
				// }
			
				// for(var c = 0; c< 5; c++){
				// 	index_articulo++;
				// 	if(c<5){
				// 		$(seccion).append(bluetooth[c]);
				// 	}
				// }
				// $(".pupulen").append(seccion);

				setTimeout(function(){	
					 i = 0;
					 cambios= setInterval(function(){ 

						if( i <= bluetooth.length){
						
							var audifonos_bluetooth = document.querySelectorAll(".Bluetooth");
							var cant_bluetooth = audifonos_bluetooth.length;
							var all = 400 * cant_bluetooth;

								
								$(bluetooth[i]).addClass("cambio").show();
								setTimeout(function(){

									$(bluetooth).removeClass("cambio elementosOff");
								//	$(moda).addClass("elementosOff").hide(500);
							}, all);
							
								i++;	
						}else{
							clearInterval(cambios);
						}			
					},300);
				}, espera);
			///---
			}

			$(".main_cont").css("margin-top", "0px");
	
			last_father = "HeadPhones";
	
		}else if(e.target.id == "COntactos"){
            
          
			$("html, body").animate({scrollTop:nav_top}, 1000);
            

		if($("#COntactos").hasClass("presente")== false){	
			var secc = document.querySelectorAll(".pupulen .main_cont");
			var cosa2= 0;
			var numero = 0;
			var cant_secc = $(".main_cont").length * 1000;

		var intervalo2 = setInterval(function(){
				if(numero <= secc.length){
				
				var art = $(secc[cosa2]).children();
					var cosa = 0;
					cosa2++;
			var intervalo =	setInterval(function(){
				//if(last_father== "Inicio"){	
					if(cosa<= art.length){
						$(art[cosa]).addClass("adios");

						cosa++;
					}else{
						$(art).hide(1000);
						clearInterval(intervalo);
						//$(".adios").hide(1600);						
					}
				
				}, 300);
						
				numero++;
			}else{
				clearInterval(intervalo2);

			}			

		},0);
		
		setTimeout(function(){ 
              $(".Bienvenido").html("Williams Jesus Padilla");
			$(".COntacto").removeClass("elementosOff").addClass("elementosOn").show(500);
            $("#iframe_contacto").show();
		}, cant_secc -1000);
		
			$("#HeadPhones").removeClass("presente");
			$("#Peticiones").removeClass("presente");
			$("#COntactos").addClass("presente");
			$("#Inicio").removeClass("presente");
			$(".Welcome, .disp_bluetooth, .shoes").addClass("elementosOff").hide(500);
		
		}else{
			$("#COntactos").removeClass("estas_aqui");
			setTimeout(function(){
				$("#COntactos").addClass("estas_aqui");
			},100);
		}	

			last_father = "COntactos";
		
		}else if(e.target.id == "Peticiones"){
            
            $(".Bienvenido").html("Bienvenido");
            
			if(last_father == "COntactos"){
				$(".COntacto").addClass("elementosOff").hide(500);
				espera = 900;
				
			}
			
            
			if($("#Peticiones").hasClass("presente")){

				$("html, body").animate({scrollTop:nav_top}, 1000);

				$("#Peticiones").removeClass("estas_aqui");//para eliminar esta clase por motivos de choque
				setTimeout(function(){
					$("#Peticiones").addClass("estas_aqui");//aqui ya se agrega y no se interrumpe nada
				},200);
			//si no esta presente entonces	
			}else{

				$("#HeadPhones").removeClass("presente");
				$("#Peticiones").addClass("presente");
				$("#COntactos").removeClass("presente");
				$("#Inicio").removeClass("presente");
				
				$(".welcome .Welcome").addClass("elementosOff").hide(500);//ocultamos el texto de bienvenida principal
				$(".welcome .disp_bluetooth").addClass("elementosOff").hide(500);
				//lo sustituimos por este que habla de Snickers
				setTimeout(function(){
					$(".welcome").append("<p class='shoes welcome2'>Ahora estas en nuestra seccion de <strong>Jordan</strong>, tennis de primera a precio de por mayor, con Calidad, Est&iacute;lo y Comodidad. Espero encuentres los jordan que buscabas ;).</p>");
				}, 500);

			
				$(".logo").removeClass("logo2");
					$("html, body").animate({scrollTop: $("html").offset().top}, 400);
				setTimeout(function(){
					$(".logo").attr("src", "imagenes/logo4.png").addClass("logo2");
				},300);

				setTimeout(function(){ 
					$("html, body").animate({scrollTop:nav_top}, 400);
				}, 1600);

		
				$(productos).addClass("elementosOff").hide(300);
			setTimeout(function(){
				i = 0;
			cambio= setInterval(function(){
				if(i <= moda.length){
							var audifonos_moda = document.querySelectorAll(".Moda");
							var cant_moda = audifonos_moda.length;
							var all = 400 * cant_moda;
							
								$(moda[i]).addClass("cambio").show();
								setTimeout(function(){

									$(moda).removeClass("cambio elementosOff");
									//$(bluetooth).addClass("elementosOff").hide(500);
							}, all);			
					$(moda[i]).addClass("cambio").show();
					
						i++;
					}else{
							clearInterval(cambio);
						}
						
									
					},300);
				}, espera);
			last_father = "Peticiones";
			
		}//finaliza el else 
	}//finaliza el else if que da paso al control peticiones
}//finaliza la funcion focus
//Aqui ya finalizan las configuraciones de los controles del navigator


/////////////////////////////////Desglozar/////////////////////////////////////////////////////////////

	//-----------------------------------------------------------------------------------------------///////////////////////-/////////////////////////////////////////////////////////////////////////////////////////////////////////////////	
var altura2;
var accessTovermas;
var padre; //en esta variable nos encargaremos de almacenar el id el articulo que necesita qeu desgloce su contenido
var collage; //aqui almacenamos la fuente del collage que pertenece al articulo de interés.
var audifono;//aqui almacenamos todo el contenido que habla del articulo en cuestion como tambien el el boton decompra y las redes siciales
var posicion; //almacenamos la posicion del articulo padre para llevar la pantalla hasta el mismo cuando se desgloce
var activo; 
var me_gustas = 0 ;

var clicks = 0;
var padre2;
var te_gusto = 0;
var dato;
var argument;
function desglozar(e){ //// la function del boton ver mas xd

	accessTovermas = e.target.id;
	$(".Productos").addClass("fix_trans");
	 oculto_mostrar = 1;
    
    accessTovermas= "#" + accessTovermas; //agregamos armoadillas al boton de vermas del articulo o al clickme del m mismo artículo
	padre = "#" + $(accessTovermas).parent().attr("id"); //accedemos al artículo 

	dato = $(padre + " .hover").attr("id");
	argument = [dato, "main"];
	acceso(argument); 
	setTimeout(function(){
		$(padre +" .triangle").css("opacity", "1");
	}, 500);
	content();

}



function content(e){
	//ponemos ala espera del evento hover al contenedor compartir
$(".compartir").on("mouseover",function(){
	var e = $(".compartir").attr("class");
	describir(e);
});

	activo= 1;
	
	collage = $(padre).children(".collage").attr("src"); //accedemos a la ruta donde está la imagen collage de el artículo.
	$(padre + " > .ver_mas").html("Ver menos");
   	$(padre + " > .ver_mas").addClass("ver_mas_current");
    if(padre2 == padre){ // nos aseguramos que no sea al mismo articulo al que se le este buscando la descripción
        $(padre +" .triangle").css("opacity", "0");
        	quitar();
     	return false;

    }else if(clicks == 1 ){ //esta condicion se encarga de eliminar la descripcion anterior si se solicita una nueva
    	$(padre2 +" .triangle").css("opacity", "0");

		var anterior_descripcion = $(padre2).closest(".main_cont").attr("class"); //accedemos al contenedor de los artículos del cual salio la última decripcion
			$(padre2 + " > .ver_mas").html("Ver más");
			 $(padre2 + " > .ver_mas").removeClass("ver_mas_current");
 		
		$("." + anterior_descripcion + " .cont_especial").css("display", "none"); //accedemos a la descripción antes mostrada y la ocultamos para ↓
                                                                                  //darle paso a una nueva con lo que sigue de la función desglozar.
		clicks=0; //volvemos el click a 0
		posicion= 0; //tambn reiniciamos la posición innecesarimente ;) 
		$(".Productos").removeClass("destacar"); //hacemos que el artículo a la normalidad
	
	}
	clicks++; //incrementamos el click para que vuelva a ejecutarse la sustitucion de descripciones
	
	padre2= padre; //le damos el mismo valor que al padre para tener una referencia del último artículo al que se le pidió descripción.  
	var nombre_audifono;//na'solo la creamos.
	var description= $(padre +" > #description").val();
	nombre_audifono= $(padre +" > #named").val();
	var precio_art;
	var likes = $(padre + " input.cant_megusta").val();
	if(screen.availWidth< 700){
		precio_art = "$"+$(padre +" > #precio").val();
	}else{
		precio_art = "$"+ $(padre +" > #precio").val();
	}
	//Url de las imagenes que componen el artículo
	var img_id = $(padre).children(".imagen1").attr("id");
	var img = document.getElementById(img_id).src;
	var img2_id = $(padre).children(".imagen2").attr("id");
	var img2 = document.getElementById(img2_id).src;
	var img3_id = $(padre).children(".imagen3").attr("id");
	var img3 = document.getElementById(img3_id).src;
	var imagen_id = $(padre).children(".collage").attr("id");
	var imagen = document.getElementById(imagen_id).src;
	//variables contenedoras de otros datos del articulo en cuestion
	var precio_entero = $(padre +" > #precio").val();
	var precio_rd = $(padre +" > #precio_en_pesos").val();
	var id_cod= $(padre + " > #cod").val(); 
	///
/////////////////////////////////////////////////////////////////
	var pinterest = "<a target='_blank' id='pin' data-pin-do='buttonPin' data-pin-tall='true' data-pin-round='true' href='https://www.pinterest.com/pin/create/button/?url=https%3A%2F%2Fwww.audsongs.com%2F&media="+ imagen+"&description="+description+ "'>" + pinterest_image + "</a>";

	var ruta_datificada = "Web/PHP/pago.php?dsc="+ description +"&nm="+ nombre_audifono+"&lk="+ likes+"&cll="+ imagen +"&img1="+ img +"&mn="+precio_rd+"&img2="+img2+"&img3="+img3+"&cod="+ id_cod+"";
	// $("#pin").attr("href", "https://www.pinterest.com/pin/create/button/?url=http%3A%2F%2Fwww.audsongs.epizy.com%2F&media="+ imagen+"&description="+description);


		audifono= " <h2 class='nombre_aud'>"+ nombre_audifono +"</h2>  <p class='descripcion2'>"+ description + "</p><span class='precio_art'> "+ precio_art +" </span><button class='quitar' alt='Quitar'>X</button><button class='comprar'><a href='"+ ruta_datificada +"' target='blank'>Comprar" + carrito + "</a></button> <img src='imagenes/No_Like.png' name ='me_gustas'; class='me_gusta'></img>" + facebook + " " + twitter + " " + pinterest + "";
		describir(); // llamamos a la funcion que modifica las etiquetas open graph
	


///////////////////////////////////////	

//aaui es donde agregamos todo lo que tiene que ver con el artículo
	$(padre).closest(".main_cont").append("<div class='cont_especial'><div class='especial'><img class='collage2' src='"+ collage + "'></img>" + audifono + " </div></div>");
	$(".especial").click(function(){
		acceso(argument);
	});

	
	if(te_gusto == 1){

			setTimeout(function(){
				$(".precio_art").addClass("precio_format");

			}, 800);
	
			$(".me_gusta").attr("src", "imagenes/Like.png");
			$(".me_gusta").after("<p class='cant_megusta'>Te Gusta</p>");
setTimeout(function(){
				var likes = $(padre + " input.cant_megusta").val();
				parseInt(likes);
				
				
				
				$(likes).css("display", "inline");
				$("p.cant_megusta").html(likes);
				$(likes).show(700);
	},1500);
			activo=0;
			$(".facebook").removeClass("come_facebook");
			$(".twitter").removeClass("come_twitter");
			$(".google").removeClass("come_google");
			$(".pinterest").removeClass("come_pinterest");
			
			$(".facebook").addClass("facebook_anim");
			$(".twitter").addClass("twitter_anim");
			$(".google").addClass("google_anim");
			$(".pinterest").addClass("pinterest_anim");
	
}
/////////////////////////////////	
//Esto es para llevar la pantala encima de la descripcion arrastrando el Scroll	
	posicion= $(padre).offset().top - 10; //accedemos a la posicion del articulo en cuestion
	$("html, body").animate({scrollTop: posicion}, 600); //posicoinamos la pantalla (el viewport) encima del ariculo desglozado.
//////////////////////////////////////////////////////////////	
		$(padre).addClass("destacar"); //con la clase el artículo decrementa su tamano y brilla azul
		

	//Es la function que hace que se quite la descripción
	
     $(".quitar").on("click", quitar); //aqui la llamamos
    
    function quitar(){ 


	   	$(padre + " > .ver_mas").removeClass("ver_mas_current");
	   	$(".cargando").hide();
  	   	$( padre + " > .ver_mas").html("Ver más");
		descripcion_presente = $(padre).closest(".main_cont").attr("class");	
		$("." + descripcion_presente + " .cont_especial .especial").children().addClass("elementosOff");//vamos ocultando todo sus elementos
		$("." + descripcion_presente + " .cont_especial .especial").addClass("quitarOff"); //le agregamos la clase para desaparecer el contenido
		$(".nombre_aud").css("display", "none");//tambien el nombre del artículo en cuestión
		$(".collage2").fadeOut(400); 
		$(".me_gusta").hide(300);
			$(".me_gusta").hide(300);
			$(".facebook").hide(300);
			$(".twitter").hide(300);
			$(".google").hide(300);
			$(".pinterest").hide(300);
			$(".comprar").hide(200);
			$(".quitar").hide();			
		setTimeout(function(){
			$("." + descripcion_presente + " .cont_especial .especial").css("display", "none"); //luego de haber pasado un 700milesimas nos aseguramos de desaparesca
	    	$(padre +" .triangle").css("opacity", "0");
				
		}, 700);
		setTimeout(function(){
			$("." + descripcion_presente + " .cont_especial").addClass("desaparecer").hide(300);// desparecemos el contendor Osea el espacio que abarcaba la 
                           	$("footer").css("z-index", "10000");
                                                                            // de descripción men.
			
		}, 950);
		
		$(".Productos").removeClass("destacar");	//le quitamos la clase para destacar al producto
		$(".Productos").removeClass("fix_trans");	//
        oculto_mostrar = 0;
        
        padre = "";
        padre2= "";

	}	
	
//function para establecer las imagenes de like and no like
	var tiros = 0;
$(".me_gusta").click(function(){


		if(activo==1){
			setTimeout(function(){
				$(".precio_art").addClass("precio_format");

			}, 800);
	
			$(".me_gusta").attr("src", "imagenes/Like.png");
			$(".me_gusta").after("<p class='cant_megusta'>Te Gusta</p>");
			var cosas = nombre_audifono;
			
			$.ajax({
					url: 'Web/PHP/me_gustas.php',
					type: 'post',
					data: {cosa:cosas},
					success: function(resp){
						console.log(resp);
					},
					error: function(jqXHR, estado, error){
						console.log(estado);
						console.log(error);
					}, complete: function(jqXHR, estado){
						//console.log(estado);
					} 

				});

	
	
			setTimeout(function(){
				var likes = $(padre + " input.cant_megusta").val();
				parseInt(likes);
				
				
				
				$(likes).css("display", "inline");
				$("p.cant_megusta").html(likes);
				$(likes).show(700);
				
			},1500);
			activo=0;
			$(".facebook").removeClass("come_facebook");
			$(".twitter").removeClass("come_twitter");
			$(".google").removeClass("come_google");
			$(".pinterest").removeClass("come_pinterest");
			
			$(".facebook").addClass("facebook_anim");
			$(".twitter").addClass("twitter_anim");
			$(".google").addClass("google_anim");
			$(".pinterest").addClass("pinterest_anim");
			te_gusto = 1;

		}else if(activo==0){

		$(".precio_art").removeClass("precio_format");

			$(".me_gusta").attr("src", "imagenes/No_Like.png");
			$(".cant_megusta").css("display", "none");
			activo=1;
			$(".facebook").removeClass("facebook_anim");
			$(".twitter").removeClass("twitter_anim");
			$(".google").removeClass("google_anim");
			$(".pinterest").removeClass("pinterest_anim");
			
			$(".facebook").addClass("come_facebook");
			$(".twitter").addClass("come_twitter");
			$(".google").addClass("come_google");
			$(".pinterest").addClass("come_pinterest");
		
			te_gusto = 0;
		}
		tiros = 1;
});
	
$(".comprar").click(function(){

	
		// $.post("Web/JScript/Formulario_compras.php",{"mivar":nombre_audifono},function(respuesta){
		// if($("#audifono").val() <= 0){
		// 	alert(" no funciono ");
		// }else{
		// 	alert('funciono!' + respuesta);
		// }
  //   });

//	var clase_nombre = $(padre).attr("class");
	//$("#audifono_").val(clase_nombre);
	
	// $('#contenedor_formulario').show(300 ,"linear", function(){
	// $("#form").css("top", posicion);
	// $(".equis").css("top", posicion);

	// $("html, body").animate({scrollTop: posicion}, 300);
	// });
	
	// $('.equis').click(function(e){
	// 	e.preventDefault();
	// 	$("#contenedor_formulario").fadeOut(300);
	// 	$("#form").attr('src', "Web/JScript/Formulario_compras.php");
	// });
    
    
}); 

	
	$(".main_cont").last().children(".Productos").on("click",function(){
		$("footer").css("z-index", "-1");
	});
	
 function describir(e){
 	if(e=="compartir"){
 		var pic = "https://www.audsongs.com/imagenes/logo_audsongs_w.jpg";
 		var descrip = "Es la pagina web que buscabas!, en AudSOngs encontrarás toda clase de dispositivos inalámbricos desde teclados y mouse hasta aparátos tecnológicos y accesorios para tu SmartPhone. Comprometidos con la calidad de nuestros productos y la comodidad de nuestros clientes, brindamos los mejores precios del mercado y facilidad de pagos online con entregas a domicilio en un 2x3.";

 		$("meta[property='og:image']").attr("content", pic);
	 	$("meta[property='og:image:url']").attr("content", pic);
		$("meta[property='og:description']").attr("content", descrip);

		console.log( 	$("meta[property='og:image']").attr("content") + "<br />" +
	$("meta[property='og:image:url']").attr("content")+ "<br />" +
		$("meta[property='og:description']").attr("content")+ "<br />" +
		$("meta[property='og:title']").attr("content"));

 	}else{

	 	var id = $("img[src='"+collage+"']").attr("id");
	 	var imagen = document.getElementById(id).src;
	 	$("meta[property='og:image']").attr("content", imagen);
	 	$("meta[property='og:image:url']").attr("content", imagen);
		$("meta[property='og:description']").attr("content", description);
		$("meta[property='og:alt']").attr("content", nombre_audifono);
	}
 }
}//aqui acaba la function desglozar


//aqui empieza el codigo para comprar un articulo desde el punto donde esta el precio

//aqui acaba el control para comprar un articulo al darle click al precio 
    
//es para que se vallan adaptando los articulos segun se achique la pantalla lo llamo Orden (m)por(m)
	if(screen.availWidth < 980){
		
		var secciones = document.querySelectorAll(".main_cont");
      	var articulo;
		var articulos_restantes;
		var repeticiones = 0;		

			var nueva_seccion = $(secciones[1]).clone();//copiamos por completo una seccion de 5 articulos
  			
			
		
		for(var e = 0; e<= $(secciones[1]).children().length; e++){//eliminamos esos 5 articulos quedandonos la seccion vacia
						
				$(nueva_seccion).children().first().remove();
						
			}
			

		
		
		for(var i = 0; i<secciones.length ; i++){
			
			if($(secciones[i]).children("article").length>=5){
				repeticiones++
				articulo = $(secciones[i]).children().last().clone().end();	
				

				if($( secciones[i] ).next().children().length ==3 || $( secciones[i] ).next().children().length ==2 || $( secciones[i] ).next().children().length ==1 ){
					
					$( secciones[i] ).next().append(articulo);
				}else{
					$(nueva_seccion).append(articulo);	
				}
			}
		}
		
			if( $(secciones).last().children().length >= 4){
				
				
				$(secciones).last().after(nueva_seccion);
		
		}else{
				$(secciones).last().before(nueva_seccion);
			}
		
		if(repeticiones >= 5){//con esta line nos damos cuenta si los articulos de la nueva seccion pasan de 4
			
			articulos_restantes = $(nueva_seccion).children();//accedemos al numero de articulos de la nueva seccion 
			
			for(var e= 0; e< articulos_restantes.length; e+=4)	{ //creamos un ciclo para recorrerlos de 4 en 4 segun la seccs
				if( articulos_restantes.length != 4){//decimos que solo los que van del 4 en adelante se procesaran
											 															         				
					var again_seccion = $(nueva_seccion).clone();
																					//creamos otras seccion
					$(again_seccion).children().remove();
				
					for(var i =0; i< 4; i++){//vamos agregando los articulos de 4 en cuatro por la condicion de pantalla
						var again_articulo = $(nueva_seccion).children().last().clone().end();
						$(again_seccion).append(again_articulo);
					}
					//articulos_restantes.length -= 4;
					
				}
				
					$(nueva_seccion).before(again_seccion);
				}
					
			}
				
			
		
			
	}

//--------------------------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------
	if(screen.availWidth <=660){
		
		var secciones = document.querySelectorAll(".main_cont");
      var articulo;
		var articulos_restantes;
		var repeticiones = 0;		

			var nueva_seccion = $(secciones[1]).clone();//copiamos por completo una seccion de 5 articulos
  			
			
		
		for(var e = 0; e<= $(secciones[1]).children().length; e++){//eliminamos esos 5 articulos quedandonos la seccion vacia
						
				$(nueva_seccion).children().first().remove();
						
			}
			

		
		
		for(var i = 0; i<secciones.length ; i++){
			
			if($(secciones[i]).children("article").length >= 4  ){
				repeticiones++
				
				articulo = $(secciones[i]).children().last().clone().end();	
					
				if($( secciones[i] ).next().children("article").length ==1){
						$( secciones[i] ).next().append(articulo);
				}else{
					$(nueva_seccion).append(articulo);	
				}
					
				
			}
		}
		
			if( $(secciones).last().children().length >= 3){
				
				
				$(secciones).last().after(nueva_seccion);
		
		}else{
				$(secciones).last().before(nueva_seccion);
			}
		
		if(repeticiones >= 5){//con esta line nos damos cuenta si los articulos de la nueva seccion pasan de 4
			
			articulos_restantes = $(nueva_seccion).children();//accedemos al numero de articulos de la nueva seccion 
			
			for(var e= 0; e< articulos_restantes.length; e+=4)	{ //creamos un ciclo para recorrerlos de 4 en 4 segun la seccs
				if( articulos_restantes.length != 4){//decimos que solo los que van del 4 en adelante se procesaran
											 															         				
					var again_seccion = $(nueva_seccion).clone();
																					//creamos otras seccion
					$(again_seccion).children().remove();
				
					for(var i =0; i< 3; i++){//vamos agregando los articulos de 4 en cuatro por la condicion de pantalla
						var again_articulo = $(nueva_seccion).children().last().clone().end();
						$(again_seccion).append(again_articulo);
					}
			
				}
				
					$(nueva_seccion).before(again_seccion);
				}
					
			}
				
			
		
			
	}
	

	var imagen_ruta;
    $("input[type=file]").change(function(e){
       
        var nombre_carpeta = document.getElementById("nombre_prod").value;
        var nombre_imagen = e.target.value.substring(12);
        imagen_ruta = "imagenes/"+ nombre_carpeta +"/"+ nombre_imagen;
        var objeto = $("#"+e.target.id + " + canvas").attr("Id");
        var imagen_a_poner = new Image();
        var ancho = $("#"+objeto).css("width").substring(0,3);
        var largo = $("#"+objeto).css("height").substring(0,3);
       
        imagen_a_poner.src = imagen_ruta;
       
        var nodo = document.getElementById(objeto).getContext("2d");
        $("#muestras").css("display", "inline-block");
       
        nodo.drawImage(imagen_a_poner, 0,0, 300, 150); //just put a number over the data from the lienzo
       
        $("#"+objeto).parent().children("p").hide();
      
        $("#"+objeto).css("display", "inline-block");
   

   });//aqui acaba el change de todos los input[file]



///parte ajax para enviar la ruta de la imagen al index.php //////////
	// 

///////////////////////////////////////////////////////////////////////////////
    
    $(".adminX").click(function(){
        $(".form_admin").hide();
    });
	$(".codigo").dblclick(function(){
		alert("Saludos Identifíquese!");
        $(".form_admin").css("display", "block");
	});


$(document).keyup(function(e){
	if(e.which == 27){
		$('.quick_keeping').hide();
		
	}

});


// $(".cont_pag a").on("click", function(e){
// 	var id_elegido = e.target.id;
// 	location.load("../../index.php?pagina=id_elegido");
// });
  var check = false;
  $(".menu").on("click", function(){
  		var alto =$(".menu").offset().top;
  		$("html, body").animate({scrollTop:alto}, 300);
  	if(check){
  		$("ul").hide();
  		check= false;
  	}else{
  		$("ul").show();
  		check = true;
  	}
  });

$(".acept_cookies").on("click", function(){
	$.ajax({
		url: "cookies.php",
		data: {acepto:"si"},
		type: "post",
		error: function(jqXHR, estado,resp){
			alert("No me han permitido crear la cookie");
		},
		success:function(resp){
			console.log(resp);
		}

	});

	$(".cookies").hide();
});


}); //aqui acaba el evento ready del documento