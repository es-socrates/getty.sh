---
title: Installation
icon: grommet-icons:install
createTime: 2025/07/28 10:00
permalink: /en/guide/usage/
tags:
  - Guide
  - Quick Start
---

## ==How to install and configure getty==

If you want to boost your live performances with getty on Odysee, follow this step-by-step guide.

## Prerequisites

**What is Node.js?** Node.js is an out-of-browser JavaScript runtime environment designed for building server-side applications and command-line tools. It is fast, efficient and essential for many modern streaming tools (such as getty) and web applications.

![getty](https://thumbs.odycdn.com/72b81a6bea1e60356dcffc73ba58e5cd.webp)

## Why does getty use Node.js?

- It allows you to run JavaScript on your computer (not just in a browser).
- It's lightweight and fast, ideal for real-time applications (like stream alerts).
- It has access to the file system and networks, necessary to connect ==getty== with OBS, Discord, etc.
- It uses npm (Node Package Manager), which simplifies the installation of dependencies (external libraries that getty needs to work).

![nodejs](https://thumbs.odycdn.com/ef506c21c0db1d42e9abd7a8180e98eb.webp)

::: important

**Do I need to know programming to use it?** No! Just install it (like any other program) and follow the steps in the tutorial. getty is already programmed; Node.js is just the "engine" that makes it work.

:::

## How to install Node.js?

- Download the LTS version (recommended) from [Node.js](https://nodejs.org/).
- Run the installer (next, next... ✔️).
- Verify that it works by opening your terminal and typing:

```sh
node -v
npm -v
```

## Why is there no traditional .exe/installer?

**getty uses Node.js because:** It's cross-platform (runs on Windows, macOS, Linux). It allows fast updates (with git pull and npm install). It is the standard for developer tools.

## How to install the dependency environment?

::: steps

1. **Clone or download the repository**

If you're familiar with GitHub, you'll need to download the repository using any Git environment of your choice. **Option B:** Download the files in ZIP format and extract the folder to your PC.

2. **Open the terminal in the Getty folder**

Navigate to the folder where Getty is (example): cd path/to/the/folder/getty. Or, from the same folder, right click, open terminal and run the following command:

```sh
npm install
```

This will install everything necessary for getty to work

3. **Build and run getty**

Build the application with this command:

```sh
npm run build
```

Start the application with this command:

```sh
npm start
```

4. **Done! Access getty in your browser**

Open your browser and go to the following address to view the getty ==homepage==.

```sh
http://localhost:3000
```

To enter the ==administrator== you must go to the following address or from the user menu.

```sh
http://localhost:3000/admin/status
```

⚡ Configure your widgets (tip alerts, chat, goals, etc.) and add them to OBS. You must configure the wallet address and channel data in admin.

::::

![getty](https://thumbs.odycdn.com/8812c1f415b7e9693ee5f5e63f9f3ca6.webp)

## How to add widgets to OBS?

- Open the OBS Studio software.
- Add a new "Browser Source".
- Paste the URL of your widget: (e.g. localhost:3000/widgets/chat.html).
- Adjust the size, position and color of each widget.
- You're done! The widgets will appear in your stream. Let's stream!

::: timeline horizontal

- Install getty

- OBS Studio
  type=success

- URL of the widget
  type=danger

- Customize everything
  type=important

- Stream live
  type=success
  :::
