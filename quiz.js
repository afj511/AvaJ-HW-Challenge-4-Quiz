const question = document.getElementById("question");
const answers = document.getElementsByClassName("choice-text");

let currentQuestion ={};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Commonly data types DO NOT include...",
        answers: [
            {text:"Strings", correct: false},
            {text:"Booleans", correct: false},
            {text:"Alerts", correct: true},
            {text:"Numbers", correct: false},
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed within...",
        answers: [
            {text:"Quotes", correct: false},
            {text:"Curly Brackets", correct: false},
            {text:"Parenthesis", correct: true},
            {text:"Square Brackets", correct: false},
        ]
    },
    {
        question: "Arrays in Javascript can be used to store...",
        answers: [
            {text:"Numbers and Strings", correct: false},
            {text:"Other Arrays", correct: false},
            {text:"Booleans", correct: false},
            {text:"All of the above", correct: true},
        ]  
    },
    {
        question: "String values must be enclosed within ... when being assigned to variables.",
        answers: [
            {text:"Commas", correct: false},
            {text:"Quotes", correct: false},
            {text:"Curly Brackets", correct: true},
            {text:"Parenthesis", correct: false},
        ] 
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is...",
        answers: [
            {text:"Javascript", correct: false},
            {text:"Terminal/Bash", correct: false},
            {text:"For Loops", correct: false},
            {text:"Console.log", correct: true},
        ] 
    }
];
const MAX_QUESTIONS = 6;
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");

let questionIndex = 0;

startGame = () => {
    questionIndex = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign('/end.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    answers.forEach((answer) => {
        const number = answer.dataset['number'];
        answer.innerText = currentQuestion['answer' + number];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);

    })
};

//commented this area of code due to bugs, not displaying question text
// choices.forEach((choice) => {
    // choice.addEventListener('click', (e) => {
        // if (!acceptingAnswers) return;

        // acceptingAnswers = false;
        // const selectedChoice = e.target;
        // const selectedAnswer = selectedChoice.dataset['number'];

        // const classToApply =
    //   selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    // selectedChoice.parentElement.classList.add(classToApply);

    // setTimeout(() => {
    //   selectedChoice.parentElement.classList.remove(classToApply);
    //   getNewQuestion();
    //    }, 1000)
    // });
// });

startGame();