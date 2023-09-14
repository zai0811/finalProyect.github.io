let nombre = '';
function loginf() {
    // Nombre del archivo JSON
    const archivoJSON = 'https://fabrizio123450.github.io/datos.github.io/data.json';

    // Utilizar fetch para cargar el archivo JSON
    fetch(archivoJSON)
        .then(response => {
            if (!response.ok) {
                throw new Error(`No se pudo cargar el archivo JSON: ${response.status}`);
            }
            return response.json(); // Convertir la respuesta a JSON
        })
        .then(data => {
            // El contenido del archivo JSON está disponible en 'data'
            console.log(data); // Puedes procesar los datos aquí
            console.log(data.usuarios[0].nombre_usuario);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });

}

//document.getElementById('botonLogin').addEventListener('click', alert("HOLAAA"));