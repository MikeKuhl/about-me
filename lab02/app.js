"use strict";
let score = 0;
function hello(greeting) {
  if (greeting === null) {
    alert("Not there? Bye!");
  } else {
    let name = greeting.toUpperCase();
    alert("Well Hello " + name);
  }
}
hello(greeting);

function guessingGame() {
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

  for (let i = 0; i < 5; i++) {
    var carAnswer = prompt("Now can you guess my car??");
    if (carAnswer === cars[3]) {
      alert("Correct!");
      score++;
      i = 5;
      alert(`Thank you for your time ${greeting}. Please come back again!`);
      break;
    } else {
      alert("Incorrect");
      i++;
    }
  }
}

function questionStart() {
  let score = 0;
  let array = [
    question1(),
    question2(),
    question3(),
    question4(),
    question5(),
    guessingGame(),
  ];
  {
    alert(`You scored ${score} out of 5`);
  }
}

function question1() {
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
}

function question2() {
  var where = prompt("Did Mr. Mark Duckerberg attend Harvard?");
  where.toLowerCase();
  if (where === "yes" || where === "y") {
    alert("Yes!, Harvard! Facebook! Facebook is life!!");
    score++;
  } else {
    alert(`No, no, ${name} you are wrong. Facebook is still life!`);
  }
}

function question3() {
  var money = prompt("Was Mark Zuckerberg a millionaire by age 23?");
  money.toLowerCase();
  if (money === "yes" || money === "y") {
    alert(`Yes! ${name} how briliant of a achievement!`);
    score++;
  } else {
    alert(`No, no, ${name} you are wrong. Facebook is still life!`);
  }
}

function question4() {
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

function question5() {
  let attempts = 0;
  while (attempts < 4) {
    var kids = parseInt(prompt("How many children does Mark Zuckerberg have?"));
    if (kids === 2) {
      alert("Correct!");
      score++;
      attempts = 4;
      break;
    } else if (kids > 2) {
      alert("Too many");
      attempts++;
    } else if (kids < 2) {
      alert("Too little");
      attempts++;
    }
  }
}
