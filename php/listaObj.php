<?php

require "databaseconnectcoord.php";
	
    $query = $conn->query("SELECT * FROM objetivo");
    while ($fila = mysqli_fetch_array($query)) {
        echo '<option value="'.$fila["servicio_id"].'">'.$fila["servicio_name"].'</option>';
    }
?>