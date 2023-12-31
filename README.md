# PHPTravels

## Prerequisites

Make sure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/your-repository.git
cd your-repository
npm install 
```

## Configuration
You may need to configure certain settings before running the tests. Check the `cypress.json` file for any specific configurations.

Running Tests
To run the Cypress tests, use the following command:
```
npm run cypress:open
```

This will open the Cypress Test Runner. Click on the test file you want to run, or run all tests by clicking "Run all specs."

# Headless Mode (Command Line)
To run the tests in headless mode (without the Test Runner UI), use the following command:
```
npm run cypress:run
```

This is useful for running tests in a CI/CD environment.

# Environment Variables
If your tests require any environment variables, make sure to set them before running the tests. Refer to the .env.example file for a list of variables.
```
cp .env.example .env
```

Edit the .env file with the required values.

# Additional Information
Include any additional information about the project, such as folder structure, common issues, or troubleshooting tips.

# Contributing
If you want to contribute to this project, please fork the repository and create a pull request. We welcome contributions!

# License
This project is licensed under the MIT License.
