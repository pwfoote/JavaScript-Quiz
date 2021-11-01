# JavaScript-Quiz

**This is an incomplete project, and is still subject to change.**
This project is for the JavaScript Quiz Challenge for Module Four.  

## Current
-user is able to answer 6 randomly sorted questions with multiple choice answers.
-if the anwser is correct, the button will turn green.
-if the answer is incorrect, the button will turn red.
-a timer is set for 75 seconds, but begins immediatley once the page loads.
-the score is set to zero, and will not change it's status wether a answer is correct or wrong.
-if an incorrect answer is chosen, the user is prompted with a button to generate the next question. This option, also, does not affect the final score.

## Reuqired Assignment Criteria
"GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score"

-timer does not begin when start button is clicked.
-time is not subtracted when an answer is wrong
-"game" does not end when timer reaches 0
-user cannot enter initails and scores once "game" is over.

## Developer Notes
-initial step was to structure the questions.
-once questions were structured, functions were created to prompt questions.
-after questions were appending to screen, CSS was modified to to color answer buttons.
-answer buttons were given hover properties to change color;
    -correct answers will turn green.
    -wrong answers will turn red.
-a timer was created to countdown from 75 secs to 0.
-"Score" card was added to html.

# Needed Development
-timer needs to end quiz if all questions are not answered before timer reaches 0.
-points need to be dedcuted for choosing 'Wrong' answer.
-points need to be added for amount of time left for finishing quiz before timer stops.
-'Score' must be able to be logged to local storage and Initialed by user.

# Screen Shots
![image](https://github.com/pwfoote/JavaScript-Quiz/blob/main/assets/images/quiz.SS.02.png)
![image](https://github.com/pwfoote/JavaScript-Quiz/blob/main/assets/images/quiz.SS.01.png)
![image](https://github.com/pwfoote/JavaScript-Quiz/blob/main/assets/images/quiz.SS.03.png)