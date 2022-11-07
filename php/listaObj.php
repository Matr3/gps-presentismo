<?php

	require "databaseconnectcoord.php";
	
	session_start();
    $query = $conn->query("SELECT * FROM objetivo");
    while ($valores=mysqli_fetch_array($query)) {
        echo'<option value="'.$valores[servicio_name].'">'.$valores[servicio_name].'</option>';
    }
?>