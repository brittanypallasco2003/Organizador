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
  });

  let tareaCounter = 0;
  function agregarTarea(act_realizar, fecha, tipo, act1, act2) {
    tareaCounter++;

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
            <h3>Subtareas</h3>
            <p>
              <input type="checkbox" id="scales1" name="scales" checked />
              <label for="scales1">${act1}</label>
              <input type="checkbox" id="scales2" name="scales" checked />
              <label for="scales2">${act2}</label>
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

    if (act_realizar) {
      agregarTarea(act_realizar, fecha, tipo, act1, act2);
      $("#act_realizar").val("");
    }
  });

  $(document).on("click", ".eliminar-btn", function () {
    $(this).closest(".content").remove();
  });

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
document.getElementById('input').addEventListener('change', () => {
  const body = document.body;

  if (body.classList.contains('dark')) {
      body.classList.remove('dark');
      body.classList.add('light-mode');
  } else {
      body.classList.remove('light-mode');
      body.classList.add('dark'); // Asegúrate de que 'dark' se agregue aquí
  }
});