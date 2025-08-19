---
title: Getty updated v1.0.6
date: 2025-08-19T00:00:00.000Z
permalink: /en/blog/update.1.0.6/
createTime: 2025/08/19 17:30
cover: https://thumbs.odycdn.com/e4ed0a803084b9ef3f5f721ec24bd4fd.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==Version 1.0.6:== Update highlights

Here’s a tour of the most relevant changes arriving with version 1.0.6. We’ve worked to improve security, performance, and visual experience for both admins and end users. Below is a structured, easy-to-digest summary.

## Enhanced security

1. Express server limited to localhost: the API now only listens to local requests, reducing the attack surface.
2. Helmet update (7.2.0 → 8.1.0) – new protection headers and vulnerability fixes included.

::: important

Keeping dependencies up to date not only prevents vulnerabilities, it also lets you benefit from performance improvements and new features.

:::

## Refreshed user experience: Themes and styles

1. New Minimalist theme for vertical and horizontal chats.
2. Light mode available as a chat theme option.
3. OsCard and OS utilities: the UI now uses OsCard components, providing a more consistent and modern look.
4. Normalized typography: notification titles use 20px/800 inside OsCard, ensuring legibility in both light and dark modes.

## Widgets and panels

1. Configurable announcement widget: admins can customize messages without touching code.
2. Fixed data persistence in "Tip Goal," preventing unexpected loss.
3. Admin panels migrated to OsCard with os-* tokens for uniform titles, margins, and shadows.

## Visual interaction

1. Custom GIF for tip notifications adds a fun, recognizable touch to each tip.
2. Hex color selection fixed in "Tip Goal" and admin panel chat, making exact color customization easier.

## Optimization and code cleanup

1. Clear theme button in admin chat; empty CSS is no longer sent, reducing unnecessary traffic.
2. Panels/OBS refactor for greater modularity and less code duplication.
3. Shared styles (os-table, headers, helpers) centralized to simplify future changes.

## Updated documentation

1. Refreshed README with clear examples and migration steps.

What does all this mean for you?

1. Admins: greater visual control and fewer security concerns. Panels are more intuitive, and configuring announcements is as simple as filling out a form.
2. Developers: a fresher dependency base and reusable components (OsCard, os-table) that make extending the project easier.
3. End users: a cleaner chat experience, modern themes, and more attractive notifications (now with GIFs!).

## Next steps

1. Update your instance to version 1.0.6 by downloading the app from GitHub.
2. Explore the new chat themes in the chat section and try the one you like most.
3. Configure the announcement widget to communicate news or promotions directly from the admin panel.

Thanks for being part of Getty!

Every improvement is born from your feedback and our commitment to privacy and usability. If you have questions, suggestions, or find any detail that needs adjustment, don’t hesitate to open an issue in our repository or contact the support team.

The Getty Team
