# Skin Maker - Tienda de Skins de Héroes 🔥
👨‍💻 Autor
Nombre: Gonzalo Agustin Dougan
Contacto: clashdougan@gmail.com


¡Bienvenido al proyecto **Skin Maker**! 🎨  
Este es un e-commerce donde puedes explorar y comprar skins para diferentes héroes en varias categorías, como **Fuego**, **Premium**, y **Clásico**. La aplicación está construida en React, integrada con Firebase para el backend y con un carrito de compras funcional que permite agregar productos, gestionar cantidades y finalizar la compra.

## 🚀 Características

- **Modo claro y modo nocturno**: Los usuarios pueden alternar entre temas claro y oscuro para mejorar la experiencia de visualización.
- **Filtrado por categorías**: Los héroes están clasificados en varias categorías como Fuego, Premium, y Clásico.
- **Carrito de compras**: Permite a los usuarios agregar, aumentar o disminuir la cantidad de productos y visualizar el total de la compra.
- **Finalización de compra**: Al finalizar una compra, se muestra un resumen del carrito con un mensaje de agradecimiento.
- **Integración con Firebase**: Almacena los datos de los productos y el historial de compras.

## 🛠️ Tecnologías utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **React Router**: Para la navegación entre distintas vistas de la aplicación.
- **Firebase**: Base de datos en tiempo real utilizada para el almacenamiento de productos y gestión de datos.
- **Vite**: Herramienta para el desarrollo de aplicaciones rápidas de React.
- **CSS Modules**: Para el manejo de los estilos de manera modular y evitar conflictos entre clases.
- **Context API**: Utilizado para manejar el estado global del carrito de compras.

## ⚙️ Configuración del proyecto

Para correr este proyecto en tu máquina local, sigue estos pasos:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/GonzalAgusD/ReactFinal-dougan


.Estructura:
├── public
├── src
│   ├── assets
│   ├── components
│   │   ├── Cart
│   │   ├── Item
│   │   ├── ItemDetail
│   │   ├── NavBar
│   │   └── ToggleThemeButton
│   ├── context
│   │   └── CartContext.jsx
│   ├── data
│   │   └── firebase.js
│   └── App.jsx
├── .gitignore
├── README.md
└── package.json

📦 Dependencias principales
react: ^18.0.0
react-dom: ^18.0.0
react-router-dom: ^6.0.0
firebase: ^9.0.0
vite: ^3.0.0

🚀 Funcionalidades adicionales
Toggle de tema (oscuro/claro): El botón de cambio de tema persiste a través de la aplicación.
Productos dinámicos desde Firebase: Los productos y categorías se cargan dinámicamente desde la base de datos Firebase.
