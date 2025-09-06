---
title: Installation
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /en/guide/usage/
tags:
  - Guide
  - Quick Start
---

## ==How to install and configure Getty==

If you want to enhance your live interactions on Odysee using Getty, follow this step‑by‑step guide.

## Prerequisites

**What is Node.js?** Node.js is a JavaScript runtime outside the browser, used to build server‑side apps and command‑line tools. It’s fast, efficient, and essential for many modern streaming tools (like Getty) and web applications.

## Why does Getty use Node.js?

- Lets you run JavaScript on your machine (not just in a browser).
- Lightweight and fast—great for real‑time streaming alerts.
- Provides filesystem and network access, needed to connect ==Getty== with OBS, Discord, etc.
- Uses npm (Node Package Manager), which simplifies installing the external libraries Getty needs.

![nodejs](https://thumbs.odycdn.com/ef506c21c0db1d42e9abd7a8180e98eb.webp)

::: important

**Do I need to know programming?** No! Just install it (like any other program) and follow the tutorial. Getty is already built; Node.js is just the engine that runs it.

:::

## How to install Node.js

- Download the LTS version (recommended) from [Node.js](https://nodejs.org/).
- Run the installer (next, next... ✔️).
- Verify it works by opening a terminal and typing:

```sh
node -v
npm -v
```

## Why isn’t there a traditional .exe installer?

**Getty uses Node.js because:** it’s cross‑platform (Windows, macOS, Linux), allows fast updates (git pull + npm install), and is a de‑facto standard for tooling.

## How to install the dependency environment

::: steps

1. **Clone or download the repository**

If you’re familiar with GitHub, [clone the repository](https://github.com/es-socrates/getty) using any git tool you like. **Option B:** download the ZIP and extract it on your PC.

2. **Open a terminal in the getty folder**

Enter the folder where Getty is located (example): `cd Downloads/getty`. Or from the folder, right‑click, open terminal, then run:

```sh
npm install
```

This installs everything Getty needs.

3. **Build and run Getty**

Run the app with:

```sh
npm run start:prod
```

4. **Done! Access Getty in your browser.**

Open your browser and go to the following address to see Getty’s ==home page==:

```sh
http://localhost:3000
```

To enter the ==admin panel== visit:

```sh
http://localhost:3000/admin
```

⚡ Configure your widgets (tip alerts, chat, goals, etc.) and add them to OBS. You must set the wallet address and channel data in admin.

::::

![getty](https://thumbs.odycdn.com/8812c1f415b7e9693ee5f5e63f9f3ca6.webp)

## How to add widgets to OBS

- Open OBS Studio.
- Add a new “Browser Source.”
- Paste your widget URL (e.g., localhost:3000/widgets/chat).
- Adjust size, position, and style for each widget.
- **Done! Widgets will appear in your stream. Happy streaming!**

::: timeline horizontal

- Install Getty

- OBS Studio
  type=success

- Widget URL
  type=danger

- Customize
  type=important

- Go live
  type=success
  :::
