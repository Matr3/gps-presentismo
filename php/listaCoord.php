<?php

	require "databaseconnectcoord.php";
	
    $query = $conn->query("SELECT * FROM coordinadores");

    while ($fila = mysqli_fetch_array($query)) {
        echo '<option value="'.$fila["coordinador_id"].'">'.$fila["coordinador_name"].'</option>';
    }
?>