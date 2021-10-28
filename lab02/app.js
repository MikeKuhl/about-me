"use strict";

var numbers = [95, 98, 17, 57, 86, 72, 46, 30, 71749379, 13, 7, 16, 10];

document.getElementById("test").addEventListener("click", function () {
  // let greeting;
  // while (!greeting) {
  //   greeting = greerompt("What is your name?");
  //   if (greeting === null) {
  //     alert("Not there? Bye!");
  //     break;
  //   }
  //   let name = greeting.toUpperCase();
  //   alert("Well Hello " + name);
  //   console.log("Greeting" + name);

  //   var who = prompt(
  //     "Is Mark Zuckerberg a American media magnate, internet entrepreneur, and philanthropist who co-founded Facebook?"
  //   );
  //   if (who === "Yes" || who === "y") {
  //     alert("Yes Facebook is life!");
  //   } else {
  //     alert("No you are wrong facebook is life!");
  //   }
  //   var where = prompt("Did Mr. Mark Duckerberg attend Harvard?");
  //   where.toLowerCase();
  //   if (where === "yes" || where === "y") {
  //     alert("Yes!, Harvard! Facebook! Facebook is life!!");
  //   } else {
  //     alert(`No, no, ${name} you are wrong. Facebook is still life!`);
  //   }

  //   var money = prompt("Was Mark Zuckerberg a millionaire by age 23?");
  //   money.toLowerCase();
  //   if (money === "yes" || money === "y") {
  //     alert(`Yes! ${name} how briliant of a achievement!`);
  //   } else {
  //     alert(`No, no, ${name} you are wrong. Facebook is still life!`);
  //   }

  //   var forbes = prompt("Has Mr.Zuckerberg appeared in Forbes Magazine?");
  //   forbes.toLowerCase();
  //   if (forbes === "yes" || forbes === "y") {
  //     alert(
  //       `Good job, ${name}! Another great achievement for our sentient creation!`
  //     );
  //   } else {
  //     alert(`No, no, ${name} you are wrong. Facebook is still life!`);
  //   }
  //   alert(`Thank you for your time ${name}. Please come back again!`);
  // }
  let attempts = 0;

  while (attempts > 4) {
    prompt("How many children does Mark Zuckerberg have?");
    attempts++;
  }
});
function guessingGame() {}
