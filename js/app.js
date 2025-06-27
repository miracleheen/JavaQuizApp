import Quiz from './components/QuizApp.js';
import { questionBank } from './data/questionsData.js';

document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const saved = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', saved);
    toggle.addEventListener('click', () => {
        const next = document.documentElement.getAttribute('data-theme') === 'light'
            ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    });

    const quizContainer = document.getElementById('quiz-container');
    const progressFill = document.querySelector('.progress__fill');
    const timerContainer = document.getElementById('timer-container');

    const quiz = new Quiz(questionBank, quizContainer, progressFill, timerContainer);
    quiz.start();
});
