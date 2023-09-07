// Inicializar el calendario después de agregar tareas
const calendarElement = document.getElementById('calendar');

// Crear un objeto para almacenar las citas
const citas = [];

// ... (Agrega tareas a la matriz 'citas' usando la función agregarTarea)

// Configurar y mostrar el calendario
const calendar = new FullCalendar.Calendar(calendarElement, {
    initialView: 'dayGridMonth',
    events: citas // Utiliza la matriz 'citas' para mostrar eventos
});
calendar.render();






