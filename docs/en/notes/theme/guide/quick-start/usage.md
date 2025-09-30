---
title: Installation
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /en/guide/usage/
tags:
  - Guide
  - Quick Start
---

## ==Install and configure getty==

::: important

Installing getty on your computer is completely optional. Currently getty works online and you can set up your account and have your data synchronized in the cloud when you are live.

:::

If you want to enhance your live interactions on Odysee using getty, follow this step‑by‑step guide.

## Prerequisites

**Node.js?** Is a JavaScript runtime outside the browser, used to build server‑side apps and command‑line tools. It’s fast, efficient, and essential for many modern streaming tools (like getty) and web applications.

## Why does getty use Node.js?

- Lets you run JavaScript on your machine (not just in a browser).
- Lightweight and fast—great for real‑time streaming alerts.
- Provides filesystem and network access, needed to connect ==getty== with OBS, Discord, etc.
- Uses pnpm (Node Package Manager), which simplifies installing the external libraries Getty needs.

![nodejs](https://thumbs.odycdn.com/ef506c21c0db1d42e9abd7a8180e98eb.webp)

::: important

**Do I need to know programming?** No! Just install it (like any other program) and follow the tutorial. Getty is already built; Node.js is just the engine that runs it.

:::

## How to install Node.js

- Download the LTS version (recommended) from [Node.js](https://nodejs.org/).
- Install Node.js 22.x (the project requires Node >=22 <23).
- Enable Corepack (included with Node) so pnpm is managed automatically by the version pinned in package.json.
- Verify it works by opening a terminal and typing:

```sh
corepack enable
node -v   # should print v22.x.x
pnpm -v   # Corepack will provision pnpm@9.12.3
```

## Why isn’t there a traditional .exe installer?

**Getty uses Node.js because:** it’s cross‑platform (Windows, macOS, Linux), allows fast updates (git pull + pnpm install), and is a de‑facto standard for tooling.

## How to install the dependency environment

::: steps

1. **Clone or download the repository**

If you’re familiar with GitHub, [clone the repository](https://github.com/es-socrates/getty) using any git tool you like. **Option B:** download the ZIP and extract it on your PC.

2. **Open a terminal in the getty folder**

Enter the folder where Getty is located (example): `cd Downloads/getty`. Or from the folder, right‑click, open terminal, then run:

```sh
pnpm install
```

This installs everything Getty needs.

3. **Build and run Getty**

Run the app with:

```sh
pnpm run build
pnpm run start:prod
```

4. **Done! Access Getty in your browser.**

Open your browser and go to the following address to see Getty’s ==home page==:

```sh
http://localhost:3000
```

To enter the ==admin panel== visit:

```sh
http://localhost:3000/admin/status
```

**Important:** If you download an update from getty, you must repeat the installation process. In some cases, there may be new dependencies to install, so the process may need to be repeated.

⚡ Configure your widgets (tip alerts, chat, goals, etc.) and add them to OBS. You must set the wallet address and channel data in admin.

::::

## Visit getty in the browser:

- **Welcome & landing:** http://localhost:3000/ (first-time visits redirect to /welcome so you can choose a language and connect your wallet).
- **Dashboard:** http://localhost:3000/user/your-user-token
  After you log in with Wander Wallet, getty issues a widget token and stores it in the getty_widget_token cookie/localStorage. Subsequent visits to / automatically redirect to your dashboard route.
  If a token expires or is removed, the welcome page makes it clear and prompts you to sign in again.
- **Admin:** http://localhost:3000/admin/status

The app's admin page has all the widget links for OBS. I recommend saving the changes on the admin page and checking that all of them are active, or the ones you need.

![getty](https://thumbs.odycdn.com/8812c1f415b7e9693ee5f5e63f9f3ca6.webp)

## How to add widgets to OBS

- Open OBS Studio.
- Add a new "Browser Source."
- Paste your widget URL (e.g., localhost:3000/widgets/chat).
- Adjust size, position, and style for each widget.
- **Done! Widgets will appear in your stream. Happy streaming!**
