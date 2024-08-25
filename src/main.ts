//Query Selectors
const letters = document.querySelectorAll<HTMLButtonElement>(
    ".letters-section__letter"
);
let display = document.querySelector<HTMLParagraphElement>(".display__text");
const startButton = document.querySelector<HTMLButtonElement>(
    ".main-buttons__button--start"
);
const refreshButton = document.querySelector<HTMLButtonElement>(
    ".main-buttons__button--refresh"
);

const hangman = document.querySelector<HTMLDivElement>(".hangman");

if (!hangman || !letters || !display || !startButton || !refreshButton) {
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
    "alltoowell",
    "lovestory",
    "archer",
    "fearless",
    "enchanted",
];

const taylorClues: string[] = [
    "Are you even a Swiftie if you dont know Taylors favourite number",
    "This song is featured in Folklore",
    "The perfect wedding song",
    "This song was inspired by Taylor Lautner",
    "Someone who is chic and fashionable is someone that has a good sense of ......",
    "One of Taylors more cottagecore albums",
    "One of Taylors more cottagecore albums",
    "Think purple",
    "Theres a ten minute version of this song",
    "People often propose with this song",
    "This song is featured in Lover",
    "One of Taylors earlier albums",
    "One of Taylors earlier albums",
];

console.log(taylorClues.length)

refreshButton.addEventListener("click", () => location.reload());

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

//this function will chnage all lowercase letters to underscore
//the remaining apparent letters are uppercased
//these were the uppercase letters are the letters that te user has selected

const chnageLowerCaseLettersToUnderscore = (word: string) => {
    const splitToLetters = word.split("");
    const lowerCaseToUnderscoredArray = splitToLetters.map((letter) => {
        if (letter === letter.toLowerCase()) {
            return "_";
        } else {
            return letter;
        }
    });
    return lowerCaseToUnderscoredArray.join(",");
};

console.log(chnageLowerCaseLettersToUnderscore("shivANI"));

//This is a function that if a letter is included it will turn to uppercase
//it takes two arguemnts the word and the letter
//it returns a word with captitalised letters based on the respective letter
///this allows you to constantly update the variable
//This is because .toUpperCase and .toLowerCase can be repeteadly passed through
//and chnaged enough

const changeLetterUpperCase = (word: string, letter: string) => {
    let newWord = word.split("").map((char) => {
        if (char === letter) {
            return char.toUpperCase();
        } else return char;
    });
    return newWord.join("");
};

//cant pass through underscore once its chnaged
//can pass though chnaged characters
//will tackle problem in two stages

//will have a word display
//if letter is in word then chnage the repective letter to a capital

//make a seperate function to display to the inner HTML
//this function will turn lowercase letters to "_"

let wordToChnageVariable = "";

let wrongLetterClicked = 0;

const hangmanArray: string[] = [
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-1.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-2.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-3.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-4.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-5.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-6.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-7.jpg" alt="">`,
];

startButton.addEventListener("click", () => {
    hangman.innerHTML = hangmanArray[0];
    wrongLetterClicked = 0;
    wordToChnageVariable = getAWordFromArray(taylorArray);
    display.innerHTML =
        chnageLowerCaseLettersToUnderscore(wordToChnageVariable);
});

console.log(hangmanArray.length);

letters.forEach((keyboardLetter) => {
    keyboardLetter.addEventListener("click", () => {
        if (wordToChnageVariable.includes(keyboardLetter.value)) {
            wordToChnageVariable = changeLetterUpperCase(
                wordToChnageVariable,
                keyboardLetter.value
            );
            display.innerHTML =
                chnageLowerCaseLettersToUnderscore(wordToChnageVariable);
        } else {
            keyboardLetter.style.backgroundColor = "lightPink";

            wrongLetterClicked = wrongLetterClicked + 1;
            console.log(wrongLetterClicked);

            if (wrongLetterClicked === 1) {
                hangman.innerHTML = hangmanArray[1];
            } else if (wrongLetterClicked === 2) {
                hangman.innerHTML = hangmanArray[2];
            } else if (wrongLetterClicked === 3) {
                hangman.innerHTML = hangmanArray[3];
            } else if (wrongLetterClicked === 4) {
                hangman.innerHTML = hangmanArray[4];
            } else if (wrongLetterClicked === 5) {
                hangman.innerHTML = hangmanArray[5];
            } else if (wrongLetterClicked === 6) {
                hangman.innerHTML = hangmanArray[6];
            } else if (wrongLetterClicked > 6) {
                hangman.innerHTML = "noooooo";
            }
        }
    });
});

//if the wordtoChange includes the letter it should let me know
//nothing in display should chnage here

//turn wordToChnageVariable into an array of letters
//map over it
//if the arrayOfLetters is equal to letter.value leave it as a letter
//else turn it into an undersore
