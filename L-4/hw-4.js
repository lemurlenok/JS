// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function areaRectangle (a, b) {
    return  a * b;
}
let length = 15;
let width = 32;
let rectangleArea = areaRectangle(length, width);
console.log(rectangleArea);
document.write(`<p> Площа прямокутника = ${ rectangleArea}</p>`);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function areaCircle (r) {
    const PI=3.14;
    return area =PI * (r ** 2);

}
let radius = 4;
let resultat = areaCircle(radius);
console.log(resultat);
document.write(`<h2>Площа кола з радіусом 4 = ${resultat}</h2>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function AreaCylinder (r, h){
    const PI = 3.14
    let totalSurfaceArea =  2 * PI * r * (r + h);
    console.log(totalSurfaceArea);
    document.write(`<h3>Площа ціліндра = ${totalSurfaceArea}</h3>`)
    return totalSurfaceArea;
}

AreaCylinder(5, 8)



// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(array) {
    array.forEach(function(elem) {
        console.log(elem);
    });
}

let array = ['name', 2, Math.sin, -100500, 'bees',];
printArray(array);
document.write(`<div class="printArray"> <ul>
                                    <li>${array}</li>
                                    </ul>
                          </div>`);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function creatParagraph (text){
    document.write(`<p>${text}</p>`)

}
creatParagraph('З цього і складається наше життя. Ми робимо один крок, потім другий. Піднімаємо очі назустріч усмішці чи оскалу довколишнього світу. Думаємо. Діємо. Почуваємо')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createList(txt) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write("<li>" + txt + "</li>");
    }
    document.write("</ul>");
}

let txt = "The journey from the airport to the city began on a wide, modern motorway, lined with shrubs and trees";
createList(txt);

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


