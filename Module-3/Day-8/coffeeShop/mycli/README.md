# Day 8

## A CLI coffee shop, that knows the weather!

- This is a combination of the CLI library, and our web based coffee shop, along with use of the weather api

You will need the following:

<!-- - an account and api key from https://weatherapi.com
- code from Day 7 weather.js
- code from Day 5 library.js -->

### Foundation

<!-- - copy over the library program from the previous day
- delete or rename any code that is no longer relevant for the coffee shop (e.g. the `add` command), you mainly just want to re-use the prompt() function -->

### List Menu

<!-- - create an array of objects, each object should have a name, price, and description for a menu item
- create a function that will list the menu items, the description, and their prices -->
<!-- - hook this function up the the cli/prompt -->

### Order

<!-- - create a function that will add an item to the customers order (order would be an array stored in global state) -->

### Checkout

<!-- - create a function that will calculate the total price of the order, and the total items in their order, and show that to the user -->

### Suggest

<!-- - create a function that will suggest an item to the customer based on the current weather (perhaps iced coffee if it is hot?), allow the customer to input their location. -->

### Future Suggest

- create a function that will suggest an item to the customer based on the weather in the future (perhaps hot coffee if it is going to be rainy?), allow the customer to input their location, and a time in the future. You will need to use the forecast api from weatherapi.com

### Bonus

- read the below, try to incorporate some of the ideas into your program

https://medium.com/@manavshrivastava/lets-build-a-cli-command-line-interface-with-node-js-d3b5faacc5ea


### Challenges
- The biggest issue was getting boxen to work. I made sure the node.js was up-to-date. Current version is v18.16.0.
- Installed by going to Git Bash terminal and ran npm install boxen
- Included const boxen = require('boxen'); to index.js
- I got this error in terminal 
$ node index.js
(node:31196) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use `node --trace-warnings ...` to show where the warning was created)
C:\Users\marti\desktop\coffeeShop\index.js:9
import boxen from 'boxen';
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1176:20)
    at Module._compile (node:internal/modules/cjs/loader:1218:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1308:10)
    at Module.load (node:internal/modules/cjs/loader:1117:32)
    at Module._load (node:internal/modules/cjs/loader:958:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.16.0
- I tried to manually set type to "module" and start to get a different error with const readline = require("readline")
$ node index.js
file:///C:/Users/marti/desktop/coffeeShop/index.js:2
const readline = require("readline");
                 ^

ReferenceError: require is not defined in ES module scope, you can use import instead
This file is being treated as an ES module because it has a '.js' file extension and 'C:\Users\marti\desktop\coffeeS
hop\package.json' contains "type": "module". To treat it as a CommonJS script, rename it to use the '.cjs' file exte
nsion.
    at file:///C:/Users/marti/desktop/coffeeShop/index.js:2:18
    at ModuleJob.run (node:internal/modules/esm/module_job:194:25)

Node.js v18.16.0

- I tried using fix-path
- Made sure I'm using the latest version of boxen. Current version is "^7.1.0"
Tried importing dynamically:
1. import boxen from 'boxen';
2. const boxedText = boxen('Hello, Boxen!', { padding: 1 });
3. console.log(boxedText);
- I tried to import this way
import('boxen').then((boxen) => {
  // Use the boxen module here
  const boxedText = boxen('Hello, Boxen!', { padding: 1 });
  console.log(boxedText);
}).catch((error) => {
  // Handle any errors
  console.error('Failed to import boxen module:', error);
});
 - to fix the issue I had to change const readline = require("readline"); to import readline from "readline" and set boxen and chalk to import boxen from "boxen"; and import chalk from "chalk";