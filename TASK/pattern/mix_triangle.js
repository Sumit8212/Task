const prompt = require('prompt-sync')();

let n=4;

for(let i=1; i<=n; i++)
{

    for(let j=n; j>=i; j--)
    {
        process.stdout.write("*"+" ");
    }
    console.log(); 
}

for(let i=1; i<=n; i++)
{
    if(i==1) continue;
    for(let j=1; j<=i; j++)
    {
       process.stdout.write("*"+" ");
    }
    console.log();
}