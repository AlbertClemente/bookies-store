/*Botón menú hamburger*/

// Buscamos la clase hamburger y la asignamos a la variable
var hamburger = document.querySelector(".hamburger");
// Al hacer click...
hamburger.addEventListener("click", function() {
    // Añadimos clase "is-active"
    hamburger.classList.toggle("is-active");
    //Seleccionamos el elemento padre con id "menuContainer"
    var x = document.getElementById("menuContainer");
    //Al elemento padre con clase "menu-container", 
    //se le añade la clase "responsive".
    //Al volver a hacer click, se le quita la clase "responsive".
    if (x.className === "menu-container") {
        x.className += " responsive";
    } else {
        x.className = "menu-container";
    }
});