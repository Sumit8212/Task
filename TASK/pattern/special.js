let n=6;


    for( i=1; i<=2; i++)
    {
        for( k=1; k<=2-i; k++)
        {
            process.stdout.write(" ");
        } 
        for( j=1; j<=2*i; j++)
        {
            process.stdout.write("*");

        } 
        for( k=1; k<=2*(2-i+1)-1; k++)
        {
            process.stdout.write(" ");
        } 
        for( j=1; j<=2*i; j++)
        {
            process.stdout.write(" ");
        } 
        for( j=1; j<=2*i-1; j++)
        {
            process.stdout.write("*");

        } 
        console.log();
    }
    
    for(i=n; i>=1; i--){
    for(j=n-i; j>=1; j--){
        process.stdout.write(" ");
    }
    for(j=1; j<=2*i-1; j++)
    {
        process.stdout.write("*");
    }
    console.log();
}