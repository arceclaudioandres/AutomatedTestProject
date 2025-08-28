# AutomatedTestProject
📘 README – Playwright Automation Project
🚀 Description

This repository contains an automation testing project using Playwright
.
The goal is to validate basic UI and API functionalities as part of a lightweight QA automation framework.

Includes:

UI tests (example: ToDo App).

API tests (example: reqres.in
).

Page Object Model (POM) structure.

Automatic HTML reports.

GitHub Actions integration for CI/CD.

⚙️ Requirements

You don’t need to install anything on your local machine if you’re using GitHub Codespaces.
If running locally, make sure you have:

Node.js 18+

npm (comes with Node.js)

📂 Installation

Clone the repository:

git clone https://github.com/your-username/qa-automation-playground.git
cd qa-automation-playground


Install dependencies:

npm install


(Optional) Install Playwright browsers:

npx playwright install

▶️ Running Tests
Run all tests
npx playwright test

Run tests in UI mode (useful for debugging)
npx playwright test --ui

Run a specific test
npx playwright test tests/ui/login.spec.ts

📊 Reports

After running the tests, you can open the interactive HTML report with:

npx playwright show-report


This includes detailed logs and screenshots.

🏗️ Project Structure
qa-automation-playground/
│── tests/
│   ├── ui/        # UI tests (e.g., login, forms)
│   ├── api/       # API tests (REST endpoints)
│── pages/         # Page Objects (POM pattern)
│── playwright.config.ts
│── package.json
│── README.md

🔄 CI/CD (GitHub Actions)

This project includes a workflow (.github/workflows/tests.yml) to run tests automatically on every push:

name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npx playwright install --with-deps
      - run: npx playwright test
