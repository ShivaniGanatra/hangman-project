<!-- a guide on what is going to happen in your game in plain english
how you are planning on building it
a list of features the game will include, in order of importance -->

change


{INTRODUCTION}

In spirit of being fortunate enough to attend the Taylor Swift Eras tour this year I had aptly thought of creating a game with the concert in in mind

This hangman game features words that are typically correlated with Taylor Swift. The styling is also matching one of her featured Albums "Lover"

To add to the humourous aspect of the game in the desktop version, with the addition of mistakes an increasingly distraught Taylor will appear on the hang(woman).

If you win or lose you will get a gif and a message in the display

Will you be able to save Taylor from her untimely death?
Play to find out!

{INSTRUCTIONS}
                  ________
instructions bar {________}

instructions area  _________
                  |||||    |
                  |||||    |
                  |||||    |
                  |        |
                  |________|


* For clear instructions click on the instructions bar this will give you a instructions area that slides in telling you how to play

* To play simply click the start to button to retrieve a concealed word about Taylor

* Click the letters which you deem fit in the keyboard

* The correct letters will show in the display

* If an incorrect letter is clicked the formation of a hangman will begin to appear and you will also get a clue in the instructions area

* Depending on whether you win or lose you will get a gif appearing in the hangman and in the diplay a message giving either a winning or loosing phrase as well as the initial word

* If you win your highscore will be increased by 1 and the highscore is stored at the top of the instructions bar. The highscore is essentially the amount of consecutive wins that you have 

* The highest highscore will be in the instructions sliding menu area

* If you click refresh you will get a confirm message. This is essentially to warn the user that by clicking refresh they lose high score as well the highest amount of consectutive wins information

* Additionally if youve won or lost and you still click a keyboard you will be told to restart in the display

{LIST OF FEATURES IN ORDER OF IMPORTANCE}

* start button {
    The start button essentially retrieves a random word (using the getRandomStringFromArray function)
    and it will appear in the display
}

* display area {
    The display area will contain the concealed text that will change according to the clicks
    It will also display random phrases if someone has won or lost, after somone has won or lost it will display  a message telling them to restart
}

* hangman area {
    The hangman area is the most important component of the hangman 
    It will contain the hangman as well as gifs
    The gifs are for if someone starts, someone loses or if someone needs to click restart
    All of the gifs are stored in image tags which are stored in an array in data
    There is an array for resetGifs, WinningGifs, Loosing Gifs
    To select a gif I have made a function which will retrieve a random string from an array
    The hangman is made of a series of images (of the same size) and I've also stored these in an array in data
    (These could have been stored directly in the main but I stored it in an array because it was easier to read for me and I know specifically what it contains)
}

* keyboard {
    The keyboard is important as its responsive to clicks
    When hovered over letters change colour
    If someone clicks the correct letter the letter will change to violet
    If someone clicks the incorrect letter the letter will change to orange
    If someone has won or lost you will still be able to hover and temporarily change colour
    But you wont be able to chnage colour to violet and orange permanently again (unless restart is clicked)

}

                  ________
instructions bar {________}

instructions area  _________
                  |||||    |
                  |||||    |
                  |||||    |
                  |        |
                  |________|


* instuctions bar {
    This contains the instructions button , the current highscore and the start and refresh button
    When clicked you will see the instructions area

}

* instructions area {
    This contains information for first time users on how to play the game 
    It also contains the highest amount of consecutive wins
    To find the highest amount of consecutive wins I used a function
    This will also store a clue when something incorrect is clicked
}

* refresh button {
    The refresh button gives you a pop up which says confirm which allows you to completely refresh the page but warns you that information such as the high score and highest high score is being lost
}

* clues section {
    The clues section appears in instructions area. There is a clue for each word in the taylorArray respectively
}

* highscore {
    There is a highscore value that is in the top of the the intructions bar
}

* highest amount of consecutive wins {
    This is diplayed in the instructions area 
    If someone won 5 times then lost, the highest high score will still be 5 as its the amount of consecutive scores to beat
}

{CURRENT GUIDE IN DEPTH OF HOW IT WORKS}

When user clicks start 

* It adds the first bare hangman to the hangman area
* It will retrieve a random string for the taylorArray using the getARandomStringFromArray() function and store it in wordToChangeVariable
for instance the wordToChangeVariable could be "style" 
* In the display however it will show as _,_,_,_,_ as in the display.innerHTML I am using the function changeLowerCaseLettersToUnderscore
* HOWEVER I AM NOT MODIFYING THE ACTUAL wordToChangeVariable  
* I am also resetting some styles

When the user clicks a letter
* Using classlists I will be removing the initial letter styling and adding different styling for if the correct letter is correctly or incorreclt clicked 
* If the correct letter is clicked such as "y", the wordToChangeVariable will be modified to "stYle",
the clicked letter will be capitalised
* In the display however the lowercase letters will be still concealed as I am still using the function changeLowerCaseLettersToUnderscore(wordToChangeVariable) so in the display you will get _,_,Y,_,_

* With each correct letter click the respective letter is caitalised
so if "s" is clicked this time wordToChangeVariable will be "StYle"
but in the display it will appear as S,_,Y,_,_

* With each incorrect letter click the wordToChangeVariable will not change




{MY TO DOS}
* Source an actual image for the hangman
* Ajust Fonts 
* make design resposive
* create hearts to diplay lives ?
* if person loses change start to try again 
* maybe do gameover
* add to github pages
* add main heading text introcuing you to hangman game
* adjust BEM
* once a letter is clicked the colour of it fades - maybe it cant be clicked again
extra
* if someone wins specifc things alternate phrases
* well done youve won tickets to the eras tour
* Add clues
* Add sliding instructions
* If its all correct or youve lost then the start will trun to restart
* Add mixins for fonts, borders and flex
* added gifs but add class to all images and make sure the display width fits
* add phrases for each time you win
* everytime you win you get a cat becasue taylor sift loves cats
* add classes to hangman gifs to adjust size
* easy, medium and hard version
* instead of start do easy medium hard buttons only in desktop to save phone spacee ?
* add hover effects to links
* alert maybe when soone clicks restart
* are you sure you want to restart your progress with be lost

{HOW I WAS PLANNING ON BUILDING IT}
Store all words in array
When start is clicked epmty div should be filled with the amount of words in the letter


letters should have event listener 

if letter is included in the empty word it should enter
if not then you will loose a life 
makege git a heart image and then do display none 


need to know sort out what wil happen if letter is included 

and if letter isnt included

After deployment there was as issue 

