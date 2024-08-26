//Query Selectors
const nav = document.querySelector(".nav-container");
const addClues = document.querySelector(".add-clues");
const addCLuesInformation = document.querySelector(".nav-clues");
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
    "A song featured on Speak Now",
];

console.log(taylorClues.length);

refreshButton.addEventListener("click", () => location.reload());

//have an arrayof words
//use math.radom to get a random number bewteen 0 and 12
//random numebr shouls get an index from the array and display it
//do functions and interactivity seperately

const getAWordFromArray = (array: string[]): string => {
    let randomNumberBetween0andLastIndex: number = Math.floor(
        Math.random() * array.length
    );
    const word: string = array[randomNumberBetween0andLastIndex];
    console.log(word + " index is " + randomNumberBetween0andLastIndex);
    return word;
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
    return lowerCaseToUnderscoredArray.join(",");
};

console.log(chnageLowerCaseLettersToUnderscore("shivANI"));

//This is a function that if a letter is included it will turn to uppercase
//it takes two arguemnts the word and the letter
//it returns a word with captitalised letters based on the respective letter
///this allows you to constantly update the variable
//This is because .toUpperCase and .toLowerCase can be repeteadly passed through
//and chnaged enough

const changeLetterUpperCase = (word: string, letter: string): string => {
    let newWord: string[] = word.split("").map((char: string) => {
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

let wordToChnageVariable: string = "";

let wrongLetterClicked: number = 0;

const hangmanArray: string[] = [
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-1.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-2.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-3.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-4.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-5.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-6.jpg" alt="">`,
    `<img class="hangman__image" src="./src/images/desktop images/hangman desktop-7.jpg" alt="">`,
    `<img class="hangman__image" src="https://media.tenor.com/FFurq2xQgeoAAAAM/taylor-swift-cheers.gif" alt="">`,
    `<img class="hangman__image" src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmVvZzhxeGV6YWQyenFnOXkzbjd2ZzlmZWs5NGl1cG8xZ2w1aXl1diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/11wKUA9rPyvyuI/giphy.webp" alt="">`
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
        // if the letter is in the word 
        if (wordToChnageVariable.includes(keyboardLetter.value)) {
            wordToChnageVariable = changeLetterUpperCase(wordToChnageVariable,keyboardLetter.value);
            display.innerHTML = chnageLowerCaseLettersToUnderscore(wordToChnageVariable);
            keyboardLetter.style.backgroundColor = "violet"
            keyboardLetter.style.color = "blue"

            const isUpperCase = (str: string) => str === str.toUpperCase();
            if(isUpperCase(wordToChnageVariable)){
                display.innerHTML = `${wordToChnageVariable} is the correct answer. Click restart to play again`
                hangman.innerHTML = hangmanArray[8]
                startButton.innerHTML = "Restart";
            }

            //if the user hasnt selected a word the same empty hangman will keep appearing
        } else if (wordToChnageVariable.length < 1) {
            hangman.innerHTML = hangmanArray[0];

            // else if the wrong letter is clicked
            //the colour of the letter will chnage, and a differnt hangman image willl show accordingly
        } else {
            keyboardLetter.style.backgroundColor = "lightPink";
            

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
            } else if (wrongLetterClicked ===7) {
                hangman.innerHTML = hangmanArray[7]
                startButton.innerHTML = "Restart";
                display.style.fontSize = "24px";
                display.innerHTML = `The answer was ${wordToChnageVariable.toUpperCase()} click Restart to play again` 
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
