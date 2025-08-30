---
title: Blog de actualizaciones
icon: material-symbols:article-outline
createTime: 2025/07/28 12:00
permalink: /es/guide/blog/
tags:
  - Guía
  - Inicio rápido
---

Cada ==actualización de getty== incluirá un resumen de las últimas implementaciones y mejoras. Probablemente verá código y elementos similares a los de este ejemplo, pero intentamos mantenerle al tanto de cada cambio significativo, aunque todos los detalles estarán disponibles en nuestro blog y en GitHub.

### Ejemplo en resumen de la última actualización de getty

## ==Nuevo: Sistema de sorteos con comandos. ¡Genial!==

Hemos implementado una nueva función de sorteos para tus transmisiones en vivo. Crea comandos personalizados con premios para sortear y deja que tu comunidad participe en vivo desde el chat.

[Más detalles en el repositorio de getty en github.](https://github.com/es-socrates/getty)

::: code-tabs
@tab modules/chat.js

```js
try {
  const raffle = global.gettyRaffleInstance;
  if (
    raffle &&
    typeof raffle.addParticipant === "function" &&
    raffle.active &&
    !raffle.paused &&
    typeof raffle.command === "string" &&
    typeof chatMessage.message === "string"
  ) {
    const msg = chatMessage.message.trim().toLowerCase();
    const cmd = raffle.command.trim().toLowerCase();
    if (msg === cmd || msg === cmd.replace(/^!/, "") || msg === "!" + cmd) {
      const added = raffle.addParticipant(
        chatMessage.username,
        chatMessage.userId
      );
      if (added) {
        Logger.info(`[Giveaway] New participant: ${chatMessage.username}`);
      }
    }
  }
} catch (err) {
  Logger.error("[Giveaway] Error trying to add participant:", err);
}
```

:::
