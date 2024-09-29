var quizData = [
    {
        question: "1) How do you create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function:myFunction()",
        d: "def myFunction()",
        correct: "b"
    },
    {
        question: "2) How do you write a conditional statement for executing some code if 'i' is equal to 5",
        a: "if (i = 5)",
        b: "if i == 5 then",
        c: "if (i == 5)",
        d: "if i = 5",
        correct: "c"
    },
    {
        question: "3) Which method can be used to find the length of an array in JavaScript?",
        a: "length()",
        b: "size()",
        c: "getLength()",
        d: "length",
        correct: "d"
    },
    {
        question: "4) Which keyword is used to create a constant in JavaScript?",
        a: "var", 
        b: " const",
        c: "content",
        d: "let",
        correct: "d"
    }
]

var quiz = document.getElementById("quiz");
var answerEls = document.querySelectorAll(".answer");
var questionEl = document.getElementById("question");
var a_text = document.getElementById("a_text");
var b_text = document.getElementById("b_text");
var c_text = document.getElementById("c_text");
var d_text = document.getElementById("d_text");
var submitBtn = document.getElementById("submit");

var currentQuiz = 0;
var score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    var currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    var answer;
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

submitBtn.addEventListener("click", () => {
    var answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            <button onclick="location.reload()">Reload</button>`;
        }
    }
});
