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




const getAWordFromTaylorArray = () => {
  let randomNumberBetween0and12 = Math.floor(Math.random() * 13)
  const taylorWord = taylorArray[randomNumberBetween0and12]
  console.log(taylorWord + " index is " + randomNumberBetween0and12)
  const splitTaylorWord = taylorWord.split("")
  console.log(splitTaylorWord)
  const splitWordToUnderscore = splitTaylorWord.map((letter) => {
    return letter = "_"
  })
  console.log(splitWordToUnderscore)
}

getAWordFromTaylorArray()

letters.forEach((letter) => {
  console.log(letter.value)
})