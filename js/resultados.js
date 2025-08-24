// ========================================
// EXAMEN DE JAVASCRIPT - PÁGINA DE RESULTADOS
// ========================================
// INSTRUCCIONES: Implementa las funcionalidades indicadas en los TODOs
// TEMAS: DOM, localStorage, JSON, Arrays, Eventos

// ==========================================
// VARIABLES GLOBALES
// ==========================================

// TODO 1: Obtén referencias a los elementos del DOM necesarios
// - performanceMessage: elemento para mostrar mensaje de rendimiento
// - finalScoreSpan: elemento para mostrar puntuación final
// - correctAnswersSpan: elemento para mostrar respuestas correctas
// - totalQuestionsSpan: elemento para mostrar total de preguntas
// - accuracySpan: elemento para mostrar porcentaje de precisión
// - rankingList: elemento <ol> para mostrar el ranking
// - emptyRanking: elemento para mostrar cuando no hay ranking
// - clearRankingBtn: botón para limpiar ranking
// - shareBtn: botón para compartir resultado

const performanceMessage = document.getElementById('performanceMessage');
const finalScoreSpan = document.getElementById('finalScore');
const correctAnswersSpan = document.getElementById('correctAnswers');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const accuracySpan = document.getElementById('accuracy');
const rankingList = document.getElementById('rankingList');
const emptyRanking = document.getElementById('emptyRanking');
const clearRankingBtn = document.getElementById('clearRankingBtn');
const shareBtn = document.getElementById('shareBtn');

// Variable para almacenar datos de la última partida
let ultimaPartida = null;

// ==========================================
// FUNCIONES PRINCIPALES
// ==========================================

/**
 * TODO 2: Función para cargar los datos de la última partida
 * - Obtener datos del localStorage con clave 'ultimaPartida'
 * - Si no hay datos, mostrar mensaje de error
 * - Si hay datos, convertir de JSON a objeto y guardar en ultimaPartida
 * - Llamar a mostrarEstadisticasPartida() y mostrarMensajeRendimiento()
 */
function cargarDatosPartida() {
    // Implementar carga de datos desde localStorage
}

/**
 * TODO 3: Función para mostrar las estadísticas en la interfaz
 * - Mostrar puntuación en finalScoreSpan
 * - Mostrar respuestas correctas en correctAnswersSpan  
 * - Mostrar total de preguntas en totalQuestionsSpan
 * - Calcular y mostrar precisión en accuracySpan (respuestasCorrectas / totalPreguntas * 100)
 */
function mostrarEstadisticasPartida(datos) {
    // Implementar visualización de estadísticas
}

/**
 * TODO 4: Función para mostrar mensaje de rendimiento
 * - Si puntuación >= 40: mensaje "¡Excelente!" con clase 'excellent'
 * - Si puntuación >= 25: mensaje "¡Muy bien!" con clase 'good'  
 * - Si puntuación >= 15: mensaje "Buen trabajo" con clase 'average'
 * - Si puntuación < 15: mensaje "Puedes mejorar" con clase 'poor'
 * - Actualizar texto y clase CSS del performanceMessage
 */
function mostrarMensajeRendimiento(datos) {
    // Implementar clasificación de rendimiento
}

/**
 * TODO 5: Función para cargar y mostrar el ranking histórico
 * - Obtener ranking del localStorage con clave 'rankingTrivia' (array vacío por defecto)
 * - Limpiar contenido actual del rankingList
 * - Si no hay datos, mostrar emptyRanking
 * - Si hay datos, ocultar emptyRanking y crear elementos de lista para cada entrada
 * - Usar forEach para recorrer el ranking y crear elementos <li>
 */
function cargarRankingHistorico() {
    // Implementar carga y visualización del ranking
}

/**
 * TODO 6: Función para crear un elemento de la lista del ranking
 * - Crear elemento <li> con clase 'ranking-item'
 * - Establecer innerHTML con: posición, puntuación, fecha y precisión
 * - Retornar el elemento creado
 * - Formato sugerido: "🥇 1. [puntuación] puntos - [fecha] ([precisión]%)"
 */
function crearItemRanking(entrada, posicion) {
    // Implementar creación de elemento de ranking
}

