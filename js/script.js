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
    const name = document.getElementById('name').value;
    const pass = document.getElementById('pass').value;
    
    userData.forEach(usuario => {    
        console.log(usuario);
        ///if(usuario.nombre_usuario === null && usuario.contrasena === null) return;
        if(name.includes(usuario.nombre_usuario) && pass.includes(usuario.contrasena)){
            console.log("HOLA");
            if (usuario.rol.includes("usuario")) {
                const nombre = document.getElementById('name').value;
                const pass = document.getElementById('pass').value;
                const app = params.get('app1');
                const apptwo = params.get('app2'); 
                const appthree = params.get('app3');
                // Construir la URL con parámetros
                const url = `./pages/main_page.html?name=${encodeURIComponent(nombre)}&pass=${encodeURIComponent(pass)}&app1=${encodeURIComponent(app)}&app2=${encodeURIComponent(apptwo)}&app3=${encodeURIComponent(appthree)}`;

                // Redirigir a Página 2 con los parámetros en la URL
                window.location.href = url;
            }else{
                window.location.href = "./pages/main_page.html";
            }
            
        }else{
            alert("YOU SHALL NOT PASS");
            return;
        }
    });

}

function singUp() {
    window.location.href = './pages/form.html';
}


const params = new URLSearchParams(window.location.search);
const nombre = params.get('nombre');
const password = params.get('contrasena');
const app = params.get('app1');
const apptwo = params.get('app2'); 
const appthree = params.get('app3');

if(!(nombre === null && password === null)){
    userData.push({nombre_usuario: nombre, contrasena: password, rol: "usuario",apli: [app,apptwo,appthree]});
}
console.log(userData);