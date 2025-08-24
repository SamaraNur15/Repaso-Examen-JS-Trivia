// ========================================
// EXAMEN DE JAVASCRIPT - JUEGO DE TRIVIA
// ========================================
// INSTRUCCIONES: Implementa las funcionalidades indicadas en los TODOs
// TIEMPO: 1 hora y 30 minutos
// TEMAS: Arrays, DOM, Eventos, localStorage, JSON, fetch

// ==========================================
// VARIABLES GLOBALES DEL JUEGO
// ==========================================

// TODO 1: Declara las variables globales necesarias para el juego
// - preguntasOriginales: array que contendrá todas las preguntas del JSON
// - preguntasJuego: array de 5 preguntas seleccionadas para la partida actual
// - preguntaActual: índice de la pregunta actual (empezar en 0)
// - puntuacion: puntuación acumulada del jugador (empezar en 0)
// - tiempoRestante: tiempo en segundos para cada pregunta (empezar en 10)
// - temporizador: variable para almacenar el setInterval del temporizador

let preguntasOriginales = [];
let preguntasJuego = [];
let preguntaActual = 0;
let puntuacion = 0;
let tiempoRestante = 10;
let temporizador = null;

// TODO 2: Obtén referencias a los elementos del DOM que necesitarás
// - Pantallas: startScreen, gameScreen
// - Botones: startBtn, nextBtn
// - Elementos de información: currentQuestionSpan, totalQuestionsSpan, currentScoreSpan
// - Elementos del temporizador: timerFill, timeLeftSpan
// - Elementos de la pregunta: questionText, optionsContainer

const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const currentScoreSpan = document.getElementById('currentScore');
const timerFill = document.getElementById('timerFill');
const timeLeftSpan = document.getElementById('timeLeft');
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');

// ==========================================
// FUNCIONES PRINCIPALES DEL JUEGO
// ==========================================

/**
 * TODO 3: Función para cargar las preguntas desde el archivo JSON
 * - Usar fetch() para obtener el archivo './data/preguntas.json'
 * - Convertir la respuesta a JSON
 * - Guardar las preguntas en la variable preguntasOriginales
 * - Manejar errores con try-catch y mostrar alert en caso de error
 */
async function cargarPreguntas() {
    // Implementar aquí el fetch del JSON
}

/**
 * TODO 4: Función para seleccionar 5 preguntas aleatorias para el juego
 * - Crear una copia del array preguntasOriginales
 * - Mezclar las preguntas de forma aleatoria
 * - Tomar solo las primeras 5 preguntas
 * - Guardar en la variable preguntasJuego
 */
function seleccionarPreguntasAleatorias() {
    // Implementar la selección aleatoria de 5 preguntas
}

/**
 * TODO 5: Función para inicializar el juego
 * - Ocultar la pantalla de inicio (startScreen.style.display = 'none')
 * - Mostrar la pantalla del juego (gameScreen.style.display = 'block')
 * - Resetear variables del juego (preguntaActual = 0, puntuacion = 0)
 * - Seleccionar preguntas aleatorias
 * - Actualizar el total de preguntas en la interfaz
 * - Mostrar la primera pregunta
 */
function iniciarJuego() {
    // Implementar la inicialización del juego
}

/**
 * TODO 6: Función para mostrar la pregunta actual
 * - Verificar si quedan preguntas (si preguntaActual >= preguntasJuego.length, finalizar juego)
 * - Actualizar el número de pregunta en currentQuestionSpan
 * - Mostrar el texto de la pregunta en questionText
 * - Limpiar las opciones anteriores (optionsContainer.innerHTML = '')
 * - Crear botones para cada opción de respuesta
 * - Ocultar el botón "Siguiente" (nextBtn.style.display = 'none')
 * - Iniciar el temporizador
 */
function mostrarPregunta() {
    // Implementar la lógica para mostrar una pregunta
}

/**
 * TODO 7: Función para crear los botones de opciones
 * - Recorrer el array de opciones de la pregunta actual
 * - Para cada opción, crear un elemento button
 * - Asignar la clase 'option-btn' a cada botón
 * - Asignar el texto de la opción al botón
 * - Agregar event listener de click que llame a seleccionarRespuesta con el índice
 * - Agregar cada botón al optionsContainer
 */
function crearBotonesOpciones() {
    // Implementar la creación de botones de opciones
}

/**
 * TODO 8: Función para manejar la selección de una respuesta
 * - Parar el temporizador (clearInterval)
 * - Obtener la pregunta actual de preguntasJuego
 * - Verificar si la respuesta es correcta comparando con respuestaCorrecta
 * - Si es correcta, sumar 10 puntos a la puntuación
 * - Actualizar la puntuación en pantalla
 * - Mostrar feedback visual (resaltar respuesta correcta/incorrecta)
 * - Deshabilitar todos los botones
 * - Mostrar el botón "Siguiente"
 */
