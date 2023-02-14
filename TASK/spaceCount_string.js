const prompt= require("prompt-sync")();

let str = prompt("enter string : ");
let n = str.length;
let count = 0;

for(i=0;i<n;i++)
{
    if(i==" ") count++;
}
console.log(count);