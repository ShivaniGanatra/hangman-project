//Imports
import {
    taylorClues,
    taylorArray,
    hangmanArray,
    winningGifsArray,
    loosingGifsArray,
} from "./data";

//Query Selectors
const nav = document.querySelector(".nav-container");
const addClues = document.querySelector(".add-clues");
const addCLuesInformation = document.querySelector(".nav-clues");
const letters = document.querySelectorAll<HTMLButtonElement>(
    ".keyboard__letter"
);
let display = document.querySelector<HTMLParagraphElement>(".display__text");
const startButton = document.querySelector<HTMLButtonElement>(
    ".main-buttons__button--start"
);
const refreshButton = document.querySelector<HTMLButtonElement>(
    ".main-buttons__button--refresh"
);
const hangman = document.querySelector<HTMLDivElement>(".hangman");

if (nav) {
    const toggle = nav.querySelector(".nav-toggle");

    if (toggle) {
        toggle.addEventListener("click", () => {
            if (nav.classList.contains("is-active")) {
                nav.classList.remove("is-active");
            } else {
                nav.classList.add("is-active");
            }
        });

        nav.addEventListener("blur", () => {
            nav.classList.remove("is-active");
        });
    }
}

if (
    !hangman ||
    !letters ||
    !display ||
    !startButton ||
    !refreshButton ||
    !addClues ||
    !addCLuesInformation
) {
    throw new Error("there is an error with the retrieval of some elements");
}

//adding unclicked styling 
//this is just chnageing the colours of the font and the background as well as the border
letters.forEach((keyboardLetter) => {
    const keyboardStyling = keyboardLetter.classList
    keyboardStyling.add("isUnclicked")
})



console.log(taylorClues.length);

refreshButton.addEventListener("click", () => location.reload());

//have an arrayof words
//use math.radom to get a random number based on array length
//random numebr shouls get an index from the array and display it
//do functions and interactivity seperately

const getARandomStringFromArray = (array: string[]): string => {
    let randomNumberBetween0andLastIndex: number = Math.floor(
        Math.random() * array.length
    );
    const word: string = array[randomNumberBetween0andLastIndex];
    console.log(word + " index is " + randomNumberBetween0andLastIndex);
    return word as string;
};

//this function will chnage all lowercase letters to underscore
//the remaining apparent letters are uppercased
//these were the uppercase letters are the letters that te user has selected

const chnageLowerCaseLettersToUnderscore = (word: string): string => {
    const splitToLetters: string[] = word.split("");
    const lowerCaseToUnderscoredArray: string[] = splitToLetters.map(
        (letter) => {
            if (letter === letter.toLowerCase()) {
                return "_";
            } else {
                return letter;
            }
        }
    );
    return lowerCaseToUnderscoredArray.join(",") as string;
};

console.log(chnageLowerCaseLettersToUnderscore("shivANI"));

//This is a function that if a letter is included it will turn to uppercase
//it takes two arguemnts the word and the letter
//it returns a word with captitalised letters based on the respective letter
///this allows you to constantly update the variable
//This is because .toUpperCase and .toLowerCase can be repeteadly passed through
//and chnaged enough

const changeOneLetterToUpperCase = (word: string, letter: string): string => {
    let newWord: string[] = word.split("").map((char: string) => {
        if (char === letter) {
            return char.toUpperCase();
        } else return char;
    });
    return newWord.join("") as string;
};

console.log(changeOneLetterToUpperCase("shivani","i"))

//cant pass through underscore once its chnaged
//can pass though chnaged characters
//will tackle problem in two stages

//will have a word display
//if letter is in word then chnage the respective letter to a capital

//make a seperate function to display to the inner HTML
//this function will turn lowercase letters to "_"

let wordToChnageVariable: string = "";
let wrongLetterClicked: number = 0;

