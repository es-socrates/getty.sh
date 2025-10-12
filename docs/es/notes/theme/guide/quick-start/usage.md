---
title: Instalación
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /es/guide/usage/
tags:
  - Guía
  - Inicio rápido
---

# Primeros pasos

## Inicia sesión con Wander

Para configurar getty en el modo online y en localhost debes iniciar sesión con Wander. Wander App es una billetera digital segura y fácil de usar para Odysee, que te permite autenticarte en getty sin necesidad de contraseñas tradicionales. Es esencial para acceder a funciones de getty como la configuración de widgets y la gestión de datos cifrados. [Descarga Wander para empezar](https://www.wander.app/).

![getty](https://thumbs.odycdn.com/9b4343aebb3729a88e5f87b93ed4caf1.webp)

## Respalda tu billetera

Recomendamos respaldar tu billetera Wander en un lugar seguro. Este respaldo de la billetera también es necesario cuando configuras tu billetera en Odysee con Wander. Para saber más sobre cómo respaldar tu billetera visita la documentación en Odysee. [Billetera Wander Integrada](https://help.odysee.tv/es/category-monetization/wander/).

## Módulos y widgets en getty

Cada módulo o widget en getty debe ser configurado para que puedas integrarlo en las escenas de tu OBS o software de transmisión en vivo. No es necesario que los configures todos, pero si necesitas configurar los más básicos aquí te mostramos cómo configurar los widgets más importantes.

![getty](https://thumbs.odycdn.com/d0685d48c1142814d34c9fdbad591a0f.webp)

## Configurar Live analytics

Las métricas de tus transmisiones en vivo son importantes para que conozcas el desempeño de cada directo que haces en Odysee. Estas analíticas te muestran aspectos como la cantidad de horas por transmisión en vivo, la media de espectadores y mucho más. Para configurar las analíticas de directos, debes poner el **ClaimID de tu canal de Odysee** que hará el directo, luego guardar los cambios.

Para encontrar el ClaimID de tu canal en Odysee debes ir a la página de tu canal en Odysee, y en la pestaña de **"About"** podrás encontrar el ClaimID del canal, copias el ClaimID y lo pegas en el formulario de Live analytics en getty. Cuando vayas en vivo las analíticas registrarán la actividad de tu directo.

![odysee](https://thumbs.odycdn.com/5b2ceb22b6c5324049125550fb1bff34.webp)

![getty](https://thumbs.odycdn.com/8e89bbfebfa1fbeb2a95a6482526d5d8.webp)

## Configurar chat en vivo

El widget de chat en vivo tiene múltiples configuraciones, pero para que funcione en tu software de transmisión en vivo debes configurar el chat desde el admin de getty. Para esto, debes ir a la página de chat, luego, poner en ClaimID del post en vivo que hayas creado en Odysee el cual se usará para mostrar los mensajes de chat.

El ClaimID del post lo encuentras presionando el icono de Créditos y allí podrás ver el ClaimID del post, lo copias y lo pegas en la configuración de chat en getty. Luego, guardas los cambios y copias la URL de integración para el OBS.

![odysee](https://thumbs.odycdn.com/907b5ee95bf4bf4a62201fac627f5fa4.webp)

::: important

Los mensajes en el widget de chat no se almacenan en ninguna parte, por lo que si actualizas la fuente de navegador en OBS Studio los mensajes se perderán y recibirás los nuevos. Por ahora getty no almacena el historial de mensajes del widget de chat, pero creemos que esto debe ser necesario en algún momento.

:::

![getty](https://thumbs.odycdn.com/58826d96e18a12c0990c9c1dd1065e38.webp)

En resumen, cada widget o módulo que requiera un ClaimID en específico lo podrás agregar manualmente. Por ejemplo, para configurar el widget de Espectadores o del sistema de logros debes poner el ClaimID del canal. Cada widget tiene su propia URL para integrar en wl OBS Studio o cualquier software de transmisión en vivo que uses para conectarte a Odysee.

::: important

En algunos casos es posible que OBS Studio almacene caché de algún widget. Si notas algún comportamiento extraño puedes actualizar el widget desde la fuente de navegador en OBS, limpiar la caché y probar de nuevo.

:::

## Instala getty en localhost

::: important

La instalación de getty en tu computadora es totalmente opcional. Actualmente getty funciona en línea y puedes configurar tu cuenta y tener tus datos sincronizados en la nube cuando estés en vivo.

:::

## Requisitos previos

**¿Node.js?** Es un entorno de ejecución de JavaScript fuera del navegador, usado para crear aplicaciones del lado del servidor y herramientas de línea de comandos. Es rápido, eficiente y esencial para muchas herramientas modernas de streaming (como getty) y aplicaciones web.

## ¿Por qué getty usa Node.js?

- Te permite ejecutar JavaScript en tu equipo (no solo en el navegador).
- Ligero y rápido — ideal para alertas de streaming en tiempo real.
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
node -v # debería imprimir v22.x.x
pnpm -v # Corepack aprovisionará pnpm@9.12.3
```

## ¿Por qué no hay un instalador .exe tradicional?

**Getty usa Node.js porque:** es multiplataforma (Windows, macOS, Linux), permite actualizaciones rápidas (git pull + pnpm install) y es un estándar de facto para herramientas.

## Cómo instalar el entorno de dependencias

::: steps

1. **Clonar o descargar el repositorio**

Si estás familiarizado con GitHub, [clona el repositorio](https://github.com/es-socrates/getty) usando cualquier herramienta git que prefieras. **Opción B:** descarga el ZIP y extráelo en tu PC.

2. **Abrir una terminal en la carpeta de getty**

Entra a la carpeta donde está getty (ejemplo): `cd Downloads/getty`, cambia el nombre del archivo `.env.example a .env`. Luego, clic derecho dentro de la carpeta, abrir terminal, luego ejecuta:

```sh
pnpm install
```

Esto instala todo lo que getty necesita.

3. **Compilar y ejecutar getty**

Ejecuta la app con:

```sh
pnpm run build
pnpm run start:prod
```

4. **¡Listo! Accede a getty en tu navegador.**

Abre tu navegador y ve a la siguiente dirección para ver la ==página de inicio== de getty:

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

![getty](https://thumbs.odycdn.com/f6efdb258f171eab858482e3402ffc78.webp)

## Cómo agregar widgets a OBS

- Abre OBS Studio.
- Añade una nueva "Fuente de navegador" (Browser Source).
- Pega la URL de tu widget (p. ej., localhost:3000/widgets/chat).
- Ajusta el tamaño, la posición y el estilo de cada widget.
- **¡Listo! Los widgets aparecerán en tu transmisión. ¡Feliz streaming!**
