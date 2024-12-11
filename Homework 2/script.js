let year = parseInt(prompt("Enter a year"));
year = parseInt(year);
if (year > 0) {
  let animals = [
    "Rat",
    "Ox",
    "Tiger",
    "Rabbit",
    "Dragon",
    "Snake",
    "Horse",
    "Goat",
    "Monkey",
    "Rooster",
    "Dog",
    "Pig",
  ];
  let formula = (year - 4) % 12;
  let calculation = animals[formula];
  console.log(
    "The Chinese Zodiac for the year " + year + " is: " + calculation
  );
} else {
  console.log("Enter a valid year");
}
