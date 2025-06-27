export default class QuizQuestion {
    constructor({ id, text, code, options, correctIndex }) {
        this.id = id;
        this.text = text;
        this.code = code;
        this.options = options;
        this.correctIndex = correctIndex;
        this.el = null;
    }

    isCorrect(choice) {
        return choice === this.correctIndex;
    }

    disableOptions() {
        if (!this.el) return;
        this.el.querySelectorAll('.option').forEach(li => {
            li.style.pointerEvents = 'none';
        });
    }

    render() {
        const container = document.createElement('div');
        container.classList.add('question');

        const title = document.createElement('p');
        title.classList.add('question-text');
        title.textContent = this.text;
        container.appendChild(title);

        if (this.code) {
            const editor = document.createElement('div');
            editor.classList.add('code-editor');

            const header = document.createElement('div');
            header.classList.add('editor-header');
            ['red', 'yellow', 'green'].forEach(color => {
                const dot = document.createElement('span');
                dot.classList.add('dot', color);
                header.appendChild(dot);
            });
            const fname = document.createElement('span');
            fname.classList.add('filename');
            fname.textContent = 'Example.java';
            header.appendChild(fname);

            editor.appendChild(header);

            const pre = document.createElement('pre');
            const codeEl = document.createElement('code');
            codeEl.classList.add('language-java');
            codeEl.textContent = this.code.trim();
            pre.appendChild(codeEl);
            editor.appendChild(pre);

            container.appendChild(editor);
            Prism.highlightElement(codeEl);
        }

        const list = document.createElement('ul');
        list.classList.add('options');
        this.options.forEach((opt, idx) => {
            const li = document.createElement('li');
            li.classList.add('option');
            li.textContent = opt;
            li.dataset.index = idx;
            list.appendChild(li);
        });
        container.appendChild(list);

        this.el = container;
        return container;
    }
}
