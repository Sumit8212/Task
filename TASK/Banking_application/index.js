const prompt = require("prompt-sync")();

let condition = parseInt(
  prompt(
    "enter 1 :create bank account\t 2: Deposit\t 3: WithDraw\t 4: Take Loan\t 5: Pay EMI\t 7: Bank details ==>> "
  )
);

// console.log("condition is "+condition);
let name,
  mobile_no,
  aadhar_no,
  cond,
  account_no,
  amount = 0,
  f_amount = 0,
  duration,
  emi,
  emiPeriod,
  bank_bal = 0,
  count = 0;
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
if (condition > 0 && condition <= 7) {
  switch1(condition); // CALLING THE FUNCTION ACCORDING TO CUSTOMER NEED
} else {
  console.log("INVALID INPUT");
  returnF();
}

function account() {
  name = prompt("Enter name : ");
  mobile_no = parseInt(prompt("Enter mobile no : "));
  aadhar_no = parseInt(prompt("Enter aadhar no : "));
  account_no = getRandom();
  bank_bal = 0;
  count++;
  //   return name, mobile_no, aadhar_no, account_no;
}

function print_details() {
  // ac_no = parseInt(prompt("Enter account no : "));

  if (count == 0) {
    // parseInt(prompt("enter account number to show details : "));
    console.log("name : Sumit SIngh");
    console.log("mobile_no : 1234567890");
    // console.log("aadhar_no :" + aadhar_no);
    console.log("Account_no : 9081726354");
    if (f_amount > 0)
      console.log("your emi is : ", emi, "EMI pending :", emiPeriod);
    console.log("Bank_balance :", bank_bal, "\n");
  }
  // else if (account_no == 9081726354) {
  //   console.log("name : Sumit SIngh");
  //   console.log("mobile_no : 1234567890");
  //   // console.log("aadhar_no :" + aadhar_no);
  //   console.log("Account_no : 9081726354");
  //   console.log("Bank_balance :", bank_bal, "\n");
  // }
  // else if (count < 0) {
  //   console.log("name : Sumit SIngh");
  //   console.log("mobile_no : 1234567890");
  //   // console.log("aadhar_no :" + aadhar_no);
  //   console.log("Account_no : 9081726354");
  //   console.log("Bank_balance :", bank_bal, "\n");
  //   count--;
  // }
  else {
    console.log("name :" + name);
    console.log("mobile_no :" + mobile_no);
    // console.log("aadhar_no :" + aadhar_no);
    console.log("Account_no :" + account_no);
    if (f_amount > 0)
      console.log("your emi is : ", emi, "EMI pending :", emiPeriod);
    console.log("Bank_balance :", bank_bal, "\n");
  }
  returnF();
}
function switch1(condition) {
  let check = condition;
  switch (check) {
    case 1:
      account();
      console.log(" \n account created \n ");
      print_details();
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

    case 7:
      print_details();
  }
}

// function balance(dipo, lo) {
//    bank_bal = 0;
//   return bank_bal;
// }

function returnF() {
  // prompt("press 0 to exit ");
  cond = parseInt(prompt("press 0 to exit or other to continue : "));
  if (cond == 0) {
    return console.log("\nTHANK YOU FOR BANKING\n");
  } else {
    //FOR CHECKING VALID INPUT FOR THE PERFORME BANKING FUNCTION
    if (cond > 0 && cond <= 7) {
      switch1(cond); // CALLING AGAIN THE FUNCTION ACCORDING TO CUSTOMER NEED
    } else {
      console.log("INVALID INPUT");
      returnF();
    }
  }
}


// FUNCTION TO WITHDRAW MONEY 
function withdraw() {
  let w = parseInt(prompt("Enter amount to withdraw : "));
  if (bank_bal > w) {
    bank_bal = bank_bal - w;
    console.log("bank_bal :", bank_bal);
    returnF();
    // return withDraw;
  } else {
    console.log("your balnce is low. Thank you!");
    returnF();
  }
}


// FUNCTION TO DEPOSIT MONEY 
function deposit() {
  console.log(bank_bal);
  let depo = parseInt(prompt("Enter amount to deposit : "));
  bank_bal = bank_bal + depo;
  console.log("bank_bal :", bank_bal);
  returnF();
}

// FUNCTION TO CHOOSE THE LOAN BETWEEN ALL THE AVILABLE LOAN
function loan() {
  let c = parseInt(prompt("Enter 1:carLoan\t 2:homeloan\t 3:EduLoan ==>> "));
  // let c = parseInt(prompt("enter number for testcase : "));

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
}

// FUNCTION TO TAKE CAR LOAN
function carLoan() {
  amount = parseInt(prompt("Enter loan amount : "));
  duration = parseInt(prompt("Enter duration : "));
  SI = (amount * 7 * duration) / 100;
  f_amount = amount + SI;
  // console.log(f_amount);
  emiPeriod = duration * 12;
  emi = f_amount / (duration * 12);
  bank_bal = bank_bal + amount;
  console.log("bank_bal :", bank_bal);
  returnF();
}

// FUNCTION TO TAKE HOME LOAN
function homeLoan() {
  amount = parseInt(prompt("Enter loan amount : "));
  duration = parseInt(prompt("Enter duration : "));
  SI = (amount * 10 * duration) / 100;
  f_amount = amount + SI;
  // console.log(f_amount);
  emiPeriod = duration * 12;
  emi = f_amount / (duration * 12);
  bank_bal = bank_bal + amount;
  console.log("bank_bal :", bank_bal);
  returnF();
}


// FUNCTION TO TAKE EDUCATION LOAN
function EduLoan() {
  amount = parseInt(prompt("Enter loan amount : "));
  duration = parseInt(prompt("Enter duration : "));
  SI = (amount * 4 * duration) / 100;
  f_amount = amount + SI;
  console.log(f_amount);
  emiPeriod = duration * 12;
  emi = f_amount / (duration * 12);
  bank_bal = bank_bal + amount;
  console.log("bank_bal :", bank_bal);
  returnF();
}

// FUNCTION TO PAY EMI 
function payEmi() {
  console.log(f_amount);
  if (bank_bal >= emi && f_amount >= emi) {
    bank_bal = bank_bal - emi;
    f_amount = f_amount - emi;
    console.log("EMI PAID", "your bank balance is now ", bank_bal);
    emiPeriod--;
  } else {
    console.log("YOU HAVE NOT SUFFICIENT FUND!\n");
  }
  console.log("your emi is : ", emi);
  returnF();
}
