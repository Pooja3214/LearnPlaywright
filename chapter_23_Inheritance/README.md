# Chapter 23 — Inheritance

Reusing and extending class behaviour through inheritance. Covers single inheritance, `super()`, multi-level inheritance, hierarchical inheritance, and the diamond problem.

## Files

| File | Description |
|------|-------------|
| `183_Single_Inheritance.js` | `LoginPage` extends `BasePage`; inherits `open()` and `close()` methods |
| `184_SI_example.js` | `Dog` extends `Animal` with `super(name)` call; demonstrates inherited and own properties |
| `185_Single_Inheritance_Con.js` | Method overriding in `APITest` extending `BaseTest` |
| `186_IQ.js` | Using `super.setup()` to call the parent method before extending behaviour |
| `187_IQ2.js` | Polymorphic array of `UnitTest`, `APITest`, and `E2ETest` objects overriding `execute()` |
| `188_REAL_PageObject_Model.js` | Page Object Model pattern: `LoginPage`, `DashboardPage`, `CartPage` extending `BasePage` and overriding `verify()` |
| `189_Multiple_Inheritance.js` | Demonstrates that JavaScript does not support multiple class inheritance directly |
| `190_Multiple_Level_Inheritance.js` | Multi-level chain: `BasePage` → `AuthPage` → `AdminPage` with `super()` |
| `191_Hierarchial_Inheritance.js` | Hierarchical inheritance: `Son1` and `Son2` both extend `Father` |

## How to Run

```bash
node chapter_23_Inheritance/183_Single_Inheritance.js
node chapter_23_Inheritance/184_SI_example.js
node chapter_23_Inheritance/185_Single_Inheritance_Con.js
node chapter_23_Inheritance/186_IQ.js
node chapter_23_Inheritance/187_IQ2.js
node chapter_23_Inheritance/188_REAL_PageObject_Model.js
node chapter_23_Inheritance/189_Multiple_Inheritance.js
node chapter_23_Inheritance/190_Multiple_Level_Inheritance.js
node chapter_23_Inheritance/191_Hierarchial_Inheritance.js
```

## Key Concepts

- **`extends`**: Creates a subclass that inherits from a parent class
- **`super()`**: Calls the parent class constructor
- **`super.method()`**: Calls a parent class method from the child
- **Method overriding**: Child class redefines a parent method
- **Types**: Single, multi-level, and hierarchical inheritance
- **Limitation**: JavaScript classes do not support multiple inheritance

[← Back to root](../README.md)
