---
title: Actualizaciones
icon: material-symbols:article-outline
createTime: 2025/07/28 12:00
permalink: /es/guide/blog/
tags:
  - Guía
  - Inicio rápido
---

Cada ==actualización de Getty== incluirá un resumen de las últimas implementaciones y mejoras. Probablemente verá código y elementos similares a los de este ejemplo, pero intentamos mantenerle al tanto de cada cambio significativo, aunque todos los detalles estarán disponibles en nuestro blog y en GitHub. Aquí un breve ejemplo de una actualización.

## Nuevo: Sistema de sorteos con comandos. ¡Genial!

Hemos implementado una nueva función de sorteos para tus transmisiones en vivo. Crea comandos personalizados con premios para sortear y deja que tu comunidad participe en vivo desde el chat. [Más detalles en Github.](https://github.com/es-socrates/getty/commit/4bdfae5de697cd399381a15f6faf455a2629e7cd)

::: code-tabs
@tab modules/chat.js

```js
      try {
        const raffle = global.gettyRaffleInstance;
        if (
          raffle &&
          typeof raffle.addParticipant === 'function' &&
          raffle.active &&
          !raffle.paused &&
          typeof raffle.command === 'string' &&
          typeof chatMessage.message === 'string'
        ) {
          const msg = chatMessage.message.trim().toLowerCase();
          const cmd = raffle.command.trim().toLowerCase();
          if (msg === cmd || msg === cmd.replace(/^!/, '') || msg === '!' + cmd) {
            const added = raffle.addParticipant(chatMessage.username, chatMessage.userId);
            if (added) {
              Logger.info(`[Giveaway] New participant: ${chatMessage.username}`);
            }
          }
        }
      } catch (err) {
        Logger.error('[Giveaway] Error trying to add participant:', err);
      }
```

:::

## Información del sorteo

Cada `comando` de widget personalizado debe ser configurado `manualmente` por el propietario del canal en Odysee.

| Propiedad   | Tipo      | Descripción               |
| ----------- | ----------| --------------------------|
| Form        | `text`    | !obsequio                 |
| Form        | `text`    | Nombre del premio         |
| Image       | `file`    | Imagen de la recompensa   |
| Status      | `status`  | Habilitado o deshabilitado|
| Form        | `button`  | Iniciar sorteo            |
| Form        | `button`  | Pausar sorteo             |
| Form        | `button`  | Resumir sorteo            |
| Form        | `button`  | Detener sorteo            |
| Form        | `button`  | Escoger ganador           |
| Form        | `button`  | Resetear ganadores        |
