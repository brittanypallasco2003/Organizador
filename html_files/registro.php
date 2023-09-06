<?php
// Establece la conexión con la base de datos (Asegúrate de cambiar estos valores según tu configuración)
$servername = "localhost"; // Cambia a la dirección de tu servidor de base de datos
$username = "root"; // Cambia a tu nombre de usuario de la base de datos
$password = "root_bas3"; // Cambia a tu contraseña de la base de datos
$dbname = "usuarios"; // Nombre de la base de datos

// Crea la conexión
$conn = mysqli_connect($servername, $username, $password, $dbname);


// Obtén los datos del formulario
$usuario = $_POST["Usuario"];
$correo = $_POST["Correo"];
$clave = $_POST["Clave"];

// Inserta los datos en la tabla "registrados"
$sql = "INSERT INTO registrados (Usuario, Correo, Clave) VALUES ('$usuario', '$correo', '$clave')";

$ejecutar = mysqli_query($conn,$sql);

if ($conn->query($sql) === TRUE) {
    echo "Registro exitoso. <a href='login.html'>Iniciar sesión</a>";
} else {
    echo "Error al registrar: " . $conn->error;
}

// Cierra la conexión a la base de datos
$conn->close();
?>


