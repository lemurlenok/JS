
    //- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let participants  = [
    {name: 'Sonya',  username: '@Sonya', age: 18},
    {name: 'Nikita', username: '@Nikita', age: 21},
    {name: 'Dima', username: '@Dima', age: 27},
    {name: 'Alex', username: '@Dima', age: 33},
    {name: 'Tosya', username: '@Tosya', age: 30},
    {name: 'Andrew', username: '@Andrew', age: 22},
    {name: 'Pasha', username: '@Pasha', age: 27},
    {name: 'Sofia', username: '@Sofia', age: 18},
    {name: 'Danya', username: '@Danya', age: 19},
    {name: 'Orestes', username: '@Orestes', age: 30}
]
for (const participant of participants) {
    document.write(`<div>
                        <h2>${participant.name} - ${participant.username} - ${participant.age}</h2>
                   </div>`
    )
}

//-----------------------------------------------
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

    for (let b = 0; b < 10; b++) {
        let magazine = {
            title: "Назва" + (b + 1),
            author: "Автор" + (b + 1),
            description: "Текст" + (b + 1)
        };

        let magazineCard = `<div>
                        <h3>${magazine.title}</h3>
                        <p>Автор: ${magazine.author}</p>
                        <p>${magazine.description}</p>
    </div>`;
        document.write(magazineCard);
    }

//-----------------------------------------------
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let CrazyRabbit = 0;
    while (CrazyRabbit < 20) {
        document.write(`<h1 class="CrazyRabbit"> Crazy Rabbit(${CrazyRabbit + 1})
                    <p>Зовнішність Crazy Rabbit може змінюватися в залежності від його настрою: від безтурботної посмішки до дивакуватих виразів обличчя, завжди підкресленої його незбагненною енергією.</p>
       
     </h1>`);
        CrazyRabbit++;

    }


//-----------------------------------------------
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    let books = {

        0: {
            title: "Алхімік",
            pageCount: 163,
            author: "Пауло Коельо",
            genre: "Філософський роман",
            description: "Роман про шлях пізнання, мрії та самовдосконалення, що розповідає історію іспанського пастуха Сантьяго, який прагне втілити свої мрії у реальність."

        },
        1: {
            title: "Шантарам",
            pageCount: 936,
            author: "Грегорі Девід Робертс",
            genre: "Пригодницький роман",
            description: "Роман, заснований на реальних подіях, що розповідає історію бойовика Лінда, який втік з тюрми в Австралії та вирушив на пошуки нового життя в Мумбаї."
        }
    };
    let f = 0;
    while (f < 20) {
        let bookIndex = f % Object.keys(books).length;
        let book = books[bookIndex];
        document.write('<h1>Книга' + (f + 1) + ':' + book.title + '</h1>');
        document.write('<p>Автор: ' + book.author + '</p>');
        document.write('<p>Кількість сторінок: ' + book.pageCount + '</p>');
        document.write('<p>Жанр: ' + book.genre + '</p>');
        document.write('<p>Опис: ' + book.description + '</p>');
        f++;
    }

//-----------------------------------------------
//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
//Масив:
   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//ШАБЛОН:
//  <ul>
//     <li>ITEM OF ARRAY</li>
//     <!--
//         і тд інші об'єкти масиву
//          ...
//          ...
//          ...
//     -->
// </ul>
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

    document.write('<ul>');

    for (const item of listOfItems) {
        document.write('<li>' + item + '</li>');
    }
    document.write('</ul>');


//-----------------------------------------------

//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту


for (let i = 0; i < products. length; i++) {
    const product = products[i]
    document.write(`<div class="product-card">
            <h3 class="product-title"> ${product.title} Price - ${product.price}</h3>
            <div>
                <img src="${product.image}" alt="" class="product-image">
</div>
            
        </div>`)
}

//-----------------------------------------------
// є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
// - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
     {name: 'vasya', age: 31, status: false},
     {name: 'petya', age: 30, status: true},
     {name: 'kolya', age: 29, status: true},
     {name: 'olya', age: 28, status: false},
     {name: 'max', age: 30, status: true},
     {name: 'anya', age: 31, status: false},
     {name: 'oleg', age: 28, status: false},
     {name: 'andrey', age: 29, status: true},
     {name: 'masha', age: 30, status: true},
     {name: 'olya', age: 31, status: false},
     {name: 'max', age: 31, status: true}
]
// Користувачі зі статусом true
    let user;
    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        if (users[i].status === true) {
            console.log(user.name, user.status);
            // document.write(`<h2> ${users[i].name}: ${users [i].status}</h2>`)
        }
    }

// Користувачі зі статусом false
for (let i = 0; i < users.length ; i++) {
    if (users [i].status === false) {
        console.log(users[i].status, users[i].name)
        // document.write(`<h2> ${users [i].status}, ${users[i].name}</h2>`)
    }
}

// Користувачі старші за 30 років
    let i = 0;
    while (i < users.length) {
        if (users[i].age >30) {
            console.log(users[i].name, users[i].age, 'age');
            // document.write(`<h2> ${users[i].name}, ${users[i].age} рік`)
        }
        i++;

    }

