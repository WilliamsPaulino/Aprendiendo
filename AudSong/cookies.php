<?php 

if(isset($_POST["acepto"])){
	setcookie("acepto_cookie", true, time() + 2592000);

}

?>