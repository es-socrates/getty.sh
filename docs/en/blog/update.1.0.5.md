---
title: getty v1.0.5
date: 2025-08-08T00:00:00.000Z
permalink: /en/blog/update.1.0.5/
createTime: 2025/08/08 20:30
cover: https://thumbs.odycdn.com/4e8eed6e5cf31ccb969d1a478d9d6114.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==λ v1.0.5:== Improvements in Persistence, Optimization, and CI.

In our latest update, we've made several significant improvements that enhance user experience and technical efficiency. Here are the most notable changes:

## Persistence and Security Improvements

1. **Enhanced persistence of external notifications**: We implemented a new dedicated endpoint to load and save secrets, keeping `/api/modules` free of secrets for increased security.
2. **Configuration refactor**: We migrated `external-notifications-config.json` into the `config/` folder with safe directory creation.
3. **Atomic writes and autosave**: We improved atomic writes and added autosave in the Admin when items are added or removed.

## Technical Improvements

1. **Cache busting**: Added versioning to `admin.js` (`?v=1.0.6`) and maintained `languages.js` (`?v=1.0.4`) to avoid caching issues.
2. **Build optimization**: Implemented HTML, JS, and CSS minification along with `languages.js` verification.
3. **Test updates**: Updated Jest to `^30.0.5` and `@types/jest` to `^30.0.0`, with all tests passing successfully.

## Integration Improvements

1. **Advanced CI configuration**: Added `node.yml` with a build matrix, npm cache management, build and test steps, concurrency control, and path-specific ignores.
2. **Security audit**: Performed an npm audit (production, tolerant mode) and managed public artifacts in `workflow_dispatch`.

These combined improvements result in a more robust, secure, and efficient application. We hope you enjoy these enhancements in your Getty experience.

### **λ**
