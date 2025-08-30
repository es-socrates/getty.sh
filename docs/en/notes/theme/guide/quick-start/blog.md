---
title: Blog updates
icon: material-symbols:article-outline
createTime: 2025/07/28 12:00
permalink: /en/guide/blog/
tags:
  - Guide
  - Quick Start
---

Each ==getty update== will have a summary of the latest implementations and enhancements. You'll probably see code and stuff like in this example, but we try to let you know about every significant change, although all the details will be on our blog and github.

### Here is an example of a summary of the latest getty update.

## ==New: Giveaway system with commands. Woohoo!==

We have implemented a new giveaway feature for your livestreams. Create custom commands with prizes to raffle and let your community participate live from the chat.

[More details in the getty repository on GitHub.](https://github.com/es-socrates/getty)

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
