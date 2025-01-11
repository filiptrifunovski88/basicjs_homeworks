function numberToWords(num) {
  if (num === 0) return "zero";
  if (num === 1000000) return "one million";

  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  function convertHundreds(num) {
    let result = "";
    if (num >= 100) {
      result += ones[Math.floor(num / 100)] + " hundred ";
      num %= 100;
    }
    if (num >= 20) {
      result +=
        tens[Math.floor(num / 10)] + (num % 10 ? "-" + ones[num % 10] : "");
    } else if (num >= 10) {
      result += ones[num];
    } else if (num > 0) {
      result += ones[num];
    }
    return result.trim();
  }

  let result = "";

  if (num >= 1000) {
    const thousands = Math.floor(num / 1000);
    result += convertHundreds(thousands) + " thousand ";
    num %= 1000;
  }

  if (num > 0) {
    result += convertHundreds(num);
  }

  return result.trim();
}

document
  .querySelector(".enternumber")
  .addEventListener("input", function (event) {
    const num = parseInt(event.target.value);
    const output = document.querySelector(".firstdiv");
    output.textContent =
      isNaN(num) || num < 0 || num > 1000000
        ? "Enter a number between 0 and 1,000,000."
        : numberToWords(num);
  });
