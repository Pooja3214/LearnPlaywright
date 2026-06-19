# JavaScript Interview Questions & Concepts

A collection of important JavaScript concepts commonly asked in interviews, organized by topic.

---

## Why do we declare object references with `const` instead of `let` or `var`?

### The Short Answer
Using `const` for objects prevents accidental reassignment of the variable to a completely new object, while still allowing properties of the existing object to be modified.

### Example

```javascript
const obj = { a: 1, b: 2 };

// ✅ ALLOWED — modifying properties
obj.a = 10;
obj.c = 3;

// ❌ NOT ALLOWED — reassigning the variable itself
obj = { x: 100 }; // TypeError: Assignment to constant variable.
```

### What `const` actually protects

`const` does **not** make the object immutable. It only makes the **variable binding** (the reference) immutable:

| Operation | `const` Object | Mutable? |
|-----------|--------------|----------|
| `obj.prop = newValue` | ✅ Allowed | Yes |
| `obj.newProp = value` | ✅ Allowed | Yes |
| `delete obj.prop` | ✅ Allowed | Yes |
| `obj = { ... }` | ❌ Error | No |

### Why this is a best practice

1. **Prevents accidental reassignment**  
   Once you assign an object to a variable, you usually intend to keep working with that same object instance. `const` enforces this intent.

2. **Communicates intent**  
   When another developer sees `const`, they immediately know this variable will not be replaced with a different object.

3. **Catches bugs early**  
   If you accidentally write `obj = somethingElse`, you get a clear runtime error instead of a silent logic bug.

4. **Consistency with functional patterns**  
   Even though JavaScript objects are mutable by default, using `const` encourages disciplined mutation of the *contents* rather than the *reference*.

### When to use `let` instead

Use `let` only if you genuinely need to reassign the variable to a completely different object later:

```javascript
let config = { env: "dev" };

if (process.env.NODE_ENV === "production") {
  config = { env: "prod", url: "https://api.example.com" };
}
```

For most cases, `const` is the safer and preferred choice.

### Summary

> **Rule of thumb:** Always use `const` for object and array references. Use `let` only when you are certain the variable needs to be reassigned. Avoid `var` entirely in modern JavaScript.

---

[← Back to root](README.md)
