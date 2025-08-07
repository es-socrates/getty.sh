---
title: Getty actualizado v1.0.4
date: 2025-08-03T00:00:00.000Z
permalink: /es/blog/update.1.0.4/
createTime: 2025/08/07 19:00
cover: https://thumbs.odycdn.com/24caacb3bc16b8c6b1932b275978ee12.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==Versión 1.0.4:== Nueva función: Edición de tema personalizado en el chat.

¡Hola a todos! Nos complace anunciar el lanzamiento de la última versión de Getty, la versión 1.0.4. Esta actualización trae varias mejoras y nuevas funciones que enriquecen la experiencia de usuario. Veamos qué ha cambiado:

## Cambios realizados

### 1. Dependencia faltante: html-minifier-terser

Se ha añadido la dependencia faltante `html-minifier-terser` para mejorar el procesamiento y la optimización de HTML.

### 2. Actualización de stylelint de 16.22.0 a 16.23.0

La versión de stylelint se ha actualizado a 16.23.0 para mejorar el estilo y el linting del código.

### 3. Integración OBS WebSocket

Se ha añadido una nueva función que permite la integración con OBS (Open Broadcaster Software) mediante WebSocket. Esto permite una interacción fluida con OBS en diferentes dispositivos.

### 4. Mejoras en Tip-Goal UX y audio personalizado

La interfaz de usuario de Tip-Goal ha sido mejorada, junto con mejoras en el manejo de audio personalizado, proporcionando una experiencia más fluida.

### 5. Backend: Persistencia total de la configuración de Liveview

El backend ahora soporta completamente la persistencia de las configuraciones de liveview, asegurando que los ajustes se guarden y puedan restaurarse.

### 6. Nuevos iconos para la insignia del chat

Se han introducido nuevos iconos para la insignia del chat, mejorando el atractivo visual y la identificación de los usuarios.

### 7. Correcciones menores en el chat

Se han implementado varias correcciones menores para mejorar la funcionalidad general del chat.

### 8. Mejoras en server.js

El archivo `server.js` ha sido actualizado para guardar y devolver todos los campos del widget (etiqueta, fondo, color, fuente, tamaño, claimID, icono) usando valores por defecto y funciones de combinación. Esto asegura que todos los campos se gestionen y muestren correctamente.

### 9. Manejo de archivos de iconos

El manejo de archivos de iconos ahora permite subir, previsualizar y eliminar, con limpieza automática de archivos anteriores.

### 10. Mejoras en el panel de administración

El panel de administración ahora refleja correctamente todos los campos y actualizaciones en tiempo real, con retroalimentación visual, botón de eliminar claro y capacidades de previsualización instantánea.

### 11. Estado y previsualización de audio

El panel de administración ahora muestra el estado del audio, previsualizaciones y controles dinámicos según la selección (remoto/personalizado), mejorando la configuración y reproducción de audio.

### 12. Mejoras en la sección de sorteos

Se han añadido iconos SVG a los botones de la sección de sorteos (iniciar, pausar, reanudar, detener, sacar, reiniciar, guardar) para mejorar la interfaz visual.

### 13. Implementación de EscapeHTML

Se ha implementado `escapeHTML` para prevenir XSS (Cross-Site Scripting) al renderizar nombres en la lista de redes sociales, asegurando la seguridad.

### 14. Mejoras en el proceso de compilación

- **Secuenciación controlada**: Uso de `npm-run-all` para una mejor gestión de tareas.
- **Minificación CSS**: Uso de PostCSS/cssnano para una minificación eficiente de CSS.
- **Ajustes en Tailwind Config**: Se realizaron los ajustes necesarios en `tailwind.config.js`.
- **Limpieza de dependencias**: Se eliminaron dependencias innecesarias para optimizar el rendimiento.

Estos cambios mejoran colectivamente la funcionalidad, usabilidad y seguridad de Getty. Nos comprometemos a ofrecer una experiencia fluida y agradable para todos los usuarios.

### 15. Nueva función: Edición de tema personalizado en el chat

En esta versión, hemos introducido una nueva y emocionante función que permite a los usuarios personalizar completamente la apariencia de sus chats. Con la edición de temas personalizados, ahora puedes ajustar cada aspecto del diseño de la interfaz de chat para adaptarlo a tus preferencias personales o a la identidad visual de tu marca.

La interfaz de administración se ha mejorado para ofrecer una experiencia de personalización simple e intuitiva. Visualiza los cambios en tiempo real mientras ajustas la configuración del tema.

**Guardar y cargar temas:** Guarda tus temas personalizados para usarlos en futuras sesiones. Carga temas predefinidos o comparte tus creaciones con otros usuarios.

**Previsualización:** Mientras ajustas la configuración del tema, verás una previsualización en tiempo real de cómo se verá tu chat.

**Guardar y aplicar:** Una vez que estés satisfecho con tu tema, guárdalo y aplícalo a tu chat copiando el CSS personalizado en la fuente de chat de OBS.

Si tienes alguna pregunta o necesitas ayuda adicional, no dudes en contactarnos. ¡Gracias por elegir Getty!

El equipo de Getty
