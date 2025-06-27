import QuizQuestion from './QuestionView.js';
import Score from './ResultView.js';

export default class Quiz {
    constructor(questions, container, progressFill, timerContainer) {
        this.questions = questions.map(q => new QuizQuestion(q));
        this.total = this.questions.length;
        this.currentIndex = 0;
        this.score = 0;
        this.container = container;
        this.progressFill = progressFill;
        this.timerContainer = timerContainer;
        this.TIME_PER_Q = 30;
        this.timerInt = null;
    }

    start() {
        this.score = 0;
        this.currentIndex = 0;
        this.updateProgress();
        this.renderCurrent();
    }

    updateProgress() {
        const pct = (this.currentIndex / this.total) * 100;
        this.progressFill.style.width = `${pct}%`;
    }

    renderCurrent() {
        this.container.innerHTML = '';
        clearInterval(this.timerInt);
        this.timerContainer.innerHTML = '';

        if (this.currentIndex >= this.total) {
            this.progressFill.style.width = '100%';
            const scoreScreen = new Score(this.score, this.total, () => this.start());
            this.container.appendChild(scoreScreen.render());
            return;
        }

        this.updateProgress();
        const currentQ = this.questions[this.currentIndex];
        const qEl = currentQ.render();
        this.container.appendChild(qEl);

        this.renderHeaderTimer();

        qEl.querySelectorAll('.option').forEach(li => {
            li.addEventListener('click', () => this.onAnswer(li, currentQ));
        });
    }

    renderHeaderTimer() {
        // понимаю, что так делать нельзя. Но для простоты (этож local) используем готовый SVG
        this.timerContainer.innerHTML = `
      <svg viewBox="0 0 36 36">
        <path class="circle-bg"
          d="M18 2.0845 a15.9155 15.9155 0 0 1 0 31.831
             a15.9155 15.9155 0 0 1 0 -31.831"/>
        <path class="circle"
          stroke-dasharray="100,100"
          d="M18 2.0845 a15.9155 15.9155 0 0 1 0 31.831
             a15.9155 15.9155 0 0 1 0 -31.831"/>
      </svg>`;
        const circle = this.timerContainer.querySelector('.circle');
        this.runTimer(circle);
    }

    runTimer(circleEl) {
        let remaining = this.TIME_PER_Q;
        this.timerInt = setInterval(() => {
            remaining--;
            const pct = (remaining / this.TIME_PER_Q) * 100;
            circleEl.setAttribute('stroke-dasharray', `${pct},100`);
            if (remaining <= 0) {
                clearInterval(this.timerInt);
                this.currentIndex++;
                this.renderCurrent();
            }
        }, 1000);
    }

    onAnswer(li, question) {
        clearInterval(this.timerInt);

        const choice = Number(li.dataset.index);
        const correct = question.isCorrect(choice);

        li.classList.add(correct ? 'correct' : 'incorrect');
        if (correct) this.score++;
        question.disableOptions();

        setTimeout(() => {
            this.currentIndex++;
            this.renderCurrent();
        }, 700);
    }
}
