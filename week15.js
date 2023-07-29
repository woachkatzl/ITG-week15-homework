//Задание 1
// Выведите числа от 1 до 10 в консоль
console.log("Задание 1");

for (let i = 1; i < 11; i++) {
    console.log(i);
}

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
console.log("Задание 2");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
console.log("Задание 3");

for (let i = 10; i > 0; i--) {
    console.log(i);
}

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
console.log("Задание 4");

for (let i = 1; i <= 10; i++) {
    console.log(i + " x 5 = " + (i * 5));
}

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
console.log("Задание 5");

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
console.log("Задание 6");

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
console.log("Задание 7");

const numbers = [1, 2, 3, 4, 5];

let numbersSum = 0;
for (let i = 0; i < numbers.length; i++) {
    numbersSum += numbers[i];
}
console.log(numbersSum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
console.log("Задание 8");

let animals = ["Кот", "Рыба", "Лемур"];
for (let i = 0; i < animals.length; i++) {
    animals[i] = animals[i] + " - прекрасное животное";
}
console.log(animals);

//Задание 9
// Выведите символы в строке в консоль
console.log("Задание 9");

const str = 'Hello';

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
console.log("Задание 10");

for (let element of array) {
    console.log(element);
}

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
console.log("Задание 11");

const sentences = ['Hello, world!', 'How are you?'];

//Решила тремя способами, всё ещё не уверена, нет ли способа проще и понятней, но не нашла.
// Решение 1:

// Создала массив, в котором каждое предложение представлено в виде массива слов. Разделила по знакам препинания с возможными пробелами.
const sentencesSplit = sentences.map(sentence => sentence.split(/\W\s*/));

// Создала массив на основе предыдущего, где с помощью оператора spread объединила составные массивы слов в один массив слов. Сразу применила к нему метод .filter чтобы отфильтровать пустые строки, получившиеся в результате разбивки.
const sentencesWords = sentencesSplit
    .reduce((newArray, sentence) => newArray = [...newArray, ...sentence])
    .filter(word => word !== "");

// С помощью цикла вывела все слова в консоль 
for (let word of sentencesWords) {
    //console.log(word);
}

// Решение 2:

// Создала цикл, берущий каждое предложение массива и разбивающий его на массив слов
for (let sentence of sentences) {
    sentence = sentence.split(/\W\s*/);
    // Вложила в него еще один цикл, который для каждого массива слов выводит слова в консоль
    for (let word of sentence) {
        // Пустые строки пропускаются
        if (word === "")
            continue;
        //console.log(word);
    }
}

// Решение 3:
// Использовала новый метод .flatMap, дальше как в первом решении
const sentencesWords1 = sentences.flatMap(sentence => sentence.split(/\W\s*/));
const sentencesWords1Filtered = sentencesWords1.filter(word => word !== "");

for (let word of sentencesWords1Filtered) {
    //console.log(word);
}

//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
console.log("Задание 12");

let numbersSum2 = 0;
for (let number of numbers) {
    numbersSum2 += number;
}
console.log(numbersSum2);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
console.log("Задание 13");

const list = ['apple', 'banana', 'cherry'];

for (let item of list) {
    console.log(item.length);
}

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
console.log("Задание 14");

const words14 = ['Hello', 'world', '!'];
for (let i = 0; i < words14.length; i++) {
    words14[i] = words14[i].toUpperCase();
}
console.log(words14);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
console.log("Задание 15");

const greeting = 'Hello, world!';
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Создала цикл, который обрабатывает каждую гласную массива vowels
for (let vowel of vowels) {

    // Создала переменную копию константы greeting, чтобы изменять проверяемую строку, не изменяя оригинальную строку
    let greetingCopy = greeting;

    //Создала вложенный цикл, который проверяет условие, содержится ли текущая гласная массива в строке greetingCopy. Если условие верно, цикл прибавляет 1 к количеству гласных vowelCount, определяет индекс найденной гласной и обрезает проверяемую строку greetingCopy после найденной гласной, чтобы проверить наличие этой же гласной далее в строке.
    while (greetingCopy.includes(vowel)) {
        vowelCount++;

        const vowelIndex = greetingCopy.indexOf(vowel);
        greetingCopy = greetingCopy.slice(vowelIndex + 1);
    }
}
console.log("количество гласных букв в строке: " + vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
console.log("Задание 16");

const words = ['Hello', 'world', '!'];

const wordsUnited = words.join(" ");
console.log(wordsUnited);

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
console.log("Задание 17");

let number17 = 1;
while (number17 <= 10) {
    console.log(number17);
    number17++;
}

//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
console.log("Задание 18");

let number18 = 10;
while (number18 > 0) {
    console.log(number18);
    number18--;
}

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
console.log("Задание 19");

const allNumbers = [1, 2, 3, -4, 5];
let allPositive = true;

let allNumbersIndex = 0;
while (allNumbersIndex < allNumbers.length) {
    if (allNumbers[allNumbersIndex] < 0) {
        allPositive = false;
        break;
    }
    allPositive = true;
    allNumbersIndex++;
}
console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
console.log("Задание 20");

const random = [2, 4, 6, -3, 8, 10];

let randomIndex = 0;
do {
    console.log(random[randomIndex]);
    randomIndex++;
} while (random[randomIndex] > 0);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
console.log("Задание 21");

let number21 = 0;
do {
    number21++;
    if (number21 % 3 === 0) {
        continue;
    }
    console.log(number21);
} while (number21 < 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
console.log("Задание 22");

let enteredSum = 0;
/* while (enteredSum <= 100) {
    const newNumber = Number(prompt("Введите число"));
    enteredSum += newNumber;
} */

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
console.log("Задание 23");

const headerElements = document.querySelectorAll("h4");
const changeColor = (elements) => {
    for (let element of elements) {
        element.style.color = "blue";
    }
};
//changeColor(headerElements);

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
console.log("Задание 24");

let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
let randomString = '';

const randomStringGenerator = () => {
    // Определяем количество символов в случайной строке
    const stringLength = Math.ceil(Math.random() * 6);

    // Создаём строку на основе randomString
    for (let i = 1; i <= stringLength; i++) {
        // Получаем случайное число в качестве инддекса алфавита
        const alphabetIndex = Math.floor(Math.random() * alphabet.length);
        // Добавляем букву алфавита к строке по индексу
        randomString += alphabet[alphabetIndex];
    }

    console.log(randomString);
    return randomString;
};
randomStringGenerator();