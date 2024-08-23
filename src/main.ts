//Query Selectors
const letters = document.querySelectorAll<HTMLButtonElement>(".letters-section__letter")
const display = document.querySelector<HTMLParagraphElement>(".display")
const startButton = document.querySelector<HTMLButtonElement>(".main-buttons__button--start")
const refreshButton = document.querySelector<HTMLButtonElement>(".main-buttons__button--refresh")

if(!letters || !display || !startButton || !refreshButton) {
  throw new Error("there is an error with the retrieval of some elements")
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
]
console.log(taylorArray.length)

//have an arrayof words
//use math.radom to get a random number bewteen 0 and 12
//random numebr shouls get an index from the array and display it
//do functions and interactivity seperately




const getAWordFromArray = (array: string[]):string => {
  let randomNumberBetween0andLastIndex = Math.floor(Math.random() * (array.length))
  const word = array[randomNumberBetween0andLastIndex]
  console.log(word + " index is " + randomNumberBetween0andLastIndex)
  return word

}

const underscoreLetters = (word: string) => {
  const splitWord = word.split("")
  console.log(splitWord)
  const splitWordToUnderscore = splitWord.map((letter) => {
    return letter = "_"
  })
  console.log(splitWordToUnderscore)
  return splitWordToUnderscore.join()
}

let wordToChnageVariable = ""

startButton.addEventListener("click", () => {
  wordToChnageVariable = getAWordFromArray(taylorArray)
  display.innerHTML = underscoreLetters(wordToChnageVariable)
})

letters.forEach((letter) => {
  letter.addEventListener("click", () => {


    console.log(letter.value + " " + wordToChnageVariable)
    //if the wordtoChange includes the letter it should let me know
    //nothing in display should chnage here
    if(wordToChnageVariable.includes(letter.value)) {
      console.log(wordToChnageVariable + " includes " + letter.value)
      //turn wordToChnageVariable into an array of letters
      //map over it
      //if the arrayOfLetters is equal to letter.value leave it as a letter
      //else turn it into an undersore

      const wordToLettersArray = wordToChnageVariable.split("")
      console.log(wordToLettersArray)
      const allButLetterValueUnderscore = wordToLettersArray.map((individualLetter) => {
        if(individualLetter === letter.value) {
          return individualLetter
        } 
        return "_"
      })
      console.log(allButLetterValueUnderscore)


    }
  })
})

let myString = "Hello World";
let index = myString.indexOf("o");

console.log(index);