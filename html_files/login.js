//Script para login

  document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const loginButton = document.getElementById('login-button');
  
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // Obtener los valores de los campos del formulario de inicio de sesión
      const correo = document.getElementById('login-correo').value;
      const clave = document.getElementById('login-clave').value;
  
      // Obtener los datos almacenados del registro en el almacenamiento local
      const storedUserData = JSON.parse(localStorage.getItem('userData'));

      if (storedUserData && correo === storedUserData.correo && clave === storedUserData.clave) {
      // Las credenciales son válidas, redireccionar al usuario a la página de inicio
       window.location.href = 'home.html';
      } else {
      // Las credenciales son incorrectas, mostrar un mensaje de error
      alert('Correo o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
    });
  
    loginButton.addEventListener('click', function () {
      loginForm.submit();
    });
  });