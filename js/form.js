const arrayDeObjetos = [
    {
        nombre: "Juan",
        edad: 30,
        ciudad: "Ejemploville"
    },
    {
        nombre: "María",
        edad: 25,
        ciudad: "Ciudad Ejemplo"
    },
    {
        nombre: "Carlos",
        edad: 35,
        ciudad: "Otra Ciudad"
    }
];
console.log(arrayDeObjetos);

const formulario = document.getElementById('myForm');
const backButton = document.getElementById('backButton');
const submitButton = document.getElementById('submitButton');
const windowIndex = '../index.html';
backButton.addEventListener('click', function () {
    formulario.reset(); // Resetea el formulario
    window.location.href = windowIndex;
});

submitButton.addEventListener('click', function(){
    window.location.href = windowIndex;
})

