---
title: getty v1.0.9
date: 2025-09-9T00:00:00.000Z
permalink: /en/blog/update.1.0.9/
createTime: 2025/09/9 22:00
cover: https://thumbs.odycdn.com/53aff70136e49dfd88c55d57a1963665.webp
coverStyle:
  layout: left
  width: 200
  compact: true
---

## ==λ v1.0.9:== Wubba Lubba Dub Dub!

A new variant of getty has been released, designed to allow streamers to manage their live stream on Odysee in a professional way, combining alerts, widgets and tools in a single, simple and powerful application.

**Below is a more structured and expanded walkthrough of our latest release.**

### 1. Fix for the tip notification widget in USD (AR)

- **Previous issue:** the widget displayed incorrect values in the notification when pulling the AR price without a set market price.
- **What we did:** we adjusted the calculation logic so the displayed amount is accurate regardless of the exchange used.
- **Result:** you can now see the real amount of tips in dollars, making it easier to track revenue and engage with your audience.

::: note

The AR price is checked and updated across several exchanges, ensuring the highest possible accuracy.

:::

### 2. Chat theme refactor

- **New modular manager:** the chat architecture moves to a modular system that lets you add, remove, or modify chat themes without affecting the rest. Create or duplicate a theme, tweak colors, change the font size of each element, or adjust the avatar size.
- **Benefits for users:** greater flexibility to customize colors, font sizes, or layouts; changes apply instantly without reloading the widget source.
- **Impact:** streamers can tailor the chat’s look to their channel brand or stream theme with just a few clicks.

![getty](https://thumbs.odycdn.com/2544e835838972059b9f8ca1c4250b47.webp)

### 3. Improvements to metrics visualization

- **Average views chart:** now clearer, with trend lines and reference points that make performance easier to interpret at a glance. Filter by day, week, month, or year.
- **Activity panel:** migrated to a more compact, visual view showing key data (peak viewers, tips, watch time) instantly.
- **Benefit:** streamers get a panoramic view of performance without navigating multiple screens. You can also export your channel stats with a single click.

![getty](https://thumbs.odycdn.com/8e7f6c482f844ffb76ecfb25a534e495.webp)

### 4. Security hardening

| Measure                                | What is it?                                                                                                       | Why it matters                                                                              |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Content Security Policy (CSP)          | A set of rules that tell browsers which content sources are trustworthy.                                          | Prevents script‑injection (XSS) attacks and protects the page’s integrity.                  |
| Subresource Integrity (SRI)            | Use of cryptographic hashes to validate that external resources (e.g., CDN libraries) haven’t been tampered with. | Ensures downloaded files are identical to what’s expected, avoiding malicious manipulation. |
| CSS variables instead of inline styles | Centralizes style definitions into reusable stylesheets.                                                          | Improves code maintainability and reduces the attack surface.                               |

**These protection layers make getty more robust against common vulnerabilities.**

### 5. New sidebar with contextual suggestions

- **What is it?** the sidebar now shows recommendations tailored to getty’s setup flow (for example, suggestions to enable alerts, visit documentation on Odysee, or chat configurations).
- **Goal:** reduce the number of clicks needed to reach relevant features and speed up setup during a live stream.

### 6. UI/UX details

- **Uniform avatar:** the user avatar keeps a consistent size across all chat theme variants, achieving a more coherent appearance.
- **Visual consistency:** margins, typefaces, and spacing are aligned so every panel section has a uniform presentation.

### 7. What does all this mean for you?

**With these improvements, getty aims to make your streaming experience:**

- **Smoother:** fewer errors and a snappier interface.
- **Safer:** advanced protections against external threats.
- **More customizable:** design and configuration tools that adapt to your style.
- **More informative:** clear, accessible metrics to make decisions in real time.

### Next steps

1. Update getty to version v1.0.9 (from the GitHub repository or via the test app).
2. Review the new sidebar and try the contextual suggestions.
3. Customize your chat theme using the modular manager and watch the magic happen.
4. Monitor your tips and metrics with the widgets and the average views chart.

Enjoy a more dynamic and secure stream with getty. If you have any questions or want to share feedback, please email us at **hello@getty.sh**.

### **λ**
