# FormBuilder

Form Builder - Deployment of Web Applications Term 1807

## Synopsis
This product allows you to render the HTML code required for form elements. You can render an unlimited number of label, select and text input elements. After submitting the form, the web interface will return the code below the form.

## Installation
1. Clone or Download this repository.
2. Install dependencies:

`npm install`

## Run Web Server

Start the web server by running:

`npm start`

## Access Website with your Browser

Navigate your browser to `http://localhost:3000` to interact with the tool

# Test Environment

This project incorporates the "DWA Style Guide". This style guide can be tested to make sure the code adheres to the style guide correctly.

## Configure

To configure the testing environment, install mocha and chai using the following commands:

`npm install chai`
`npm install mocha -g`

Next, install the eslint requirements:

`npm install mocha-eslint`
`npm install eslint-config-airbnb`

All dependencies of eslint-config-airbnb must also be installed. To do that, run the following command:

`npx install-peerdeps eslint-config-airbnb`

## Run Tests

To run all tests, navigate to the root folder of the project and run the following command:

`npm test`

This project currently contains no issues so every test should pass.

## Built With

* [NodeJS](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [Bootstrap 4](http://getbootstrap.com/)