startButton.addEventListener("click", () => {
    hangman.innerHTML = hangmanArray[0]; //this will get the empty hangman
    wrongLetterClicked = 0; //by clicking where reasigning wrong letter being clicked if its chnaged elsewhere
    wordToChnageVariable = getARandomStringFromArray(taylorArray); //get a random word from taylor array
    display.innerHTML =
    chnageLowerCaseLettersToUnderscore(wordToChnageVariable); //the taylor array is all lowercase, the function turns all lowercase to underscore
    addClues.innerHTML = "Instructions"

    letters.forEach((keyboardLetter) => {
        const keyboardStyling = keyboardLetter.classList
        keyboardStyling.remove("isCorrect")
        keyboardStyling.remove("isIncorrect")
        keyboardStyling.add("isUnclicked")
    })
    //loop throught letters remove styles that youve added or overide class
});

console.log(hangmanArray.length);

letters.forEach((keyboardLetter) => {

    const keyboardStyling = keyboardLetter.classList
    keyboardLetter.addEventListener("click", () => {
        // if the letter is in the word
        if (wordToChnageVariable.includes(keyboardLetter.value)) {
            wordToChnageVariable = changeOneLetterToUpperCase(
                wordToChnageVariable,
                keyboardLetter.value
            );
            display.innerHTML =
                chnageLowerCaseLettersToUnderscore(wordToChnageVariable);
            // keyboardLetter.style.backgroundColor = "violet"; //cant use my own colours
            // keyboardLetter.style.color = "blue";
            keyboardStyling.remove("isUnclicked")
            keyboardStyling.add("isCorrect")

            //WINNING
            //below is a function which checks if string is all uppercase
            // if so (by cheCking if isUpperCase(wordToChnageVariable) is truthy then it means youve won )
            const isUpperCase = (str: string) => str === str.toUpperCase();
            if (isUpperCase(wordToChnageVariable)) {
                display.innerHTML = `${wordToChnageVariable} is the correct answer. Click restart to play again`;
                hangman.innerHTML = getARandomStringFromArray(winningGifsArray);
                startButton.innerHTML = "Restart";
            }

            //if the user hasnt selected a word the same empty hangman will keep appearing
        } else if (wordToChnageVariable.length < 1) {
            hangman.innerHTML = hangmanArray[0];

            // else if the wrong letter is clicked
            //the colour of the letter will chnage, and a differnt hangman image willl show accordingly
        } else {
            keyboardStyling.remove("isUnclicked")
            keyboardStyling.add("isIncorrect")
            //keyboardLetter.style.backgroundColor = "lightPink";

            wrongLetterClicked = wrongLetterClicked + 1;
            console.log(wrongLetterClicked);

            if (wrongLetterClicked === 1) {
                hangman.innerHTML = hangmanArray[1];
                addClues.innerHTML += " & Clues";

                let indexOfWord: number = taylorArray.indexOf(
                    wordToChnageVariable.toLowerCase()
                );
                addCLuesInformation.innerHTML =
                    "Clue: " + taylorClues[indexOfWord];
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

                //LOOSING
            } else if (wrongLetterClicked === 7) {
                //not getting hangman anymore you officially lose so you find the answer
                hangman.innerHTML = getARandomStringFromArray(loosingGifsArray);
                startButton.innerHTML = "Restart";
                display.innerHTML = `The answer was ${wordToChnageVariable.toUpperCase()} click Restart to play again`;
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


// Bugs to fix
//Colours dont chnage back 
//cant use my own colours with scss and interacting with dom

//clues arent updated when clicked restart

//used someone elses code for slidy navigation is that okay
//everyhitng els eis my own 


//Wednesday 
//fix issues with letters by adding and removing classlists
//add class "--isUnclicked"
//in js for each letter add this


//add class "--correct"
//if incorrect remove "--isUnclicked"
//and add "--correct"

//add class "--isCorrect"
//if remove "--isUnclicked"
//and add "--isIncorrect"




//fix responsiveness

