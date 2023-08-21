$(document).ready(function() {
  const lista = $("#lista");

  $("#formulario").submit(function(event) {
    event.preventDefault();

    

    // Clear form fields
    $("#act_realizar").val('');
    $("#tiempo").val('');
    $("input[name='tipo_act']").prop('checked', false);
    $("#act1").val('');
    $("#act2").val('');
  });

  function agregarTarea(act_realizar, fecha, tipo, act1, act2) {
    var act_realizar = $("#act_realizar").val();
    var fecha = $("#tiempo").val();
    var tipo = $("input[name='tipo_act']:checked").val();
    var act1 = $("#act1").val();
    var act2 = $("#act2").val();
    const conjuntoElemento  = []
    
    const elemento = `
      <div class="content">
        <div class="tarjeta">
          <li id="tarjeta">
            <p>Act: ${act_realizar}</p>
            <p>Fecha limite: ${fecha}</p>
            <p>Tipo de actividad: ${tipo}</p>
            <h3>Detalles</h3>
            <p><input type="checkbox" id="scales1" name="scales" checked/>
            <label for="scales1">${act1}</label>
            <input type="checkbox" id="scales2" name="scales" checked/>
            <label for="scales2">${act2}</label></p>
            <img src="/img/reloj.png" width="45" height="45">
            <button type="button">Realizado</button>
            <button type="button" id=eliminar>Eliminar</button>
          </li>
        </div>
      </div>
    `;
    console.log(elemento);
    lista.append(elemento);
  }

  $("#botoningresar").click(function() {
    const tarea = $("#act_realizar").val();

    if (tarea) {
      agregarTarea(tarea);
      $("#act_realizar").val('');
    }
  });
});



//eliminar lo creado de actividad
$(document).on("click", "#eliminar", function() {
  $(this).closest("div").remove();
});





function toggleContenido() {
  var contenido = document.getElementById('contenido_oculto');
  contenido.style.display = contenido.style.display === 'none' ? 'block' : 'none';
}
