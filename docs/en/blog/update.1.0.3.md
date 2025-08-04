---
title: Getty updated v1.0.3
date: 2025-08-03T00:00:00.000Z
permalink: /en/blog/update.1.0.3/
createTime: 2025/08/03 22:10
cover: https://thumbs.odycdn.com/9a68f220da60ce2930f8dbb60eb1e284.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==Version 1.0.3:== New! Social Widget, Optimization, and More.

In this update, we've implemented significant functionality, code optimization, and user experience improvements. Below are all the changes:

==New Feature:== Social Media Widget and Wallet Validation.

### Arweave Address Validation

We implemented strict validation for Arweave wallet addresses, ensuring that all entered addresses comply with the correct format before being saved in the settings.

### Improved Social Media Dashboard

1. **Full i18n Support:** The social media dashboard now features full internationalization via data-i18n attributes and new keys in languages.js.
2. **Persistent Backend:** We developed a new backend module with API endpoints for saving and retrieving social media settings.
3. **OBS Widget:** We created a dedicated OBS overlay/widget that displays social media links in an attractive horizontal layout.

### Build and Performance Optimizations

1. **Controlled Sequencing:** We implemented ==npm-run-all== to better handle parallel/sequential script execution.
2. **CSS Minification:** We integrated PostCSS with cssnano to reduce the size of our CSS files.
3. **Tailwind Tweaks:** We optimized the tailwind.config.js configuration for a more efficient build.
4. **Dependency Cleanup:** We removed unnecessary packages that we no longer used, reducing the project's footprint.

### UI and UX Improvements: SVG Icons.

1. We replaced and optimized all system SVG icons.
2. We implemented a custom loading system for icons.
3. We improved the quality and visual consistency of all vector graphics.
4. We fixed several minor bugs that affected the user experience in specific cases.
5. We made style and layout adjustments based on user feedback.

### Update to Version 1.0.3

This version consolidates all the aforementioned improvements and lays a stronger foundation for future updates.

==We recommend all users update to this version to enjoy:==

1. Improved app stability.
2. Better overall performance.
3. New social features.
4. A more polished user experience.

**Have you tried the new features yet? Tell us about your experience!**

The Getty Team
