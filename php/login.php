<?php
	require "databaseconnect.php";
	session_start();


		if($_POST){
			
			$usuario = $_POST['user'];
			$password = $_POST['pass'];
			
		$sql = "SELECT id, password, nombre, tipo_usuario FROM usuarios WHERE usuario='$usuario'";
		
		$resultado = $conn->query($sql);
		$num = $resultado->num_rows;
	
		if($num>0){
			$row = $resultado->fetch_assoc();
			$password_bd = $row['password'];
			
			$pass_c = sha1($password);
			
			if($password_bd == $pass_c){
				
				$_SESSION['id'] = $row['id'];
				$_SESSION['nombre'] = $row['nombre'];
				$_SESSION['tipo_usuario'] = $row['tipo_usuario'];
				
				
				echo 'True';
				
			} else {
			
			echo "La contraseña no coincide";
			mysqli_close($conn);
			}
			
			
			} else {
			echo "NO existe usuario";
			mysqli_close($conn);
		}
		
	}
		
?>