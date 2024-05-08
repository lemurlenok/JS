// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function площаПрямокутника (a, b) {
    let area = a * b;
    return area;
}
let length = 15;
let width = 32;
let rectangleArea = площаПрямокутника(length, width);
console.log(rectangleArea);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function площаКола(r) {
    let area = Math.PI * Math.pow(r, 2);
    return area;
}
let radius = 4;
let resultat = площаКола(radius);
console.log(resultat);

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function cylinderAareaf (r, h){
    let бічнаПлоща = 2 * Math.PI * r * h;
    let totalSurfaceArea =  Math.PI * Math.pow(r, 2);
    let resultat = бічнаПлоща + 2 * totalSurfaceArea;
    return resultat;
}
let radiuS = 5;
let height = 8;
let cylinder = cylinderAareaf (radiuS, height);
console.log(cylinder);


// - створити функцію яка приймає масив та виводить кожен його елемент

function printArray(array) {
    array.forEach(function(elem) {
        console.log(elem);
    });
}

let array = ['name', 2, Math.sin, -100500, 'bees',];
printArray(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)



// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.


// - створити функцію яка повертає найменьше число з масиву


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250