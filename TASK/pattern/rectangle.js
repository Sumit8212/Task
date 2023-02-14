const prompt = require('prompt-sync')();
let n =4;

for(let i=1; i<=n;i++)
{
    for(let j=1; j<=n; j++)
    {
        process.stdout.write("*" +" ");
    }
    console.log();
}