const prompt = require('prompt-sync')();

let n=4;
// let str="";

// for(let i=1; i<=n; i++)
// {
//     for(let j=1; j<=i; j++)
//     {
//         str = str+j;
//     }
//     str= str+"\n";
// }
// console.log(str);


for(let i=1; i<=n; i++)
{
    for(let j=1; j<=i; j++)
    {
       process.stdout.write("*"+" ");
    }
    console.log();
}