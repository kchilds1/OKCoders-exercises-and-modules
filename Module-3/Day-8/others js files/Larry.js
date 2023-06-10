// const chalk = require("chalk");
// const boxen = require("boxen");

// const usage = chalk.keyword("violet")(
//   "\nUsage: mycli -l <language>  -s <sentence> \n"
// );

const readline = require("readline");
const fs = require("fs");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const shoppingCart = [];

const menuItems = [
  {
    name: "Cappuccino",
    price: 3.99,
    description:
      "A classic espresso-based drink with steamed milk and a frothy foam topping.",
    type: "hot",
  },
  {
    name: "Iced Coffee",
    price: 4.49,
    description: "Chilled coffee served over ice, perfect for hot summer days.",
    type: "cold",
  },
  {
    name: "Hot Chocolate",
    price: 3.49,
    description: "Rich and creamy chocolate drink topped with whipped cream.",
    type: "hot",
  },
  {
    name: "Iced Tea",
    price: 2.99,
    description:
      "Refreshing tea served over ice, available in different flavors.",
    type: "cold",
  },
];

function addItemToCart(answers) {
  console.log(answers);
  shoppingCart.push(menuItems[answers - 1]);
}

function displayCart() {
  console.log(shoppingCart);
}

function checkout() {
  console.log("checkout");
  let price = 0;
  let totalItem = 0;
  shoppingCart.forEach((item) => {
    price += item.price;

    totalItem += 1;
  });
  console.log(
    "You have " +
      totalItem +
      " numbers of item in your cart and the total price is " +
      price +
      "."
  );
}

const url =
  "https://api.weatherapi.com/v1/current.json?key=d57250fe1d9a4a1fafd221431233105&q=73106&aqi=no";
const currentWeatherPromise = fetch(url);

async function getCurrentWeather() {
  const currentWeatherResponse = await fetch(url);
  //console.log(currentWeatherResponse.headers.get("date"));
  const currentTime = new Date();
  //console.log(currentTime);
  const json = await currentWeatherResponse.json();
  //console.log(`The current temp near you is ${json.current.temp_f}`);
  return json.current.temp_f;
}

async function getFutureWeather(futureUrl, days) {
  //returns temp in fahrenheit of given future date.

  const futureWeatherResponse = await fetch(futureUrl);
  const json = await futureWeatherResponse.json();

  //console.log(json.forecast.forecastday[days - 1].hour[4].temp_f); // Would be better to request the time from the user or lookup noon in the local timezone and use that instead.
  const forecast = await json.forecast.forecastday[days - 1].hour[4].temp_f;
  //console.log(json.forecast.forecastday[days - 1].hour[4].temp_f);
  return forecast;
}

function giveSuggestionBasedOnTemp(temp) {
  //console.log("suggestion temp", temp);
  if (temp >= 80) {
    //console.log("Cold Drink");
    const coldItems = menuItems.filter((item) => {
      return item.type === "cold";
    });
    console.log("We recommend " + coldItems[0].name + ".");
  } else if (temp < 80) {
    //console.log("Hot Drinks");
    const hotItems = menuItems.filter((item) => {
      return item.type === "hot";
    });
    console.log("We recommend " + hotItems[0].name + ".");
  }
}

function suggestion() {
  let currentWeather;
  getCurrentWeather().then((result) => {
    //console.log(result);
    currentWeather = result;
    giveSuggestionBasedOnTemp(result);
  });
}

async function futureSuggestion(days, zipcode) {
  console.log(days, zipcode);
  //console.log("days:", days, "zipcode:", zipcode);
  days = Number(days) + 1;
  const futureUrl =
    "https://api.weatherapi.com/v1/forecast.json?key=7866091178b94077a3f152008230306&q=" +
    zipcode +
    "&days=" +
    days +
    "&aqi=no&alerts=no";
  //console.log(futureUrl);
  const futureTemp_f = await getFutureWeather(futureUrl, days);
  giveSuggestionBasedOnTemp(futureTemp_f);
}

function listMenu() {
  menuItems.forEach((item, index) =>
    console.log(index + 1, item.name, item.description, item.price)
  );
  //   library.forEach((book) => console.log(book));
}

