![Cypress](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-blue)
![JavaScript](https://img.shields.io/badge/language-JavaScript-yellow)

# 🧪 Cypress Swag Labs Test Automation Project

Automated end-to-end testing project using Cypress for the Swag Labs demo application, implementing POM, CI/CD, and Allure reporting.

⸻

🚀 Project Overview

This project includes automated UI tests for the Swag Labs website using:
 • Cypress
 • Page Object Model (POM)
 • GitHub Actions (CI/CD)
 • Allure Reports
 • Video recording on test failure 🎥

⸻
## 📌 Highlights

- Automated UI testing using Cypress  
- Implemented Page Object Model (POM)  
- Integrated Allure Reports with test evidence  
- CI/CD pipeline using GitHub Actions  
- Linked manual test cases with automation (TC01–TC05)

⸻

🧰 Tech Stack
 • Cypress
 • JavaScript
 • Allure Reporter
 • GitHub Actions

⸻

📂 Project Structure

cypress/
  ├── e2e/
  │   └── swaglabs.cy.js
  ├── pages/
  │   ├── loginPage.js
  │   ├── productsPage.js
  │   └── checkoutPage.js
  ├── support/
  │   └── e2e.js
▶️ How to Run Tests
 1. Install dependencies:

npm install

2. Run Cypress (UI mode):
npx cypress open

 3. Run Cypress (headless):
npx cypress run

📊 Allure Report

Generate and open Allure report:
npx allure generate allure-results --clean
npx allure open

## 📊 Allure Report Preview

![Allure Report](https://raw.githubusercontent.com/dvealiyah/cypress-swaglabs-tests/main/allure-report.png)
## 🌐 Live Allure Report

🔗 [Click here to view report](https://dvealiyah.github.io/cypress-swaglabs-tests/allure-report/)

⸻

## 🎥 Test Evidence

 • Videos are automatically recorded when tests fail
 • Videos are attached inside Allure reports

⸻

## ⚙️ CI/CD

Tests run automatically using GitHub Actions on every push.

⸻

## 📝 Test Cases

Manual test cases are documented here:

📄 [Download Test Cases](./test-cases/swaglabs-test-cases.xlsx)

⸻ 

## ✅ Test Scenarios
 • Login with valid credentials
 • Login with invalid credentials
 • Add product to cart
 • Remove product from cart
 • Verify products are displayed
 • Complete checkout process

⸻

💡 Author

Dvealiyah | QA Automation Engineer 🚀
