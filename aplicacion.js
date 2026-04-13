class Tarea {
    constructor(texto) {
        this.texto = texto;
        this.completada = false;
    }
    toggleCompletada() {
        this.completada = !this.completada;
    }
}class ListaDeTareas {
    constructor() {
        this.tareas = [];
        this.inputTarea = document.querySelector('#nueva-tarea-input');
        this.botonAgregar = document.querySelector('#agregar-tarea-btn');
        this.listaUl = document.querySelector('#lista-tareas');
        this.botonAgregar.addEventListener('click', () => this.agregarTarea());
    }
    agregarTarea() {
        const textoTarea = this.inputTarea.value.trim();
        if (textoTarea === "") return;
        const nuevaTarea = new Tarea(textoTarea);
        this.tareas.push(nuevaTarea);
        this.mostrarTareas();
        this.inputTarea.value = "";
    }
    mostrarTareas() {
    this.listaUl.innerHTML = "";
    for (let i = 0; i < this.tareas.length; i++) {
        const tarea = this.tareas[i];
        const li = document.createElement('li');
        li.textContent = tarea.texto;
        if (tarea.completada) {
            li.classList.add('completada');
        }
        li.addEventListener('click', () => {
            tarea.toggleCompletada();
            this.mostrarTareas();
        });
        this.listaUl.appendChild(li);
    }
}
}const app = new ListaDeTareas();