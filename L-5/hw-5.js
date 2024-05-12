// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const areaRectangle = (a, b) => a*b;
console.log(areaRectangle(20, 45));


// - створити функцію яка обчислює та повертає площу кола з радіусом r


const areaCircle = (r, pi) => pi * (r ** 2);
const PI = 3.14;
console.log(areaCircle (PI, 6));
document.write(`Площа кола з радіусом 6` + ' = ' + areaCircle(PI, 6))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const areaCylinder = (r, h, pi) => 2 * pi * r * (r + h);
const Pi = 3.14;
console.log(areaCylinder(5, 10, Pi));



// - створити функцію яка приймає масив та виводить кожен його елемент

const printArrayElements = (array) => {
    array.forEach(element => {
        console.log(element); // Вивести кожен елемент у консоль
    });
};

const nweArray = ['name', 2, Math.sin, -100500, 'bees',];
printArrayElements(nweArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const createParagraph = (text) => {document.write(`<p> ${text}</p>`)};
    createParagraph ('Думка людей про свої здібності дуже впливає на ці здібності.');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = (itemText) => {
    document.write('<ul>');
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${itemText}</li>`);
    }
    document.write('</ul>');
   };
createList ('The journey from the airport to the city began on a wide, modern motorway, lined with shrubs and trees');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createDocumentItem = (count, words) => {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write(`<li>${words}</li>`);
    }
    document.write("</ul>");
}

createDocumentItem(3, 'Зовнішня самовпевненість істоти часто супроводжується великою впевненістю у собі.');

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const buildList = (arr) => {
   document.write(`<ul>`);
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</li>`)
}
    buildList ([  42, 'Кава', 'OpenAI', false, 'Загадки Всесвіту', 3.14])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let people = [
    { id: 1, name: 'Іван', age: 25 },
    { id: 2, name: 'Марія', age: 30 },
    { id: 3, name: 'Петро', age: 35 }
];

const printPerson = (person) => {
    document.write(`<p><b>ID - ${person.id}, Name - ${person.name}, Age - ${person.age}</b></p>`);
};

people.forEach(printPerson);

// - створити функцію яка повертає найменьше число з масиву
const valueMinNumber = (item) => {
    let minNumber = item[0];
    for (let i = 1; i < item.length; i++) {
        if (item[i] < minNumber) {
            minNumber = item[i];
        }
    }
    return minNumber;
};

let numbers = [-2, 56, 248, -246, 0, 46, 4194, -25];
let min = valueMinNumber(numbers);
console.log(min);

document.write(`<h3>${min} min</h3>`);

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


const sum = (values) => {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    console.log(total);
    document.write(` ${total}`);
    return total;
};

sum([4917, -4619, -465])


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


const  swap = (arr,index1,index2) => {
    let newArr = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newArr;
    return console.log(arr);
}

swap([11,22,33,44],0,1);


// -------------------------------------------------

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const exchange = (sumUAH, currencyValues, exchangeCurrency) =>{
    for (const currencyItem of currencyValues) {
        if (currencyItem.currency === exchangeCurrency) {
            moneyExchange = (sumUAH / currencyItem.value).toFixed(2);
            console.log(`Ви отримаєте: ${moneyExchange} ${currencyItem.currency}`);
        }

    }
}

exchange(12000, [{currency:'USD', value:39}, {currency:'EUR', value:41.15}], 'USD')


