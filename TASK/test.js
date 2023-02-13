const prompt = require("prompt-sync")();

prompt("\n press enter to start the game \n ");

let randomNum;
function getLuckyNumber() {
  randomNum = getRandom(1, 10);
}

getLuckyNumber();
const luckyNum = randomNum;
prompt("your lucky number is :" + luckyNum);

for (let i = 1; i >= 0; i--) {
  var num = getRandom(1, 10);
  console.log("random no is: " + num);
  if (luckyNum === num) {
    prompt("you win \n");
    console.log("Hurray you won!!\t GAME END. \n");
    break;
  } else {
    if (luckyNum === num) {
      prompt("you win!\n");
      console.log("Hurray you won!!\t GAME END. \n");
    } else {
      if (i == 1) {
        prompt("please try again! you have " + i + " chance left,  \n");
      } else {
        prompt("sorry you lose!\n");
        console.log("The game is over better luck next time.\n");
      }
      // prompt("your lucky number is :" + luckyNum);
    }
  }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}






// const prompt = require("prompt-sync")();

// prompt("\n press enter to start the game \n ");

// let usedNumbers = [];
// function getRandom() {
//   let randomNumber = Math.floor((Math.random() *10)+1);
  
//   while (usedNumbers.includes(randomNumber)) {
//     randomNumber = Math.floor((Math.random() *10)+1);
//   }
  
//   usedNumbers.push(randomNumber);
//   return randomNumber;
// }

// let randomNum;
// function getLuckyNumber() {
//   randomNum =  Math.floor((Math.random() *10)+1);
// }

// getLuckyNumber();
// const luckyNum = randomNum;
// prompt("your lucky number is :" + luckyNum);

// for (let i = 1; i >= 0; i--) {
//   var num = getRandom();
//   console.log("random no is: " + num);
//   if (luckyNum === num) {
//     prompt("you win \n");
//     console.log("Hurray you won!!\t GAME END. \n");
//     break;
//   } else {
//     // if (luckyNum === num) {
//     //   prompt("you win!\n");
//     //   console.log("Hurray you won!!\t GAME END. \n");
//     // } else {
//       if (i == 1) {
//         prompt("please try again! you have " + i + " chance left,  \n");
//       } else {
//         prompt("sorry you lose!\n");
//         console.log("The game is over better luck next time.\n");
//       }
//       // prompt("your lucky number is :" + luckyNum);
//     // }
//   }
// }




















