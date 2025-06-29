# JavaQuizApp

Классическая интерактивная викторина по Java с динамичным интерфейсом, таймером и тёмной/светлой темой

---

## 📋 О проекте

- **Тема проекта**: сдача курсовой по Js-языку;  
- **Динамика**: плавные анимации появления вопросов и вариантов, микро‑анимации при ответе; 
- **Таймер**: круговой svg‑таймер на каждый вопрос (30 сек);
- **Тема оформления**: светлая и тёмная на выбор пользователя;
- **Код‑блоки**: стилизованный “редактор” с подсветкой Prism.js;

---
## 🗂 Структура
<code>JavaQuizApp/
├─ index.html
├─ css/
│  └─ main.css
└─ js/
├─ app.js
├─ components/
│  ├─ QuizApp.js
│  ├─ QuestionView.js
│  └─ ResultView.js
└─ data/
└─ questionsData.js </code>

- components/ — view‑компоненты и логика интерфейса;
- data/ — JSON‑данные вопросов (выборка рандомная).

