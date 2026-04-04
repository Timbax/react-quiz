# React Quiz

Un aplicativo interactivo de preguntas sobre React.js enfocado en el aprendizaje del hook `useReducer`.

## 📋 Descripción

Este proyecto es un quiz interactivo que permite a los usuarios responder preguntas sobre React.js. El objetivo principal es practicar y consolidar conocimientos de React mediante un sistema de puntuación progresiva. La aplicación fue desarrollada con el propósito de aprender y dominar el hook `useReducer` para la gestión del estado.

## 🛠️ Tecnologías Utilizadas

- **React** (v19.2.3) - Librería de interfaz de usuario
- **React DOM** (v19.2.3) - Renderizado en el navegador
- **React Scripts** (5.0.1) - Herramientas de compilación y desarrollo
- **json-server** (v1.0.0-beta.15) - Servidor JSON para simular API REST
- **Testing Library** - Para pruebas de componentes

## 📦 Requisitos Previos

- Node.js (v14 o superior)
- npm (v6 o superior)

## 🚀 Cómo Correr el Proyecto

### 1. Instalación de dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo (dos terminales)

**Terminal 1 - Iniciar el servidor JSON:**

```bash
npm run server
```

Este comando inicia json-server en `http://localhost:8000` sirviendo las preguntas desde `data/questions.json`.

**Terminal 2 - Iniciar la aplicación React:**

```bash
npm start
```

La aplicación se abrirá automáticamente en `http://localhost:3000`.

### 3. Construir para producción

```bash
npm run build
```

Esto crea una versión optimizada en la carpeta `build/`.

## 🎮 Funcionalidades

- **Carga de preguntas**: Las preguntas se cargan desde el servidor json-server
- **Gestión de estado con useReducer**: Manejo de estados (loading, ready, error, active, finished)
- **Interfaz interactiva**: Componentes reutilizables (Header, Main)
- **Sistema de puntuación**: Seguimiento del progreso del usuario

## 📁 Estructura del Proyecto

```
react-quiz/
├── public/           # Archivos públicos
├── src/
│   ├── components/   # Componentes React
│   │   ├── Header.js
│   │   └── Main.js
│   ├── App.js        # Componente principal con useReducer
│   └── index.js      # Punto de entrada
├── data/
│   └── questions.json # Base de datos de preguntas
├── package.json      # Dependencias y scripts
└── README.md         # Este archivo
```

## 🔄 Estados del Quiz

El quiz maneja los siguientes estados mediante `useReducer`:

- **loading** - Cargando preguntas del servidor
- **ready** - Preguntas cargadas y listas para comenzar
- **error** - Error al cargar las preguntas
- **active** - Quiz en progreso
- **finished** - Quiz completado

## 📝 Scripts Disponibles

- `npm start` - Inicia la aplicación en modo desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm test` - Ejecuta las pruebas
- `npm run server` - Inicia json-server para servir las preguntas
- `npm run eject` - Expone la configuración de React Scripts

## 👨‍💻 Autor

Daniel D. Pérez
