//Query Selectors
const letters = document.querySelectorAll<HTMLButtonElement>(
    ".letters-section__letter"
);
let display = document.querySelector<HTMLParagraphElement>(".display");
const startButton = document.querySelector<HTMLButtonElement>(
    ".main-buttons__button--start"
);
const refreshButton = document.querySelector<HTMLButtonElement>(
    ".main-buttons__button--refresh"
);

if (!letters || !display || !startButton || !refreshButton) {
    throw new Error("there is an error with the retrieval of some elements");
}

const taylorArray: string[] = [
    "thirteen",
    "august",
    "lover",
    "december",
    "style",
    "folklore",
    "evermore",
    "midnights",
    "red",
    "taylor",
    "archer",
    "fearless",
    "enchanted",
];
console.log(taylorArray.length);

//have an arrayof words
//use math.radom to get a random number bewteen 0 and 12
//random numebr shouls get an index from the array and display it
//do functions and interactivity seperately

const getAWordFromArray = (array: string[]): string => {
    let randomNumberBetween0andLastIndex = Math.floor(
        Math.random() * array.length
    );
    const word = array[randomNumberBetween0andLastIndex];
    console.log(word + " index is " + randomNumberBetween0andLastIndex);
    return word;
};

const underscoreLetters = (word: string) => {
    const splitWord = word.split("");
    console.log(splitWord);
    const splitWordToUnderscore = splitWord.map((letter) => {
        return (letter = "_");
    });
    console.log(splitWordToUnderscore);
    return splitWordToUnderscore.join();
};
 
const chnageLowerCaseLettersToUnderscore = (word: string) => {
  const splitToLetters = word.split("")
  const lowerCaseToUnderscoredArray = splitToLetters.map((letter) => {
    if(letter === letter.toLowerCase()) {
      return "_"
    } else {
      return letter
    }
  })
  return lowerCaseToUnderscoredArray.join(",")
};

console.log(chnageLowerCaseLettersToUnderscore("shivANI"))

let wordy = "";

const changeLetterUpperCase = (word: string, letter: string) => {
    let newWord = word.split("").map((char) => {
        if (char === letter) {
            return char.toUpperCase();
        } else return char;
    });
    return newWord.join("");
};

wordy = changeLetterUpperCase("shivand is amazing and shes the best", "h");
console.log(wordy);
wordy = changeLetterUpperCase(wordy, "i");
console.log(wordy);

//cant pass through underscore once its chnaged
//can pass though chnaged characters
//will tackle problem in two stages

//will have a word display
//if letter is in word then chnage the repective letter to a capital

//make a seperate function to display to the inner HTML
//this function will turn lowercase letters to "_"

let wordToChnageVariable = "";

startButton.addEventListener("click", () => {
    wordToChnageVariable = getAWordFromArray(taylorArray);
    display.innerHTML = underscoreLetters(wordToChnageVariable);
});

let someThingIsclickedCorrectly: boolean = false;





letters.forEach((keyboardLetter)=> {
  keyboardLetter.addEventListener("click", () => {

    if(someThingIsclickedCorrectly === false && wordToChnageVariable.includes(keyboardLetter.value)){
      someThingIsclickedCorrectly = true
      wordToChnageVariable = changeLetterUpperCase(wordToChnageVariable,keyboardLetter.value)
      display.innerHTML = chnageLowerCaseLettersToUnderscore(wordToChnageVariable)
    } 

    else if (someThingIsclickedCorrectly === true && wordToChnageVariable.includes(keyboardLetter.value)) {
      wordToChnageVariable = changeLetterUpperCase(wordToChnageVariable,keyboardLetter.value)
      display.innerHTML = chnageLowerCaseLettersToUnderscore(wordToChnageVariable)
    }

    









  })
})

//if the wordtoChange includes the letter it should let me know
//nothing in display should chnage here

//turn wordToChnageVariable into an array of letters
//map over it
//if the arrayOfLetters is equal to letter.value leave it as a letter
//else turn it into an undersore
