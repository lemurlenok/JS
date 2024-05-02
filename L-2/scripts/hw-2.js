//
// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = ['name', 19, 'book', '-153', 0, 'true', 2, 'crazy bee', 'no milk', 'husband'];
// console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);


// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let obj1 = {
    title: 'Shantaram',
    pageCount: 944,
    genre: 'novel'
}

let obj2 = {
    title: 'Fahrenheit 451',
    pageCount: 192,
    genre: 'science fiction novel'
}

let obj3 = {
    title: 'American Psycho',
    pageCount: 416,
    genre: 'A postmodernist novel'
}
console.log(obj1)
console.log(obj2)
console.log(obj3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book1 = {
    tetle: 'Теплі історії в конвертах',
    pageCount: 176,
    genre: 'Література / Художня',
    authors: [
        {name: 'Slava Svitova', age: 32},
        {name: 'Maxim Fedorchenko', age: 29},
        {name: 'Bohdan Kovalchuk', age: 33}
    ]
}

let book2 = {
    tetle: 'George and the Unbreakable Code ',
    pageCount: 312,
     enre: 'science fiction',
     authors: [
         {name: 'Lucy Hawking', age: 53},
         {name: 'Stephen Hawking',age: 76},
     ]
}

let book3 = {
    tetle: 'Gwendy is Button Box',
    pageCount: 312,
    genre: 'Horror fiction',
    authors: [
        {
            name: 'Stephen King',
            age: 76
        },
        {
            name: 'Richard Cheesemar',
            age: 61
        },

    ]
}
console.log(book1)
console.log(book2)
console.log(book3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {name: 'Sonya',  username: '@Sonya', password: "156%sg"},
    {name: 'Nikita', username: '@Nikita', password: "2673363"},
    {name: 'Dima', username: '@Dima', password: "tevb6829"},
    {name: 'Alex', username: '@Dima', password: "263"},
    {name: 'Tosya', username: '@Tosya', password: "jb25*lyn"},
    {name: 'Andrew', username: '@Andrew', password:"3gte"},
    {name: 'Pasha', password:"4yln6dj$", username: '@Pasha'},
    {name: 'Sofia', username: '@Sofia', password:"bjr89#gfs"},
    {name: 'Danya', username: '@Danya', password:"b298&tn#"},
    {name: 'Orestes', username: '@Orestes', password: "72683gh@"}
]

console.log(users [0].password);
console.log(users [1].password);
console.log(users [2].password);
console.log(users [3].password);
console.log(users [4].password);
console.log(users [5].password);
console.log(users [6].password);
console.log(users [7].password);
console.log(users [8].password);
console.log(users [9].password)


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

let weather = [
    {
        morning: '+2',
        day: '+10',
        evening: '+5'
    },
    {
        morning: '0',
        day: '-2',
        evening: '+3'
    },
    {
        morning: '+4',
        day: '+15',
        evening: '+11'
    },
    {
        morning: '+9',
        day: '+21',
        evening: '+5'
    },
    {
        morning: '-1',
        day: '+6',
        evening: '+3'
    },
    {
        morning: '+4',
        day: '+11',
        evening: '+13'
    },
    {
        morning: '+12',
        day: '+20',
        evening: '+18'
    }
]

console.log(weather)


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 27;
if (x !== 0) {
    console.log("Вірно")
} else {
    console.log("Невірно")
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 47;
if (time<= 0 && time <= 15) {
    console.log('В першу чверть');
}
if (time >= 16 && time<= 30) {
    console.log('В другу чверть');
}
if (time<=31 && time<=45){
    console.log('В третю чверть')
}
if (time>=46 && time<=60){
    console.log('В четверту чверть')
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 18;
    if (day <= 1 && day <= 10) {
        console.log('Перша декада місяця');
    }
    if (day >=11 && day<= 20) {
        console.log('Друга декада місяця');
    }
    if (day >=21 && day <=31) {
        console.log('Третя декада місяця');
    }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let y = '4';
switch (y){
        case '0':
            console.log('meeting');
            break;

        case '1':
            console.log('gym');
            break;

        case '2':
            console.log('Wednesday');
            break;
        case '3':
            console.log('cleaning');
            break;
        case '4':
            console.log('check the bees');
            break;
        case '5':
            console.log('shopping');
            break;
        case '6':
            console.log('vacation');
            break;
    default:
        console.log('??????')
    }


// - Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let N1 = +prompt('введіть перше число');
let N2 = +prompt('введіть друге число');

if (N1 > N2){
    console.log(N1 + ' ' + 'max');
}else if (N2 > N1){
    console.log(N2 + ' ' + 'max');
}else if (N1 === N2){
    console.log('the numbers are equal');
}

//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).


let variableX = null;
let X = !!variableX === false ? 'default' : variableX;
console.log(X);


//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
    ]
if (coursesAndDurationArray[0].monthDuration > 5){
    console.log(coursesAndDurationArray[0].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[1].monthDuration > 5){
    console.log(coursesAndDurationArray[1].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[2].monthDuration > 5){
    console.log(coursesAndDurationArray[2].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[3].monthDuration > 5){
    console.log(coursesAndDurationArray[3].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[4].monthDuration > 5){
    console.log(coursesAndDurationArray[4].title + ' ' + 'Супер');
}
if (coursesAndDurationArray[5].monthDuration > 5){
    console.log(coursesAndDurationArray[5].title + ' ' + 'Супер');
}