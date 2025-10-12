---
title: Installation
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /en/guide/usage/
tags:
  - Guide
  - Quick Start
---

# Getting Started

## Sign in with Wander

To set up getty in online mode and localhost, you need to sign in with Wander. Wander App is a secure and easy-to-use digital wallet for Odysee, allowing you to authenticate in getty without traditional passwords. It's essential to access getty features like widget configuration and encrypted data management. [Download Wander to get started](https://www.wander.app/).

![getty](https://thumbs.odycdn.com/9b4343aebb3729a88e5f87b93ed4caf1.webp)

## Back up your wallet

We recommend backing up your Wander wallet in a safe place. This wallet backup is also necessary when setting up your wallet in Odysee with Wander. To learn more about how to back up your wallet, visit the documentation on Odysee. [Integrated Wander Wallet](https://help.odysee.tv/en/category-monetization/wander/).

## Modules and widgets in getty

Each module or widget in getty must be configured so you can integrate it into your OBS scenes or live streaming software. It's not necessary to configure all of them, but if you need to set up the most basic ones, here we show you how to configure the most important widgets.

![getty](https://thumbs.odycdn.com/d0685d48c1142814d34c9fdbad591a0f.webp)

## Configure Live Analytics

The metrics of your live streams are important so you can know the performance of each live stream you do on Odysee. These analytics show you aspects like the number of hours per live stream, the average viewers, and much more. To configure live analytics, you need to enter the **ClaimID of your Odysee channel** that will go live, then save the changes.

To find the ClaimID of your channel on Odysee, go to your channel page on Odysee, and in the **"About"** tab you can find the channel's ClaimID, copy the ClaimID and paste it into the Live Analytics form in getty. When you go live, the analytics will record your stream's activity.

![odysee](https://thumbs.odycdn.com/5b2ceb22b6c5324049125550fb1bff34.webp)

![getty](https://thumbs.odycdn.com/8e89bbfebfa1fbeb2a95a6482526d5d8.webp)

## Configure live chat

The live chat widget has multiple configurations, but for it to work in your live streaming software, you need to configure the chat from the getty admin. To do this, go to the chat page, then enter the ClaimID of the live post you created on Odysee, which will be used to display chat messages.

You can find the post's ClaimID by pressing the Credits icon and there you can see the post's ClaimID, copy it and paste it into the chat configuration in getty. Then save the changes and copy the integration URL for OBS.

![odysee](https://thumbs.odycdn.com/907b5ee95bf4bf4a62201fac627f5fa4.webp)

::: important

Chat widget messages are not stored anywhere, so if you refresh the browser source in OBS Studio, the messages will be lost and you will receive new ones. For now, getty does not store the chat widget message history, but we believe this should be necessary at some point.

:::

![getty](https://thumbs.odycdn.com/58826d96e18a12c0990c9c1dd1065e38.webp)

In summary, each widget or module that requires a specific ClaimID can be added manually. For example, to configure the Viewers widget or the achievement system, you need to enter the channel's ClaimID. Each widget has its own URL to integrate into OBS Studio or any live streaming software you use to connect to Odysee.

::: important

In some cases, OBS Studio may cache some widget. If you notice any strange behavior, you can refresh the widget from the browser source in OBS, clear the cache, and try again.

:::

## Install getty on localhost

::: important

Installing getty on your computer is completely optional. Currently getty works online and you can set up your account and have your data synchronized in the cloud when you are live.

:::

If you want to enhance your live interactions on Odysee using getty, follow this step-by-step guide.

## Prerequisites

**Node.js?** It's a JavaScript runtime outside the browser, used to build server-side apps and command-line tools. It's fast, efficient, and essential for many modern streaming tools (like getty) and web applications.

## Why does getty use Node.js?

- Lets you run JavaScript on your machine (not just in a browser).
- Lightweight and fast—great for real-time streaming alerts.
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
node -v # should print v22.x.x
pnpm -v # Corepack will provision pnpm@9.12.3
```

## Why isn't there a traditional .exe installer?

**Getty uses Node.js because:** it's cross-platform (Windows, macOS, Linux), allows fast updates (git pull + pnpm install), and is a de-facto standard for tooling.

## How to install the dependency environment

::: steps

1. **Clone or download the repository**

If you're familiar with GitHub, [clone the repository](https://github.com/es-socrates/getty) using any git tool you like. **Option B:** download the ZIP and extract it on your PC.

2. **Open a terminal in the getty folder**

Enter the folder where getty is located (example): `cd Downloads/getty`, rename the file `.env.example to .env`. Then, right-click inside the folder, open terminal, then run:

```sh
pnpm install
```

This installs everything getty needs.

3. **Build and run getty**

Run the app with:

```sh
pnpm run build
pnpm run start:prod
```

4. **Done! Access Getty in your browser.**

Open your browser and go to the following address to see Getty's ==home page==:

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

The app's admin page has all the widget links for OBS. I recommend saving the changes on the admin page and checking that all of them are active, or at least the ones you need.

![getty](https://thumbs.odycdn.com/f6efdb258f171eab858482e3402ffc78.webp)

## How to add widgets to OBS

- Open OBS Studio.
- Add a new "Browser Source."
- Paste your widget URL (e.g., localhost:3000/widgets/chat).
- Adjust size, position, and style for each widget.
- **Done! Widgets will appear in your stream. Happy streaming!**
