// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let h1 = 'hello';
let h2 = 'owu';
let h3 = 'com';
let h4 = 'ua';
let h5 = 1;
let h6 = 10;
let h7 = -199;
let h8 = 123;
let h9 = 3.14;
let h10 = 2.7;
let h11 = 16;
let h12 = true;
let h13 = false;

console.log(h1);
console.log(h2);
console.log(h3);
console.log(h4);
console.log(h5);
console.log(h6);
console.log(h7);
console.log(h8);
console.log(h9);
console.log(h10);
console.log(h11);
console.log(h12);
console.log(h13);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)

let firstName = 'Olena';
let middleName = 'Volodymyrivna';
let lastName = 'Datsenko';
let spase = ' ';
let person= firstName+ spase+middleName+spase+lastName;

console.log(person);


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
console.log(typeof a,a);
let b = '100';
console.log(typeof b,b);

let c = true;
console.log(typeof c);


// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль