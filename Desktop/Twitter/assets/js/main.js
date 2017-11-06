
window.addEventListener("load", cargar);

var boton = document.getElementById('boton');
var textArea = document.getElementById("txt");
var contador = document.getElementById("contador");
var caracteres = contador.innerHTML = 140;

// creo un evento, para activar el boton.

function cargar() {
    boton.addEventListener("click", enviar);
    textArea.addEventListener("keyup", validar);
    textArea.addEventListener("keydown", crecer);
}
    
function enviar(send) {
    send.preventDefault();
    var texto = textArea.value;
    agregarMensaje(texto);
    textArea.value = "";
    contador.innerHTML = 140;
    contador.classList.remove("colorUno");
    contador.classList.remove("colorDos");
    resize();
    boton.disabled = true;
}

function validar() {
    boton.disabled = false;
    var longitud = textArea.value.trim().length;
    contarCaracteres(longitud);
    cambioColor(longitud);
}

function agregarMensaje(texto) {
    var publicacion = document.createElement("div");
    publicacion.innerText = texto;
    var contenedor = document.getElementById("contenedor");
    contenedor.insertBefore(publicacion, contenedor.childNodes[1]).classList.add("box");
}

function contarCaracteres(longitud) {
    if(longitud <= caracteres) {
        contador.innerHTML = caracteres - longitud;
    } else {
        contador.innerHTML = caracteres - longitud;
    }
    if(longitud == 0) {
        document.getElementById("boton").disabled = true;
    }
    if(longitud > caracteres) {
       document.getElementById("boton").disabled = true;
    }
}

function cambioColor(longitud) {
    if(longitud > 120) {
        contador.classList.add("colorUno");
    }

    if(longitud > 130) {
        contador.classList.add("colorDos");
        contador.classList.remove("colorUno");
    }

    if(longitud < 120) {
        contador.classList.remove("colorUno");
    }

    if(longitud < 130) {
        contador.classList.remove("colorDos");
    }
}

function crecer() {
    textArea.style.cssText = "height: auto";
    textArea.style.cssText = "height: " + textArea.scrollHeight + "px";
}

function resize() {
    textArea.style.cssText = "height: auto";
}

