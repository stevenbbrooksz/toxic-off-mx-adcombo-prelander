# AI Studio Prompt Used For Toxic OFF MX Prelander

Build a production-ready static React + Vite affiliate prelander for a Mexico COD offer.

Project name: `prelander-toxic-off-mx-adcombo`

Audience: Spanish-speaking adults in Mexico using mobile devices from in-page push traffic.

Offer context: this page sends users to a body cleanse / digestive wellness COD offer. Do not diagnose parasites, infections, or medical conditions. Do not claim cure, guaranteed results, or urgent danger.

Primary test: create two mobile-first variants for A/B testing.

Variant A angle: "Revision rapida de bienestar antes de consultar disponibilidad."

- Use a short self-check structure.
- Ask 3-5 practical, non-diagnostic questions.
- Make clear this is not a medical test.
- Filter for users who can review price/conditions and receive a confirmation call.

Variant B angle: "Habitos diarios que conviene revisar antes de comprar."

- Use a calm household / food routine education structure.
- Mention common Mexico daily-life contexts such as eating outside, shared kitchen routines, and home hygiene.
- Do not create fear or say users have parasites, infection, or disease.
- Lead users to check price/conditions only if they can provide a real phone number.

Language: Mexican Spanish.

Tone: practical, calm, direct-response, and compliant. No fear-based copy, fake medical warnings, fake diagnosis quizzes, countdown pressure, or fake scarcity.

Required intent filter:

- La siguiente pagina puede solicitar un numero de telefono valido.
- Un operador puede llamar para confirmar disponibilidad, precio y entrega.
- Continua solo si puedes recibir una llamada.
- No uses numeros falsos o incorrectos.

CTA examples:

- Consultar disponibilidad
- Ver precio y condiciones
- Continuar si puedo recibir una llamada

Required sections:

- Hero with realistic wellness / home routine visual.
- Short digestive wellness checklist.
- What to check before ordering.
- Availability and delivery explanation.
- Phone confirmation notice.
- FAQ.
- Advertising disclosure.
- Privacy/contact footer.

Compliance constraints:

- No disease diagnosis.
- No cure claims.
- No guaranteed weight loss or parasite removal.
- No fake doctor endorsement.
- No countdown timers.
- No fake scarcity.
- No before/after claims.
- No affiliate links, API keys, cookies, passwords, or tracking URLs in code.

Routes:

- `/mobile/`
- `/mobile/a/`
- `/mobile/b/`
- `/`

CTA handling:

- All CTA buttons use one central destination.
- The default placeholder is `CTA_DESTINATION_PLACEHOLDER`.
- Real campaign links must be injected later through tracking configuration.
