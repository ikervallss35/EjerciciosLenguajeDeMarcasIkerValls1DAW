const form = document.getElementById("formContacto");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const telefono = document.getElementById("telefono").value;

  if (nombre === "" || telefono === "") {
    mensaje.textContent = "Todos los campos son obligatorios";
    mensaje.style.color = "red";
  } else {
    mensaje.textContent = "Formulario enviado";
    mensaje.style.color = "green";
  }
});