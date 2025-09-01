---
title: getty v1.0.4
date: 2025-08-07T00:00:00.000Z
permalink: /en/blog/update.1.0.4/
createTime: 2025/08/07 19:00
cover: https://thumbs.odycdn.com/686eb607469eb4888c226755cadce96d.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==λ v1.0.4:== New Feature: Custom Theme Editing in Chat.

Hello everyone! We're excited to announce the release of the latest version of getty, version 1.0.4. This update brings several improvements and new features that enhance the user experience. Let's dive into what's changed:

## What's Changed

### 1. Missing Dependency: html-minifier-terser

We've added the missing dependency `html-minifier-terser` to ensure better HTML processing and optimization.

### 2. Bump stylelint from 16.22.0 to 16.23.0

The stylelint version has been updated to 16.23.0 to improve code styling and linting.

### 3. Feature: OBS WebSocket Integration

A new feature has been added to allow integration with OBS (Open Broadcaster Software) via WebSocket. This enables seamless interaction with OBS on different devices.

### 4. Fixed: Tip-Goal UX and Custom Audio Improvements

The user interface for Tip-Goal has been enhanced, along with improvements to custom audio handling, providing a smoother experience.

### 5. Backend: Full Persistence of Liveview Configuration

The backend now fully supports the persistence of liveview configurations, ensuring that settings are saved and can be restored.

### 6. New Icons for Chat Badge

We've introduced new icons for the chat badge to improve visual appeal and user identification.

### 7. Minor Chat Fixes

Several minor fixes have been implemented to improve the overall chat functionality.

### 8. Server.js Enhancements

The `server.js` file has been updated to save and return all widget fields (label, background, color, font, size, claimID, icon) using defaults and merge functions. This ensures that all fields are properly handled and displayed.

### 9. Icon File Handling

Improved icon file handling now supports upload, preview, and deletion, with automatic cleanup of previous files.

### 10. Admin Panel Improvements

The admin panel now correctly reflects all fields and updates in real time, with visual feedback, a clear delete button, and instant preview capabilities.

### 11. Audio Status and Previews

The admin now displays audio status, previews, and dynamic controls based on the selection (remote/custom), enhancing the audio configuration and playback experience.

### 12. Raffle Section Enhancements

Added SVG icons to raffle section buttons (start, pause, resume, stop, draw, reset, save) to improve the visual interface.

### 13. EscapeHTML Implementation

Implemented `escapeHTML` to prevent XSS (Cross-Site Scripting) when rendering names in the social media list, ensuring security.

### 14. Build Process Improvements

- **Controlled Sequencing**: Using `npm-run-all` for better task management.
- **CSS Minification**: Leveraging PostCSS/cssnano for efficient CSS minification.
- **Tailwind Config Adjustments**: Made necessary adjustments to `tailwind.config.js`.
- **Dependency Cleanup**: Removed unnecessary dependencies to optimize performance.

These changes collectively improve the functionality, usability, and security of getty. We're committed to providing a seamless and enjoyable experience for all users.

### 15. New Feature: Custom Theme Editing in Chat

In this version, we have introduced an exciting new feature that allows users to completely customize the appearance of their chats. With custom theme editing, you can now adjust every aspect of your chat interface design to suit your personal preferences or your brand's visual identity.

Our administration interface has been improved to offer a simple and intuitive customization experience. View changes in real time as you adjust theme settings.

**Saving and loading themes:** Save your custom themes for use in future sessions. Load predefined themes or share your creations with other users.

**Preview:** As you adjust the theme settings, you will see a real-time preview of how your chat will look.

**Saving and applying:** Once you are satisfied with your theme, save it and apply it to your chat by copying the custom CSS to your chat source in OBS.

If you have any questions or need further assistance, feel free to reach out. Thank you for choosing getty!

### **λ**