function seleccionarRespuesta(indiceSeleccionado) {
    // Implementar la lógica de selección de respuesta
}

/**
 * TODO 9: Función para mostrar feedback visual
 * - Obtener todos los botones de opciones (document.querySelectorAll('.option-btn'))
 * - Deshabilitar todos los botones (disabled = true)
 * - Agregar clase 'correct' al botón de la respuesta correcta
 * - Si la respuesta seleccionada es incorrecta, agregar clase 'incorrect'
 */
function mostrarFeedback(indiceSeleccionado, indiceCorrecta) {
    // Implementar el feedback visual
}

/**
 * TODO 10: Función para manejar el temporizador
 * - Inicializar tiempoRestante en 10
 * - Usar setInterval para decrementar cada segundo
 * - Actualizar el texto del tiempo (timeLeftSpan.textContent)
 * - Actualizar la barra visual (timerFill.style.width)
 * - Cuando llegue a 0, parar el temporizador y auto-avanzar
 */
function iniciarTemporizador() {
    // Implementar el temporizador
}

/**
 * TODO 11: Función para avanzar a la siguiente pregunta
 * - Incrementar preguntaActual
 * - Si hay más preguntas, mostrar la siguiente
 * - Si no hay más preguntas, finalizar el juego
 */
function siguientePregunta() {
    // Implementar el avance a la siguiente pregunta
}

/**
 * TODO 12: Función para actualizar la puntuación en pantalla
 * - Actualizar el contenido de currentScoreSpan con la puntuación actual
 */
function actualizarPuntuacion() {
    // Implementar la actualización de puntuación
}

/**
 * TODO 13: Función para finalizar el juego
 * - Crear un objeto con los datos de la partida (puntuacion, fecha, respuestasCorrectas)
 * - Guardar los datos en localStorage con la clave 'ultimaPartida'
 * - Redirigir a la página de resultados (window.location.href = 'resultados.html')
 */
function finalizarJuego() {
    // Implementar la finalización del juego
}

// ==========================================
// EVENT LISTENERS Y INICIALIZACIÓN
// ==========================================

/**
 * TODO 14: Configurar los event listeners cuando se carga la página
 * - Agregar event listener al documento para el evento 'DOMContentLoaded'
 * - Cuando se cargue la página, cargar las preguntas
 * - Agregar event listener al botón de inicio (click -> iniciarJuego)
 * - Agregar event listener al botón siguiente (click -> siguientePregunta)
 */
document.addEventListener('DOMContentLoaded', async function() {
    // Implementar la inicialización
});

// ==========================================
// FUNCIONES AUXILIARES (OPCIONAL)
// ==========================================

/**
 * BONUS: Función para mezclar un array aleatoriamente
 * Puedes usar esta función para mezclar las preguntas
 */
function mezclarArray(array) {
    const arrayMezclado = [...array];
    for (let i = arrayMezclado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayMezclado[i], arrayMezclado[j]] = [arrayMezclado[j], arrayMezclado[i]];
    }
    return arrayMezclado;
}

// ==========================================
// GUÍA DE IMPLEMENTACIÓN
// ==========================================

/*
ORDEN SUGERIDO DE IMPLEMENTACIÓN:

1. Implementar cargarPreguntas() - usar fetch y async/await
2. Implementar seleccionarPreguntasAleatorias() - trabajar con arrays
3. Implementar iniciarJuego() - manipulación del DOM
4. Implementar mostrarPregunta() - más manipulación del DOM
5. Implementar crearBotonesOpciones() - creación dinámica de elementos
6. Implementar seleccionarRespuesta() - manejo de eventos y lógica
7. Implementar mostrarFeedback() - manipulación de clases CSS
8. Implementar actualizarPuntuacion() - actualización del DOM
9. Implementar siguientePregunta() - control de flujo
10. Implementar iniciarTemporizador() - setInterval y clearInterval
11. Implementar finalizarJuego() - localStorage y redirección
12. Configurar event listeners - eventos del DOM

CONCEPTOS CLAVE A USAR:
- fetch() para cargar JSON
- document.getElementById() para obtener elementos
- addEventListener() para eventos
- createElement() y appendChild() para crear elementos
- localStorage.setItem() para guardar datos
- setInterval() y clearInterval() para temporizador
- Array methods como slice(), sort(), forEach()
- window.location.href para redirección

¡Buena suerte con tu examen! 🚀
*/