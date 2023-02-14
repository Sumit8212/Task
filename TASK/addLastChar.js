// let s = 'cat';
const prompt = require('prompt-sync')();
let str = prompt("enter a word : ");


let char =str.slice(str.length-1);

let newstr= char+str+char;
console.log(newstr);
