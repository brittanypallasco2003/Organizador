//Script para registro

document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registro-form');
    const registroButton = document.getElementById('registro-button');
  
    // Objeto para almacenar los datos de registro
    const userData = {
      usuario: '',
      correo: '',
      clave: '',
    };
  
    registroForm.addEventListener('submit', function (event) {
        event.preventDefault();
      
        // Obtener los valores de los campos del formulario
        const usuario = document.getElementById('registro-usuario').value;
        const correo = document.getElementById('registro-correo').value;
        const clave = document.getElementById('registro-clave').value;
      
        // Almacenar los datos en el objeto userData
        userData.usuario = usuario;
        userData.correo = correo;
        userData.clave = clave;
      
        // Puedes almacenar estos datos en el almacenamiento local para su posterior uso
        localStorage.setItem('userData', JSON.stringify(userData));
      
        // Redireccionar a la página de inicio de sesión
        console.log('Redirigiendo a login.html'); // Agrega este mensaje para verificar
        window.location.href = 'login.html';
      });
  
    registroButton.addEventListener('click', function () {
      registroForm.submit();
    });
  });