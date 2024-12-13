let emptyStrings = "";
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    emptyStrings += i + "\n";
  } else {
    emptyStrings += i + " ";
  }
}
console.log(emptyStrings);
