function digitsNumbers() {
  let enterNumber = prompt("Enter a number");
  if (!isNaN(enterNumber)) {
    console.log(`Numbers is ${enterNumber.split("").join(" ")}`);
  } else {
    console.log("Please enter a number");
  }
}
digitsNumbers();
