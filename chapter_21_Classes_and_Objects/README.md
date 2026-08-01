# Chapter 21 — Classes and Objects

Object-oriented programming in JavaScript using `class`, `constructor`, instance properties/methods, private fields (`#`), and static members.

## Files

| File | Description |
|------|-------------|
| `171_Class_Object.js` | Basic `Person` class with attributes (`name`, `email`, `salary`, `address`) and behaviours (`sleep`, `eat`, `walk`) |
| `172_Class_Object2.js` | Introduces `constructor()` — runs automatically when an object is created with `new` |
| `173_Car.js` | Parameterized constructor with `this` keyword; creates `Car` objects and calls the `drive()` method |
| `174_REAL_Browser.js` | Practical `TestCase` class demonstrating methods vs functions; creates test-case objects with `name`, `status`, and `priority` |
| `175_IQ.js` | `Browser` class with a parameterized constructor; launches browsers and tracks `isOpen` state |
| `176_Private_Public.js` | Private fields using `#` (e.g., `#apiKey`) — encapsulation pattern with a custom `authHeader()` method |
| `177_Static.js` | Static properties (`name`, `mentor_name`) and static methods (`display()`); accessed via the class, not instances |
| `178_Static.js` | Another static example: `Person` class with a static `nationality` property and a static method |

## How to Run

Run any file with Node.js:

```bash
node chapter_21_Classes_and_Objects/171_Class_Object.js
node chapter_21_Classes_and_Objects/172_Class_Object2.js
node chapter_21_Classes_and_Objects/173_Car.js
node chapter_21_Classes_and_Objects/174_REAL_Browser.js
node chapter_21_Classes_and_Objects/175_IQ.js
node chapter_21_Classes_and_Objects/176_Private_Public.js
node chapter_21_Classes_and_Objects/177_Static.js
node chapter_21_Classes_and_Objects/178_Static.js
```

## Key Concepts

- **Class**: Blueprint for creating objects with shared structure and behaviour
- **Constructor**: Special method that runs automatically when `new` is used
- **`this` keyword**: Refers to the current instance inside class methods
- **Method vs Function**: A method lives inside a class; a function is standalone
- **Private fields (`#`)**: Encapsulated data — accessible only inside the class
- **Static members**: Belong to the class itself, not to individual instances

[← Back to root](../README.md)
