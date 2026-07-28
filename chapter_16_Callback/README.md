# Chapter 16 — Callbacks

Callbacks: synchronous, asynchronous, callback hell (Pyramid of Doom), and real-world Playwright/QA examples.

## Files

| File | Description |
|------|-------------|
| `143_Callback.js` | Callback basics: named, anonymous, and arrow function callbacks |
| `144_CB.js` | Simple callback demonstration |
| `145_CB_Fn.js` | Real-world cafe / order callback simulation |
| `146_PW_CB.js` | Playwright-style test callback pattern |
| `147_JS_CB.js` | JavaScript async callback with `setTimeout` |
| `148_Sync_CB.js` | Synchronous callback using `forEach` |
| `149_Async_CB.js` | Asynchronous callback execution order demo |
| `150_CB_Hell.js` | Callback Hell / Pyramid of Doom (4-step login flow) |
| `151_CB_Hell_20_steps.js` | Extended Callback Hell with ~20 nested async steps (E-Commerce checkout flow) |
| `152_CB_Parameter.js` | Callbacks with parameters and passing data back |
| `153_CB_Return.js` | Callbacks that return values (higher-order pattern) |

## How to Run

```bash
node 143_Callback.js
```

> **Note:** `150_CB_Hell.js` and `151_CB_Hell_20_steps.js` demonstrate the anti-pattern known as **Callback Hell** or **Pyramid of Doom**. These files are intentionally hard to read to teach why Promises and `async/await` exist.

[← Back to root](../README.md)
