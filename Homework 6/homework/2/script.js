const arrayNumbers = [5, 10, 15, 20, 25];
console.log(`Numbers of the Array are: `, arrayNumbers.join(" "));

let sum = 0;
for (i = 0; i < arrayNumbers.length; i++) {
  sum += arrayNumbers[i];
}

console.log("The sum is: ", sum);

const mathematicalEquasion = arrayNumbers.join(" + ") + " = " + sum;

console.log(mathematicalEquasion);

const allParagraphs = document.querySelectorAll("p");

const firstParagraph = document.querySelector("p");
firstParagraph.innerHTML = arrayNumbers.join(" ");

const secondParagraph = allParagraphs[allParagraphs.length - 2];
secondParagraph.innerHTML = sum;

const thirdParagraph = allParagraphs[allParagraphs.length - 1];
thirdParagraph.innerHTML = mathematicalEquasion;
