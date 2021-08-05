let numOfGuesses = 10;
let letterClicked;
let correctLetter = [];
let incorrectLetter = [];
let dashes = [];
let currentWord = [];
let usedLetter;
let indexNumber;
let currentCateroy = false;

let letters = document.querySelectorAll(".letter");
letters.forEach((el) => el.addEventListener("click", keyBoard, { once: true }));

let guessContainer = document.querySelector(".empty-guess");

let numOfguesses = document.querySelector(".guesses");

let displayHint = document.querySelector(".hint-display");

let hintBtn = document.querySelector(".hint-btn");

let playAgainBtn = document.querySelector(".play-again-btn");

let countriesBtn = document.querySelector("#countries-btn");

let dessertBtn = document.querySelector("#desserts-btn");

let animalBtn = document.querySelector("#animals-btn");

let canvas = document.getElementById("canvas");

countriesBtn.addEventListener("click", selectCountriesCategory, { once: true });

dessertBtn.addEventListener("click", selectDessertsCategory, { once: true });

animalBtn.addEventListener("click", selectAnimalsCategory, { once: true });

hintBtn.addEventListener("click", displayHintBtn);

playAgainBtn.addEventListener("click", resetGame);

let ctx = canvas.getContext("2d");

const wordCategory = {
  countries: [
    { word: "australia", hint: "The largest country in Oceania." },
    { word: "england", hint: "This country hosted the 2012 Olympic Games." },
    { word: "scotland", hint: "Capital city is Edinburgh." },
    { word: "netherlands", hint: "Capital city is Amsterdam." },
    { word: "turkey", hint: "Capital city is Ankara." },
    { word: "italy", hint: "Capital city is Rome." },
    { word: "japan", hint: "This country hosted the 2020 Olympic Games." },
    { word: "barbados", hint: "The birthplace of Rihanna." },
    { word: "mozambique", hint: "Capital city is Maputo." },
    { word: "argentina", hint: "Capital city is Buenos Aires." },
  ],

  desserts: [
    { word: "tiramisu", hint: "Coffee-flavoured Italian dessert." },
    { word: "croquembouche", hint: "French pastry puffs piled onto a cone." },
    { word: "pavlova", hint: "A meringue-based dessert topped with fruits." },
    {
      word: "Kanafeh",
      hint: "Shredded syrup soaked pastry layered with cheese.",
    },
    { word: "shortbread", hint: "Traditional Scottish cookie." },
    {
      word: "alfajores",
      hint: "Cookies sandwiched together with chocolate and dulce de leche.",
    },
    { word: "snickerdoodle", hint: "Butter cookie rooled in cinnamon sugar." },
    {
      word: "cannoli",
      hint: "fried tube-shaped shells filled with a sweet ricotta",
    },
    {
      word: "lamington",
      hint: "chocolate coated sponge cake topped with coconut flakes.",
    },
    {
      word: "trifle",
      hint: "British dessert of layered cake with jam and custard.",
    },
  ],

  animals: [
    {
      word: "kangaroo",
      hint: "This marsupial is the national animal of Australia",
    },
    { word: "warthog", hint: "Pumbaa from The Lion King." },
    { word: "meerkat", hint: "Timon from The Lion King" },
    {
      word: "porcupine",
      hint: "Large rodents with coats of sharp spines, or quills.",
    },
    { word: "squirrel", hint: "Nimble, bushy-tailed rodent." },
    { word: "yak", hint: "Large cattle native to the Himalayas." },
    { word: "rabbit", hint: "These mammals are popular during Easter." },
    { word: "doe", hint: "A deer, a female deer." },
    { word: "iguana", hint: "herbivorous lizards native to tropical regions." },
    { word: "cat", hint: "A gift to humanity." },
  ],
};

function selectCountriesCategory(evt) {
  currentCateroy = evt.target.id;
  dashes = [];

  if (true) {
    indexNumber = Math.floor(Math.random() * wordCategory.countries.length);
    currentWord = wordCategory.countries[indexNumber].word.toUpperCase();
    showSpaces();
  }
}

function selectDessertsCategory(evt) {
  currentCateroy = evt.target.id;
  dashes = [];

  if (true) {
    indexNumber = Math.floor(Math.random() * wordCategory.desserts.length);
    currentWord = wordCategory.desserts[indexNumber].word.toUpperCase();
    showSpaces();
  }
}
function selectAnimalsCategory(evt) {
  currentCateroy = evt.target.id;
  dashes = [];

  if (true) {
    indexNumber = Math.floor(Math.random() * wordCategory.animals.length);
    currentWord = wordCategory.animals[indexNumber].word.toUpperCase();
    showSpaces();
  }
}

function keyBoard(evt) {
  letterClicked = evt.target.id;
  usedLetter = evt.target;

  if (currentCateroy) {
    usedLetter.classList.add("used-letter");
    evaluateLetters();
    drawCanvas();

    if (correctLetter.length === dashes.length) {
      numOfguesses.innerHTML = "You Won!";
    }
  }
  guessContainer.innerHTML = dashes.join(" ");
}

function showSpaces() {
  for (let el = 0; el < currentWord.length; el++) {
    dashes.push("___");
  }
  dashes.push();
  guessContainer.innerHTML = dashes.join(" ");
}

function evaluateLetters() {
  for (let el = 0; el < dashes.length; el++) {
    if (letterClicked === currentWord[el]) {
      dashes[el] = letterClicked;
      correctLetter.push(letterClicked);
    }
  }
  if (!currentWord.includes(letterClicked)) {
    incorrectLetter.push(letterClicked);
  }
}

