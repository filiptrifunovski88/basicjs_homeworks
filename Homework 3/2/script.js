function DogAgeToHuman(agedog) {
  let dogAge = prompt("Enter a Dog Age");
  let dogAgeToHuman = dogAge * 7;
  console.log(`Dog age to human age is ${dogAgeToHuman}`);
  return dogAgeToHuman;
}
DogAgeToHuman();

function HumanAgeToDog(agehuman) {
  let humanAge = prompt("Enter a Human Age");
  let humanAgeToDog = humanAge / 7;
  console.log(`Dog age to human age is ${humanAgeToDog}`);
  return humanAgeToDog;
}
HumanAgeToDog();
