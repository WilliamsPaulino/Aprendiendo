<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
</head>
<body>

<style>
select {
	position:absolute;
	left:190px;
	top:20px;
	
}

</style>

  <form action="" name="formulario" id="formulario" method="post" >
  	<input type="text" name="number" id="number" /> <br />
  	<input type="text" name="number1" id="number1" /> <br />
  	<select name="select" id="select" >
	 <option> Suma</option>
	 <option> Resta</option>
	 <option> Multiplicacion</option>
	 <option> Division</option>
	 <option> Modulo</option>
	</select>   
	<br />
	<input type="submit" name="sendButton" id="sendButton" />
  
  </form> 

 <?php 

		
  include("Calculadora.php");
 
  if(isset($_POST["sendButton"])){
		$number =$_POST["number"];
		$number1 =$_POST["number1"];
		$operacion = $_POST["select"];
		
		//calculadora($operacion);
		}
  

?>

</body>
</html>
