# Chapter 25 — Interview Questions

Hands-on exercises commonly asked in JavaScript interviews. Covers classes, constructors, default values, `this`, method chaining, and private fields.

## Files

| File | Description |
|------|-------------|
| `EX_1.js` | `Bug` class with `title` and `severity`; formatted display output |
| `EX_2.js` | `Environment` class with default constructor values and `getURL()` method |
| `EX_3.js` | Demonstrates `this` keyword referring to the current object instance |
| `EX_4.js` | Method chaining with `return this` in a `Counter` class |
| `EX_5.js` | Private field `#value` with getter and masked token output |

## How to Run

```bash
node chapter_25_Interview_Questions/EX_1.js
node chapter_25_Interview_Questions/EX_2.js
node chapter_25_Interview_Questions/EX_3.js
node chapter_25_Interview_Questions/EX_4.js
node chapter_25_Interview_Questions/EX_5.js
```

## Key Concepts

- **Default parameters**: `constructor(name = "staging", port = 3000)`
- **`this` keyword**: Refers to the instance that invoked the method
- **Method chaining**: Returning `this` from methods enables fluent interfaces
- **Private fields**: `#value` is accessible only inside the class

[← Back to root](../README.md)
