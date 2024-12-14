function firstLastName(firstName, lastName) {
  let fullName = [];
  for (i = 0; i < firstName.length; i++) {
    fullName.push(`${i + 1}. ${firstName[i]} ${lastName[i]}`);
  }
  return fullName;
}
let first = ["Filip", "Mihail"];
let last = ["Trifunovski", "Arnaudov"];
let full = firstLastName(first, last);
console.log(full);
