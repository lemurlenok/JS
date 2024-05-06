
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
for (let i =0; i <participants .length; i++) {
    const participant = participants [i];
    document.write(`<div>
                        <h2>${participant.name} - ${participant.username} - ${participant.age}</h2>
                   </div>`
    )
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.


//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.


//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
//Масив:
//    let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//ШАБЛОН:
// function write(){
//     document.write(
//         <ul>
//             <li>'html'</li>
//             <ul>
//                 <li>'css'</li>
//                 <li>'javascript'</li>
//                 <li>'mysql'</li>
//                 <li>'mongodb'</li>
//                 <li>'react'</li>
//                 <li>'angular'</li>
//                 <li>'node.js'</li>
//             </ul>
//         </ul>
//     )
// }
// write();


//замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву

//-----------------------------------------------

//Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону
//Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту
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

for (let i = 0; i < products. length; i++) {
    const product = products[i]
    document.write(`<div class="product-card">
            <h3 class="product-title"> ${product.title} ${product.price}</h3>
            <div>
                <img src="${product.image}" alt="" class="product-image">
</div>
            
        </div>`)
}


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

for (let i = 0; i<users.length ; i++) {
    if (users [i].status === false){
        continue;
    }
    document.write(`<h2> ${users[i].name}, ${users [i].status}</h2>`)
}
for (let i = 0; i<users.length ; i++) {
    if (users [i].status === true){
        continue;
    }
    document.write(`<h2> ${users [i].status}, ${users[i].name}</h2>`)
}
for (let i = 0; i<users.length ; i++) {
    let user = users[i];
    if (users [i].age <31){
        continue;
    }
    console.log(user[`name`], user[`age`]);
}

    // let i =0
    // while (i<users.length){
    //     if (users [i].status === true){
    //         console.log(users[i]);
    //         i++;
    //     }
    // }
