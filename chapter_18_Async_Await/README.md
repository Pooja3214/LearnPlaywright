# Chapter 18 — Async / Await

`async` and `await` in JavaScript: writing asynchronous code that reads like synchronous code, error handling with `try...catch...finally`, sequential vs parallel execution, and Playwright test examples.

## Files

| File | Description |
|------|-------------|
| `161_Async.js` | Basic `async` function with `await`, `try...catch...finally`, and rejected promise handling |
| `162_Aysnc_P2.js` | `await` with a resolved Promise (token simulation) — shows how async/await simplifies `.then()` |
| `163_PyODom.js` | End-to-end automation flow using `await`: open browser → login page → enter credentials → click login |
| `164_Async_Ex.js` | Basic `async` return values and a Playwright test snippet (`page.goto`, `expect.toHaveTitle`) |
| `165_AA_Seq.js` | Sequential API calls with `await` and timing measurement (`Date.now`) |
| `165_AA_Parallel.js` | Parallel API calls using `Promise.allSettled` with `async/await` |
| `166_IQ.js` | Interview-style snippets: async return values, awaiting resolved promises, and multi-step test flows |
| `167_ACLogin.js` | Playwright POM-style login test using `async/await` and `test.step` |

## How to Run

```bash
node 161_Async.js
```

Note: Files containing Playwright imports (`164_Async_Ex.js`, `167_ACLogin.js`) require Playwright to be installed and should be run via the Playwright test runner:

```bash
npx playwright test 167_ACLogin.js
```

[← Back to root](../README.md)
