import { database } from './database.js';

let titulo = document.getElementById("titulo");
let autor = document.getElementById("autor");
let isbn = document.getElementById("ISBN");
let fecha = document.getElementById("fecha");
let img = document.getElementById("portada");

let btnBuscar = document.getElementById("botonBuscar");
let btnDerecha = document.getElementById("botonDerecha");
let btnIzquierda = document.getElementById("botonIzquierda");

let indice_actual = 0;

function mostrarLibro(indice) {
  let libro_actual = database[indice];

  titulo.value = libro_actual.titulo;
  autor.value = libro_actual.autor;
  fecha.value = libro_actual.fecha;
  isbn.value = libro_actual.isbn;

  img.src = `https://covers.openlibrary.org/b/id/${libro_actual.filename}`;
}

function siguienteDerecha() {
  if (indice_actual < database.length - 1) {
    indice_actual++;
    mostrarLibro(indice_actual);
  }
}

function siguienteIzquierda() {
  if (indice_actual > 0) {
    indice_actual--;
    mostrarLibro(indice_actual);
  }
}


btnDerecha.addEventListener("click", siguienteDerecha);
btnIzquierda.addEventListener("click", siguienteIzquierda);

mostrarLibro(indice_actual);
