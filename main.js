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

// Selecting element in DOM
const generatedSentenceWrapper = document.querySelector('.generatedSentenceWrapper');

// Sentence generator

const generateSentence = function () {
  let first = selectValue(part1);
  let second = selectValue(part2);
  let third = selectValue(part3);
  let fourth = selectValue(part4);

  generatedSentenceWrapper.innerHTML = "<p>This year, I want to " + first + " " + second + " " + third + " " + fourth + "."</p>;
};

// Buttons

const generateButton = document.querySelector("#generateNew");
generateButton.addEventListener("click", generateSentence);


