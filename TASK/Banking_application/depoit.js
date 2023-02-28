// ITS 
//     ONLY
//         FOR 
//         CHECKING
//                 PURPOSE
const prompt = require('prompt-sync')();

// let array = new Array();
// let array = require('array')();
// let el = parseInt(prompt("ENter no"));

// array.add(el);

// console.log(array);
var value=new Array();
let el;
function pusha(){
 el = prompt("==> ")
value.push(el);
}

function pulla(){
for(i=0; i<value.length; i++)
{
    if(value[i]==12) {
        console.log("function print called")
    }else console.log("another call");
}
}
pusha()
pulla();
// console.log("Array element  is :"+value[0]);

//iterating array elements with while loop
// var temp=0;
// while (temp < value.length) {
// console.log("Array element  is :"+value[0]);
// temp++;
// }


// function pusha(){
//     // user_input = prompt("==> ")
//    value.push(account_no);
//    }
  
//    function pulla(){
//    for(i=0; i<value.length; i++)
//    {
//        if(value[i]==user_input) {
//            console.log("function print called");
//        }else console.log("another call");
//    }
//    }