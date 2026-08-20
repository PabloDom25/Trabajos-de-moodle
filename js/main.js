// funciones principales

function mostrarAlerta() {
    alert("¡Has presionado el botón Inicia!");
}

// 1. Obtener el elemento donde mostraremos el número
const displayVisitas = document.getElementById('visitas');

// 2. Intentar obtener el valor actual de localStorage
// Si no existe, empezamos en 0
let contador = parseInt(localStorage.getItem('contadorVisitas')) || 0;

// 3. Incrementar el contador
contador++;

// 4. Guardar el nuevo valor en localStorage
localStorage.setItem('contadorVisitas', contador);

// 5. Mostrar el número en pantalla
displayVisitas.textContent = contador;

// Nota: Este contador es por navegador individual (cliente).
// Para un contador global real, necesitarías una base de datos.