function displayHintBtn() {
  if (currentCateroy === "countries-btn") {
    displayHint.innerHTML = wordCategory.countries[indexNumber].hint;
  }

  if (currentCateroy === "desserts-btn") {
    displayHint.innerHTML = wordCategory.desserts[indexNumber].hint;
  }

  if (currentCateroy === "animals-btn") {
    displayHint.innerHTML = wordCategory.animals[indexNumber].hint;
  }
}

function dispalyCanvasOnLoad() {
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.strokeStyle = "#716F81";
  ctx.moveTo(88, 145);
  ctx.lineTo(5, 145);
  ctx.stroke();
  ctx.moveTo(40, 145);
  ctx.lineTo(40, 10);
  ctx.stroke();
  ctx.lineTo(100, 10);
  ctx.stroke();
  ctx.lineTo(100, 25);
  ctx.moveTo(100, 25);
  ctx.stroke();
  ctx.closePath();
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(99, 40, 15, 0, Math.PI * 2);
  ctx.stroke();
  ctx.moveTo(100, 55);
  ctx.lineTo(100, 105);
  ctx.stroke();
  ctx.moveTo(100, 60);
  ctx.lineTo(80, 80);
  ctx.stroke();
  ctx.moveTo(100, 60);
  ctx.lineTo(120, 80);
  ctx.stroke();
  ctx.moveTo(100, 105);
  ctx.lineTo(80, 130);
  ctx.stroke();
  ctx.moveTo(100, 105);
  ctx.lineTo(120, 130);
  ctx.stroke();
}

dispalyCanvasOnLoad();

function drawCanvas() {
  if (incorrectLetter.length === 1) {
    numOfguesses.innerHTML = `9 guesses remaining.`;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.strokeStyle = "#CE1212";
    ctx.moveTo(88, 145);
    ctx.lineTo(5, 145);
    ctx.stroke();
  } else if (incorrectLetter.length === 2) {
    numOfguesses.innerHTML = `8 guesses remaining.`;
    ctx.moveTo(40, 145);
    ctx.lineTo(40, 10);
    ctx.stroke();
  } else if (incorrectLetter.length === 3) {
    numOfguesses.innerHTML = `7 guesses remaining.`;
    ctx.lineTo(100, 10);
    ctx.stroke();
  } else if (incorrectLetter.length === 4) {
    numOfguesses.innerHTML = `6 guesses remaining.`;
    ctx.lineTo(100, 25);
    ctx.moveTo(100, 25);
    ctx.stroke();
    ctx.closePath();
  } else if (incorrectLetter.length === 5) {
    numOfguesses.innerHTML = `5 guesses remaining.`;

    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(99, 40, 15, 0, Math.PI * 2);
    ctx.stroke();
  } else if (incorrectLetter.length === 6) {
    numOfguesses.innerHTML = `4 guesses remaining.`;
    ctx.moveTo(100, 55);
    ctx.lineTo(100, 105);
    ctx.stroke();
  } else if (incorrectLetter.length === 7) {
    numOfguesses.innerHTML = `3 guesses remaining.`;
    ctx.moveTo(100, 60);
    ctx.lineTo(80, 80);
    ctx.stroke();
  } else if (incorrectLetter.length === 8) {
    numOfguesses.innerHTML = `2 guesses remaining.`;
    ctx.moveTo(100, 60);
    ctx.lineTo(120, 80);
    ctx.stroke();
  } else if (incorrectLetter.length === 9) {
    numOfguesses.innerHTML = `1 guess remaining.`;
    ctx.moveTo(100, 105);
    ctx.lineTo(80, 130);
    ctx.stroke();
  } else if (incorrectLetter.length === 10) {
    ctx.beginPath();
    ctx.fillStyle = "#CE1212";
    ctx.arc(99, 40, 15, 0, Math.PI * 2);
    ctx.moveTo(100, 105);
    ctx.lineTo(120, 130);
    ctx.stroke();
    ctx.fill();
    numOfguesses.innerHTML = `GAME OVER.`;
    dashes = [];
    dashes.push(currentWord);
  }
}

function resetCategories() {
  if (currentCateroy === "countries-btn") {
    indexNumber = Math.floor(Math.random() * wordCategory.countries.length);
    currentWord = wordCategory.countries[indexNumber].word.toUpperCase();
    showSpaces();
  } else if (currentCateroy === "desserts-btn") {
    indexNumber = Math.floor(Math.random() * wordCategory.desserts.length);
    currentWord = wordCategory.desserts[indexNumber].word.toUpperCase();
    showSpaces();
  } else if (currentCateroy === "animals-btn") {
    indexNumber = Math.floor(Math.random() * wordCategory.animals.length);
    currentWord = wordCategory.animals[indexNumber].word.toUpperCase();
    showSpaces();
  }
}

function resetGame() {
  letters.forEach((el) =>
    el.addEventListener("click", keyBoard, { once: true })
  );
  letters.forEach((el) => el.classList.remove("used-letter"));
  numOfguesses.innerHTML = "10 guesses remaining";
  displayHint.innerHTML = null;
  dashes = [];
  correctLetter = [];
  incorrectLetter = [];
  guessContainer.innerHTML = " ";
  ctx.clearRect(0, 0, 400, 400);
  dispalyCanvasOnLoad();
  resetCategories();
}
