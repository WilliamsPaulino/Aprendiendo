var usuario={nombre: $('#nombre').val(), 
			apellido: $('#apellido').val()}

$.get("PasarVariables.php", usuario, procesarDatos);			