let n=5;
 for(i=n; i>=1; i--){
   for(j=n-i; j>=1; j--)
   {
    process.stdout.write(" ");        
   }
   for(j=1; j<=2*i-1; j++)
   {
    process.stdout.write("*");
   }
    console.log();
 }