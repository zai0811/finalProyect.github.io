function actualizarHora() {
    // Crear un nuevo objeto Date
    const fechaActual = new Date();

    // Obtener la hora actual
    const horaActual = fechaActual.getHours();
    const minutosActuales = fechaActual.getMinutes();
    const segundosActuales = fechaActual.getSeconds();

    // Formatear la hora actual como una cadena (añadir ceros a la izquierda si es necesario)
    const horaFormateada = `${horaActual.toString().padStart(2, '0')}:${minutosActuales.toString().padStart(2, '0')}:${segundosActuales.toString().padStart(2, '0')}`;

    // Mostrar la hora actual en el elemento HTML
    document.getElementById('hora').textContent = horaFormateada;
}

// Actualizar la hora cada segundo
setInterval(actualizarHora, 1000);

// Mostrar la hora actual al cargar la página
actualizarHora();