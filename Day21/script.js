const quizData = [
    {
        question:"What does DOM stand for?",
        options:[
            "Document Order Model",
            "Document Object Model",
            "Document Orientation Model",
            "Document Outline Model"
        ],
        correct: 1
    },
    {
        question:"Which method selects by ID?",
        options:[
            "getElementById()",
            "querySelector()",
            "getElementsByClassName()",
            "querySelectorAll()"
        ],
        correct: 0
    },
    {
        question:"Which event fires on input change?",
        options:[
            "click",
            "submit",
            "change",
            "keydown"
        ],
        correct: 2
    }
];

let questions = [...quizData].sort(() => Math.random() - 0.5);
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;

const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const resultEl = document.getElementById('result');
const timerEl = document.getElementById('timer');

function loadQuestion() {
    clearInterval(timer);
    timeLeft = 15;
    updateTimer();
    timer = setInterval(countdown, 1000);


    const q = questions[currentQuestion];
    questionEl.textContent = `Q${currentQuestion + 1}. ${q.question}`;
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index, true));
        optionsEl.appendChild(btn);
});
    nextBtn.style.display = 'none';
}

function countdown() {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
        clearInterval(timer);
        selectAnswer(questions[currentQuestion]?.correct, false);
    } 
}

function updateTimer() {
    timerEl.textContent = `⏱️ ${timeLeft}`;
}

function selectAnswer(index, shouldScore) {
    clearInterval(timer);
    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll('.option-btn');

    buttons.forEach(btn => btn.disabled = true);
    if (index === q.correct){
        shouldScore && score++;
        buttons[index].classList.add('correct');
    } else {
        buttons[index].classList.add('wrong');
        buttons[q.correct].classList.add('correct');
    }

    nextBtn.style.display = 'inline-block';
}

nextBtn.addEventListener('click', () => {
    currentQuestion++;

    if(currentQuestion < questions.length){
        optionsEl.innerHTML = '';
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    nextBtn.style.display = 'none';
    const highScore = localStorage.getItem("quizHighScore") || 0;

    const isNew = score > highScore;
    if (isNew) {
        localStorage.setItem("quizHighScore", score);
    }
    resultEl.innerHTML = `
    <h2>Hurray!!! Quiz Completed</h2>
    <p>Your Score: ${score} / ${questions.length}</p>
    <p>Highest Score: ${Math.max(score, highScore)} </p>
    ${isNew ? "<p>🎉 New High Score! 🎉</p>" : ""}
    <button onclick="location.reload()">Restart Quiz</button>`
}


loadQuestion();