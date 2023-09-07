const calendarElement = document.getElementById('calendar');

// Crear un objeto para almacenar las citas
const citas = [];

// Configurar y mostrar el calendario
const calendar = new FullCalendar.Calendar(calendarElement, {
    initialView: 'dayGridMonth',
    events: citas
});
calendar.render();







