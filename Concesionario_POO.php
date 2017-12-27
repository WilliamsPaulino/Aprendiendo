<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>

<body>
<?php
class Compra_Coche {
		
	private $precio_base;
	private static $Ayuda=0;
function Compra_Coche($gama){
		
		if ($gama == "alta"){
			
			$this->precio_base=30000;
		
		}else if($gama=="media"){
			$this->precio_base=20000;

	}else if($gama=="baja"){

		$this->precio_base=10000;
	}

}
function climatizador(){
		$this->precio_base+=2800;
	}
	
function pieles($color){
		
		if($color=="blanco"){
			$this->precio_base+=3000;
		}else if($color=="rojo"){
			$this->precio_base+=3500;
		}else if ($color=="negro"){
			$this->precio_base+=4000;

		}else {
			$this->precio_base+=5000;
		}
	}
static function ayuda_gobierno(){
		
		if(date("d-m-y")>"05-01-15" ){

		self::$Ayuda=4500;	
	}

}
	
function precio_final(){
	
	$valor_final=$this->precio_base-self::$Ayuda;
			
			return $valor_final;	

	}

}

?>

</body>
</html>
