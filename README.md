# Toxic OFF MX AdCombo Prelander

Static React/Vite prelander for testing AdCombo `37756 Toxic OFF - MX` traffic from PropellerAds.

The page is written for a Mexico COD flow and filters for users who can provide a valid phone number and receive a confirmation call. It avoids medical diagnosis, cure claims, fake urgency, and fake scarcity.

## Routes

- `/mobile/` and `/mobile/a/`: self-check angle.
- `/mobile/b/`: household / food-hygiene routine angle.

Use BeMob landing rotation for real A/B traffic. Do not split live traffic by manually changing the PropellerAds target URL.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Tracking

CTA links are wired through `src/tracking-config.js`.

Do not commit real AdCombo links, BeMob campaign URLs, API tokens, cookies, passwords, or browser tokens.
