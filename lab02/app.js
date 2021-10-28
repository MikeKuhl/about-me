"use strict";
let score = 0;

function guessingGame() {
  alert(
    "Here is a list of cars!" + "mazda",
    "bmw",
    "subaru",
    "porsche",
    "honda",
    "lexus",
    "toyota",
    "chrysler",
    "buick",
    "Hyundai"
  );
  var cars = [
    "mazda",
    "bmw",
    "subaru",
    "porsche",
    "honda",
    "lexus",
    "toyota",
    "chrysler",
    "buick",
    "Hyundai",
  ];

  for (let i = 0; i < 10; i++) {
    var carAnswer = prompt("Now can you guess my car??");

    for (let j = 0; j < cars.length; j++) {
      if (carAnswer === cars[j]) {
        alert("Correct!");
        score++;
        i = 3;
        break;
        console.log(carAnswer);
      }
    }
    if (i !== 3) {
      alert("Incorrect");
      console.log(carAnswer);
    }

    alert(`Thank you for your time ${greeting}. Please come back again!`);
  }
  alert(`${greeting} yo got a ${score}`);
}

// function gameStart() {
document.getElementById("test").addEventListener("click", function () {
  let greeting;
  while (!greeting) {
    greeting = prompt("What is your name?");
    if (greeting === null) {
      alert("Not there? Bye!");
      break;
    }
    let name = greeting.toUpperCase();
    alert("Well Hello " + name);
    console.log("Greeting" + name);

    var who = prompt(
      "Is Mark Zuckerberg a American media magnate, internet entrepreneur, and philanthropist who co-founded Facebook?"
    );
    who.toLowerCase();
    if (who === "Yes" || who === "y") {
      alert("Yes Facebook is life!");
      score++;
    } else {
      alert("No you are wrong facebook is life!");
    }
    var where = prompt("Did Mr. Mark Duckerberg attend Harvard?");
    where.toLowerCase();
    if (where === "yes" || where === "y") {
      alert("Yes!, Harvard! Facebook! Facebook is life!!");
      score++;
    } else {
      alert(`No, no, ${name} you are wrong. Facebook is still life!`);
    }

    var money = prompt("Was Mark Zuckerberg a millionaire by age 23?");
    money.toLowerCase();
    if (money === "yes" || money === "y") {
      alert(`Yes! ${name} how briliant of a achievement!`);
      score++;
    } else {
      alert(`No, no, ${name} you are wrong. Facebook is still life!`);
    }

    var forbes = prompt("Has Mr.Zuckerberg appeared in Forbes Magazine?");
    forbes.toLowerCase();
    if (forbes === "yes" || forbes === "y") {
      alert(
        `Good job, ${name}! Another great achievement for our sentient creation!`
      );
      score++;
    } else {
      alert(`No, no, ${name} you are wrong. Facebook is still life!`);
    }
  }
  let attempts = 0;

  while (attempts > 4) {
    var kids = prompt("How many children does Mark Zuckerberg have?");
    if (kids === 2) {
      alert("Correct!");
      console.log(kids);
      attempts++;
    } else if (kids < 2) {
      alert("Too many");
      attempts++;
      console.log(kids);
    } else if (kids >= 1) {
      alert("Too little");
      attempts++;
      console.log(kids);
    }
  }

  score++;
  console.log(score);
  {
    guessingGame();
  }
});

// gameStart();
