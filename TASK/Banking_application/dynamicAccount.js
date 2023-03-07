const prompt = require("prompt-sync")();
let condition = parseInt(
  prompt(
    "enter 1 :create bank account\t 2: Deposit\t 3: WithDraw\t 4: Take Loan\t 5: Pay EMI\t  6: Bank details ==>> "
  )
);

let obj,
  amount = 0,
  duration;
var value = [];

let usedNumbers = [];

function getRandom() {
  let randomNumber = Math.floor(Math.random() * 10000000000 + 1);

  while (usedNumbers.includes(randomNumber)) {
    randomNumber = Math.floor(Math.random() * 10000000000 + 1);
  }

  usedNumbers.push(randomNumber);
  return randomNumber;
}

//FOR CHECKING VALID INPUT FOR THE PERFORME BANKING FUNCTION
if (condition > 0 && condition <= 6) {
  switch1(condition); // CALLING THE FUNCTION ACCORDING TO CUSTOMER NEED
} else {
  console.log("INVALID INPUT");
  returnF();
}

function pin() {
  code = prompt("Enter amount: ");
  let regex21 = /^[0-9]*$/;
  if (code.match(regex21)) {
    // console.log(postal_code);
    // count++;
    amo = parseInt(code);
    // console.log(amo+5);
    return amo;
  } else {
    console.log("Invalid amount!");
    pin();
    return amo;
  }
}

function year() {
  code1 = prompt("Enter year: ");
  let regex212 = /^[0-9]*$/;
  if (code1.match(regex212)) {
    // console.log(postal_code);
    // count++;
    amou = parseInt(code1);
    // console.log(amo+5);
    return amou;
  } else {
    console.log("Invalid amount!");
    year();
    return amou;
  }
}

function fullName() {
  name1 = prompt("enter name : ");
  let regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;
  if (!name1.match(regex)) {
    console.log("invalid Name! Enter full name(First & Last name.)");
    fullName();
  }
  return name1;
}
function contact() {
  mobile_no = prompt("Enter Mobile no: ");
  let regex1 = /^[789][0-9]{9}$/;
  if (!mobile_no.match(regex1)) {
    console.log("Invalid Contact No!");
    contact();
  }
  return mobile_no;
}

function pinCode() {
  postal_code = prompt("Enter PIN code: ");
  let regex2 = /^[0-9]{6}$/;
  if (!postal_code.match(regex2)) {
    console.log("Invalid Postal Code!");
    pinCode();
  }
  return postal_code;
}

