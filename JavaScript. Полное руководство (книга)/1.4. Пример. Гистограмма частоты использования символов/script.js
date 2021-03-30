// 1.4. Пример: Гистограмма частоты использования символов

/* Эта программа Node читает текст из стандартного ввода, рассчитывает частоту встречи
каждой буквы в данном тексте и отображает гистограмму для наиболее часто используемых символов.

Для выполнения требует версии Node 12 или новее.

В среде Unix программу можно запустить следующим образом:
    node charfreq.js < corpus.txt */


// Этот класс расширяет класс Map так, что метод get() возвращает вместо null указанное значение,
// когда ключ отсутствует в отображении.
class DefaultMap extends Map {
    constructor (defaultValue) {
        super();                           // вызвать конструктор суперкласса
        this.defaultValue = defaultValue;  // запомнить стандартное значение
    }

    get(key) {
        if (this.has(key)) {               // если ключ присутствует в отображении,
            return super.get(key);         // тогда возвратить его значение из суперкласса
        }
        else {
            return this.defaultValue;      // иначе возвратить стандартное значение
        }
    }
}


// Этот класс рассчитывает и выводит гистограмму частоты использования букв.
class Histogram {
    constructor() {
        this.letterCounts = new DefaultMap(0);   // отображение букв на счётчики
        this.totalLetters = 0;                   // общее количество букв
    }

    add(text) {                                           // Эта функция обновляет гистограмму буквами текста.
        text = text.replace(/\s/g, "").toUpperCase();     // удалить из текста пробельные символы и преобразовать оставшиеся в верхний регистр
        for (let character of text) {                     // пройти в цикле по символам текста
            let count = this.letterCounts.get(character); // получить старый счётчик
            this.letterCounts.set(character, count+1);
            this.totalLetters++;                          // инкрементировать его
        }
    }
    
    
    toString() {                                // преобразовать гистограмму в строку, которая отображает графику ASCII
        let entries = [...this.letterCounts];   // преобразовать Map в массив массивов [ключ, значение]
                                                // Отсортировать массив по счётчикам, а затем в алфавитном порядке
        entries.sort((a,b) => {                 // функция для определения порядка сортировки
            if (a[1] === b[1]) {                // если счётчики одинаковые, тогда сортировать в алфавитном порядке
                return a[0] < b[0] ? -1 : 1;
            } else {                            // Если счётчики отличаются, тогда сортировать по наибольшему счётчику
                return b[1] - a[1];
            }
        });
        for (let entry of entries) {            // преобразовать счётчики в процентные соотношения
            entry[1] = entry[1] / this.totalLetters*100;
        }
        entries = entries.filter(entry => entry[1] >= 1); // отбросить все записи с процентным соотношением менее 1%
        let lines = entries.map (
            ([l, n]) => `$[l]: ${"#".repeat(Math.round(n))} ${n.toFixed(2)}%`
        );
        return lines.join("\n"); // возвратить сцепленные строки, разделённые символами новой строки
    }
}


// Эта асинхронная (возвращающая Promise) функция создаёт объект Histogram, читает асинхронным образом порции текста из
// стандартного ввода и добавляет их к гистограмме. Достигнув конца потока данных, функция возвращает итоговую гистограмму.
async function histogramFromStdin() {
    process.stdin.setEncoding("utf-8"); // читать строки Unicode, не байты
    let histogram = new Histogram();
    for await (let chunk of process.stdin) {
        histogram.add(chunk);
    }
    return histogram;
}


// Эта финальная строка кода является главным телом программы. Она создаёт объект Histogram из стандартного ввода и затем выводит гистограмму.
histogramFromStdin().then(histogram => { console.log(histogram.toString()); });