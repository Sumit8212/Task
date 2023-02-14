let n = 6;

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= i; j++) {
    if (i == 1||j==1 || i == n || j == i) {
      process.stdout.write("*");
    } else process.stdout.write(" ");   
  }
  console.log();
}