// function prompt() {
//   // translate(sentence, { to: language })
//   //   .then((res) => {
//   //     console.log(
//   //       "\n" +
//   //         boxen(chalk.green("\n" + res.text + "\n"), {
//   //           padding: 1,
//   //           borderColor: "green",
//   //           dimBorder: true,
//   //         }) +
//   //         "\n"
//   //     );
//   //   })
//   //   .catch((err) => {
//   //     console.error(err);
//   //   });
//   rl.question(
//     "What would you like to do? You can order, remove, display, list, suggestion, future, or checkout\n",
//     (answer) => {
//       if (answer === "order") {
//         rl.question("What would you like to order?(1-4)\n", (info) => {
//           addItemToCart(info);
//           prompt();
//         });
//       } else if (answer === "remove") {
//         rl.question(
//           "what is the title of the book you want to remove?\n",
//           (title) => {
//             removeBook(title);
//             prompt();
//           }
//         );
//       } else if (answer === "display") {
//         displayCart();
//         prompt();
//       } else if (answer === "list") {
//         listMenu();
//         prompt();
//       } else if (answer === "checkout") {
//         checkout();
//         prompt();
//       } else if (answer === "suggestion") {
//         suggestion();
//         prompt();
//       } else if (answer === "future") {
//         rl.question(
//           "How many days from now will you be at said location\n",
//           (days) => {
//             rl.question("What is the zipcode of the location\n", (zipcode) => {
//               futureSuggestion(days, zipcode);
//               prompt();
//             });
//           }
//         );
//       } else {
//         console.log("Invalid input");

//         prompt();
//       }
//     }
//   );
// }

// //CHATGPT answer 1
// async function prompt() {
//   const answer = await new Promise((resolve) => {
//     rl.question(
//       "What would you like to do? You can order, remove, display, list, suggestion, future, or checkout\n",
//       (input) => {
//         resolve(input);
//       }
//     );
//   });

//   if (answer === "order") {
//     const info = await new Promise((resolve) => {
//       rl.question("What would you like to order? (1-4)\n", (input) => {
//         resolve(input);
//       });
//     });

//     addItemToCart(info);
//     await prompt();
//   } else if (answer === "remove") {
//     const title = await new Promise((resolve) => {
//       rl.question(
//         "What is the title of the book you want to remove?\n",
//         (input) => {
//           resolve(input);
//         }
//       );
//     });

//     removeBook(title);
//     await prompt();
//   } else if (answer === "display") {
//     displayCart();
//     await prompt();
//   } else if (answer === "list") {
//     listMenu();
//     await prompt();
//   } else if (answer === "checkout") {
//     checkout();
//     await prompt();
//   } else if (answer === "suggestion") {
//     suggestion();
//     await prompt();
//   } else if (answer === "future") {
//     const days = await new Promise((resolve) => {
//       rl.question(
//         "How many days from now will you be at said location?\n",
//         (input) => {
//           resolve(input);
//         }
//       );
//     });

//     const zipcode = await new Promise((resolve) => {
//       rl.question("What is the zipcode of the location?\n", (input) => {
//         resolve(input);
//       });
//     });

//     await futureSuggestion(days, zipcode);
//     await prompt();
//   } else {
//     console.log("Invalid input");
//     await prompt();
//   }
// }

async function prompt() {
  while (true) {
    const answer = await new Promise((resolve) => {
      rl.question(
        "What would you like to do? You can order, remove, display, list, suggestion, future, or checkout\n",
        (input) => {
          resolve(input);
        }
      );
    });

    if (answer === "order") {
      const info = await new Promise((resolve) => {
        rl.question("What would you like to order? (1-4)\n", (input) => {
          resolve(input);
        });
      });

      addItemToCart(info);
    } else if (answer === "remove") {
      const title = await new Promise((resolve) => {
        rl.question(
          "What is the title of the book you want to remove?\n",
          (input) => {
            resolve(input);
          }
        );
      });

      removeBook(title);
    } else if (answer === "display") {
      displayCart();
    } else if (answer === "list") {
      listMenu();
    } else if (answer === "checkout") {
      checkout();
    } else if (answer === "suggestion") {
      suggestion();
    } else if (answer === "future") {
      const days = await new Promise((resolve) => {
        rl.question(
          "How many days from now will you be at said location?\n",
          (input) => {
            
            resolve(input);
          }
        );
      });

      const zipcode = await new Promise((resolve) => {
        rl.question("What is the zipcode of the location?\n", (input) => {
          resolve(input);
        });
      });

      await futureSuggestion(days, zipcode);
    } else {
      console.log("Invalid input");
    }
  }
}

prompt();