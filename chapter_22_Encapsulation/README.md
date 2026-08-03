# Chapter 22 — Encapsulation

Hiding internal data and exposing only what is necessary through getters and setters. Demonstrates private fields (`#`) and controlled access patterns.

## Files

| File | Description |
|------|-------------|
| `179_Ecap.js` | `BankAccount` class with a private `#balance` field; deposit and controlled balance access |
| `180_REAL_EXAMPLE.js` | `Person` class with private children fields and getter/setter for controlled access |
| `181_Ecap_Car.js` | `Car` class with a private `#engine` field; getter and setter for engine name |
| `182_ECap_Bank.js` | `ICICI` bank class with private balance and conditional setter (cashier-only access) |

## How to Run

```bash
node chapter_22_Encapsulation/179_Ecap.js
node chapter_22_Encapsulation/180_REAL_EXAMPLE.js
node chapter_22_Encapsulation/181_Ecap_Car.js
node chapter_22_Encapsulation/182_ECap_Bank.js
```

## Key Concepts

- **Private fields (`#`)**: Data hidden from direct external access
- **Getters/Setters**: Controlled read/write access to private state
- **Validation logic**: Setters can enforce rules (e.g., cashier-only balance updates)

[← Back to root](../README.md)
