---
title: getty v1.0.8
date: 2025-09-5T00:00:00.000Z
permalink: /es/blog/update.1.0.8/
createTime: 2025/09/5 22:00
cover: https://thumbs.odycdn.com/8681c4b1ed400c1af05af2e8cc414481.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==λ v1.0.8:== ¡Lo hemos vuelto a hacer!

Getty ha vuelto a superarse con la ==versión 1.0.8==, y lo hace con excelentes soluciones que animarán a cualquiera a hacer transmisiones en vivo en Odysee, ahora con más notificaciones en tiempo real.

Esta actualización no solo pule los detalles que ya conocías, sino que abre una puerta totalmente nueva: **notificar automáticamente a tus canales de Discord o Telegram cuando tu transmisión pasa a "en vivo"**. Imagina que cada seguidor reciba al instante la alerta que el show ha comenzado, sin que tengas que mover un dedo. ¡Eso es poder de integración al máximo!

### ¿Qué trae de nuevo la página de Integraciones?

En la página de Integraciones encontrarás un formulario fresco y amigable que te permite configurar todo lo necesario para que tus notificaciones lleguen a los lugares correctos:

- **Selecciona tu destino:** Discord o Telegram, según donde tu comunidad esté más activa.
- **Personaliza el mensaje:** Define título, descripción, miniatura y pie de página. Cada campo está pensado para que tu anuncio sea visualmente atractivo y coherente con tu branding.
- **Guarda y listo:** Una vez guardada la configuración, el sistema queda a la espera de que tu canal entre en estado "en vivo". En ese momento, la notificación se "dispara" automáticamente, asegurando que nadie se pierda el comienzo de tu stream.

::: note

Si prefieres mantener el control total, también puedes enviar la notificación de forma manual desde las opciones. Es totalmente opcional, pero resulta útil para pruebas o para casos en los que quieras añadir un toque personal justo antes del arranque.

:::

### Historial de streams

Además de la notificación instantánea, getty v1.0.8 incorpora un ==historial de transmisiones en vivo== que convierte los datos crudos en una visión estratégica completa. Desde la tabla de contenidos podrás consultar cuántas horas has estado en vivo, cuántas visitas totales recibiste, las propinas acumuladas y verificables de tu billetera en Odysee, el promedio de espectadores y los días activos.

**Todo se desglosa de forma flexible:** puedes filtrar por día, semana o año y elegir entre vistas lineales o gráficas de barras para detectar tendencias al instante. Además, la herramienta permite exportar todo el historial para análisis externo, e importar datos previos, garantizando que nunca pierdas ni un solo detalle de tu trayectoria como creador. Con este panel, cada streamer tiene en sus manos una hoja de ruta basada en métricas reales, lista para impulsar su próximo gran salto.

![getty](https://thumbs.odycdn.com/17982d69339255fafa957ec17f8543c7.webp)

### Otros cambios destacados de getty v1.0.8

- **Documentación renovada:** Guía de contribución, Código de Conducta y el archivo ROUTES.md sincronizado para que colaborar sea más sencillo que nunca.
- **Mejoras visuales:** Nuevos emojis para insignias, paneles de actividad más claros y gráficos de uptime por módulo que muestran en tiempo real la disponibilidad de cada componente.
- **Rendimiento y estabilidad:** Correcciones de avatar por defecto, ajustes de zona horaria en los "daily buckets" y una solución definitiva para evitar cerrar sockets aún conectados.
- **Seguridad reforzada:** Eliminación de onerror inline y exposición de la configuración CSP por entorno, además de una anonimización parcial de IPs en los logs.
- **Nuevas herramientas de depuración:** Logs detallados en el hosted poller y diagnósticos de endpoints que facilitan la detección de problemas.

Todo esto se complementa con pequeños pero valiosos retoques: mejoras en el contenedor de chat, nuevos temas (incluido el elegante tema "X"), y una serie de correcciones menores que hacen que la experiencia sea más fluida y agradable.

### ¿Cómo sacarle el máximo provecho a la notificación en vivo?

1. Accede a la página de Integraciones dentro del panel de getty.
2. Elige Discord o Telegram y pega el webhook o token correspondiente.
3. Diseña tu mensaje:

- Título: algo llamativo como "🚀 ¡Nuestro stream está EN VIVO!"
- Descripción: breve resumen del contenido o invitación a participar.
- Miniatura: la portada del stream desde el post en Odysee.
- Pie de página: enlaces útiles, hashtags o agradecimientos.

4. Guarda la configuración.
5. Cuando tu canal cambie a "en vivo", la notificación se enviará automáticamente. Si deseas revisarla antes, pulsa el botón de envío manual y verifica que todo luzca perfecto.

Con esta herramienta, la distancia entre tu contenido y tu audiencia se reduce a segundos. Ya no tendrás que depender de recordatorios tardíos o de que alguien comparta el enlace; getty lo hace por ti.

![getty](https://thumbs.odycdn.com/1dd84b07f3bee24c6ab1b7eef9952afa.webp)

Getty v1.0.8 no es solo una lista de correcciones y mejoras técnicas; es una declaración de intenciones: queremos que tu comunidad esté siempre al día, que tus streams en Odysee tengan el mayor impacto posible y que tú puedas concentrarte en crear contenido, mientras nosotros nos encargamos de la logística de notificación.

La integración con Discord y Telegram es el ejemplo perfecto de cómo la plataforma evoluciona para adaptarse a los flujos de trabajo modernos y a la necesidad de comunicación instantánea.

::: important

Ah, por si no lo habíamos mencionado antes. La página de integración también incluye configuración webhook para notificaciones de propinas a Discord y Telegram. Si alguien envía propinas o hyperchats a tu billetera en Odysee, también se enviará una notificación a Discord o Telegram.

:::

Así que, si aún no has probado la nueva función te invitamos a probarla ahora mismo. Configura tu mensaje, guarda los cambios y prepárate para ver cómo tus seguidores aparecen en masa tan pronto como pulsas "transmitir en vivo".

La era de los avisos tardíos ha quedado atrás; con getty v1.0.8, la emoción llega al instante.

### **λ**
