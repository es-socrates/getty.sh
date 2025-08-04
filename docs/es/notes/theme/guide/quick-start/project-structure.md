---
title: Estructura de Getty
icon: ph:tree-structure-bold
createTime: 2025/07/28 11:00
permalink: /es/guide/project-structure/
---

### Aquí se muestra la estructura de carpetas detallada del proyecto Getty basado en el repositorio

::: file-tree

- .git/
- **getty**
  - modules
    - chat.js
    - external-notifications.js
    - language-config.js
    - last-tip.js
    - raffle.js
    - socialmedia.js
    - tip-goal.js
    - tip-widget.js
  - public
    - assets
      - getty-fav.png
      - getty.png
      - gettydark.png
      - odysee.png
    - css
      - admin.css
      - liveviews.css
      - styles.css
      - theme.css
    - js
      - min
        - .gitkeep
      - admin.js
      - app.js
      - chat.js
      - giveaway.js
      - languages.js
      - last-tip.js
      - liveviews.js
      - persistent-notifications.js
      - raffle-admin.js
      - socialmedia.js
      - tip-goal.js
      - tip-widget.js
    - widgets
      - chat.css
      - chat.html
      - giveaway.css
      - giveaway.html
      - last-tip.css
      - last-tip.html
      - liveviews.css
      - liveviews.html
      - obs-config.js
      - persistent-notifications.css
      - persistent-notifications.html
      - raffle.css
      - raffle.html
      - socialmedia.css
      - socialmedia.html
      - tip-goal.css
      - tip-goal.html
      - tip-notification.css
      - tip-notification.html
  - emojis.json
  - src
    - admin.html
    - index.html
    - input.css
- .gitignore
- .stylelintrc
- INTERNATIONALIZATION.md
- LICENSE
- package-lock.json
- package.json
- postcss.config.js
- README.md
- server.js
- tailwind.config.js
- tts-settings.json
  :::

::: important

La estructura del proyecto se modificará en el futuro, por lo que deberá actualizar el repositorio o descargarlo (carpeta) de nuevo. Si realiza alguna modificación, compruebe qué archivo necesita copia de seguridad.

:::

## Estilos en OBS en el widget de chat (opcional)

El **widget de chat tiene estilos definidos en CSS**. Si bien puedes cambiar los colores desde el administrador, algunos estilos pueden ayudarte a adaptarlos visualmente a tus necesidades en la pantalla de OBS, aunque no es obligatorio usarlos. Recuerda que puedes experimentar con el estilo que quieras en Getty.

Este estilo va dentro de la fuente en OBS, en la personalización de CSS.

```css title="chat.html"
  body { 
  background-color: rgba(0,0,0,0) !important; 
  overflow: hidden !important;
}

.message-text-inline {
    font-size: 22px;
}

.message-username.cyberpunk {
    font-size: 22px;
}

.message-avatar {
    width: 38px;
    height: 36px;
    border-radius: 50%;
    overflow: hidden;
    background: #21262d;
}

.message-avatar img {
    width: 38px;
    height: 38px;
    object-fit: cover;
}

.comment-emoji,
.message-content .comment-emoji {
    vertical-align: middle;
    position: relative;
    top: -2px;
    margin: 10px 2px;
    max-width: 24px;
}

.message.has-donation .message-username {
    font-size: 22px;
}

.message.has-donation .message-text-inline {
    font-size: 22px;
    font-weight: 700;
    font-family: var(--odysee-font-family);
    white-space: normal;
}

.message-donation {
    font-size: 18px;
}
```
