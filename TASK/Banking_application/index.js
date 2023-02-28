const prompt = require("prompt-sync")();

let condition = parseInt(
  prompt(
    "enter 1 :create bank account\t 2: Deposit\t 3: WithDraw\t 4: Take Loan\t 5: Pay EMI\t  6: Bank details ==>> "
  )
);

// console.log("condition is "+condition);
let name,
  amo,
  amou,
  temp,
  mobile_no,
  user_id,
  user_input,
  email,
  postal_code,
  cond,
  account_no,
  amount = 0,
  f_amount = 0,
  duration,
  emi,
  emiPeriod,
  bank_bal = 0,
  count = 0;
// var value = new Array();
// let el;
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

function account() {
  fullName();
  contact();
  pinCode();
  email_id();
  // aadhar_no = parseInt(prompt("Enter aadhar no : "));
  account_no = getRandom();
  // pusha();
  // det(account_no);
  (f_amount = 0), (emi = 0), (emiPeriod = 0);
  bank_bal = 0;
  // count++;
  //   return name, mobile_no, aadhar_no, account_no;
}

function fullName() {
  name = prompt("enter name : ");

  let regex = /^[A-Z][a-z]+ [A-Z][a-z]+$/;

  if (name.match(regex)) {
    // console.log(name);
    count++;
  } else {
    console.log("invalid Name! Enter full name(First & Last name.)");
    fullName();
  }
}

function contact() {
  mobile_no = prompt("Enter Mobile no: ");
  let regex1 = /^[789][0-9]{9}$/;
  if (mobile_no.match(regex1)) {
    // console.log(mobile_no);
    count++;
  } else {
    console.log("Invalid Contact No!");
    contact();
  }
}

