# 🎮 Repaso Examen de JavaScript Frontend - Juego de Trivia

## ⏰ Información del Examen

- **Duración:** 1 hora y 30 minutos
- **Modalidad:** Examen práctico individual
- **Puntuación máxima:** 100 puntos

## 📚 Temas a Evaluar

Este examen evalúa únicamente los siguientes conceptos de JavaScript:

1. **Manejo de Arrays** - Manipulación, recorrido y métodos de arrays
2. **Manipulación del DOM** - Selección y modificación de elementos HTML
3. **Eventos** - Event listeners y manejo de interacciones del usuario
4. **localStorage** - Almacenamiento y recuperación de datos del navegador
5. **JSON** - Manejo y conversión de datos JSON
6. **fetch** - Peticiones HTTP asíncronas para cargar datos

## 🎯 Objetivo del Examen

Crear un **Juego de Trivia funcional** que permita al usuario responder preguntas, mantener una puntuación y guardar los resultados. El juego debe ser completamente funcional al finalizar el examen.

## 📁 Estructura del Proyecto

```
examen-trivia/
├── index.html          # Página principal (NO MODIFICAR)
├── resultados.html     # Página de resultados (NO MODIFICAR)
├── css/
│   ├── style.css       # Estilos principales (NO MODIFICAR)
│   └── resultados.css  # Estilos de resultados (NO MODIFICAR)
├── data/
│   └── preguntas.json  # Base de datos de preguntas (NO MODIFICAR)
└── js/
    ├── juego.js        # ⚠️ ARCHIVO A IMPLEMENTAR
    └── resultados.js   # ⚠️ ARCHIVO A IMPLEMENTAR
```

## 🚀 Funcionalidades Requeridas

### 📄 Archivo `js/juego.js` (60 puntos)

#### 1. Carga de Datos (10 puntos)
- ✅ Usar `fetch()` para cargar `./data/preguntas.json`
- ✅ Manejar la respuesta con `async/await` o `.then()`
- ✅ Convertir respuesta a JSON
- ✅ Manejar errores con `try-catch`

#### 2. Manejo de Arrays (10 puntos)
- ✅ Almacenar preguntas en array global
- ✅ Seleccionar 5 preguntas aleatorias para cada partida
- ✅ Mezclar preguntas usando algoritmo aleatorio
- ✅ Usar métodos de array (`slice`, `sort`, `forEach`)

#### 3. Manipulación del DOM (15 puntos)
- ✅ Ocultar/mostrar pantallas del juego
- ✅ Actualizar texto de elementos (pregunta, puntuación, temporizador)
- ✅ Crear botones de opciones dinámicamente
- ✅ Modificar clases CSS para feedback visual

#### 4. Manejo de Eventos (10 puntos)
- ✅ Event listener para botón "Comenzar Juego"
- ✅ Event listeners dinámicos para botones de respuesta
- ✅ Event listener para botón "Siguiente Pregunta"
- ✅ Event listener para `DOMContentLoaded`

#### 5. Lógica del Juego (10 puntos)
- ✅ Sistema de puntuación (10 puntos por respuesta correcta)
- ✅ Temporizador de 10 segundos por pregunta
- ✅ Validación de respuestas correctas/incorrectas
- ✅ Control de flujo entre preguntas

#### 6. localStorage (5 puntos)
- ✅ Guardar datos de la partida al finalizar
- ✅ Usar `localStorage.setItem()` con datos en formato JSON

### 📄 Archivo `js/resultados.js` (40 puntos)

#### 1. Recuperación de Datos (10 puntos)
- ✅ Usar `localStorage.getItem()` para obtener datos de la partida
- ✅ Convertir JSON a objeto con `JSON.parse()`
- ✅ Manejar casos donde no hay datos guardados

#### 2. Visualización de Resultados (15 puntos)
- ✅ Mostrar puntuación final
- ✅ Mostrar número de respuestas correctas
- ✅ Calcular y mostrar porcentaje de precisión
- ✅ Mostrar mensaje de rendimiento según puntuación

