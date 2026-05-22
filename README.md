# React Quiz

Una aplicación interactiva de preguntas sobre React.js construida con React 19, enfocada en la gestión de estado con el hook `useReducer`.

## 📋 Descripción

**The React Quiz** es una aplicación tipo trivia que desafía tus conocimientos sobre React.js. Las preguntas se cargan desde un servidor JSON (json-server) y la experiencia incluye temporizador por pregunta, puntuación acumulada, historial de mejor puntaje y feedback visual inmediato al seleccionar respuestas.

## 🛠️ Tecnologías Utilizadas

- **React** (v19.2.3) — Librería de interfaz de usuario
- **React DOM** (v19.2.3) — Renderizado en el navegador
- **React Scripts** (5.0.1) — Herramientas de compilación y desarrollo (Create React App)
- **json-server** (v1.0.0-beta.15) — API REST falsa para servir las preguntas
- **useReducer** — Hook para gestión de estado complejo
- **useEffect** — Hook para efectos secundarios (llamadas API, timers)
- **CSS Puro** — Estilos sin librerías externas
- **Testing Library** — Para pruebas unitarias de componentes

## 📦 Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

## 🚀 Cómo Correr el Proyecto

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo (dos terminales)

**Terminal 1 — Iniciar el servidor JSON:**

```bash
npm run server
```

Esto inicia json-server en `http://localhost:8000` sirviendo las preguntas desde `data/questions.json`.

**Terminal 2 — Iniciar la aplicación React:**

```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`.

### 3. Construir para producción

```bash
npm run build
```

Genera una versión optimizada en la carpeta `build/`.

## 🎮 Funcionalidades

- **Carga asíncrona de preguntas**: Las preguntas se obtienen desde un servidor REST simulado con json-server
- **5 estados de la aplicación**: `loading`, `ready`, `error`, `active`, `finished` — gestionados con `useReducer`
- **Selección de respuestas**: Feedback visual inmediato (correcto/incorrecto) al elegir una opción
- **Barra de progreso**: Indicador visual del avance en el cuestionario
- **Puntuación en tiempo real**: Muestra puntos acumulados vs. puntos máximos posibles
- **Temporizador**: Cuenta regresiva basada en 30 segundos por pregunta; al llegar a cero finaliza el quiz automáticamente
- **Pantalla de resultados**: Muestra puntuación obtenida, porcentaje, mejor puntaje histórico y emoji según desempeño
- **Reinicio del quiz**: Permite volver a jugar manteniendo el mejor puntaje en la sesión
- **14 preguntas** sobre conceptos fundamentales de React (componentes, props, state, effects, hooks)
- **Preguntas con puntuación variable**: 10, 20 y 30 puntos según dificultad

## 📁 Estructura del Proyecto

```
react-quiz/
├── public/                    # Archivos estáticos (HTML, favicon, logos)
│   ├── index.html
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── data/
│   └── questions.json         # Base de datos de preguntas (json-server)
├── src/
│   ├── components/            # Componentes React
│   │   ├── Header.js          # Encabezado con logo y título
│   │   ├── Main.js            # Contenedor principal del contenido
│   │   ├── Loader.js          # Indicador de carga de preguntas
│   │   ├── Error.js           # Mensaje de error al cargar preguntas
│   │   ├── StartScreen.js     # Pantalla de bienvenida e inicio
│   │   ├── Question.js        # Visualización de la pregunta actual
│   │   ├── Options.js         # Opciones de respuesta con feedback
│   │   ├── Progress.js        # Barra de progreso y contador de puntos
│   │   ├── NextButton.js      # Botón "Next" / "Finish"
│   │   ├── Timer.js           # Temporizador con cuenta regresiva
│   │   ├── Footer.js          # Pie con Timer y NextButton
│   │   ├── FinishScreen.js    # Pantalla de resultados finales
│   │   └── DateCounter.js     # Componente de práctica para useReducer
│   ├── App.js                 # Componente principal con lógica del quiz
│   ├── App.css                # Estilos de Create React App (no usado)
│   ├── index.js               # Punto de entrada de React
│   ├── index.css              # Estilos globales de la aplicación
│   └── questions.json         # Copia local de preguntas (referencia)
├── package.json               # Dependencias y scripts
├── .gitignore
└── README.md                  # Este archivo
```

## 🔄 Estados del Quiz

El flujo de la aplicación se maneja mediante un `useReducer` con los siguientes estados:

| Estado     | Descripción                                     |
|------------|-------------------------------------------------|
| `loading`  | Cargando preguntas desde el servidor            |
| `ready`    | Preguntas cargadas, listo para comenzar         |
| `error`    | Error al conectar con el servidor de preguntas  |
| `active`   | Quiz en progreso (respondiendo preguntas)       |
| `finished` | Quiz completado (por respuesta o tiempo agotado)|

## 📝 Scripts Disponibles

| Script             | Descripción                                      |
|--------------------|--------------------------------------------------|
| `npm start`        | Inicia la aplicación en modo desarrollo          |
| `npm run build`    | Construye la aplicación para producción          |
| `npm test`         | Ejecuta las pruebas                              |
| `npm run server`   | Inicia json-server en el puerto 8000             |
| `npm run eject`    | Expone la configuración de React Scripts         |

## 👨‍💻 Autor

Daniel D. Pérez
