<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Formulario Consultas Preparadas</title>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
<div class="container">
<br /><br />
<form action="Consulta preparada.php" method="get" class='form-vertical'>
<div class="form-group">
	<label for="paiso" class='control-label col-md-2 col-md-offset-3'>Pais de Origen:</label>
	<div class="input-group col-md-4">
		<input type="text" name="pais" id="paiso" class='form-control' placeholder="click aqui"  />
	</div>
</div>
<br />

<div class="form-group col-md-2 col-md-offset-6">
<center>
	<input type="submit" value="Buscar"  class='btn btn-primary'/>
</center>
	</div>

</form>

</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
</body>
</html>