#### 3. Sistema de Ranking (10 puntos)
- ✅ Mantener ranking de mejores 5 puntuaciones
- ✅ Ordenar ranking por puntuación descendente
- ✅ Mostrar ranking en formato de lista
- ✅ Incluir fecha en cada entrada del ranking

#### 4. Funcionalidades Adicionales (5 puntos)
- ✅ Botón para limpiar ranking histórico
- ✅ Validación de datos antes de mostrar
- ✅ Manejo de errores y casos extremos

## 📊 Rúbrica de Calificación

### Criterios de Evaluación

| Aspecto | Excelente (90-100%) | Bueno (70-89%) | Regular (50-69%) | Deficiente (0-49%) |
|---------|---------------------|----------------|------------------|-------------------|
| **Funcionalidad** | Todas las funciones implementadas y funcionando correctamente | La mayoría de funciones implementadas con errores menores | Algunas funciones implementadas pero con errores | Pocas o ninguna función implementada |
| **Código JavaScript** | Código limpio, bien estructurado y comentado | Código funcional con estructura aceptable | Código funcional pero desordenado | Código no funcional o muy desorganizado |
| **Manejo de Conceptos** | Uso correcto de todos los conceptos evaluados | Uso correcto de la mayoría de conceptos | Uso básico de algunos conceptos | Uso incorrecto o ausente de conceptos |
| **Manejo de Errores** | Manejo completo de errores y casos extremos | Manejo básico de errores principales | Manejo mínimo de errores | Sin manejo de errores |

### Distribución de Puntos Detallada

#### `juego.js` - 60 puntos total
- **fetch y carga de JSON (10 pts)**
  - 10 pts: fetch implementado correctamente con manejo de errores
  - 7-9 pts: fetch funciona pero sin manejo completo de errores
  - 4-6 pts: fetch básico sin manejo de errores
  - 0-3 pts: fetch no implementado o no funcional

- **Manipulación de Arrays (10 pts)**
  - 10 pts: Selección aleatoria y mezclado correctos
  - 7-9 pts: Funciona pero algoritmo básico
  - 4-6 pts: Selección fija sin aleatoriedad
  - 0-3 pts: No implementado

- **DOM y Eventos (25 pts combinados)**
  - 25 pts: Todos los elementos y eventos funcionando
  - 18-24 pts: La mayoría funciona con errores menores
  - 10-17 pts: Funcionalidad básica presente
  - 0-9 pts: Muy limitado o no funcional

- **Lógica del Juego (15 pts)**
  - 15 pts: Puntuación, temporizador y flujo completos
  - 11-14 pts: Funciona con algunos errores
  - 6-10 pts: Funcionalidad básica
  - 0-5 pts: No implementado correctamente

#### `resultados.js` - 40 puntos total
- **localStorage y JSON (10 pts)**
  - 10 pts: Lectura y escritura correctas
  - 7-9 pts: Funciona con errores menores
  - 4-6 pts: Funcionalidad básica
  - 0-3 pts: No implementado

- **Visualización (15 pts)**
  - 15 pts: Todas las estadísticas mostradas correctamente
  - 11-14 pts: La mayoría de datos mostrados
  - 6-10 pts: Algunos datos mostrados
  - 0-5 pts: Muy limitado

- **Ranking (15 pts)**
  - 15 pts: Sistema completo de ranking funcional
  - 11-14 pts: Ranking básico funcionando
  - 6-10 pts: Ranking con errores
  - 0-5 pts: No implementado

## 🛠️ Instrucciones de Desarrollo

### 1. Configuración Inicial
1. **NO modificar** archivos HTML, CSS o JSON
2. Crear únicamente los archivos `js/juego.js` y `js/resultados.js`
3. Usar las variables y funciones indicadas en los comentarios TODO

### 2. Orden de Implementación Sugerido
1. **Comenzar con `juego.js`:**
   - Implementar carga de preguntas con fetch
   - Crear selección aleatoria de preguntas
   - Implementar navegación básica entre pantallas
   - Añadir lógica de respuestas y puntuación
   - Implementar temporizador
   - Guardar datos en localStorage

