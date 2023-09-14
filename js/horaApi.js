// Elemento HTML donde se mostrará la hora
const horaElemento = document.getElementById('hora-actual');

// Función para obtener y actualizar la hora
function obtenerYActualizarHora() {
    // URL de la API de WorldTimeAPI
    const apiUrl = 'http://worldtimeapi.org/api/timezone/america/asuncion'; // Cambia la ubicación según tu necesidad

    // Realizar una solicitud GET a la API
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('La solicitud no se pudo completar');
            }
            return response.json();
        })
        .then(data => {
            // Extraer la hora actual de la respuesta
            const horaActual = new Date(data.datetime);

            // Formatear la hora en un formato legible (por ejemplo, HH:mm:ss)
            const horaFormateada = horaActual.toLocaleTimeString();

            // Mostrar la hora en el elemento HTML
            horaElemento.textContent = `Hora actual: ${horaFormateada}`;
        })
        .catch(error => {
            console.error('Error al obtener la hora:', error);
        });
}

// Actualizar la hora cada segundo (1000 milisegundos)
setInterval(obtenerYActualizarHora, 1000);

// Obtener y mostrar la hora al cargar la página
obtenerYActualizarHora();
