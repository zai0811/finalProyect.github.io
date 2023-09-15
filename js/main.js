const windowIndex = '../index.html';


const params = new URLSearchParams(window.location.search);
const nombre = params.get('name');
const password = params.get('pass');
const app = params.get('app1');
const appTwo = params.get('app2');
const appThree = params.get('app3');

console.log(nombre, password, app, appTwo, appThree);
function logOut(){
    //  window.location.href = windowIndex;
    console.log(nombre, password);
}
if(app === "null"){
    document.getElementById('app1').style.display = 'none';;
}
if(appTwo === "null"){
    console.log(appTwo);
    document.getElementById('app2').style.display = 'none';;
}