2. **Continuar con `resultados.js`:**
   - Recuperar datos del localStorage
   - Mostrar estadísticas básicas
   - Implementar sistema de ranking
   - Añadir funcionalidades extra

### 3. Funcionalidades Mínimas Requeridas
Para obtener una calificación aprobatoria, debe implementar:
- ✅ Carga de preguntas con fetch (básico)
- ✅ Mostrar preguntas en secuencia
- ✅ Sistema básico de puntuación
- ✅ Guardar resultado en localStorage
- ✅ Mostrar resultado final en página de resultados

### 4. Funcionalidades Avanzadas (para calificación alta)
- ✅ Temporizador funcional con visualización
- ✅ Selección aleatoria de preguntas
- ✅ Sistema completo de ranking
- ✅ Manejo de errores
- ✅ Validaciones de datos
- ✅ Feedback visual de respuestas

## 🧪 Cómo Probar tu Implementación

### Pruebas Básicas
1. **Carga inicial**: La página debe cargar sin errores en consola
2. **Navegación**: Botón "Comenzar" debe mostrar la primera pregunta
3. **Preguntas**: Deben mostrarse 5 preguntas diferentes
4. **Respuestas**: Seleccionar opciones debe dar feedback visual
5. **Finalización**: Debe redirigir a página de resultados
6. **Resultados**: Debe mostrar puntuación y estadísticas

### Pruebas Avanzadas
1. **Reload**: Recargar durante el juego no debe romper la funcionalidad
2. **localStorage**: Los datos deben persistir entre sesiones
3. **Ranking**: Múltiples partidas deben actualizar el ranking
4. **Errores**: El juego debe manejar errores de red graciosamente

## 📋 Lista de Verificación Final

Antes de entregar, verifica que tu implementación incluya:

### Técnico
- [ ] `fetch()` implementado correctamente
- [ ] Manejo de arrays con métodos nativos
- [ ] Event listeners configurados
- [ ] localStorage funcionando
- [ ] JSON parsing/stringify
- [ ] Manipulación del DOM

### Funcional
- [ ] El juego se puede iniciar y completar
- [ ] Las preguntas se cargan desde JSON
- [ ] La puntuación se calcula correctamente
- [ ] Los resultados se muestran al final
- [ ] El ranking histórico funciona
- [ ] No hay errores en la consola

### Código
- [ ] Código comentado y legible
- [ ] Variables con nombres descriptivos
- [ ] Funciones con una responsabilidad clara
- [ ] Manejo básico de errores implementado

## 🎯 Consejos para el Éxito

1. **Planifica antes de codificar**: Lee todos los TODOs antes de empezar
2. **Implementa paso a paso**: No intentes hacer todo a la vez
3. **Prueba frecuentemente**: Verifica cada función antes de continuar
4. **Usa console.log()**: Para debuggear tu código durante desarrollo
5. **Lee los errores**: La consola del navegador es tu amiga
6. **Gestiona tu tiempo**: Dedica 60% a `juego.js` y 40% a `resultados.js`

## ❌ Errores Comunes a Evitar

1. **No manejar promesas**: fetch requiere async/await o .then()
2. **Elementos null**: Verificar que getElementById encuentre elementos
3. **JSON inválido**: Usar JSON.parse() solo con strings válidos
4. **Event listeners múltiples**: No agregar listeners duplicados
5. **Variables globales**: Mantener estado consistente entre funciones
6. **Índices de arrays**: Recordar que empiezan en 0

## 🏆 Criterios de Excelencia

Para obtener la máxima calificación (95-100 puntos):
- Todas las funcionalidades implementadas y funcionando
- Código limpio, bien estructurado y comentado
- Manejo completo de errores y casos extremos
- Experiencia de usuario fluida y sin errores
- Implementación de funcionalidades bonus (temporizador visual, animaciones)

¡Buena suerte con tu examen! 🚀

---

**Nota importante**: Este examen evalúa conocimientos fundamentales de JavaScript Frontend. Concéntrate en implementar las funcionalidades core antes que en detalles estéticos.

