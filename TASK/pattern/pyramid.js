let n = 5;
for (i = 1; i <= n; i++) {
  for (j = 1; j <= n - i; j++) {
    process.stdout.write(" ");
  }
  for (j = 1; j <= 2 * i - 1; j++) {
    process.stdout.write("*");
  }
  console.log();
}
