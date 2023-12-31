$(document).ready(function () {
  const lista = $("#lista");
  const tareasRealizadas = $("#tareas_realizadas");

  $("#formulario").submit(function (event) {
    event.preventDefault();

    // Clear form fields
    $("#act_realizar").val("");
    $("#tiempo").val("");
    $("input[name='tipo_act']").prop('checked', false);
    $("#act1").val("");
    $("#act2").val("");
    $("#act3").val("");
    $("#act4").val("");
    $("#act5").val("");
    $("input[name='scales']").prop('checked', false);
  });

  let tareaCounter = 0;
  function agregarTarea(act_realizar, fecha, tipo, act1, act2, act3, act4, act5) {
    tareaCounter++;


  // Calcula los días restantes
  const fechaLimite = new Date(fecha);
  const hoy = new Date();
  const diasRestantes = Math.ceil((fechaLimite - hoy) / (1000 * 60 * 60 * 24));

    const elemento = `
      <div class="content">
        <div class="tarjeta">
          <li>
            <h3>Actividad</h3>
            <p>${act_realizar}</p>
            <h3>Fecha límite</h3>
            <p>${fecha}</p>
            <h3>Prioridad</h3>
            <p>${tipo}</p>
            <h3>Días Restantes</h3>
            <p><span class="dias-restantes">${diasRestantes} días</span></p>
            <h3>Subtareas</h3>
            <p>
              <input type="checkbox" id="scales1" name="scales" checked />
              <label for="scales1">${act1}</label>
            </p>
            <p>
              <input type="checkbox" id="scales2" name="scales" checked />
              <label for="scales2">${act2}</label>
            </p>
            <p>
              <input type="checkbox" id="scales3" name="scales" checked />
              <label for="scales2">${act3}</label>
            </p>
              <input type="checkbox" id="scales4" name="scales" checked />
              <label for="scales2">${act4}</label>
            <p>
              <input type="checkbox" id="scales5" name="scales" checked />
              <label for="scales2">${act5}</label>
            </p>
            <button type="button" class="realizado-btn">Realizado</button>
            <button type="button" class="eliminar-btn">Eliminar</button>
          </li>
        </div>
      </div>
    `;

    lista.append(elemento);
  }

  $("#botoningresar").click(function () {
    const act_realizar = $("#act_realizar").val();
    const fecha = $("#tiempo").val();
    const tipo = $("input[name='tipo_act']:checked").val();
    const act1 = $("#act1").val();
    const act2 = $("#act2").val();
    const act3 = $("#act3").val();
    const act4 = $("#act4").val();
    const act5 = $("#act5").val();
    

    if (act_realizar) {
      agregarTarea(act_realizar, fecha, tipo, act1, act2, act3, act4, act5);
      $("#act_realizar").val("");
    }
  });

  //elimina la actividad
  $(document).on("click", ".eliminar-btn", function () {
    $(this).closest(".content").remove();
  });

  //lleva la actividad a la seccion completado
  $(document).on("click", ".realizado-btn", function () {
    const tareaCompletada = $(this).closest(".content");
    tareaCompletada.appendTo(tareasRealizadas);
    $(this).hide();
  });

  
});

//eliminar lo creado de actividad
$(document).on("click", "#eliminar", function () {
  $(this).closest("div").remove();
});

//muestra el formulario
function toggleContenido() {
  var contenido = document.getElementById("contenido_oculto");
  contenido.style.display =
    contenido.style.display === "none" ? "block" : "none";
}


//modo oscuro
// Comprueba si existe una cookie que almacena el estado del modo oscuro
function isDarkModeEnabled() {
  const darkModeCookie = getCookie('darkMode');
  return darkModeCookie === 'true';
}

// Activa o desactiva el modo oscuro según la cookie
function toggleDarkMode() {
  const body = document.body;

  if (isDarkModeEnabled()) {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
}

// Cambia el estado del modo oscuro cuando se hace clic en el botón de cambio
document.getElementById('input').addEventListener('change', () => {
  const body = document.body;
  const isCurrentlyDarkMode = body.classList.contains('dark');

  // Activa o desactiva el modo oscuro y actualiza la cookie
  if (isCurrentlyDarkMode) {
    body.classList.remove('dark');
    body.classList.add('light-mode');
    setCookie('darkMode', 'false', 365); // Desactiva el modo oscuro
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark');
    setCookie('darkMode', 'true', 365); // Activa el modo oscuro
  }
});

// Aplica el estado del modo oscuro al cargar la página
toggleDarkMode();

// Función para establecer una cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Función para obtener el valor de una cookie
function getCookie(name) {
  const cookieValue = document.cookie.match(`(^|;) ?${name}=([^;]*)(;|$)`);
  return cookieValue ? cookieValue[2] : null;
}
