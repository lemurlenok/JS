// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const areaRectangle = (a, b) => a*b;

console.log(areaRectangle(20, 45));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

const PI = 3.14;
const areaCircle = (r, pi) => pi * (r ** 2);
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

const createParagraph = (text) => {
    const paragraph = document.createElement('p');
    paragraph.textContent = text;
    return paragraph.outerHTML;
}

const myParagraph = createParagraph('Думка людей про свої здібності дуже впливає на ці здібності.');
document.write(myParagraph);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const createList = (itemText) => {
    const listItems = [];
    for (let i = 0; i < 3; i++) {
        listItems.push(`<li>${itemText}</li>`);
    }
    return listItems;
}

const myList = createList('The journey from the airport to the city began on a wide, modern motorway, lined with shrubs and trees');
document.write('<ul>');
myList.forEach(item => document.write(item));
document.write('</ul>');



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function createDocum(words, count) {
    document.write("<ul>");
    for (let i = 0; i < count; i++) {
        document.write("<li>" + words + "</li>");
    }
    document.write("</ul>");
}


let words = "Псих, як символ ексцентричності і непередбачуваності, завжди привертає увагу.";
let count = 3;
createDocum(words, count);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

function buildList(createdArray) {
    let ul = "<ul>";
    createdArray.forEach(function(item) {
        ul += "<li>" + item + "</li>";
    });
    ul += "</ul>";
}
let createdArray = [10, "Шкідливий єнот", true, '53', -42];
createList(createdArray);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let people = [
    { id: 1, name: 'Іван', age: 25 },
    { id: 2, name: 'Марія', age: 30 },
    { id: 3, name: 'Петро', age: 35 }
];

function printPerson (person){
    document.write(`<p> ID ${person.id}, Name ${person.name}, Age${person.age}</p> `)
}

for (let i=0; i<printPerson; i++) {
    printPerson (people[i]);
}
// - створити функцію яка повертає найменьше число з масиву
function valueMinNumber (item){
    if(item.length ===0){
        return  "empty"
    }
    let MinNumber =item [0];
    for (i = 1; i<item.length; i++){
        if (item[i]<MinNumber){
            MinNumber =item[i];
        }
    }
    return MinNumber;
}
let Numbres = [12, 150, -20, 28, 0, -5, 301, -25];
let min = valueMinNumber (Numbres);
console.log(min);

document.write(`<h3>${min} min</h3>`)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


function sum(values) {
    let total = 0;
    for (let i = 0; i < values.length; i++) {
        total += values[i];
    }
    return total;
}

console.log(sum([27, 19, -25]));



// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


function swap(arr,index1,index2){
    let newArr = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newArr;
    return arr;
}

console.log(swap([11,22,33,44],0,1));

// let newSwap = swap([11,22,33,44],0,1);
// document.write(newSwap)

// -------------------------------------------------

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currencyItem of currencyValues) {
        if (currencyItem.currency === exchangeCurrency) {
            moneyExchange = (sumUAH / currencyItem.value).toFixed(2);
            console.log(`Ви отримаєте: ${moneyExchange} ${currencyItem.currency}`);
        }

    }
}

exchange(26000, [{currency:'USD', value:35}, {currency:'EUR', value:41}], 'EUR')


