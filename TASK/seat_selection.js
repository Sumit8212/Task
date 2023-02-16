const prompt = require("prompt-sync")();

let t = parseInt(prompt("enter number for testcase : "));

for (let i = 1; i <= t; i++) {
  let seat_no = parseInt(prompt("enter seat no: "));
  // seat_alloc(seat_no);

 let rem = seat_no%12;
if(seat_no<=108){
if(rem==0 || rem ==1 || rem ==6 || rem ==7 )
{
  if(rem==0) console.log("WS "+(seat_no-11));
  else if(rem==1) console.log("WS "+(seat_no+11));
  else if(rem==6) console.log("WS "+(seat_no+1));
  else console.log("WS "+(seat_no-1));
}
else if(rem== 2 || rem ==5 || rem ==8 || rem ==11)
{
  if(rem==2)console.log("MS "+(seat_no+9));
  else if(rem==5) console.log("MS "+(seat_no+3));
  else if(rem==8) console.log("MS "+(seat_no-3));
  else console.log("MS "+seat_no-9);
}else{
  if(rem==3) console.log("AS "+(seat_no+7));
  else if(rem==4) console.log("AS "+(seat_no+5));
  else if(rem==9) console.log("AS "+(seat_no+-5));
  else console.log("AS "+(seat_no-7));
}
}else console.log("INVALID SEAT NO ACCESS!");

}

 





















// function seat_alloc(seat_no) {

// 		rem = seat_no%12;

// 		switch(rem){

// 			case 0:

// 			console.log(seat_no-11+" WS");

// 			break;

// 			case 1:

// 			console.log(seat_no+11+" WS");

// 			break;

// 			case 2:

// 			console.log(seat_no+9+" MS");

// 			break;

// 			case 3:

// 			console.log(seat_no+7+" AS");

// 			break;

// 			case 4:

// 			console.log(seat_no+5+" AS");

// 			break;

// 			case 5:

// 			console.log(seat_no+3+" MS");

// 			break;

// 			case 6:

// 			console.log(seat_no+1+" WS");

// 			break;

// 			case 7:

// 			console.log(seat_no-1+" WS");

// 			break;

// 			case 8:

// 			console.log(seat_no-3+" MS");

// 			break;

// 			case 9:

// 			console.log(seat_no-5+" AS");

// 			break;

// 			case 10:

// 			console.log(seat_no-7+" AS");

// 			break;

// 			case 11:

// 			console.log(seat_no-9+" MS");

// 			break;

// 		}

// }


