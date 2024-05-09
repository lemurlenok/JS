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
    return area = Math.PI * Math.pow(r, 2);

}
let radius = 4;
let resultat = areaCircle(radius);
console.log(resultat);
document.write(`<h2>Площа кола з радіусом 4 = ${resultat}</h2>`);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderAareaf (r, h){
    let squareSide  = 2 * Math.PI * r * h;
    let totalSurfaceArea =  Math.PI * Math.pow(r, 2);
    return  resultat = squareSide + 2 * totalSurfaceArea;

}
let radiuS = 5;
let height = 8;
let cylinder = cylinderAareaf (radiuS, height);
console.log(cylinder);
document.write(`<h3>Площа ціліндра = ${cylinder}</h3>`)



// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(array) {
    array.forEach(function(elem) {
        console.log(elem);
    });
}

let array = ['name', 2, Math.sin, -100500, 'bees',];
printArray(array);
document.write(`<div class="printArray"> <ul><li>${array}</li></ul></div>`);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function creatParagraph (text){
//     let paragraph = document.createElement ('p');
//     paragraph.textContent = text;
//
// }
// creatParagraph ('З цього і складається наше життя. Ми робимо один крок, потім другий. Піднімаємо очі назустріч усмішці чи оскалу довколишнього світу. Думаємо. Діємо. Почуваємо');
// document.write(paragraph.creatParagraph);
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий



// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



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