function email_id() {
  email = prompt("Enter email ID: ");
  let regex3 = /^[a-zA-Z0-9!#$%&]+@[a-zA-Z0-9]+\.[a-z]{2,3}$/;
  if (!email.match(regex3)) {
    console.log("Invlid Email!");
    email_id();
  }
  return email;
}

// CREATING ACCOUNT WITH USER INPUT
function account() {
  obj = {
    name: fullName(),
    conatact_no: contact(),
    post_code: pinCode(),
    email_ID: email_id(),
    account_no: getRandom(),
    bank_bal: 0,
    f_amount: 0,
    emi: 0,
    emiPeriod: 0,
  };
  value.push(obj);
}
// tempObj = obj;
function returnF() {
  cond = parseInt(
    prompt(
      "press 0: exit\t 1 :create bank account\t 2: Deposit\t 3: WithDraw\t 4: Take Loan\t 5: Pay EMI\t  6: Bank details ==>> : "
    )
  );
  if (cond == 0) {
    return console.log("\nTHANK YOU FOR BANKING\n");
  } else {
    //FOR CHECKING VALID INPUT FOR THE PERFORME BANKING FUNCTION
    if (cond > 0 && cond <= 6) {
      switch1(cond); // CALLING AGAIN THE FUNCTION ACCORDING TO CUSTOMER NEED
    } else {
      console.log("INVALID INPUT");
      returnF();
    }
  }
}

function switch1(condition) {
  // let check = condition;
  switch (condition) {
    case 1:
      account();
      console.log(" \n account created \n ");
      printDetails();
      break;

    case 2:
      deposit();
      break;

    case 3:
      withdraw();
      break;

    case 4:
      loan();
      break;

    case 5:
      payEmi();
      break;

    case 6:
      printDetails();
      break;
  }
}
// function push() {
//   value.push(obj);
// }

//FUNCTION FOR PRINTING DETAILS OF ACCOUNT
function printDetails() {
  let user_input = prompt("Enter mail: ");
  // temp = bank_bal;
  for (i = 0; i < value.length; i++) {
    console.log(i);
    if (value[i].email_ID === user_input) {
      console.log("Details: ");
      console.log(value[i]);
      break;
    }
    if (i === value.length - 1) {
      console.log("invalid credentials");
    }
  }
  returnF();
}

// FUNCTION TO DEPOIST ACCOUNT BALANCE
function deposit() {
  let user_input = prompt("Enter mail: ");
  for (i = 0; i < value.length; i++) {
    if (value[i].email_ID === user_input) {
      console.log(i);
      let depo = pin();
      value[i].bank_bal = value[i].bank_bal + depo;
      // obj.bank_bal=bank_bal;
      console.log("bank_bal :", value[i].bank_bal);
      break;
    }
    console.log(i);
    if (i === value.length - 1) {
      console.log("invalid credentials");
    }
  }
  returnF();
}

// FUNCTION TO WITHDRAW ACCOUNT BALANCE
function withdraw() {
  let user_input = prompt("Enter mail: ");
  for (i = 0; i < value.length; i++) {
    if (value[i].email_ID === user_input) {
      let w = pin();
      if (value[i].bank_bal > w) {
        value[i].bank_bal = value[i].bank_bal - w;
        console.log("bank_bal :", value[i].bank_bal);
        // returnF();
      } else {
        console.log("your balnce is low. Try with lower amount!");
      }
      break;
    }
    if (i === value.length - 1) {
      console.log("invalid credentials");
    }
  }
  returnF();
}
// FUNCTION TO TAKE LOAN
function loan() {
  let user_input = prompt("Enter mail: ");
  for (i = 0; i < value.length; i++) {
    if (value[i].email_ID === user_input) {
      if (value[i].f_amount <= 0) {
        let c = parseInt(
          prompt("Enter 1:carLoan\t 2:homeloan\t 3:EduLoan ==>> ")
        );
        if (c > 0 && c < 4) {
          switch (c) {
            case 1:
              carLoan();
              break;
            case 2:
              homeLoan();
              break;
            case 3:
              EduLoan();
              break;
          }
        } else {
          console.log("Invalid input!\t Enter detail again.");
          // loan();
          returnF();
        }
      } else {
        console.log("Your have 1 active loan so you can't take another");
        returnF();
      }
      break;
    }
    if (i === value.length - 1) {
      console.log("invalid credentials");
      returnF();
    }
  }
}

// FUNCTION TO TAKE CAR LOAN
function carLoan() {
  amount = pin();
  duration = year();
  SI = (amount * 8 * duration) / 100;
  value[i].f_amount = amount + SI;
  console.log("Total amount to pay with intrest rate at 8%", value[i].f_amount);
  value[i].emiPeriod = duration * 12;
  value[i].emi = value[i].f_amount / (duration * 12);
  value[i].bank_bal = value[i].bank_bal + amount;
  console.log("bank_bal :", value[i].bank_bal);
  returnF();
}

// FUNCTION TO TAKE HOME LOAN
function homeLoan() {
  amount = pin();
  duration = year();
  SI = (amount * 6 * duration) / 100;
  value[i].f_amount = amount + SI;
  console.log("Total amount to pay with intrest rate at 6%", value[i].f_amount);
  value[i].emiPeriod = duration * 12;
  value[i].emi = value[i].f_amount / (duration * 12);
  value[i].bank_bal = value[i].bank_bal + amount;
  console.log("bank_bal :", value[i].bank_bal);
  returnF();
}

// FUNCTION TO TAKE EDUCATION LOAN
function EduLoan() {
  amount = pin();
  duration = year();
  SI = (amount * 4 * duration) / 100;
  value[i].f_amount = amount + SI;
  console.log("Total amount to pay with intrest rate at 4%", value[i].f_amount);
  value[i].emiPeriod = duration * 12;
  value[i].emi = value[i].f_amount / (duration * 12);
  value[i].bank_bal = value[i].bank_bal + amount;
  console.log("bank_bal :", value[i].bank_bal);
  returnF();
}

// FUNCTION TO PAY EMI
function payEmi() {
  let user_input = prompt("Enter mail: ");
  for (i = 0; i < value.length; i++) {
    if (value[i].email_ID === user_input) {
      if (value[i].f_amount <= 0) {
        console.log("NO EMI TO PAY.\n");
        returnF();
        return;
      }
      if (value[i].bank_bal >= value[i].emi && value[i].f_amount >= 0) {
        value[i].bank_bal = value[i].bank_bal - value[i].emi;
        value[i].f_amount = value[i].f_amount - value[i].emi;
        console.log("EMI PAID", "your bank balance is now ", value[i].bank_bal);
        value[i].emiPeriod--;
      } else {
        console.log("YOU HAVE NOT SUFFICIENT FUND!\n");
      }
      console.log("your emi is : ", value[i].emi);
      break;
    }
    if (i === value.length - 1) {
      console.log("invalid credentials");
    }
  }
  returnF();
}
