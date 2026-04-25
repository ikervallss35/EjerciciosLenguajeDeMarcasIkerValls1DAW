const formEvento = document.getElementById("formEvento");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const codigoPostal = document.getElementById("codigoPostal");
const resultadoEvento = document.getElementById("resultadoEvento");
const btnLimpiar = document.getElementById("btnLimpiar");

// Límite de nombre
nombre.addEventListener("input", (e) => {
    const max = 55;
    if (e.target.value.length > max) {
        alert("El nombre no puede tener más de 55 caracteres.");
    }
});

formEvento.addEventListener("submit", (event) => {
    event.preventDefault();

    let mensaje = "";
    let esValido = true;

    const nombreValor = nombre.value.trim();
    const edadValor = Number(edad.value);
    const codigoPostalValor = codigoPostal.value.trim();

    // Validación del nombre
    if (!nombreValor) {
        mensaje = "Error: el nombre es obligatorio.";
        esValido = false;
    } else {
        // Validación de la edad
        if (!Number.isFinite(edadValor)) {
            mensaje = "Error: la edad no es válida.";
            esValido = false;
        } else {
            if (edadValor < 18 || edadValor > 120) {
                mensaje = "Error: la edad debe estar entre 18 y 120.";
                esValido = false;
            } else {
                // Validación del código postal
                if (!codigoPostalValor) {
                    mensaje = "Error: el código postal es obligatorio.";
                    esValido = false;
                } else {
                    if (
                        codigoPostalValor.length !== 5 ||
                        isNaN(codigoPostalValor)
                    ) {
                        mensaje =
                        "Error: el código postal debe tener 5 dígitos numéricos.";
                        esValido = false;
                    }
                }
            }
        }
    }

    if (esValido) {
        resultadoEvento.style.color = "green";
        resultadoEvento.textContent =
        `Datos recogidos:
        Nombre: ${nombreValor}
        Edad: ${edadValor}
        Código postal: ${codigoPostalValor}`;
    } else {
        resultadoEvento.style.color = "red";
        resultadoEvento.textContent = mensaje;
    }

    return;
});

btnLimpiar.addEventListener("click", () => {
    formEvento.reset();
    resultadoEvento.textContent = "";
    resultadoEvento.style.color = "";
});