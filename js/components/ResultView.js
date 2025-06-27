export default class Score {
  constructor(score, total, onRetry) {
    this.score = score;
    this.total = total;
    this.onRetry = onRetry;
  }

  render() {
    const container = document.createElement('div');
    container.classList.add('result');

    const h2 = document.createElement('h2');
    h2.textContent = 'Викторина завершена!';
    container.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = `Ваш счёт: ${this.score} из ${this.total}`;
    container.appendChild(p);

    const btn = document.createElement('button');
    btn.classList.add('retry');
    btn.textContent = 'Пройти снова';
    btn.addEventListener('click', () => this.onRetry());
    container.appendChild(btn);

    return container;
  }
}
