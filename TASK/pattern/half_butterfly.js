let n=5;

for(let i=1; i<=n; i++)
{
    for(let j=1; j<=i;j++)
    {
        process.stdout.write("*");
    }
    console.log();
}

for(let i=1; i<=n; i++){
    for(let j=n; j>=i; j--)
    {
        if(j==n) continue;
        process.stdout.write("*");
    }
    console.log();
}