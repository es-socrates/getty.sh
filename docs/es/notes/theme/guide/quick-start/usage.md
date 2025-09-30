---
title: Instalación
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /es/guide/usage/
tags:
  - Guía
  - Inicio rápido
---

## ==Instala y configura getty==

::: important

La instalación de getty en tu computadora es totalmente opcional. Actualmente getty funciona en línea y puedes configurar tu cuenta y tener tus datos sincronizados en la nube cuando estés en vivo.

:::

Si quieres potenciar tus interacciones en vivo en Odysee usando getty, sigue esta guía paso a paso.

## Requisitos previos

**¿Node.js?** Es un entorno de ejecución de JavaScript fuera del navegador, usado para crear aplicaciones del lado del servidor y herramientas de línea de comandos. Es rápido, eficiente y esencial para muchas herramientas modernas de streaming (como getty) y aplicaciones web.

## ¿Por qué getty usa Node.js?

- Te permite ejecutar JavaScript en tu equipo (no solo en el navegador).
- Ligero y rápido—ideal para alertas de streaming en tiempo real.
- Proporciona acceso al sistema de archivos y a la red, necesario para conectar ==getty== con OBS, Discord, etc.
- Usa pnpm (Node Package Manager), que simplifica la instalación de las bibliotecas externas que necesita Getty.

![nodejs](https://thumbs.odycdn.com/ef506c21c0db1d42e9abd7a8180e98eb.webp)

::: important

**¿Necesito saber programar?** ¡No! Solo instálalo (como cualquier otro programa) y sigue el tutorial. Getty ya está construido; Node.js es solo el motor que lo ejecuta.

:::

## Cómo instalar Node.js

- Descarga la versión LTS (recomendada) desde [Node.js](https://nodejs.org/).
- Instala Node.js 22.x (el proyecto requiere Node >=22 <23).
- Habilita Corepack (incluido con Node) para que pnpm sea gestionado automáticamente por la versión fijada en package.json.
- Verifica que funciona abriendo una terminal y escribiendo:

```sh
corepack enable
node -v   # debería imprimir v22.x.x
pnpm -v   # Corepack aprovisionará pnpm@9.12.3
```

## ¿Por qué no hay un instalador .exe tradicional?

**Getty usa Node.js porque:** es multiplataforma (Windows, macOS, Linux), permite actualizaciones rápidas (git pull + pnpm install) y es un estándar de facto para herramientas.

## Cómo instalar el entorno de dependencias

::: steps

1. **Clonar o descargar el repositorio**

Si estás familiarizado con GitHub, [clona el repositorio](https://github.com/es-socrates/getty) usando cualquier herramienta git que prefieras. **Opción B:** descarga el ZIP y extráelo en tu PC.

2. **Abrir una terminal en la carpeta de getty**

Entra a la carpeta donde está Getty (ejemplo): `cd Downloads/getty`. O desde la carpeta, clic derecho, abrir terminal, luego ejecuta:

```sh
pnpm install
```

Esto instala todo lo que Getty necesita.

3. **Compilar y ejecutar Getty**

Ejecuta la app con:

```sh
pnpm run build
pnpm run start:prod
```

4. **¡Listo! Accede a Getty en tu navegador.**

Abre tu navegador y ve a la siguiente dirección para ver la ==página de inicio== de Getty:

```sh
http://localhost:3000
```

Para ingresar al ==panel de administración== visita:

```sh
http://localhost:3000/admin/status
```

**Importante:** Si descargas una actualización de getty, debes repetir el proceso de instalación. En algunos casos puede haber nuevas dependencias por instalar, por lo que puede ser necesario repetir el proceso.

⚡ Configura tus widgets (alertas de propinas, chat, metas, etc.) y añádelos a OBS. Debes establecer la dirección de la billetera y los datos del canal en admin.

::::

## Visita getty en el navegador:

- **Bienvenida & landing:** http://localhost:3000/ (las visitas por primera vez redirigen a /welcome para que elijas idioma y conectes tu billetera).
- **Dashboard:** http://localhost:3000/user/tu-token-de-usuario
  Después de iniciar sesión con Wander Wallet, getty emite un token de widget y lo guarda en la cookie/localStorage getty_widget_token. Las visitas posteriores a / redirigen automáticamente a tu ruta de dashboard.
  Si un token expira o se elimina, la página de bienvenida lo indica claramente y te pide iniciar sesión de nuevo.
- **Admin:** http://localhost:3000/admin/status

La página de administración de la app tiene todos los enlaces de widgets para OBS. Te recomiendo guardar los cambios en la página de admin y comprobar que todos estén activos, o al menos los que necesitas.

![getty](https://thumbs.odycdn.com/8812c1f415b7e9693ee5f5e63f9f3ca6.webp)

## Cómo agregar widgets a OBS

- Abre OBS Studio.
- Añade una nueva "Fuente de navegador" (Browser Source).
- Pega la URL de tu widget (p. ej., localhost:3000/widgets/chat).
- Ajusta el tamaño, la posición y el estilo de cada widget.
- **¡Listo! Los widgets aparecerán en tu transmisión. ¡Feliz streaming!**
