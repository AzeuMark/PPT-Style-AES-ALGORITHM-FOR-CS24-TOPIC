# AES Algorithm — Presentation Website

A PowerPoint-style presentation website about the **Advanced Encryption Standard (AES)** algorithm, built with pure vanilla HTML, CSS, and JavaScript. No frameworks, no dependencies, no build tools.

**Presented by:** Uelmark G. Valdehueza

---

## How to Run

### Option 1 — VS Code Live Server (recommended)
1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code
2. Right-click `index.html` → **"Open with Live Server"**

### Option 2 — Direct file open (no server needed)
1. Double-click `index.html` to open it in any modern browser
2. Works on `file://` protocol — no server required

---

## Navigation

| Action | Control |
|--------|---------|
| Next slide | **Next** button or **→** arrow key or **Spacebar** |
| Previous slide | **←** arrow key or **Prev** button |
| Show/Hide nav bar | Click the **eye icon** (bottom-right corner) |

The navigation bar is hidden by default. Click the eye button to toggle it.

---

## Slide Overview (13 slides)

| # | Slide | Content |
|---|-------|---------|
| 1 | Title | Introduction — presenter name |
| 2 | What is AES? | Symmetric block cipher, 128-bit blocks, same key |
| 3 | History & Key Sizes | Daemen & Rijmen, NIST 2001, 128/192/256-bit keys |
| 4 | Rounds | 10/12/14 rounds depending on key size |
| 5 | State Array | 128-bit plaintext → 4×4 byte grid |
| 6 | AddRoundKey | Initial XOR of state with round key |
| 7 | SubBytes | S-box substitution (non-linearity) |
| 8 | ShiftRows | Row shifting (data spreading) |
| 9 | MixColumns | Column mixing via finite field math (diffusion) |
| 10 | Final Round | MixColumns skipped, ciphertext output |
| 11 | Key Expansion & Decryption | Round key generation, inverse operations |
| 12 | Why AES Matters | Speed, security, real-world uses |
| 13 | Summary | Recap and closing |

---

## Project Structure

```
PPT - AES Algorithm/
├── index.html              ← Main entry point
├── main.css                ← Shared styles (gradient, nav, animations)
├── main.js                 ← Slide loader & navigation logic
├── README.md
│
└── slides/                 ← One folder per slide
    ├── slide01-title/
    │   ├── script.js       ← Slide HTML content + logic
    │   ├── style.css       ← Slide-specific styles & animations
    │   └── slide.html      ← Reference copy (not loaded at runtime)
    │
    ├── slide02-what-is-aes/
    ├── slide03-history/
    ├── slide04-rounds/
    ├── slide05-state-array/
    ├── slide06-add-round-key/
    ├── slide07-subbytes/
    ├── slide08-shiftrows/
    ├── slide09-mixcolumns/
    ├── slide10-final-round/
    ├── slide11-key-expansion-decryption/
    ├── slide12-why-aes-matters/
    └── slide13-summary/
```

Each slide folder is **self-contained**. To edit a slide's content, modify the `window.__slideHTML` template string inside that slide's `script.js`. The `style.css` in the same folder controls that slide's styling and animations.

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — gradients, keyframe animations, transitions, backdrop-filter
- **Vanilla JavaScript** — dynamic script/CSS loading, DOM manipulation
- **SVG** — all icons are inline SVG (no external icon libraries)

No dependencies. No npm. No build step.

---

## Design

- **Theme:** Blue gradient (navy → royal blue) with white/light text
- **Animations:** Fade-ins, slide-ins, scale-ins, staggered delays, bar growth, row shifts, column glows
- **Responsive:** Optimized for 16:9 landscape but adapts to smaller screens

---

## License

For educational use.
