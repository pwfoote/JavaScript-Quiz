//JS Quiz
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    Array.from(answerButtonsElement.children).forEach(button => {
        clearStatusClass(button)
    })
    setStatusClass(selectedButton, correct)
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    }else {
        startButton.innerText = 
    
    nextButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    //clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
        
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Commonly used data types DO NOT include:',
        answers: [
            {text: 'alerts', correct: true},
            {text: 'booleans', correct: false},
            {text: 'numbers', correct:false},
            {text: 'strings', correct: false}

        ]
    },

    {
        question: 'The condition in an if / else statement is enclosed with ___.',
        answers: [
            {text: 'quotes', correct: false},
            {text: 'parentheses', correct: true},
            {text: 'culry brackets', correct:false},
            {text: 'square brackets', correct: false}

        ]
    },

    {
        question: 'Arrays in Javascript can be used to store ____.',
        answers: [
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: false},
            {text: 'numbers and strings', correct:false},
            {text: 'all of the above', correct: true}

        ]
    },

    {
        question: 'String Values must be enclosed within ____ when being assigned to variables.',
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct:false},
            {text: 'parentheses', correct: true}

        ]
    },

    {
        question: 'Avery useful tool used during development and debugging is to print content to the ____',
        answers: [
            {text: 'terminal', correct: false},
            {text: 'CSS file', correct: false},
            {text: 'gitHub', correct:false},
            {text: 'console log', correct: true}

        ]
    },

    {
        question: 'Is JavaScript hard?',
        answers: [
            {text: 'yes', correct: true},
            {text: 'yes', correct: true},
            {text: 'yes', correct:true},
            {text: 'yes', correct: true}

        ]
    }
];


const quizTimer = document.querySelector('h3');
let timeLeft = 75;
quizTimer.addEventListener('click', displayTime)
displayTime(timeLeft)
const countDown = setInterval (()=>{
    timeLeft--;
    quizTimer.innerHTML = `00:${timeLeft}`;
    if(timeLeft <= 0 || timeLeft < 1) {
        endtime();
        clearInterval(countDown);
    }
},1000)


function displayTime (second){
   const min = Math.floor(second / 60);
   const sec = Math.floor(second % 60);
   quizTimer.innderHTML = `${min,10 ? '0': ''}${min}:${sec<10 ? '0':''}${sec}`
}

function endtime(){
    quizTimer.innerHTML = 'Times Up!'
}
