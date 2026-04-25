
document.addEventListener("DOMContentLoaded", function() {
    
    const form = document.getElementById("formContacto");  
    const mensaje = document.getElementById("mensaje");  

    form.addEventListener("submit", function (e) {  
        e.preventDefault();  

        
        const nombre = document.getElementById("nombre").value.trim();  
        const correo = document.getElementById("email").value.trim();  

        if (nombre === "" || correo === "") {  
            mensaje.textContent = "Todos los campos son obligatorios";  
            mensaje.style.color = "red";  
        } else {  
            mensaje.textContent = "Formulario enviado con éxito";  
            mensaje.style.color = "green";  
            
            
        }  
    });

});