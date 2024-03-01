// Arrays of values to randomize
const part1 = ["start", "stop", "avoid", "keep", "quit", "practice", "try"];
const part2 = ["shouting", "sobbing", "using the term 'derivative'", "quoting ABBA", "saying 'it is what it is'", "freestyle rapping", "mispronouncing Chipotle"];
const part3 = ["during", "loudly at", "when tweeting about", "before", "when complaining about", "after", "when deconstructing"]
const part4 = ["grandpa's stories", "rodeos", "Tom Hanks movies", "pilates", "karaoke", "civil war re-enactments", "anything"]


// Functions for generator
const randomizer = function() {
    return Math.floor(Math.random() * 7);
}

const selectValue = function(array) {
    let i = randomizer();
    return array[i];
}

// Selecting elements in DOM
const generatedSentenceWrapper = document.querySelector('#generatedSentenceWrapper');
const generator = document.querySelector('#generator');
const buttonNew = document.querySelector('#generateNew');
const buttonAgain = document.querySelector('#generateAgain');
const buttonRestart = document.querySelector('#startOver');

// Sentence generator

const generateSentence = function () {
  let first = selectValue(part1);
  let second = selectValue(part2);
  let third = selectValue(part3);
  let fourth = selectValue(part4);

  generatedSentenceWrapper.innerHTML =
    '<p class="generatedSentence">This year, I want to <span class="genWord1">' +
    first +
    '</span> <span class="genWord2">' +
    second +
    '</span> <span class="genWord3">' +
    third +
    '</span> <span class="genWord4">' +
    fourth +
    "</span>.</p>";
};

const generateNew = function() {
  generateSentence();
  generator.style.display = "flex";
  buttonNew.style.display = "none";
}

const generateAgain = function() {
  generateSentence();
}

// Reset program

const reset = function() {
  generator.style.display = "none";
  buttonNew.style.display = "block";
}

// Buttons
buttonNew.addEventListener("click", generateNew);
buttonAgain.addEventListener("click", generateAgain);
buttonRestart.addEventListener("click", reset);

