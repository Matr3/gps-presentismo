<?php
$servername = "localhost";
$database = "c2300479_coord";
$username = "c2300479_coord";
$password = "Rolling2020";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
mysqli_close($conn);
?>