/**
 * TODO 7: Función para actualizar el ranking histórico
 * - Obtener ranking actual del localStorage
 * - Agregar nueva partida al array
 * - Ordenar array por puntuación de mayor a menor
 * - Mantener solo las mejores 5 puntuaciones (usar slice)
 * - Guardar ranking actualizado en localStorage
 */
function actualizarRanking(nuevaPartida) {
    // Implementar actualización del ranking
}

/**
 * TODO 8: Función para limpiar el ranking
 * - Mostrar confirmación con confirm()
 * - Si confirma, eliminar 'rankingTrivia' del localStorage
 * - Recargar el ranking en la interfaz
 * - Mostrar mensaje de confirmación con alert()
 */
function limpiarRanking() {
    // Implementar limpieza del ranking
}

/**
 * TODO 9: Función para compartir resultado (BONUS)
 * - Crear texto con formato para compartir (puntuación, fecha, precisión)
 * - Intentar copiar al portapapeles con navigator.clipboard.writeText()
 * - Si funciona, mostrar alert de confirmación
 * - Si no funciona, mostrar el texto en un prompt()
 */
function compartirResultado() {
    // Implementar funcionalidad de compartir
}

/**
 * TODO 10: Función para mostrar mensaje de error
 * - Actualizar performanceMessage con mensaje de error
 * - Establecer valores por defecto en las estadísticas (0, 0%, etc.)
 */
function mostrarMensajeError() {
    // Implementar visualización de error
}

// ==========================================
// EVENT LISTENERS Y INICIALIZACIÓN
// ==========================================

/**
 * TODO 11: Configurar event listeners y cargar datos
 * - Agregar event listener para 'DOMContentLoaded'
 * - Cuando cargue la página:
 *   * Llamar cargarDatosPartida()
 *   * Llamar cargarRankingHistorico()
 *   * Agregar event listener al clearRankingBtn (click -> limpiarRanking)
 *   * Agregar event listener al shareBtn (click -> compartirResultado)
 */
document.addEventListener('DOMContentLoaded', function() {
    // Implementar inicialización
});

// ==========================================
// FUNCIONES AUXILIARES (OPCIONAL)
// ==========================================

/**
 * BONUS: Función para obtener emoji según la posición
 */
function obtenerEmojiPosicion(posicion) {
    switch (posicion) {
        case 1: return '🥇';
        case 2: return '🥈';
        case 3: return '🥉';
        default: return '🏆';
    }
}

/**
 * BONUS: Función para formatear fecha
 */
function formatearFecha(fecha) {
    return new Date(fecha).toLocaleDateString('es-ES');
}

// ==========================================
// GUÍA DE IMPLEMENTACIÓN
// ==========================================

/*
ORDEN SUGERIDO DE IMPLEMENTACIÓN:

1. Implementar cargarDatosPartida() - localStorage.getItem() y JSON.parse()
2. Implementar mostrarEstadisticasPartida() - manipulación del DOM
3. Implementar mostrarMensajeRendimiento() - condicionales y clases CSS
4. Implementar cargarRankingHistorico() - localStorage y arrays
5. Implementar crearItemRanking() - createElement y innerHTML
6. Implementar actualizarRanking() - manipulación de arrays
7. Implementar limpiarRanking() - confirm, localStorage.removeItem
8. Implementar compartirResultado() - navigator.clipboard (bonus)
9. Implementar mostrarMensajeError() - valores por defecto
10. Configurar event listeners - addEventListener

CONCEPTOS CLAVE A USAR:
- localStorage.getItem() y localStorage.setItem()
- JSON.parse() y JSON.stringify()
- document.getElementById() y document.createElement()
- addEventListener() para eventos
- Array methods: push(), sort(), slice(), forEach()
- Condicionales (if/else) para clasificar rendimiento
- confirm() y alert() para interacciones con usuario
- navigator.clipboard para copiar texto (bonus)

ESTRUCTURA DE DATOS:
- ultimaPartida: { puntuacion: number, fecha: string, respuestasCorrectas: number, totalPreguntas: number }
- ranking: array de objetos con la misma estructura

¡Concéntrate en las funciones principales primero! 💪
*/