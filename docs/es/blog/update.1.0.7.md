---
title: getty v1.0.7
date: 2025-08-29T00:00:00.000Z
permalink: /es/blog/update.1.0.7/
createTime: 2025/08/29 17:30
cover: https://thumbs.odycdn.com/437709ea7abb8670a1911eacb3522e5a.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==λ v1.0.7:== Mejoras y nuevas funcionalidades

En las últimas semanas, se ha estado mejorando intensamente la experiencia y reforzar la seguridad de getty. Entre los ajustes más visibles se encuentran las correcciones menores en los temas de chat, el contador de visualizaciones y los anuncios, que ahora funcionan con mayor fluidez y sin interrupciones. Además, se han optimizado los estilos CSS de los temas de chat, lo que se traduce en una apariencia más limpia y coherente, y se han añadido mejoras para los administradores, facilitando la gestión de los widgets y otros ajustes.

::: important

Actualmente existe una versión en línea que puedes probar, sin embargo, esta versión en línea tiene limitaciones en la capacidad de servidor y velocidad de sincronización, pero es una excelente puerta de entrada para que puedas conocer getty. Si quieres privacidad y no usar servicios en la nube, ejecuta getty localmente.

:::

Se han solucionado varios problemas de usabilidad, como la limitación de caracteres en los premios y la alineación de botones, garantizando que la interacción sea más intuitiva. Un avance importante es la incorporación de un sistema de métricas en tiempo real, acompañado de mejoras en la interfaz que permiten a los usuarios visualizar datos clave al instante. Junto a esto, se lanzó un nuevo tema para "Tip Goal" y se mejoró la puerta de enlace a Arweave, ofreciendo una integración más estable y segura con la red descentralizada.

![getty](https://thumbs.odycdn.com/72b81a6bea1e60356dcffc73ba58e5cd.webp)

Para ampliar la accesibilidad, se añadió la opción de Texto a Voz (TTS) opcional para todos los usuarios, acompañada de pequeñas correcciones que afinan su funcionamiento. En cuanto a la infraestructura, se actualizaron dependencias críticas como ESLint, Vue y PurgeCSS, lo que refuerza la calidad del código y reduce posibles vulnerabilidades. Se realizaron pruebas de hosting y se implementaron limpiezas de URLs en los widgets, asegurando que los enlaces sean más claros y seguros.

Los cambios de configuración y exportación se ampliaron, permitiendo una gestión más flexible de sesiones y tokens. Se reforzó la seguridad bloqueando transmisiones globales no autorizadas y ocultando secretos cuando no hay sesión activa. Asimismo, se corrigió la visibilidad de la billetera en entornos locales y se estandarizó la coloración de los chats en los hosts, mejorando la consistencia visual.

Se introdujeron mejoras en la optimización del servidor y en la protección de datos por sesión, incluyendo la habilitación de políticas CSP, listas blancas de origen WebSocket y la desaceleración de actualizaciones de metas de propinas para evitar sobrecargas. La lógica de la interfaz de usuario se extrajo a módulos dedicados, lo que simplifica el mantenimiento y la evolución del front‑end.

En el ámbito de la seguridad, se aislaron los datos por sesión, se validó la billetera y se aplicaron medidas de tokenización para proteger la información sensible. Los widgets ahora generan URLs tokenizadas y el panel de administración cuenta con protecciones adicionales contra accesos no deseados. Además, se sincronizó la rifa y se configuró la meta de propinas inicial, ofreciendo una experiencia más estructurada para eventos comunitarios en directo.

Finalmente, se añadieron nuevas funcionalidades como el historial o estadísticas de transmisiones en vivo desde el panel de administración, una renovación de la marca y migraciones parciales a Arweave, y finalmente, se lanzó la versión 1.0.7 de getty (λ), que incorpora mejoras de rendimiento y corrección de errores menores.

![getty](https://thumbs.odycdn.com/8812c1f415b7e9693ee5f5e63f9f3ca6.webp)

Todas estas actualizaciones reflejan el compromiso continuo del equipo por ofrecer una plataforma más robusta, segura y agradable para la comunidad.

### **λ**
