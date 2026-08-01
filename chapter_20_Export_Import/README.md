# Chapter 20 — Export / Import

ES6 modules: `export`, `export default`, named imports with `{ }`, default imports without braces, and aliasing with `as`. Covers how to structure utility modules and avoid name collisions.

## Files

| File | Description |
|------|-------------|
| `utils.js` | Named exports: `BASE_URL` and `formatTestName()` — utility module for staging API helpers |
| `testutils.js` | Named exports: `BASE_URL` and `formatUpperCaseString()` — test utility helpers |
| `logger.js` | Default export `log()` plus named export `log2()` — demonstrates mixing both export types |
| `01_EXPORT_IMPORT/168_EXPORT_IMPORT.js` | Named import demo: imports `BASE_URL` and `formatUpperCaseString` from `testutils.js` |
| `01_EXPORT_IMPORT/169_Utils.js` | Alias (`as`) demo: imports `BASE_URL` from two different modules without name clash |
| `01_EXPORT_IMPORT/170_Logger.js` | Default import demo: imports the default `log` function from `logger.js` |
| `01_EXPORT_IMPORT/ExplainDefault.md` | Detailed reference: named vs default exports, syntax rules, side-by-side comparison |

## How to Run

These files use ES6 module syntax. Run with the `.js` extension and ensure your environment supports ES modules (Node.js with `"type": "module"` in `package.json`, or use `.mjs` extension):

```bash
node chapter_20_Export_Import/01_EXPORT_IMPORT/168_EXPORT_IMPORT.js
node chapter_20_Export_Import/01_EXPORT_IMPORT/169_Utils.js
node chapter_20_Export_Import/01_EXPORT_IMPORT/170_Logger.js
```

## Key Concepts

- **Named exports**: `export function foo() {}` — imported with matching names inside `{ }`
- **Default exports**: `export default function bar() {}` — imported without `{ }`, any name allowed
- **Aliasing**: `import { foo as baz } from './module.js'` — resolve name collisions
- **Mixed exports**: a single module can provide one default + multiple named exports

[← Back to root](../README.md)
