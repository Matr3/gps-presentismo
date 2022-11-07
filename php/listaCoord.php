<?php

	require "databaseconnectcoord.php";
	
	session_start();
    $query = $conn->query("SELECT * FROM coordinadores");
    while ($valores=mysqli_fetch_array($query)) {
    echo'<option value="'.$valores[coordinador_name].'">'.$valores[coordinador_name].'</option>';
    }
?>