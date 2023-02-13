const prompt = require("prompt-sync")();

prompt("\n press enter to generate lucky number. \n ");

let usedNumbers = [];
function getRandom() {
  let randomNumber = Math.floor(Math.random() * 10 + 1);

  while (usedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 10 + 1);
  }

  usedNumbers.push(randomNumber);
  return randomNumber;
}

let randomNum;
function getLuckyNumber() {
  randomNum = Math.floor(Math.random() * 10 + 1);
}

getLuckyNumber();
const luckyNum = randomNum;
console.log("your lucky number is :" + luckyNum);
prompt("press enter to start the game.\n");

for (let i = 1; i >= 0; i--) {
  var num = getRandom();
  console.log("your random no is: " + num);
  if (luckyNum === num) {
    prompt("you win \n");
    console.log("Hurray you won!!\t GAME END. \n");
    break;
  } else {
    if (i === 1) {
      prompt("you lost,please try again! you have " + i + " chance left,  \n");
    } else {
      prompt("sorry you lose!\n");
      console.log("The game is over better luck next time.\n");
    }
    // prompt("your lucky number is :" + luckyNum);
  }
}
