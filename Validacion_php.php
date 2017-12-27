<style>
body{
	background:#000;
}
.valido {
	color:#00CC00;
	font-size: 36px;
	text-align:center;
	
}

.No_valido {
	color:red;
	font-size: 36px;
	text-align:center;
	
}

.amarillo {
	color:#FFFF00;
	font-size: 36px;
	text-align:center;
	
}


 </style>

 <?php
  
	if(isset ($_POST ["sendButton"])){
	
		$usuario= $_POST["name"];
		$contrasena= $_POST ["contra"];
		$edad= $_POST ["age"];
	
	  if ($edad <= 18){
	  
	  		echo "<p class='No_valido'>NO Eres Bienvenida Mar&iacute;a</p>";	
	  
	  }else if ($edad >=90){
	  		echo"<p class='amarillo'>Lo lamentamos pero este contenido no es apto para usted</p>";
	  
	  }else if ($edad <=45){
	  
	  		echo"<p class='valido'>Eres Joven </p> <br/> <br/>";				
	  }
	  
	}
	
	$validar = $usuario == "Williams" || $usuario=="Esteysi" || $usuario=="Edison" && $edad < 90 ? "<p class='valido'>eres Bienvenido Gran Jefe </p>" : "<p class='No_valido'> Va Pa ya Toro COn zarampion co&ntilde;o &#161 !¡¡ &#191 </p>";
	
	echo $validar;
  
  switch (true){
  
  	case $usuario =="Williams" && $contrasena ="1234" && $edad >= 18 && $edad < 90 :
	    echo "<p class='valido'> Eres Bienvenido $usuario </p>";
	break;
	
	case $usuario =="Edison" && $contrasena ="4444" && $edad >= 18 && $edad < 90 :
	    echo "<p class='valido'> Eres Bienvenido $usuario </p>";	
	break;
	
	case $usuario =="Esteysi" && $contrasena ="3214" && $edad >= 18 && $edad < 90 :
	    echo "<p class='valido'> Eres Bienvenido $usuario </p>";
	break;
  	
	default: 
		echo "<p class='No_valido'>No Eres Bienvenido </p> " . "<p class='No_valido'> $usuario </p>"  ;
  }
  
  
  ?>	