var location1 = "3";
var location2 = "4";
var loaction3 = "5";
var guess;
var hits = 0;
var guesses = 0;
var isSunk = 0;
while (isSunk == false) {
  inp = prompt("Attack!(valid inputs: 0-6)");
  if (["0", "1", "2", "3", "4", "5", "6"].includes(inp)) {
    if (inp in [loaction3, location1, location2]) {
      hits = hits + 1;
      guesses = guesses + 1;
      if (hits >= 3) {
        prompt("you win the game!");
        break;
      }
      alert("A ship Got hited")
    } else {
      guesses = guesses + 1;
    }
  } else {
    alert("Invalid Input!");
  }
}