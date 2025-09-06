---
title: Instalación
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /es/guide/usage/
tags:
  - Guía
  - Inicio rápido
---

## ==Cómo instalar y configurar getty==

Si quieres potenciar tus interacciones en directo con getty con Odysee, sigue esta guía paso a paso.

## Requisitos previos

**¿Qué es Node.js?** Node.js es un entorno de ejecución de JavaScript externo al navegador, diseñado para crear aplicaciones del lado del servidor y herramientas de línea de comandos. Es rápido, eficiente y esencial para muchas herramientas de streaming modernas (como getty) y aplicaciones web.

## ¿Por qué getty usa Node.js?

- Permite ejecutar JavaScript en tu ordenador (no solo en un navegador).
- Es ligero y rápido, ideal para aplicaciones en tiempo real (como alertas de streaming).
- Tiene acceso al sistema de archivos y a las redes, necesario para conectar ==getty== con OBS, Discord, etc.
- Utiliza npm (Node Package Manager), lo que simplifica la instalación de dependencias (bibliotecas externas que getty necesita para funcionar).

![nodejs](https://thumbs.odycdn.com/ef506c21c0db1d42e9abd7a8180e98eb.webp)

::: important

**¿Necesito saber programación para usarlo?** ¡No! Simplemente instálalo (como cualquier otro programa) y sigue los pasos del tutorial. getty ya está programado; Node.js es solo el motor que lo hace funcionar.

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

Si estás familiarizado con Github deberás [descargar el repositorio](https://github.com/es-socrates/getty) mediante cualquier entorno git de tu preferencia. **La opción B:** Descarga los archivos en formato ZIP y extrae la carpeta a tu PC.

2. **Abre la terminal en la carpeta getty**

Ingresa a la carpeta donde se encuentra getty (ejemplo): `cd Descargas/getty`. También, desde la carpeta, hacer clic derecho, abrir la terminal y ejecutar el siguiente comando:

```sh
npm install
```

Esto instalará todo lo necesario para que getty funcione

3. **Contruye y ejecuta getty**

Ejecuta la aplicación con este comando:

```sh
npm run start:prod
```

4. **¡Listo! Accede a getty en tu navegador.**

Abra su navegador y vaya a la siguiente dirección para ver la ==página de inicio== de getty

```sh
http://localhost:3000
```

Para ingresar al ==administrador== deberás ir a la siguiente dirección o desde el menú de usuario.

```sh
http://localhost:3000/admin
```

⚡ Configura tus widgets (alertas de propinas, chat, objetivos, etc.) y agrégalos a OBS. Debes configurar la dirección wallet y datos del canal en admin.

::::

![getty](https://thumbs.odycdn.com/8812c1f415b7e9693ee5f5e63f9f3ca6.webp)

## ¿Cómo añadir widgets a OBS?

- Abre el software de OBS Studio.
- Agrega una nueva "Fuente del navegador".
- Pega la URL de tu widget: (p. ej., localhost:3000/widgets/chat).
- Ajusta el tamaño, la posición y color de cada widget.
- **¡Listo! Los widgets aparecerán en tu stream. ¡A streamear!**

::: timeline horizontal

- Instala getty

- OBS Studio
  type=success

- La URL del widget
  type=danger

- Personaliza
  type=important

- Transmite en vivo
  type=success
  :::
