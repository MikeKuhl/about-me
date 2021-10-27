document.getElementById("test").addEventListener("click", function () {
  let greeting = prompt("What is your name?");
  alert("Well Hello " + greeting);
  console.log("Greeting" + greeting);
  let favChar = prompt("Who is your favorite character?");
  alert("That's cool!, I love " + favChar + "!");
  console.log("Who is your favorite character? " + favChar);
  let goodOrBad = prompt(
    "Do you think " + favChar + "is a bad or good guy?"
  );
  alert("Well I happen to dislike " + goodOrBad + " people");
  console.log("Do you think they are bad or good guy? " + goodOrBad);
  let pets = prompt("How many pets do they have?");
  console.log("How many pets do they have?" + pets);
  alert("wow you have " + pets + "pets");
  alert(
    "Wow!  " +
      greeting +
      "your favorite character is " +
      favChar +
      " and you think they are a " +
      goodOrBad +
      " person! You also say they have " +
      pets +
      " pets"
  );
});