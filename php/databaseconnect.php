<?php
$servername = "localhost";
$database = "c2300479_gslogin";
$username = "root";
$password = "";
// Create connection
$conn = new mysqli($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
//echo "Connected successfully";

?>