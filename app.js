let maximum = parseInt(prompt("Enter the maximum number:"));
while (!maximum) {
  maximum = parseInt(prompt("Enter the maximum number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = prompt("Enter your first guess!");
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter a new guess:");
  } else if (guess < targetNum) {
    guess = prompt("Too low! Enter a new guess:");
  } else {
    guess = prompt(
      `Your guess is ${guess}, which is not a number, please guess a number.`
    );
  }
}

if (guess === "q") {
  alert("Okay, you quit!");
} else {
  alert(`Congratulations! You got it in ${attempts} guesses.`);
}
