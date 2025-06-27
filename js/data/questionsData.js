/**
 * @typedef {Object} QuestionItem
 * @property {number} id 
 * @property {string} text 
 * @property {string} [code] 
 * @property {string[]} options
 * @property {number} correctIndex
 */

export const questionBank = [
    {
        id: 1,
        text: `В чём отличие volatile-поля от обычного поля в Java?`,
        options: [
            "volatile гарантирует атомарность операций чтения/записи",
            "volatile запрещает оптимизации компилятора и CPU для этого поля",
            "volatile создаёт полный memory fence",
            "volatile даёт транзакционную целостность при изменении объекта"
        ],
        correctIndex: 1
    },
    {
        id: 2,
        text: `Как поведёт себя следующий код?`,
        code: `List<Integer> list = List.of(1,2,3);
list.add(4);`,
        options: [
            "Добавит элемент, потому что List.of — это просто утилита",
            "Бросит UnsupportedOperationException",
            "Скомпилируется, но упадёт NullPointerException",
            "Скомпилируется, но не добавит элемент silently"
        ],
        correctIndex: 1
    },
    {
        id: 3,
        text: `Какой результат выполнения:`,
        code: `Stream.of(1,2,3)
  .parallel()
  .reduce(0, Integer::sum);`,
        options: [
            "6",
            "0",
            "Mожет быть любым между 0 и 6",
            "Компилятор выдаст ошибку"
        ],
        correctIndex: 0
    },
    {
        id: 4,
        text: `Почему вызов Thread.sleep(1000) не бросает InterruptedException?`,
        options: [
            "Он всегда бросает, без вариантов",
            "Поток не прерывался, поэтому нет исключения",
            "Поток был уже завершён",
            "sleep() — это нативный метод без throws"
        ],
        correctIndex: 1
    },
    {
        id: 5,
        text: `Что из ниже перечисленного НЕ учитывается в equals()/hashCode() авто-генератора IDE по умолчанию?`,
        options: [
            "Все поля класса",
            "Поля с модификатором transient",
            "Статические поля",
            "final-поля"
        ],
        correctIndex: 2
    },
    {
        id: 6,
        text: `При каком условии generic-типы подвергаются type erasure?`,
        options: [
            "Только для List и Map",
            "Всегда при компиляции в байт-код",
            "Когда используется raw-тип",
            "Никогда — JVM хранит информацию о дженериках"
        ],
        correctIndex: 1
    },
    {
        id: 7,
        text: `Чем отличается Callable от Runnable?`,
        options: [
            "Callable не бросает checked-исключений",
            "Callable может возвращать значение и бросать исключение",
            "Runnable работает асинхронно, Callable — синхронно",
            "Runnable имеет метод call(), Callable — run()"
        ],
        correctIndex: 1
    },
    {
        id: 8,
        text: `Что выведет следующий код?`,
        code: `class A { void foo() { System.out.println("A"); } }
class B extends A { void foo(Integer i) { System.out.println("B"); } }
new B().foo();`,
        options: [
            "A",
            "B",
            "Компиляция не пройдёт",
            "NullPointerException"
        ],
        correctIndex: 0
    },
    {
        id: 9,
        text: `Какой контракт метода compareTo() в интерфейсе Comparable?`,
        options: [
            "Возвращает true/false",
            "Отбрасывает исключение при равных объектах",
            "Возвращает отрицательное/нулевое/положительное число",
            "Ничего — это маркерный интерфейс"
        ],
        correctIndex: 2
    },
    {
        id: 10,
        text: `При сериализации объекта, какой метод вызывается в первую очередь?`,
        options: [
            "writeObject()",
            "writeExternal()",
            "defaultWriteObject()",
            "customWriteObject()"
        ],
        correctIndex: 0
    },
    {
        id: 11,
        text: `Что из этого соответствует lazy-инициализации с двойной проверкой (Double-Checked Locking)?`,
        options: [
            "synchronized + проверка null до и после",
            "volatile + только одна проверка null",
            "synchronized без проверки null",
            "null-check в методе main()"
        ],
        correctIndex: 0
    },
    {
        id: 12,
        text: `Что такое Java Module Path в JDK9+?`,
        options: [
            "То же, что и Classpath",
            "Новый способ группировки пакетов и зависимостей",
            "URL, по которому подгружаются модули из интернета",
            "Замена Maven/Gradle"
        ],
        correctIndex: 1
    },
    {
        id: 13,
        text: `При вызове метода с varargs-параметром без аргументов, что внутри метода?`,
        options: [
            "null",
            "Пустой массив соответствующего типа",
            "Массив длины 1 с null",
            "Не компилируется"
        ],
        correctIndex: 1
    },
    {
        id: 14,
        text: `Какой класс-потомок выбросит IllegalMonitorStateException?`,
        options: [
            "Thread",
            "ReentrantLock",
            "Semaphore",
            "Любой класс, вызывающий notify() без синхронизации"
        ],
        correctIndex: 3
    },
    {
        id: 15,
        text: `Что делает метод CompletableFuture.supplyAsync()?`,
        options: [
            "Создаёт новый бесконечный поток",
            "Запускает задачу в ForkJoinPool.commonPool()",
            "Вызывает run() синхронно",
            "Блокирует текущий поток"
        ],
        correctIndex: 1
    },
    {
        id: 16,
        text: `При приведении Object o = "test"; Integer i = (Integer)o; будет…`,
        options: [
            "ClassCastException",
            "NullPointerException",
            "Успешное приведение",
            "Компиляционная ошибка"
        ],
        correctIndex: 0
    },
    {
        id: 17,
        text: `Что делает ключевое слово sealed (Java 17)?`,
        options: [
            "Запрещает наследование от класса",
            "Ограничивает список подклассов, объявленных в модуле",
            "Мечта программиста",
            "То же, что final"
        ],
        correctIndex: 1
    },
    {
        id: 18,
        text: `Какова разница между HashMap и ConcurrentHashMap?`,
        options: [
            "ConcurrentHashMap синхронизирован полностью",
            "HashMap не поддерживает null-ключи",
            "ConcurrentHashMap разбивает данные на сегменты для локов",
            "HashMap быстрее в многопоточной среде"
        ],
        correctIndex: 2
    },
    {
        id: 19,
        text: `Что выведет:`,
        code: `System.out.println(
  Optional.ofNullable(null)
          .orElseGet(() -> "X")
);`,
        options: [
            "null",
            "X",
            "Optional.empty()",
            "NoSuchElementException"
        ],
        correctIndex: 1
    },
    {
        id: 20,
        text: `Каков результат следующего кода?`,
        code: `var list = List.of(1,2,3);
list.stream().peek(System.out::println).count();`,
        options: [
            "Выведет 1 2 3 и вернёт 3",
            "Ничего не выведет и вернёт 3",
            "Компиляционная ошибка var+of()",
            "Бесконечный цикл"
        ],
        correctIndex: 0
    }
];
