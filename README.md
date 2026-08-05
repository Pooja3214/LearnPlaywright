# Learn JavaScript Fundamentals & Playwright Automation

A personal learning repository covering **core JavaScript**, **TypeScript**, and **Playwright** automation through organized chapters and hands-on `.js` / `.ts` files.

> **Purpose:** This repo serves as a structured reference and practice space for mastering JavaScript fundamentals, TypeScript concepts, and browser automation with Playwright.

---

## Roadmap

```
Phase 1: JavaScript Fundamentals
├── Basics & Setup
├── Variables, Hoisting & Scope
├── Operators & Control Flow
├── Loops & Arrays
├── Functions & Closures
├── Strings & Objects
└── 2D Arrays & Patterns

Phase 2: Asynchronous JavaScript
├── Callbacks
├── Promises
└── Async / Await

Phase 3: Modern JavaScript (ES6+)
├── Export / Import (Modules)
├── Classes & Objects
├── Encapsulation, Inheritance, Polymorphism
└── Interview Questions

Phase 4: TypeScript
├── Type Annotations & Interfaces
├── Enums
├── Generics
├── Access Modifiers (public / private / protected)
└── Overriding & Decorators

Phase 5: Playwright Automation
├── Playwright Basics (selectors, assertions, fixtures)
└── Playwright Fundamentals (configuration, test structure)

Phase 6: Practice & Interview Prep
└── Standalone Programs & Interview Notes
```

---

## Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| [Node.js](https://nodejs.org/) | 18.x or higher | Run JavaScript and TypeScript files |
| [npm](https://www.npmjs.com/) | Bundled with Node.js | Install dependencies |
| [VS Code](https://code.visualstudio.com/) | Latest | Recommended IDE |
| [Playwright](https://playwright.dev/) | 1.62+ | Browser automation (auto-installed) |

> **Note:** Some chapters use `prompt-sync` or `readline` for user input. Install as needed (see [Setup](#setup)).

---

## Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Pooja3214/LearnPlaywright.git
   cd LearnPlaywright
   ```

2. **Install root dependencies**

   ```bash
   npm install
   ```

   This installs:
   - `typescript`
   - `ts-node`
   - `@playwright/test`
   - `@types/node`

3. **Verify Node.js installation**

   ```bash
   node -v
   ```

4. **(Optional) Install Playwright browsers**

   ```bash
   npx playwright install
   ```

---

## Folder Structure

```
LearnPlaywright/
├── chapter_01_Basics/                          → Introduction, setup verification
├── chapter_02_Javascript_Concepts/             → Core JS concepts and variables
├── chapter_03_Identifier_Literals/             → Identifiers, naming conventions, comments
├── chapter_04_Variable_Hoisting/             → var, let, const, scope, hoisting
├── chapter_05_Literal/                         → Strings, numbers, null, undefined, template literals
├── chapter_06_Operator/                        → Arithmetic, comparison, logical, ternary, increment/decrement
├── chapter_07_If_else/                         → Conditional statements
├── chapter_08_Switch_Statement/                → Switch cases, break, default
├── chapter_09_UserInput/                       → prompt, readline, prompt-sync
├── chapter_10_Loops/                           → for, while, do...while, for...of, for...in
├── chapter_11_Arrays/                          → Creation, CRUD, searching, iterating, transforming
├── chapter_12_Funtions/                        → Declarations, expressions, arrow functions, closures, HOF
├── chapter_13_Strings/                         → Properties, searching, extraction, transformation
├── chapter_14_Objects/                         → Creation, methods, destructuring, spread, getters/setters
├── chapter_15_2D_Array/                        → 2D arrays, matrix operations, patterns
├── chapter_16_Callback/                        → Synchronous / asynchronous callbacks, callback hell
├── chapter_17_Promise/                         → resolve/reject, chaining, finally, Promise.all / allSettled
├── chapter_18_Async_Await/                     → async/await, sequential vs parallel, error handling
├── chapter_19_Playwright_Basics/               → Browser automation, selectors, assertions, fixtures
├── chapter_20_Export_Import/                 → ES6 modules: export, import, default, aliasing
├── chapter_21_Classes_and_Objects/             → Classes, constructors, this, private fields (#), static
├── chapter_22_Encapsulation/                   → Data hiding, getters, setters, controlled access
├── chapter_23_Inheritance/                     → extends, super(), single / multi-level / hierarchical
├── chapter_24_Polymorphism/                    → Method overriding, runtime polymorphism
├── chapter_25_Interview_Questions/             → Constructors, this, method chaining, private fields
├── chapter_26_Typescript/                      → Type annotations, interfaces, generics, compilation
├── chapter_27_TypeScript_Interface/            → Object shapes, optional/readonly, extending interfaces
├── chapter_28_ENUM/                            → Numeric, string, heterogeneous, const enums
├── chapter_29_Typescript_Generic/              → Generic functions, constraints, utility types
├── chapter_30_PRIVATE_PUBLIC_PROTECTED/       → Access modifiers in TS classes
├── chapter_31_Type_Overide_Decortors/          → Overriding & decorators in TypeScript
├── chapter_32_Playwright_Fundamentals/         → Installation, configuration, core automation concepts
├── Programs/                                   → Standalone interview-style programs
├── Tasks/                                      → Task-based exercises
├── interview.md                                → Common JS interview concepts
├── package.json                               → Project metadata & dependencies
├── tsconfig.json                              → TypeScript compiler configuration
└── README.md                                  → You are here!
```

---

## Chapter-wise Key Concepts

| Chapter | Key Concepts |
|---------|--------------|
| **01 — Basics** | Node.js setup verification, first scripts, hot reload basics |
| **02 — JavaScript Concepts** | Variables, data types, primitive vs reference |
| **03 — Identifier & Literals** | Naming conventions, comments, VS Code shortcuts |
| **04 — Variable & Hoisting** | `var` vs `let` vs `const`, scope, temporal dead zone, hoisting |
| **05 — Literals** | String, number, boolean, `null`, `undefined`, template literals |
| **06 — Operators** | Arithmetic, comparison, logical, ternary, unary, bitwise |
| **07 — If / Else** | Conditional branching, nested conditions, truthy/falsy |
| **08 — Switch Statement** | `switch`, `case`, `break`, `default`, real-time examples |
| **09 — User Input** | Browser `prompt`, Node.js `readline`, `prompt-sync` |
| **10 — Loops** | `for`, `while`, `do...while`, `for...of`, `for...in`, loop control |
| **11 — Arrays** | CRUD operations, `map`, `filter`, `reduce`, `find`, sorting |
| **12 — Functions** | Declaration, expression, arrow, IIFE, closures, higher-order, pure |
| **13 — Strings** | `length`, indexing, `slice`, `substring`, `replace`, `split`, regex basics |
| **14 — Objects** | Literal, constructor, methods, `this`, destructuring, spread, getters/setters |
| **15 — 2D Arrays** | Nested arrays, matrix traversal, transpose, pattern printing |
| **16 — Callbacks** | Sync / async callbacks, callback hell (Pyramid of Doom), QA examples |
| **17 — Promises** | `resolve`, `reject`, `.then`, `.catch`, `.finally`, `Promise.all`, `allSettled` |
| **18 — Async / Await** | `async`, `await`, sequential vs parallel, `try/catch`, Playwright examples |
| **19 — Playwright Basics** | Fixtures, `page`, selectors, `getByRole`, assertions, `codegen` |
| **20 — Export / Import** | Named exports, default exports, aliases, module patterns |
| **21 — Classes & Objects** | `class`, `constructor`, `this`, private fields `#`, static |
| **22 — Encapsulation** | Private fields, getters, setters, controlled property access |
| **23 — Inheritance** | `extends`, `super()`, single / multi-level / hierarchical inheritance |
| **24 — Polymorphism** | Method overriding, runtime polymorphism, dynamic dispatch |
| **25 — Interview Questions** | Constructors, `this`, method chaining, defaults, edge cases |
| **26 — TypeScript** | Type annotations, inference, compilation (`tsc`), strict mode |
| **27 — TS Interfaces** | Shape validation, optional (`?`), `readonly`, extending interfaces |
| **28 — Enums** | Numeric enums, string enums, heterogeneous, `const` enums |
| **29 — TS Generics** | Generic functions, constraints (`extends`), mapped types |
| **30 — Access Modifiers** | `public`, `private`, `protected` in TypeScript classes |
| **31 — Override & Decorators** | Method/property overriding, `experimentalDecorators` |
| **32 — Playwright Fundamentals** | Config, installation, core concepts, test structure |

---

## How to Run

### Run JavaScript Files

```bash
node chapter_01_Basics/01_Basics.js
```

> **Tip:** All `.js` files use ES Modules (`"type": "module"` in `package.json`).

### Run TypeScript Files

```bash
# Via ts-node (recommended for learning)
npx ts-node chapter_26_Typescript/01_Basics.ts

# Or compile first, then run
npx tsc chapter_26_Typescript/01_Basics.ts
node chapter_26_Typescript/01_Basics.js
```

### Run Playwright Tests

Navigate to a Playwright chapter and run:

```bash
cd chapter_19_Playwright_Basics
npm install          # if not already installed
npx playwright test  # run all tests

# Specific file
npx playwright test tests/example.spec.ts

# Headed mode (see the browser)
npx playwright test --headed

# UI mode
npx playwright test --ui
```

For `chapter_32_Playwright_Fundamentals`:

```bash
cd chapter_32_Playwright_Fundamentals
npm install
npx playwright test
```

---

## Practice Programs

| Directory | Description |
|-----------|-------------|
| [`Programs`](Programs/README.md) | Standalone interview-style programs: HTTP codes, test case verdicts, bug severity, FizzBuzz, palindrome, anagrams, and pattern printing |

### Quick Run Examples

```bash
node Programs/Program1_HTTPCode.js
node Programs/Program7_FizzBuzzTest.js
node Programs/Program9_StringPalindrome.js
```

---

## Interview Notes

| File | Description |
|------|-------------|
| [`interview.md`](interview.md) | Common JavaScript interview concepts and explanations |

---

## Tech Stack

- **Language:** JavaScript (ES6+), TypeScript 5.x
- **Runtime:** Node.js 18+
- **Automation:** Playwright 1.62+
- **Compiler:** `tsc` / `ts-node`

---

## Useful Commands Reference

| Command | Description |
|---------|-------------|
| `node <file>.js` | Run a JavaScript file |
| `npx ts-node <file>.ts` | Run TypeScript without compiling |
| `npx tsc <file>.ts` | Compile TypeScript to JavaScript |
| `npx playwright test` | Run all Playwright tests |
| `npx playwright test --headed` | Run tests in visible browser |
| `npx playwright test --ui` | Run tests in UI mode |
| `npx playwright codegen <url>` | Record a new test by interacting with a site |
| `npx playwright show-report` | Open the HTML test report |

---

## Contribution

This is a personal learning repository. Feel free to fork and adapt the structure for your own learning journey.

---

**Happy Learning!**
