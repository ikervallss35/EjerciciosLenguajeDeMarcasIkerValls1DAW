//Ejercicio 1.1
console.log('¡Mi primer script externo funciona!');

//Ejercicio 1.2
const base = 10;
const altura = 5;
let area = base * altura;
console.log(area);

const nombre = "Iker";
const apellido = "Valls";
let nombreCompleto = `${nombre} ${apellido}`;
console.log(area === 50);

//Ejercicio 2.1
const nota = 8;
if (nota < 5) {
  console.log("Suspenso");
}else if (nota < 7) {
  console.log("Aprobado");
}else if (nota < 9) {
  console.log("Notable");
}else {
  console.log("Sobresaliente");
}

//Ejercicio 2.2
const numero = 7;
for (let i = 1; i <= 10; i++) {
console.log(`${numero} x ${i} = ${numero * i}`);
}

//Ejercicio 3.1
const calcularIVA = (precio) => {
  return precio + precio * 0.21;
};
console.log(calcularIVA(100));

//Ejercicio 3.2
const numeros = [5, 10, 15, 20, 25];
const numerosTriples = numeros.map(numero => numero * 3);
const numerosMayoresDe15 = numeros.filter(numero=> numero > 15);
console.log(numerosTriples);
console.log(numerosMayoresDe15);

//Ejercicio 3.3
let libro = {
  titulo: "Titulo",
  autor: "Autor",
  paginas: 255,
  mostrarResumen: function(){
  console.log(`El libro ${this.titulo} fue escrito por ${this.autor} y tiene ${this.paginas} páginas`);
  }
}
libro.mostrarResumen();

//Ejercicio 4.1 - 4.2
const pelicula = {
  titulo: "Titulo",
  director: "Director",
  año: 2010
};
const { titulo, director, año } = pelicula;
const resultado = `${titulo}, dirigida por ${director}, se estrenó en el año ${año}.`;
console.log(resultado);

//Ejercicio 4.3
import { esMayorDeEdad, saludar } from "./utilidades.js";
console.log(esMayorDeEdad(20));
console.log(saludar("Iker"));

//Ejercicio 5.1 - 5.4
let boton = document.querySelector('#cambiarColorBtn');
let caja = document.querySelector('#caja');
boton.addEventListener('click', () =>{
  caja.textContent = '¡Clickeado!';
  caja.classList.toggle('resaltado');
})

// Ampliación Ejercicio 5.1
let contador = 1;
document.getElementById("btnCrear").addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = `Párrafo ${contador} creado dinámicamente`;
  p.id = `parrafo${contador}`;
  document.body.appendChild(p);

  if (contador === 1) {
    p.style.width = "150px";
    p.style.backgroundColor = "lightblue";

    p.addEventListener("click", () => {
      if (p.style.backgroundColor === "yellow") {
        p.style.backgroundColor = "lightblue";
      } else {
        p.style.backgroundColor = "yellow";
      }

      if (p.style.color === "black") {
        p.style.color = "red";
      } else {
        p.style.color = "black";
      }
    });
  }
  contador++;
});
document.getElementById("btnEliminar").addEventListener("click", () => {
const num = prompt("¿Qué párrafo quieres eliminar?");
const p = document.getElementById(`parrafo${num}`);
  if (p) {
    p.remove();
  }
});

//Ejercicio 7.1 - 7.3
class Producto {
constructor(nombre, precio) {
this.nombre = nombre;
this.precio = precio;
  }
mostrarInfo() {
console.log(`Producto: ${this.nombre}, Precio: ${this.precio}€`);
  }
}
const portatil = new Producto("Portátil Gaming", 1200);
portatil.mostrarInfo();

//Ejercicio 7.4
class Alimento extends Producto {
constructor(nombre, precio, fechaCaducidad) {
super(nombre, precio); 
this.fechaCaducidad = fechaCaducidad;
  }
mostrarInfo() {
console.log(`Producto: ${this.nombre}, Precio: ${this.precio}€, Consumir preferentemente antes de: ${this.fechaCaducidad.toLocaleDateString("es-ES")}`);
  }
}
const manzana = new Alimento("Manzana", 1.20, new Date(2026, 11, 25));
manzana.mostrarInfo();