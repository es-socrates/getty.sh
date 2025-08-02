---
title: Instalación
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /es/guide/usage/
tags:
  - Guía
  - Inicio rápido
---

## ==Cómo instalar y configurar Getty==

Si quieres potenciar tus interacciones en directo con Getty en Odysee, sigue esta guía paso a paso.

## Requisitos previos

**¿Qué es Node.js?** Node.js es un entorno de ejecución de JavaScript externo al navegador, diseñado para crear aplicaciones del lado del servidor y herramientas de línea de comandos. Es rápido, eficiente y esencial para muchas herramientas de streaming modernas (como Getty) y aplicaciones web.

## ¿Por qué Getty usa Node.js?

- Permite ejecutar JavaScript en tu ordenador (no solo en un navegador).
- Es ligero y rápido, ideal para aplicaciones en tiempo real (como alertas de streaming).
- Tiene acceso al sistema de archivos y a las redes, necesario para conectar ==Getty== con OBS, Discord, etc.
- Utiliza npm (Node Package Manager), lo que simplifica la instalación de dependencias (bibliotecas externas que Getty necesita para funcionar).

![nodejs](https://thumbs.odycdn.com/ef506c21c0db1d42e9abd7a8180e98eb.webp)

::: important

**¿Necesito saber programación para usarlo?** ¡No! Simplemente instálalo (como cualquier otro programa) y sigue los pasos del tutorial. Getty ya está programado; Node.js es solo el motor que lo hace funcionar.

:::

## ¿Cómo instalar Node.js?

- Descargue la versión LTS (recomendada) desde [Node.js](https://nodejs.org/).
- Ejecute el instalador (siguiente, siguiente...) ✔️).
- Verifique que funcione abriendo su terminal y escribiendo:

```sh
node -v
npm -v
```

## ¿Por qué no existe un instalador .exe tradicional?

**Getty usa Node.js porque:** Es multiplataforma (funciona en Windows, macOS y Linux). Permite actualizaciones rápidas (con git pull y npm install). Es el estándar para herramientas de desarrollo.

## ¿Cómo instalar el entorno de dependencia?

::: steps

1. **Clonar o descargar el repositorio**

Si estás familiarizado con Github deberás descargar el repositorio mediante cualquier entorno git de tu preferencia. **La opción B:** Descarga los archivos en formato ZIP y extrae la carpeta a tu PC.

2. **Abre la terminal en la carpeta Getty**

Vaya a la carpeta donde se encuentra Getty (ejemplo): cd ruta/carpeta/getty. O, desde la misma carpeta, haga clic derecho, abra la terminal y ejecute el siguiente comando:

```sh
npm install
```

Esto instalará todo lo necesario para que Getty funcione

3. **Contruye y ejecuta Getty**

Construya la aplicación con este comando:

```sh
npm run build
```
Inicia la aplicación con este comando:

```sh
npm start
```

4. **¡Listo! Accede a Getty en tu navegador.**

Abra su navegador y vaya a la siguiente dirección para ver la ==página de inicio== de Getty

```sh
http://localhost:3000
```

Para ingresar al ==administrador== deberás ir a la siguiente dirección o desde el menú de usuario.

```sh
http://localhost:3000/admin.html
```

⚡ Configura tus widgets (alertas de propinas, chat, objetivos, etc.) y agrégalos a OBS. Debes configurar la dirección wallet y datos del canal en admin.

::::

![getty](https://thumbs.odycdn.com/4aea46156da752d9b26664ae4ecd53ce.webp)

## ¿Cómo añadir widgets a OBS?

- Abre el software de OBS Studio.
- Agrega una nueva "Fuente del navegador".
- Pega la URL de tu widget: (p. ej., localhost:3000/widgets/chat.html).
- Ajusta el tamaño, la posición y color de cada widget.
- ¡Listo! Los widgets aparecerán en tu stream. ¡A streamear!

::: timeline horizontal
- Instala Getty

- OBS Studio
  type=success

- La URL del widget
  type=danger

- Personaliza todo
  type=important

- Transmite en vivo
  type=success
:::