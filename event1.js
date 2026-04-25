const caja = document.getElementById("texto");
const estado = document.getElementById("estado");
const teclaDown = document.getElementById("tecladown");
const teclaUp = document.getElementById("teclaup");
const registro = document.getElementById("registro");

function logEvento(texto) {
    const p = document.createElement("p");
    p.textContent = texto;
    registro.appendChild(p);
}

caja.addEventListener("focusin", () => {
    caja.classList.add("inputin");
    logEvento("El input ha recibido el foco");
});

caja.addEventListener("focusout", () => {
    caja.classList.remove("inputin");
    logEvento("El input ha perdido el foco");
});

caja.addEventListener("input", () => {
    estado.textContent = "Estás escribiendo: " + caja.value;
});

caja.addEventListener("keydown", (event) => {
    teclaDown.textContent = "Se ha pulsado: " + event.key;
    logEvento("Se ha pulsado la tecla " + event.key);
});

caja.addEventListener("keyup", (event) => {
    teclaUp.textContent = "Se ha soltado: " + event.key;
    logEvento("Se ha soltado la tecla " + event.key);
});

const boton = document.getElementById("boton");
const divraton = document.getElementById("divraton");

boton.addEventListener("click", () => {
    divraton.textContent = "Has hecho clic";
    logEvento("Has hecho clic en el botón");
});

boton.addEventListener("dblclick", () => {
    divraton.textContent = "Has hecho doble clic";
    logEvento("Has hecho doble clic en el botón");
});

const divcolor = document.getElementById("divcolor");

divcolor.addEventListener("mouseenter", () => {
    divcolor.style.backgroundColor = "bisque";
    logEvento("El ratón ha entrado en la caja");
});

divcolor.addEventListener("mouseleave", () => {
    divcolor.style.backgroundColor = "aqua";
    logEvento("El ratón ha salido de la caja");
});