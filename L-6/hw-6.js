// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strings = ['hello world', 'lorem ipsum', 'javascript is cool'];
const lengths = strings.map(str => `Довжина стрінги: ${str}, ${str.length}`);
console.log(lengths);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

const strIngs = ['hello world', 'lorem ipsum', 'javascript is cool'];

const UpStrings = strings.map(str =>str.toUpperCase());
console.log(UpStrings);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

const lowerStrings = strings.map(str => str.toLowerCase());
console.log(lowerStrings);



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let string = ' dirty string   ';
string = string.trim();

console.log(string);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

function stringToarray(strA) {
     return strA.split(" ");
}

let strA = 'Ревуть воли як ясла повні';
let arr = stringToarray(strA);

console.log(arr);

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];

let stringNumbers = numbers.map(number => String(number));

console.log(stringNumbers);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(nums, direction) {

   if (direction === 'ascending') {

      nums.sort((a, b) => a - b);
   } else if (direction === 'descending') {

      nums.sort((a, b) => b - a);
   } else {
      return nums;
   }
   return nums;
}

let nums = [11, 21, 3];

console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
console.log(coursesAndDurationArray);

//курси з тривалістю більше 5 місяців
let filteredCourses = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log(filteredCourses);

//перетворення кожного елементу на наступний тип {id,title,monthDuration}
let transformedCourses =coursesAndDurationArray.map((course, index) => ({id: index + 1, title: course.title, monthDuration: course.monthDuration}));
console.log(transformedCourses);

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }



const suits = ['spade', 'diamond', 'heart', 'clubs'];
const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];


let deck = suits.flatMap(suit =>
    values.map(value => ({SuitCard: suit, value,color: (suit === 'diamond' || suit === 'heart') ? 'red' : 'black'})));
console.log(deck);

// Знайти піковий туз
let spadeAce = deck.find(card => card.SuitCard === 'spade' && card.value === 'ace');
console.log("Піковий туз:", spadeAce);

// Всі шістки
let sixes = deck.filter(card => card.value === '6');
console.log("Всі шістки:", sixes);

// Всі червоні карти
const redCards = deck.filter(card => card.color === 'red');
console.log("Всі червоні карти:", redCards);

// Всі буби
const diamondsAll = deck.filter(card => card.SuitCard === 'diamond');
console.log("Всі буби:", diamondsAll);

// Всі трефи від 9 та більше

// const  Clubs9 = deck.filter(card => {
//    if (card.SuitCard === 'clubs') {
//       const cardIndex = values.indexOf(card.value);
//       const C9Index = values.indexOf('9');
//       return cardIndex >= C9Index;
//    } else {
//       return false;
//    }
// });
// console.log(Clubs9);

const ClubsAll = deck.filter(card => card.SuitCard === 'clubs' && values.indexOf(card.value) >= values.indexOf('9'));
console.log("Всі трефи від 9:",ClubsAll);



//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// Упакувати карти по "мастях" в об'єкт
let PackTheСards  = deck.reduce((accumulator, currentCard) => {
   if (!accumulator[currentCard.SuitCard]) {
      accumulator[currentCard.SuitCard] = [];
   }
   accumulator[currentCard.SuitCard].push(currentCard);
   return accumulator;
}, {
   spade: [],
   diamond: [],
   heart: [],
   clubs: []
});
console.log(PackTheСards);


//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray

let coursesArray = [
   {
      title: 'JavaScript Complex',
      monthDuration: 5,
      hourDuration: 909,
      modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
   },
   {
      title: 'Java Complex',
      monthDuration: 6,
      hourDuration: 909,
      modules: ['html',
         'css',
         'js',
         'mysql',
         'mongodb',
         'angular',
         'aws',
         'docker',
         'git',
         'java core',
         'java advanced']
   },
   {
      title: 'Python Complex',
      monthDuration: 6,
      hourDuration: 909,
      modules: ['html',
         'css',
         'js',
         'mysql',
         'mongodb',
         'angular',
         'aws',
         'docker',
         'python core',
         'python advanced']
   },
   {
      title: 'QA Complex',
      monthDuration: 4,
      hourDuration: 909,
      modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
   },
   {
      title: 'FullStack',
      monthDuration: 7,
      hourDuration: 909,
      modules: ['html',
         'css',
         'js',
         'mysql',
         'mongodb',
         'react',
         'angular',
         'aws',
         'docker',
         'git',
         'node.js',
         'python',
         'java']
   },
   {
      title: 'Frontend',
      monthDuration: 4,
      hourDuration: 909,
      modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
   }
];
console.log(coursesArray);

// --написати пошук всіх об'єктів, в який в modules є sass

let Sass = coursesArray.filter(course => course.modules.includes('sass'));

console.log(Sass);

// --написати пошук всіх об'єктів, в який в modules є docker

let Docker = coursesArray.filter(course => course.modules.includes('docker'));

console.log(Docker);