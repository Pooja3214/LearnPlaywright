# Chapter 19 — Playwright Basics

Introduction to browser automation with Playwright: navigating pages, using selectors (`data-test`, `getByRole`), performing assertions, and leveraging fixtures like `page`.

## Files

| File | Description |
|------|-------------|
| `tests/example.spec.ts` | Basic test verifying page title using Playwright fixtures |
| `tests/codegen-tta-cart.spec.ts` | Recorded workflow on TTACart: login error validation, error-message assertions, and ARIA snapshot matching |
| `tests/tta_cards_valid.spec.ts` | End-to-end login flow with valid credentials and product navigation |
| `playwright.config.ts` | Playwright configuration file |

## How to Run

Install dependencies (if not already installed):

```bash
cd chapter_19_Playwright_Basics
npm install
```

Run all tests:

```bash
npx playwright test
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

Run in headed mode (see the browser):

```bash
npx playwright test --headed
```

## Key Concepts

- **Fixtures**: `page` is an inbuilt fixture automatically provided by Playwright
- **Selectors**: `data-test` attributes, `getByRole`, and `locator()` for element targeting
- **Assertions**: `toHaveTitle`, `toBeVisible`, `toContainText`, `toMatchAriaSnapshot`
- **Codegen**: Playwright can auto-generate tests by recording user interactions

[← Back to root](../README.md)
