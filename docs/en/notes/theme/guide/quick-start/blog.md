---
title: Blog updates
icon: material-symbols:article-outline
createTime: 2025/07/28 12:00
permalink: /en/guide/blog/
tags:
  - Guide
  - Quick Start
---

Each ==Getty update== will have a summary of the latest implementations and enhancements. You'll probably see code and stuff like in this example, but we try to let you know about every significant change, although all the details will be on our blog and github. Take a look at what an update looks like.

## New: Giveaway system with commands. Woohoo!

We have implemented a new giveaway feature for your livestreams. Create custom commands with prizes to raffle and let your community participate live from the chat. [More details on Github.](https://github.com/es-socrates/getty/commit/4bdfae5de697cd399381a15f6faf455a2629e7cd)

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

## Giveaway Information

Each custom widget `command` must be configured `manually` by the owner of the channel in Odysee.

| Property    | Type      | Description               |
| ----------- | ----------| --------------------------|
| Form        | `text`    | !giveaway                 |
| Form        | `text`    | Prize name or description |
| Image       | `file`    | Image of the reward       |
| Status      | `status`  | Enabled or disabled       |
| Form        | `button`  | Start giveaway            |
| Form        | `button`  | Pause giveaway            |
| Form        | `button`  | Resume giveaway           |
| Form        | `button`  | Stop giveaway             |
| Form        | `button`  | Draw Winner               |
| Form        | `button`  | Reset Winners             |