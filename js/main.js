const windowIndex = '../index.html';


const params = new URLSearchParams(window.location.search);
const nombre = params.get('name');
const password = params.get('pass');
console.log(nombre, password);
function logOut(){
    //  window.location.href = windowIndex;
    console.log(nombre, password);
}