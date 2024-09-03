<!-- a guide on what is going to happen in your game in plain english
how you are planning on building it
a list of features the game will include, in order of importance -->


In spirit of being fortunate enough to attend the Taylor Swift Eras tour this year I had aptly thought of creating a game with the concert in in mind

This hangman game features words that are typically correlated with Taylor Swift. The styling is also matching one of her featured Albums "Lover"

To add to the humourous aspect of the game in the desktop version, with the addition of mistakes an increasingly distraught Taylor will appear on the hang(woman)

Will you be able to save Taylor from her untimely death?
Play to find out!

* For clear instructions click on the instructions tab
this will give you a sliding menu telling you how to play

* To play simply click the start to button to retrieve a concealed word about Taylor

* Click the letters which you deem fit

* The correct letters will show in the display

* If an incorrect letter is clicked the formation of a hangman will begin to appear and you will also get a clue 
in the instructions section

* Depending on whether you win or lose you will get a gif appearing in the hangman

* If you win your highscore will be increased by 1 and the highscore is store at the top of the instructions panel. the highscore is essentially the amount of consecutive wins that you have 

* The highest highscore will be in the instructions sliding menu area

* If you click refresh you will get a confirm message. This is essentially to warn the user that by clicking refresh they lose high score as well the highest amount of consectutive wins information

* Additionally if youve won or lost and you still click a keyboard you will be told to restart in the display


List of features in order of importance


* hangman area {
    The hangman area is the most important component of the hangman 
    It will contain the hangmans as well as gifs
    The gifs are for if someone starts, someone loses or if someone needs to click restart
    All of the gifs are stored in image tags which are stored in an array in data
    There is an array for resetGifs, WinningGifs, Loosing Gifs
    The hangman is made of a series of images (of the same size) and I've also stored these in an area
    These could have been stored directly in the main but I stored it in an array because it was easier to read for me and I know specifically what it contains

}

* display area {
    The display area will contain the concealed text that will change according to the clicks
    It will also display random phrases if someone has won or lost
}

* keyboard {

}

* instuctions panel{
 
}

* refresh button {

}

* start button {

}





 

//Hangman- TS
Store all words in array
When start is clicked epmty div should be filled with the amount of words in the letter


letters should have event listener 

if letter is included in the empty word it should enter
if not then you will loose a life 
makege git a heart image and then do display none 


need to know sort out what wil happen if letter is included 

and if letter isnt included


* Source an actual image for the hangman
* Ajust Fonts 
* make design resposive
* create hearts to diplay lives ?
* if person loses change start to try again 
* maybe do gameover
* add to github pages
* add main heading text introcuing you to hangman game
*adjust BEM
* once a letter is clicked the colour of it fades - maybe it cant be clicked again
* extra
* if someone wins specifc things alternate phrases
* well done youve won tickets to the eras tour
* Add clues
* Add sliding instructions
* If its all correct or youve lost then the start will trun to restart
* Add mixins for fonts, borders and flex

//added gifs but add class to all images and make sure the display width fits

*add phrases for each time you win
* everytime you win you get a cat becasue taylor sift loves cats

*add classes to hangmangifs to adjust size

//easy, medium and hard version
instead of start do easy medium hard buttons only in desktop to save phone spacee ?
//as hover effects to links

alert maybe when soone clicks restart
are you sure you want to restart your progress with be lost

