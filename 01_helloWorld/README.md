# helloWorld.js

## Explanation

The `helloWorld.js` file contains a simple JavaScript function that returns the string `"Hello, World!"`. This function is often used as a basic example to demonstrate the structure of a JavaScript program or to verify that a development environment is set up correctly.

### Example Code
```javascript
// filepath: helloWorld.js
function hello() {
    return "Hello, World!";
}

module.exports = hello;
```

## 📁 Estructura mínima del proyecto

```
01_helloWorld/
├─ helloWorld.js
├─ helloWorld.test.js
```

Step-by-Step Implementation of the Test
To ensure that the helloWorld function works as expected, we can write a unit test. Below are the steps to implement and run the test:

Step 1: Install Node.js and a Testing Framework
Make sure you have Node.js installed. Then, install a testing framework like Jest by running:

```
# Inicializa package.json (si no existe)
npm init -y

# Instala Jest como dependencia de desarrollo
npm install --save-dev jest
```
Step 2: Create a Test File
Create a new file named helloWorld.test.js in the same directory as helloWorld.js.

Step 3: Write the Test
Add the following code to helloWorld.test.js:

```javascript
// filepath: helloWorld.test.js
const helloWorld = require('./helloWorld');

test('returns "Hello, World!"', () => {
    expect(helloWorld()).toBe("Hello, World!");
});
```

Step 4: Update package.json

Add a test script to your package.json file:
```
"scripts": {
    "test": "jest"
}
```
Step 5: Run the Test
Run the test using the following command in the terminal:
```
npm test
```

output
```

> 01_helloworld@1.0.0 test
> jest

  console.log
    Hello, World!

      at Object.log (helloWorld.js:5:9)

 PASS  ./helloWorld.test.js
  ✓ hello function should return "Hello, World!" (3 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.279 s
Ran all test suites.
```