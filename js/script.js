const userData = [];
// Nombre del archivo JSON
//const archivoJSON = '../data/data.json';
/*Para usar de forma local*/
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
        console.log(data.usuarios[1].nombre_usuario);
        userData.push({nombre_usuario: data.usuarios[0].nombre_usuario, 
            contrasena: data.usuarios[0].contrasena, rol: data.usuarios[0].rol},
            {nombre_usuario: data.usuarios[1].nombre_usuario, contrasena: data.usuarios[1].contrasena,
                 rol: data.usuarios[1].rol})
    })
    .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
    });

function loginf() {
    console.log(userData);

}
function singUp() {
    // Obtener el botón por su ID
    // const botonRedirigir = document.getElementById('botonSing');

    // Agregar un evento 'click' al botón para redirigir al formulario
    // botonRedirigir.addEventListener('click', function () {
    // Redirigir a la URL del formulario
    window.location.href = './pages/form.html'; // Reemplaza con el identificador del formulario
    //});
}
//document.getElementById('botonLogin').addEventListener('click', alert("HOLAAA"));
// Obtener los parámetros de la URL


const params = new URLSearchParams(window.location.search);
const nombre = params.get('nombre');
const password = params.get('contrasena');
userData.push({nombre_usuario: nombre, contrasena: password, rol: "usuario"});
// Mostrar los datos en la página
document.body.innerHTML += `<p>Nombre: ${nombre}</p>`;
document.body.innerHTML += `<p>Edad: ${password}</p>`;