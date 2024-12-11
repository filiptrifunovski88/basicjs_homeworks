function atm() {
  let balance = prompt("Enter your balance");
  let withdrawingMoney = prompt("Enter how much money you want to withdrawing");
  let remainder = balance - withdrawingMoney;
  if (withdrawingMoney <= balance) {
    console.log(
      `You withdrawing ${withdrawingMoney}$, and now you have left ${remainder}$`
    );
  } else {
    console.log("You don't have that much money to withdraw.");
  }
}
atm();
