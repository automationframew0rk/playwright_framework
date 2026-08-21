# Salesforce E2E Framework

This is a Playwright and TypeScript end-to-end test framework for Salesforce
Account workflows.

## Test coverage

- TC016: Edit Account
- TC017: Delete Account
- TC021: Create Account

The edit and delete tests create their own records first, so they do not depend
on data created by another test.

## Project structure

```text
customFixtures/             Playwright fixtures
helpers/                    Shared browser and test-data utilities
pages/                      Login, Home and Account page objects
tests/                      Three Salesforce test cases
playwright.config.ts        Browser, timeout and reporter configuration
```

## Install

```bash
npm ci
npx playwright install chromium
```

## Run

```bash
npm test
```

Run an individual workflow with one of these scripts:

```bash
npm run test:create-account
npm run test:edit-account
npm run test:delete-account
```

Chromium runs headed locally and headless when `CI` is set. Test results are
written using Playwright JSON/HTML and Allure reporters.
