




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

let randomNumberBetween0and12 = Math.floor(Math.random() * 13)
console.log(randomNumberBetween0and12)

const getAWordFromTaylorArray = () => {
  let randomNumberBetween0and12 = Math.floor(Math.random() * 13)
  const taylorWord = taylorArray[randomNumberBetween0and12]
  console.log(taylorWord)
  const splitTaylorWord = taylorWord.split("")
  console.log(splitTaylorWord)
  const splitWordToUnderscore = splitTaylorWord.map((letter) => {
    return letter = "_"
  })
  console.log(splitWordToUnderscore)
}

getAWordFromTaylorArray()

