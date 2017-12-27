<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>
<?php


	$semana=array("Lunes", "Martes","Miercoles","Jueves");
	$semana="HOla";
if(is_array($semana)){

	echo "Es un Array!!";
}else{
	echo "No Es un array :(";
}	
	$datos=array("Nombre"=>"Juan","Apellido"=>"Padilla","Edad"=>16);

//En Este Päso Estoy Cambiando A un campo del array asociativo, asi también se hace en los arrays indexados
	$datos["Nombre"]= "Pedro";


//En este paso estoy agregando un campo con su contenido a un array asociativo, asi también se hace en los array indexados
	
// >>>>   $datos["Pais"]="REPUBLICA DOMINICANA";


 foreach($datos as $campos => $informacion){
	echo "El $campos es: $informacion <br>";
}	



//Esta es otra  forma de hacer los array, tambien se pueden hacer los indexados de la otra forma y viceversa, en peachepe para crear arrays indexados nno es necesario ponerle el indice(numero) dentro de los corchetes ya que este agrega el indice por si solo.


$array[]="hola";
$array[]="Como estas";
$array[]="Yo bien y tu?";
$array[]="Bien";

for($i=0; $i< count($array); $i++){
	echo "Juan: {$array[$i]} <br>";

//sort($array) esta funccion se utiliza para ordenar el array de forma alfabetica debes ponerla antes de recorrer el array

	$tienda=array( "Fruta"=>array("tropical"=>"mango",
									"Citrico"=>"limon", 
									"ad&eacute;mas"=>"Manzana"),
	
					"Carne"=>array("Porcino"=>"pata", 
									"Vacuno"=>"lomo", 
									"Pollo"=>"Pechuga"),
	
					"Leche"=>array("Animal"=>"vaca", 
									"Vegetal"=>"coco", 
									"Materna"=>"Mujer"));

//EL bucle foreach se utiliza para iterar los arrays y objestos  y tiene 2 sintaxis para cambiar el valor de un array desde la sentencia se ha de usar la letra & antes del nombree que hace referencia en la sentencia a ese objeto del arreglo.
	foreach($tienda as $campos=>$informacion){
		echo $campos ."<br>";

	while(list($campo1,$informacion1)=each($informacion)){
		echo "$campo1 = $informacion1 <br>";
	}
	
	echo "<br>";
}

//la Otra sentencia es :

foreach($tienda as $informacion){}

//En este case el lugar que hace referencia al valor de la clave  del arreglo es el segundo 
?>
</body>
</html>