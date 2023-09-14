let nombre = '';
function loginf() {
    // Nombre del archivo JSON
    const archivoJSON = './data.json';
    /*Para usar de forma local*/
    //const archivoJSON = 'https://fabrizio123450.github.io/datos.github.io/data.json'; 
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
            console.log(data.usuarios[1].nombre_usuario);
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
        });

}
function singUp(){
    // Obtener el botón por su ID
   // const botonRedirigir = document.getElementById('botonSing');

    // Agregar un evento 'click' al botón para redirigir al formulario
   // botonRedirigir.addEventListener('click', function () {
        // Redirigir a la URL del formulario
        window.location.href = './pages/form.html'; // Reemplaza con el identificador del formulario
    //});
}
//document.getElementById('botonLogin').addEventListener('click', alert("HOLAAA"));