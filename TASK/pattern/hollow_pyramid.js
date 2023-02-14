let n = 5;
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    if (i == 1 || j == 1 || i == n || j == 2 * i - 1) {
      process.stdout.write("*");
    } else {
      process.stdout.write(" ");
    }
  }
  console.log();
}
