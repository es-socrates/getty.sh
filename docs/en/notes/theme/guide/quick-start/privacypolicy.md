---
title: privacypolicy
icon: material-symbols:article-outline
permalink: /en/guide/privacypolicy/
createTime: 2025/09/5 15:00:00
---

Version: 1.0

**Effective Date: 2025-09-05**

1. ### Identity and nature of the project

Getty is an open‑source application (MIT) that lets you manage tips, tip goals, chat, notifications, and widgets for live streams—primarily on Odysee. All code is public and auditable. Users can:

- Run their own self‑hosted instance (server or localhost).
- Use a third‑party hosted instance, always under the same license and without proprietary modifications.

2. ### Data protection principles

- **Data minimization:** only the data strictly required for the enabled functionality is collected.
- **Transparency:** all processing logic lives in the public repository; anyone can review it.
- **User control:** configuration data and tokens remain in local files under the user’s control.
- **No commercial exploitation:** personal data is not sold, rented, or monetized.
- **Independence:** no external trackers (Google Analytics, etc.) or third‑party analytics SDKs are included.

3. ### What data is processed?

**3.1 Basic operation (self‑host / hosted)**

- **Session token:** maintains user authentication; expires on logout or application restart (depending on configuration).
- **Wallet address / transactions:** used to display and calculate tips and goal progress; only read access via public gateways (e.g., Arweave).
- **User configuration (tip goals, text, language, etc.):** personalizes the experience and is stored in a JSON file.
- **Webhook tokens and URLs (Discord, Telegram, etc.):** used solely to send notifications to user‑configured services; never repurposed.

**3.2 Technical data (primarily in hosted mode)**

- Server logs: timestamp, requested path, HTTP status code.
- Aggregated internal metrics (process execution counts).

**3.3 What is not collected**

- No behavioral profiling.
- No third‑party tracking cookies.
- No deliberate fingerprinting.
- No external analytics SDKs.

**3.4 Data obtained via Odysee (APIs / backend)**

Getty acts as a client querying data from Odysee. Depending on enabled features, it may retrieve (typically public) data:

- Channel / profile metadata (name, description, image, content or livestream identifiers).
- Public tips/supports / transactions associated with the channel for goal calculation and summary display.
- Live stream states or identifiers and recent publication references.

==No permanent copy is stored: an ephemeral cache is kept for performance.==

**3.5 Integration and roles**

Odysee is an independent controller of the original account data. Getty only queries and renders data (it is a separate controller for the local configuration the user provides). Rectification, update, or deletion of profile, content, or transaction data must be carried out directly with Odysee. Requests to Odysee’s infrastructure may involve international transfers under their policies; users should review Odysee’s official privacy policy.

4. ### Differences: Self‑host vs Hosted

**Self‑host:**

- All files (config/, data/) remain on your machine/server.
- Full control over logs, deletion, and persistence.
- You may audit and wipe data at any time.

**Hosted:**

- Depends on the operator’s retention policy.
- The operator may apply additional measures (rate limiting, perimeter security) producing temporary logs.

5. ### Purposes

- Authentication and session management.
- Display and update of widgets (chat, tips, goals).
- Sending notifications to user‑configured external services (e.g., Discord).
- Calculation and display of state (latest tip, goal progress, summarized history).

6. ### Legal basis (for GDPR or similar jurisdictions)

- **Use of the application and its features:** contract performance (user accepts the policy by using Getty).
- **Recording of technical logs:** legitimate interest (security, debugging).
- **Processing of wallets and user‑provided webhooks:** explicit consent (user voluntarily supplies them).
- **Temporary cache of public Odysee data:** legitimate interest (performance and reduction of redundant requests, minimizing load and latency).

7. ### Retention periods

- **Sessions:** while the session remains active or until process restart.
- **Configuration:** indefinitely until modified or deleted by the user.
- **Logs (hosted):** recommended ≤30 days with rotation and anonymization.
- **Odysee response cache:** ≤15 minutes (configurable / manually purgeable by restart or cleanup).
- **Odysee API tokens/keys (if any):** persist locally until revoked in Odysee or the config file is deleted.

8. ### Third‑party disclosure

- **Gateways/blockchain:** read‑only queries to public APIs to obtain transactions.
- **User‑configured webhook services (Discord, Telegram, etc.):** only the fields the user chooses to send (message, amount, etc.).

9. ### User rights (where applicable)

- **Access:** read configuration files directly (config/, data/).
- **Rectification:** edit files or use the interface to correct data.
- **Erasure:** delete the relevant files, revoke tokens, and restart the application.
- **Restriction/Objection:** disable features (e.g., do not configure webhooks).
- **Portability:** data stored in readable/exportable JSON.

**Odysee source data:**

- **Rectification / deletion of channel metadata or transactions:** must be exercised with Odysee.
- **Access revocation:** revoking the token/key in Odysee immediately invalidates Getty’s query capability.
- **Local deletion:** removing configuration and cache files purges residual persistence.

10. ### Open‑source verifiability

All source code is available in the public repository. The community may audit the absence of hidden trackers and report vulnerabilities or privacy issues through issues or responsible disclosure.

11. ### Policy changes

Any change will be published with a new effective date and versioned in the repository. Users should review the version corresponding to the software they are running.

12. ### Acceptance

Use of Getty implies acceptance of this privacy policy. If any clause is not acceptable, the user may run their own self‑hosted instance and adapt configuration to their needs, or stop using the hosted version.

13. ### Contact

Questions about this privacy policy or data handling? Email: **hello@getty.sh**
