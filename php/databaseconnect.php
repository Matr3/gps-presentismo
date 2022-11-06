<?php
$servername = "localhost";
$database = "c2300479_gslogin";
$username = "Rolling2020";
$password = "c2300479_gslogin";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>