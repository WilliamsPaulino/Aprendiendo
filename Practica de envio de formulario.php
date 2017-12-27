<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Documento sin t&iacute;tulo</title>
 <style>
 body{
 	background:#fff;
  
 }
	.formularioDiv {
		position:absolute;
		background:#0000CC;
		border:3px solid #000000;
		border-radius:5px;
		width:25%;
		left:500px;
		box-sizing: border-box;
		
	}
	
	.inputs {
		
		background:#00CCCC;
		border:dashed #0066FF;
		border-radius: 5px;
		padding: 5px;
		margin-left: 25%;
		margin-bottom:15px;
		padding-left:5px;
	}
	 h1 {
	 	font-weight:none;
		background:#0033FF;
		border: solid #000000;
		color:#000;
		border-radius:5px;
		width:40%;
		margin-left:30%;
		
		
	}
  	.sendButton {
		border :1px solid #0066FF;
		font-size :20px; 
		color :red;
		background :#0033FF;
		margin-left :10px;
		width :95%;
		margin-bottom :10px;
		font-family:"Times New Roman", Times, serif;
		
	}
	.sendButton:hover {
		background:#0066FF;
	}
	*::-webkit-input-placeholder {
    /* Google Chrome y Safari */
    color:red;
	font-size:16px;
	padding-left: 5px;
	font-family:"Times New Roman", Times, serif;
}

 </style>
</head>

<body>
   <h1 align="center"> FORMULARIO DE ENVIO </h1>
  <div class="formularioDiv">
 	<form action="Validacion_php.php" method="post" class="formulario" >
	   <br />
	   <input type="text" class="inputs" name="name" id="name" placeholder="Put your name" />
	   <br />
	    <input type="password" class="inputs" name="contra" id="contra" placeholder="Put your Password" />
	   <br />
	   <input type="text" placeholder="Put Ur age" name="age" id="age" class="inputs" />
	   <br />
	   <input type="submit" value="Send" 	name="sendButton" id="sendButton" Class="sendButton" />   
	</form>
  </div>
  
  
 
  </body>	
</html>
