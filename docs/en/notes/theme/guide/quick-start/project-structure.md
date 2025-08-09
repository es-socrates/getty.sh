---
title: Getty Structure
icon: ph:tree-structure-bold
createTime: 2025/07/28 11:00
permalink: /en/guide/project-structure/
---

### Here is the detailed folder structure of the Getty project based on the repository

::: file-tree

- .git/
- **getty**
  - config
  - docs
    - ROUTES.md
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
      - icons
        - beer.png
        - cool.png
        - crown.png
        - cry.png
        - hamburguer.png
        - heart.png
        - laugh.png
        - serious.png
        - star.png
        - tongue.png
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
    - uploads
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
  - routes
    - audio-settings.js
    - chat.js
    - external-notifications.js
    - goal-audio.js
    - language.js
    - last-tip.js
    - liveviews.js
    - obs.js
    - raffle.js
    - socialmedia.js
    - tip-goal.js
    - tts.js
  - src
    - admin.html
    - index.html
    - input.css
  - test
    - api-language-raffle.test.js
    - api-more.test.js
    - api-raffle-validation.test.js
    - api-socialmedia-validation.test.js
    - api-tip-goal-validation.test.js
    - server.test.js
- .env.example
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

The project structure will be modified in the future, and you will have to update the repository or download the repository (folder) again. If you make any modifications on your own, check which file needs to be backed up.

:::