function pinCode() {
  postal_code = prompt("Enter PIN code: ");
  let regex2 = /^[0-9]{6}$/;
  if (postal_code.match(regex2)) {
    // console.log(postal_code);
    count++;
  } else {
    console.log("Invalid Postal Code!");
    pinCode();
  }
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

function email_id() {
  email = prompt("Enter email ID: ");
  let regex3 = /^[a-zA-Z0-9!#$%&]+@[a-zA-Z0-9]+\.[a-z]{2,3}$/;
  if (email.match(regex3)) {
    // console.log(email);
    count++;
  } else {
    console.log("Invlid Email!");
    email_id();
  }
}

function print_details() {
  // ac_no = parseInt(prompt("Enter account no : "));
  // console.log(count);
  if (count == 0) {
    account_no = parseInt(prompt("enter account number to show details : "));
    if (account_no == 9081726354 || user_id == "raj@gmail.com") {
      console.log("name : Sumit Singh");
      console.log("mobile_no : 1234567890");
      console.log("EMAIL : raj@gmail.com");
      console.log("Postal Code : 123456");
      console.log("Account_no : 9081726354");
      if (f_amount > 0) {
        console.log("Your total loan amount to paid : ", f_amount);
        console.log("your emi is : ", emi, "EMI pending :", emiPeriod);
      }
      temp = bank_bal;
      console.log("Bank_balance :", bank_bal, "\n");
      returnF();
    } else {
      console.log("Invalid account Number");
      account_details();
    }
  } else if (count > 4) {
    userAccount_details();
  } else {
    // user_input = parseInt(prompt("enter account number to show details : "));
    // if (user_input == account_no) {
    console.log("name :" + name);
    console.log("mobile_no :" + mobile_no);
    console.log("EMAIL :" + email);
    console.log("Postal Code :" + postal_code);
    console.log("Account_no :" + account_no);
    if (f_amount > 0) {
      console.log("Your total loan amount to paid : ", f_amount);
      console.log("your emi is : ", emi, "EMI pending :", emiPeriod);
    }
    console.log("Bank_balance :", bank_bal, "\n");
    count++;
    returnF();
    // } else {console.log("Invalid Account number!");userAccount_details();}
  }
  // returnF();
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

    case 6:
      print_details();
      break;
  }
}

// function balance(dipo, lo) {
//    bank_bal = 0;
//   return bank_bal;
// }

function returnF() {
  cond = parseInt(
    prompt(
      "press 0: exit\t 1 :create bank account\t 2: Deposit\t 3: WithDraw\t 4: Take Loan\t 5: Pay EMI\t  6: Bank details ==>> : "
    )
  );
  if (cond === 0) {
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

// FUNCTION TO WITHDRAW MONEY
function withdraw() {
  if (count == 0) {
    account_no = parseInt(prompt("enter account number to withdraw money : "));
    if (account_no == 9081726354) {
      let w = pin();
      if (bank_bal > w) {
        bank_bal = bank_bal - w;
        console.log("bank_bal :", bank_bal);
        returnF();
      } else {
        console.log("your balnce is low. Try with lower amount!");
        returnF();
        // withdraw();
      }
    } else {
      console.log("...failed\t Enter Valid Account no: ");
      // withdraw();
      returnF();
    }
  }
  if (count > 0) {
    user_input = parseInt(prompt("enter account number to show details : "));
    if (user_input == account_no) {
      let w = pin();
      if (bank_bal > w) {
        bank_bal = bank_bal - w;
        console.log("bank_bal :", bank_bal);
        returnF();
        // return withDraw;
      } else {
        console.log("your balnce is low. Try with lower amount!");
        withdraw();
      }
    } else {
      console.log("...failed\t Enter Valid Account no: ");
      // withdraw();
      returnF();
    }
  }
  // returnF();
}

// FUNCTION TO DEPOSIT MONEY
function deposit() {
  // console.log(bank_bal);
  if (count == 0) {
    account_no = parseInt(prompt("enter account number to deposit money : "));
    if (account_no == 9081726354) {
      let depo = pin();
      // console.log(depo);
      bank_bal = bank_bal + depo;
      console.log("bank_bal :", bank_bal);
      returnF();
    } else {
      console.log("...failed\t Enter Valid Account no: ");
      // deposit();
      returnF();
    }
  }
  if (count > 0) {
    user_input = parseInt(prompt("enter account number to DEPOSIT MONEY : "));
    if (user_input == account_no) {
      let depo = pin();
      bank_bal = bank_bal + depo;
      console.log("bank_bal :", bank_bal);
      returnF();
    } else {
      console.log("...failed\t Enter Valid Account no: ");
      deposit();
      returnF();
    }
  }
  // returnF();
}

// FUNCTION TO CHOOSE THE LOAN BETWEEN ALL THE AVILABLE LOAN
function loan() {
  if (f_amount <= 0) {
    if (count == 0) {
      account_no = parseInt(prompt("enter account number to take loan : "));
      if (account_no == 9081726354) {
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
        console.log("...failed\t Enter Valid Account no: ");
        // loan();
        returnF();
      }
    }
    if (count > 0) {
      user_input = parseInt(prompt("enter account number to TAKE LOAN : "));
      if (user_input == account_no) {
        let c = parseInt(
          prompt("Enter 1:carLoan\t 2:homeloan\t 3:EduLoan ==>> ")
        );
        // let c = parseInt(prompt("enter number for testcase : "));
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
        console.log("...failed\t Enter Valid Account no: ");
        // loan();
        returnF();
      }
    }
  } else {
    console.log("Your have 1 active loan so you can't take another");
    returnF();
  }
}

// FUNCTION TO TAKE CAR LOAN
function carLoan() {
  amount = pin();
  duration = year();
  SI = (amount * 7 * duration) / 100;
  f_amount = amount + SI;
  console.log("Total amount to pay with intrest rate at 7%", f_amount);
  emiPeriod = duration * 12;
  emi = f_amount / (duration * 12);
  bank_bal = bank_bal + amount;
  console.log("bank_bal :", bank_bal);
  returnF();
}

// FUNCTION TO TAKE HOME LOAN
function homeLoan() {
  amount = pin();
  duration = year();
  SI = (amount * 10 * duration) / 100;
  f_amount = amount + SI;
  console.log("Total amount to pay with intrest rate at 10%", f_amount);
  emiPeriod = duration * 12;
  emi = f_amount / (duration * 12);
  bank_bal = bank_bal + amount;
  console.log("bank_bal :", bank_bal);
  returnF();
}

// FUNCTION TO TAKE EDUCATION LOAN
function EduLoan() {
  amount = pin();
  duration = year();
  SI = (amount * 4 * duration) / 100;
  f_amount = amount + SI;
  console.log("Total amount to pay with intrest rate at 4% is: ", f_amount);
  emiPeriod = duration * 12;
  emi = f_amount / (duration * 12);
  bank_bal = bank_bal + amount;
  console.log("bank_bal :", bank_bal);
  returnF();
}

// FUNCTION TO PAY EMI
function payEmi() {
  // console.log(f_amount);
  if (f_amount <= 0) {
    console.log("NO EMI TO PAY.\n");
    returnF();
    return;
  }
  if (count == 0) {
    account_no = parseInt(prompt("enter account number pay loan : "));
    if (account_no == 9081726354) {
      if (bank_bal >= emi && f_amount >= 0) {
        bank_bal = bank_bal - emi;
        f_amount = f_amount - emi;
        console.log("EMI PAID", "your bank balance is now ", bank_bal);
        emiPeriod--;
      } else {
        console.log("YOU HAVE NOT SUFFICIENT FUND!\n");
      }
      console.log("your emi is : ", emi);
      returnF();
    } else {
      console.log("...failed\t Enter Valid Account no: ");
      // payEmi();
      returnF();
    }
  }
  if (count > 0) {
    user_input = parseInt(prompt("enter account number to PAY EMI : "));
    if (user_input == account_no) {
      if (bank_bal >= emi && f_amount >= 0) {
        bank_bal = bank_bal - emi;
        f_amount = f_amount - emi;
        console.log("EMI PAID", "your bank balance is now ", bank_bal);
        emiPeriod--;
      } else {
        console.log("YOU HAVE NOT SUFFICIENT FUND! or any EMI to paid.\n");
      }
      console.log("your emi is : ", emi);
      returnF();
    } else {
      console.log("...failed\t Enter Valid Account no: ");
      // payEmi();
      returnF();
    }
  }
}

//FUNCTION TO SHOW ACCOUNT DETAILS
function account_details() {
  account_no = parseInt(prompt("enter account number to show details : "));
  if (account_no == 9081726354 || user_id == "raj@gmail.com") {
    console.log("name : Sumit Singh");
    console.log("mobile_no : 1234567890");
    console.log("EMAIL : raj@gmail.com");
    console.log("Postal Code : 123456");
    console.log("Account_no : 9081726354");
    if (f_amount > 0) {
      console.log("Your total loan amount to paid : ", f_amount);
      console.log("your emi is : ", emi, "EMI pending :", emiPeriod);
    }
    console.log("Bank_balance :", bank_bal, "\n");
    returnF();
  } else {
    console.log("Invalid account Number");
    // account_details();
    returnF();
  }
}

function userAccount_details() {
  user_input = parseInt(prompt("enter account number to show details : "));
  if (user_input == account_no) {
    console.log("name :" + name);
    console.log("mobile_no :" + mobile_no);
    console.log("EMAIL :" + email);
    console.log("Postal Code :" + postal_code);
    console.log("Account_no :" + account_no);
    if (f_amount > 0) {
      console.log("Your total loan amount to paid : ", f_amount);
      console.log("your emi is : ", emi, "EMI pending :", emiPeriod);
    }
    console.log("Bank_balance :", bank_bal, "\n");
    returnF();
  } else if (user_input == 9081726354) {
    console.log("name : Sumit Singh");
    console.log("mobile_no : 1234567890");
    console.log("EMAIL : raj@gmail.com");
    console.log("Postal Code : 123456");
    console.log("Account_no : 9081726354");
    console.log("Bank_balance :", temp);
    returnF();
  } else {
    console.log("Invalid Account number!");
    // userAccount_details();
    returnF();
  }
}
