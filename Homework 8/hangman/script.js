document.addEventListener("DOMContentLoaded", function () {
  const alphabetButtons = document.querySelectorAll(".alphabet button");
  const wordDisplay = document.getElementById("word");
  const livesDisplay = document.getElementById("lives");
  const clueContainer = document.getElementById("clue-container");
  const hintButton = document.getElementById("hint");
  const playAgainButton = document.getElementById("play-again");
  const canvas = document.getElementById("hangmanCanvas");
  const context = canvas.getContext("2d");

  const words = [
    {
      word: "GREECE",
      hint: "A country known for its ancient civilization and islands.",
    },
    {
      word: "MOUNT_EVEREST",
      hint: "The highest mountain on Earth, located in the Himalayas.",
    },
    {
      word: "LION",
      hint: "A large carnivorous animal, known as the 'king of the jungle'.",
    },
    {
      word: "PYRAMID",
      hint: "A large triangular structure, often associated with ancient Egypt.",
    },
    {
      word: "OCEAN",
      hint: "A large body of salt water that covers most of the Earth's surface.",
    },
    {
      word: "BUDDHA",
      hint: "The founder of Buddhism, an important figure in Eastern philosophy.",
    },
    { word: "COFFEE", hint: "A popular drink made from roasted coffee beans." },
    {
      word: "NEW_YORK",
      hint: "A major city in the United States, famous for its Statue of Liberty and Times Square.",
    },
    { word: "JUPITER", hint: "The largest planet in our solar system." },
    { word: "TIGER", hint: "A large, striped wild cat found in Asia." },
    {
      word: "SHAKESPEARE",
      hint: "An English playwright, known for works like 'Romeo and Juliet'.",
    },
    {
      word: "SUSHI",
      hint: "A Japanese dish consisting of rice, seafood, and vegetables.",
    },
    {
      word: "EUROPE",
      hint: "A continent that includes countries like France, Italy, and Germany.",
    },
    {
      word: "MEDITERRANEAN",
      hint: "A sea located between Europe, Africa, and Asia.",
    },
    {
      word: "CINEMA",
      hint: "A place where films are shown, or the art of making films.",
    },
  ];

  let selectedWord = {};
  let guessedLetters = [];
  let remainingLives = 6;
  let hintUsed = false;

  function drawHangman(lives) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.beginPath();
    context.strokeStyle = "#333";

    context.moveTo(60, 180);
    context.lineTo(60, 30);
    context.lineTo(120, 30);
    context.lineTo(120, 50);

    const startX = 115;
    const startY = 50;

    if (lives <= 5) {
      context.arc(startX, startY + 15, 15, 0, Math.PI * 2);
      context.moveTo(startX, startY + 15);
    }
    if (lives <= 4) {
      context.moveTo(startX, startY + 35);
      context.lineTo(startX, startY + 85);
    }
    if (lives <= 3) {
      context.moveTo(startX, startY + 85);
      context.lineTo(startX - 10, startY + 120);
    }
    if (lives <= 2) {
      context.moveTo(startX, startY + 85);
      context.lineTo(startX + 10, startY + 120);
    }
    if (lives <= 1) {
      context.moveTo(startX, startY + 55);
      context.lineTo(startX - 10, startY + 75);
    }
    if (lives <= 0) {
      context.moveTo(startX, startY + 55);
      context.lineTo(startX + 10, startY + 75);
    }

    context.stroke();
  }

  function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    remainingLives = 6;
    hintUsed = false;
    wordDisplay.textContent = selectedWord.word.replace(/[A-Z]/g, "-");
    livesDisplay.textContent = `You have ${remainingLives} lives`;
    clueContainer.textContent = "Clue -";
    playAgainButton.disabled = true;

    alphabetButtons.forEach((button) => {
      button.disabled = false;
      button.style.backgroundColor = "#ffffff";
    });

    drawHangman(remainingLives);
  }

  function updateWordDisplay() {
    wordDisplay.textContent = selectedWord.word
      .split("")
      .map((letter) => (guessedLetters.includes(letter) ? letter : "-"))
      .join("");
  }

  function handleLetterClick(letter) {
    if (guessedLetters.includes(letter)) return;

    guessedLetters.push(letter);

    if (!selectedWord.word.includes(letter)) {
      remainingLives--;
      drawHangman(remainingLives);
    }

    updateWordDisplay();

    if (remainingLives <= 0) {
      alert("Game over! The word was " + selectedWord.word);
      playAgainButton.disabled = false;
    } else if (!wordDisplay.textContent.includes("-")) {
      alert("You won! The word was " + selectedWord.word);
      playAgainButton.disabled = false;
    }

    livesDisplay.textContent = `You have ${remainingLives} lives`;
  }

  function handleHintClick() {
    if (hintUsed) return;

    clueContainer.textContent = `Clue: ${selectedWord.hint}`;
    hintUsed = true;
  }

  alphabetButtons.forEach((button) => {
    button.addEventListener("click", function () {
      handleLetterClick(button.textContent);
      button.disabled = true;
      button.style.backgroundColor = "#888888";
    });
  });

  hintButton.addEventListener("click", handleHintClick);

  playAgainButton.addEventListener("click", startGame);

  startGame();
});
