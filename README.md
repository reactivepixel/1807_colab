# 1807_colab

## Installation
__This application requires Nodejs and NPM to function properly. To install the required components simply follow the links to the downloads below.__

*Alternatively, you can install both required technologies using your cmd or terminal.*

- Nodejs can be downloaded using various package managers which can be found on the [Nodejs Installation](https://nodejs.org/en/download/package-manager/) page.
- npm can be be downloaded using cli commands which are explained on the [npm docs install ](https://docs.npmjs.com/cli/install) page.

#### • [Nodejs](https://nodejs.org/en/) - Download
#### • [NPM](https://docs.npmjs.com/getting-started/installing-node) - Download

## Usage
__To use this application simply follow these instructions.__

* Clone this repository to receive the *app.js* and *array.json* files.
* Install the above technologies (npm & Nodejs).
* Navigate to the folder you saved the files to in your terminal or cmd.
* Type `node app/app.js` in your terminal or cmd to start the server.
* Open your browser and navigate to [http://127.0.0.1:3000/](http://127.0.0.1:3000/).
  * The server or port can be changed within the app.js file on lines 3 and 4
* The files will automatically run and display the html on the page.
  * If an error occurs, you will receive the error in the console.

## Changing The Data
This application is reusable and will convert any number of items into valid html form/input elements, assuming you create them properly. To make changes to the output simply follow the below steps.

* Open the *array.json* file.
* Change/Add/Remove any item(s) as needed to match existing ones.
  * __Must be a valid JSON object.__ Example: `[{'element':'number', 'name':'phone'}]`
  * __Must also follow the same key/value schema.__ Example: `element:html_element` or `attribute:attribute_value`
* Save the changes.
* Exit out of the server from the terminal or cmd.
* Run `node app/app.js` once again.
* Refresh the browser and you will see your changes.

## Style Guide
This application adhears to the DWA Style Guide, which is built upon the AirBnB JavaScript style guide. To use the style guide make sure you have the following technologies.

* [NPM](https://docs.npmjs.com/getting-started/installing-node)
* [Mocha](https://mochajs.org/#installation)
  * `npm install --global mocha`
* [Chai](http://www.chaijs.com/guide/installation/#nodejs)
  * `npm install chai`
* [ESLint](https://eslint.org/docs/user-guide/getting-started) - Installed locally
  * Install ESLint
  `npm install eslint --save-dev`
  * Then initialize the file
  `./node_modules/.bin/eslint --init`
  
#### Performing Lints
To perform a lint follow these instructions.

* cd to your application folder in your terminal/cmd
* Run `npm test`

# Author
* Toby Horn - Developer - Full Sail University
  