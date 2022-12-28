var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Whats your name?\n");
console.log("\nHi", userName, "! Welcome to quiz, please look at the questions and answer yes or no,lets see how well you know me");

function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer) {
    console.log("You are right!")
    score = score + 1;
  }
  else {
    console.log("You are wrong!")
    score = score;
  }
}
play("\nAm i older than 20?\n ", "yes");
play("Am i from karnataka?\n ", "yes");
play("Have i read many books?\n ", "no");
play("Do i like taylor swift?\n ", "yes");
play("Am i a vegetarian?\n ", "no");
play("Have i ever been on a rollercoaster\n ", "yes");


console.log("\n you scored:", score)
if (score >= 5) {
  console.log("Well done, NOICE");
}
else{
  console.log("You dont know me well enough mate!")
}