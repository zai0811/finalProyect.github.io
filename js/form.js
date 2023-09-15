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

