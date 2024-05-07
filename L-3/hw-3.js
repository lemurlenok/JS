
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

// for (let i =0; i <participants .length; i++) {
//     const participant = participants [i];
//     document.write(`<div>
//                         <h2>${participant.name}:</h2>
//                         <li>${participant.username} - ${participant.age}</li>
//
//                    </div>`
//     )
// }
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

    for (let i = 0; i < 10; i++) {
        document.write('<div class="block">Цей блок ' + i + '</div>');
    }

// for (let i = 0; i < 10; i++) {
//     document.write(`<div class="box">
//                             <div class="box2">Зовнішність Crazy Rabbit може змінюватися в залежності від його настрою: від безтурботної посмішки до дивакуватих виразів обличчя, завжди підкресленої його незбагненною енергією. ${i+1}</div>
// </div>`);
// }
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let count = 0;
while (count < 20) {
    document.write(`<div class="bees"> :
 <h1>бджоли ділять на:
    <li> **Матки**: Матки відповідають за вирощування нових бджіл та управління вуликом. Вони відкладають яйця, які вилуплюються в робочих бджіл та дронів. Матка також вирішує, коли створювати нову матку або розпочинати новий рой.</li>
    <li>**Робочі бджоли**: Робочі бджоли складають більшість популяції вулика. Вони займаються збиранням нектару та пилку, будівництвом та утриманням вулика, годуванням личинок та маток, а також обороняють вулик від нападів.</li> 
    <li>**Трутні**: Дрони - це чоловічі бджоли, їх головна функція - розмноження. Вони здатні оплодотворювати маток під час полювання на нові колонії. Дрони не беруть участь у збиранні нектару чи пилку або будівництві вулика, тому їх кількість в колонії може змінюватися в залежності від потреб колонії та сезону.</li>
 </h1>
 </div>`);
    count++;

}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let line = 0;
while (line < 20) {
    document.write(`<h1> ${line + 1} 
                        <li> Кожна бджола віддана своєму завданню та знає, що її праця має велике значення для спільної мети - забезпечення виживання колонії.</li>
                
    </h1>`);
    line++;
}

//Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону
//Масив:
   let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//ШАБЛОН:
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

document.write('<ul>');
for (let i = 0; i < listOfItems.length; i++) {
    document.write(`<li>'${listOfItems[i]}'</li>`);
}
document.write('</ul>');

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
// Користувачі зі статусом true
for (let i = 0; i<users.length ; i++) {
    if (users [i].status === false){
        continue;
    }
    console.log(users[i].name, users[i].status)
    document.write(`<h2> ${users[i].name}: ${users [i].status}</h2>`)
}
// Користувачі зі статусом false
for (let i = 0; i<users.length ; i++) {
    if (users [i].status === true){
        continue;
    }
    console.log(users[i].status, users[i].name)
    document.write(`<ul class="dw"> ${users [i].status}, ${users[i].name}</ul>`)
}
// Користувачі старші за 30 років
for (let i = 0; i<users.length ; i++) {
    let user = users[i];
    if (users [i].age <31){
        continue;
    }
    console.log(user[`name`], user[`age`]);
    document.write(`<div>
                           <h2>${users[i].name}, ${users[i].age} років</h2>

</div>`)
}

