/* All answer options */
const option1 = document.querySelector('.option1'),
      option2 = document.querySelector('.option2'),
      option3 = document.querySelector('.option3'),
      option4 = document.querySelector('.option4');


const optionElements = document.querySelectorAll('.option'); // All our options

const question = document.getElementById('question'); // сам вопрос

const numberOfQuestion = document.getElementById('number-of-question'), // номер вопроса
      numberOfAllQuestions = document.getElementById('number-of-all-questions'); // количество всех вопросов

let indexOfQuestion, // индекс текущего вопроса
    indexOfPage = 0; // индекс страницы

const answersTracker = document.getElementById('answers-tracker'); // обёртка для трекера
const btnNext = document.getElementById('btn-next'); // кнопка "далее"

let score = 0; // итоговый результат викторины

const correctAnswer = document.getElementById('correct-answer'), // количество правильных ответов
      numberOfAllQuestions2 = document.getElementById('number-of-all-questions-2'), // количество всех вопросов (в модальном окне)
      btnTryAgain = document.getElementById('btn-try-again'); // кнопка "начать викторину заново"

const questions = [
    {
        question: 'У индейцев из немногочисленного североамериканского племени квакиутл есть традиция: беря деньги в долг, они оставляют в залог…',
        options: [
            'Душу',
            'Имя',
            'Скальп тещи',
            'Амулет',
        ],
        rightAnswer: 1
    },
    {
        question: 'Кто из президентов США написал свой собственный рассказ про Шерлока Холмса ? ',
        options: [
            'Джон Кеннеди',
            'Рональд Рейган',
            'Франклин Рузвельт',
            'Барак Обама',
        ],
        rightAnswer: 2
    },
    {
        question: 'Какую пошлину ввели в XII  веке в Англии для того чтобы заставить мужчин пойти на войну ? ',
        options: [
            'Налог на тунеядство',
            'Налог на отсутствие сапог',
            'Налог на алкоголь',
            'Налог на трусость',
        ],
        rightAnswer: 3
    },
    {
        question: 'Откуда пошло выражение "деньги не пахнут" ?',
        options: [
            'От налога на туалеты',
            'От подателей за провоз парфюмерии',
            'От сборов за нестиранные носки',
            'От известного мафиози',
        ],
        rightAnswer: 0
    },
    {
        question: 'Туристы, приезжающие на Майорку, обязаны заплатить налог…',
        options: [
            'На плавки',
            'На пальмы',
            'На общественные туалеты',
            'На солнце',
        ],
        rightAnswer: 3
    }
];
      
/* НАЧИНАЕТСЯ ЛОГИЧЕСКАЯ ЧАСТЬ */

numberOfAllQuestions.innerHTML = questions.length; // выводим количество вопросов

const load = () => {
    question.innerHTML = questions[indexOfQuestion].question; // сам вопрос

    // мапим ответы
    option1.innerHTML = questions[indexOfQuestion].options[0];
    option2.innerHTML = questions[indexOfQuestion].options[1];
    option3.innerHTML = questions[indexOfQuestion].options[2];
    option4.innerHTML = questions[indexOfQuestion].options[3];

    numberOfQuestion.innerHTML = indexOfPage + 1; // установка номера текущей страницы
    indexOfPage++; // увеличение индекса страницы
};

let completedAnswers = []; // массив для уже заданных вопросов

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hitDuplicate = false; // якорь для проверки одинаковых вопросов

    if(indexOfPage == questions.length) {
        quizOver()
    } else {
        if(completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if(item == randomNumber) {
                    hitDuplicate = true;
                }
            });
            if(hitDuplicate) {
                randomQuestion();
            } else {
                indexOfQuestion = randomNumber;
                load();
            }
        }
        if(completedAnswers.length == 0) {
            indexOfQuestion = randomNumber;
            load();
        }
    }
    completedAnswers.push(indexOfQuestion);
};

const checkAnswer = el => {
    if(el.target.dataset.id == questions[indexOfQuestion].rightAnswer) {
        el.target.classList.add('correct');
        updateAnswerTracker('correct');
        score++;
    } else {
        el.target.classList.add('wrong');
        updateAnswerTracker('wrong');
    }
    disabledOptions();
};

for(option of optionElements) {
    option.addEventListener('click', e => checkAnswer(e));
};

const disabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.add('disabled');
        if(item.dataset.id == questions[indexOfQuestion].rightAnswer) {
            item.classList.add('correct');
        }
    })
};

// Удаление всех классов со всех ответов
const enabledOptions = () => {
    optionElements.forEach(item => {
        item.classList.remove('disabled', 'correct', 'wrong');
    })
};

const answerTracker = () => {
    questions.forEach(() => {
        const div = document.createElement('div');
        answersTracker.appendChild(div);
    })
};

const updateAnswerTracker = status => {
    answersTracker.children[indexOfPage - 1].classList.add(`${status}`);
};

const validate = () => {
    if(!optionElements[0].classList.contains('disabled')){
        alert('Вам нужно выбрать один из вариантов ответа.');
    } else {
        randomQuestion();
        enabledOptions();
    }
};

const quizOver = () => {
    document.querySelector('.quiz-over-modal').classList.add('active');
    correctAnswer.innerHTML = score;
    numberOfAllQuestions2.innerHTML = questions.length;
};

const tryAgain = () => {
    window.location.reload();
};

btnTryAgain.addEventListener('click', tryAgain);

btnNext.addEventListener('click', () => {
    validate();
});

window.addEventListener('load', () => {
    randomQuestion();
    answerTracker();
});