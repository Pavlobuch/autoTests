# Playwright Test Suite for SauceDemo

This repository contains a set of Playwright tests for the SauceDemo web application. The tests are written using the Playwright testing framework and cover scenarios such as user login, adding products to the cart, and cart management.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Running Tests

Run the tests using the Playwright test runner:

```bash
npm test
```

This will execute the test suite and provide detailed output in the console.

## Test Descriptions

### 1. Login with Valid Credentials

- Navigates to the SauceDemo website.
- Fills in the login form with valid credentials.
- Verifies successful login by checking the URL, title visibility, and the presence of products on the inventory page.

### 2. Add Product to the Cart

- Performs a valid login.
- Adds a product to the cart and verifies the addition.
- Checks the cart contents and navigates to the cart page.
- Validates the presence of the added item on the cart page.
- Removes the item from the cart and confirms an empty cart.

