<?php
	$usuario = $_POST['user'];
	$password = $_POST['pass'];
    echo $usuario;
	echo $password;

    /*
	require "databaseconnect.php";
	


		
		
		
		$sql = "SELECT id, password, nombre, tipo_usuario FROM usuarios WHERE usuario='$usuario'";
		//echo $sql;
		$resultado = $mysqli->query($sql);
		$num = $resultado->num_rows;
		
		if($num>0){
			$row = $resultado->fetch_assoc();
			$password_bd = $row['password'];
			
			$pass_c = sha1($password);
			
			if($password_bd == $pass_c){
				
				$_SESSION['id'] = $row['id'];
				$_SESSION['nombre'] = $row['nombre'];
				$_SESSION['tipo_usuario'] = $row['tipo_usuario'];
				
				header("Location: principal.php");
				
			} else {
			
			echo "La contraseña no coincide";
			
			}
			
			
			} else {
			echo "NO existe usuario";
		}
		
		
		
*/
	
	
	
?>