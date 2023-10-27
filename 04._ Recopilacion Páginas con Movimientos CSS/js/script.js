const sections = document.querySelectorAll(".pie");
const nav = document.getElementById("nav");
const visorimg = document.getElementById("visorimg");

// const nav__list = document.getElementById("nav__list")

const html = document.getElementById("html")
const css = document.getElementById("css")
const pruebas = document.getElementById("pruebas")
const clientes = document.getElementById("clientes")

const gallery = document.getElementById("gallery")

const cargarCosas = () => {

    html.classList.add("pieAnimacion")

}


const manejarMouse = (event) => {

    let objetivo;

    // console.log(event.target.tagName)

    if(event.target.tagName == "A"){

        objetivo = event.target;

        objetivo.classList.add("aumentar");

    }

}

const manejarClick = (event) => {

    let objetivo = event.target.innerHTML.trim().toLowerCase();

    console.log(objetivo)

    console.log(html.classList)

    html.classList.remove("mostrado")
    css.classList.remove("mostrado")
    pruebas.classList.remove("mostrado")
    clientes.classList.remove("mostrado")

    if(objetivo == "html"){
        html.classList.add("mostrado")
    }
    
    if(objetivo == "css"){
        css.classList.add("mostrado")
    }
    
    if(objetivo == "pruebas"){
        pruebas.classList.add("mostrado")
    }
    
    if(objetivo == "clientes"){
        clientes.classList.add("mostrado")
    }

        
    

}

const clickGaleria = (event) => {

    if(event.target.tagName == "IMG"){
        visorimg.src = event.target.src;
    }

}






nav.addEventListener("mouseover", manejarMouse)
nav.addEventListener("click", manejarClick)
gallery.addEventListener("click", clickGaleria)
document.addEventListener("DOMContentLoaded", cargarCosas)