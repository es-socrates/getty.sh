---
title: Getty actualizado v1.0.6
date: 2025-08-19T00:00:00.000Z
permalink: /es/blog/update.1.0.6/
createTime: 2025/08/19 17:30
cover: https://thumbs.odycdn.com/e4ed0a803084b9ef3f5f721ec24bd4fd.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==Versión 1.0.6:== Lo más destacado de la actualización

Hoy les traemos un recorrido por los cambios más relevantes que llegan con la nueva versión 1.0.6. Hemos trabajado para mejorar la seguridad, el rendimiento y la experiencia visual tanto para administradores como para usuarios finales. Aquí tienes un resumen estructurado y fácil de digerir.

## Seguridad reforzada

1. Servidor Express limitado a localhost: ahora la API solo escucha peticiones locales, lo que reduce la superficie de ataque.
2 Actualización de Helmet (7.2.0 → 8.1.0) – se incorporan nuevas cabeceras de protección y correcciones de vulnerabilidades.

::: important

Mantener las dependencias actualizadas no solo evita vulnerabilidades, sino que también permite aprovechar mejoras de rendimiento y nuevas funcionalidades.

:::

## Experiencia de usuario renovada: Temas y estilos

1. Nuevo tema Minimalista para chats verticales y horizontales.
2. Modo Light (Claro) disponible como opción de tema de chat.
3. OsCard y utilidades OS: la UI ahora usa componentes OsCard, lo que brinda una apariencia más consistente y moderna.
4. Tipografía normalizada: los títulos de notificaciones usan 20px/800 dentro de OsCard, garantizando legibilidad en modo claro y oscuro.

## Widgets y paneles

1. Widget de anuncio configurable: los administradores pueden personalizar mensajes sin tocar código.
2. Persistencia de datos en "Tip Goal" corregida, evitando pérdidas inesperadas.
3. Paneles de administración migrados a OsCard con tokens os-* para títulos, márgenes y sombras uniformes.

## Interacción visual

1. GIF personalizado para notificaciones de propinas, añade un toque divertido y reconocible a cada propina.
2. Selección de color hexadecimal arreglada en "Tip Goal" y chat del panel admin, facilitando la personalización de colores exactos.

## Otimización y limpieza de código

1. Botón para limpiar tema en el chat en admin, ya no se envía CSS vacío, reduciendo tráfico innecesario.
2. Refactor de paneles/OBS, mayor modularidad y menos duplicación de código.
3. Estilos compartidos (os-table, encabezados, helpers) centralizados, lo que simplifica futuros cambios.

## Dumentación actualizada

1. README renovado con ejemplos claros y pasos de migración.

¿Qué significa todo esto para ti?

1. Administradores: mayor control visual y menos preocupaciones de seguridad. Los paneles son más intuitivos y la configuración de anuncios es tan sencilla como rellenar un formulario.
2. Desarrolladores: una base de dependencias más fresca y componentes reutilizables (OsCard, os-table) que facilitan la extensión del proyecto.
3. Usuarios finales: una experiencia de chat más limpia, temas modernos y notificaciones más atractivas (¡ahora con GIFs!).

## Próximos pasos

1. Actualiza tu instancia a la versión 1.0.6 descargando la app desde github.
2. Explora los nuevos temas de chat desde la sección de chat y prueba el tema que más te guste.
3. Configura el widget de anuncio para comunicar novedades o promociones directamente desde el panel admin.

¡Gracias por ser parte de Getty!

Cada mejora nace de tus comentarios y de nuestro compromiso con la privacidad y la usabilidad. Si tienes dudas, sugerencias o encuentras algún detalle que necesite ajuste, no dudes en abrir un issue en nuestro repositorio o contactar al equipo de soporte.

The Getty Team
