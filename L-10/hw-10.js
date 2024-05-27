
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

function submitForm() {

    let name = document.getElementById("myForm").elements["name"].value;
    let surname = document.getElementById("myForm").elements["surname"].value;
    let age = document.getElementById("myForm").elements["age"].value;


    let obj = { name, surname, age };

    // Відображення об'єкта під формою
    let outputDiv = document.getElementById("output");
    outputDiv.innerText = JSON.stringify(obj, null, 2);
}




// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let numberBlock = document.getElementById("numberBlock");
let currentNumber = parseInt(numberBlock.innerText);
let newNumber = currentNumber + 1;
numberBlock.innerText = newNumber;

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// function addSession() {
//     let currentDate = new Date();
//     let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//     sessions.push(currentDate);
//     localStorage.setItem('sessions', JSON.stringify(sessions));
//     window.location.href = 'sessions.html';
// }
// addSession();
//
// function getSessions() {
//     let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
//     let sessionsList = document.getElementById('sessionsList');
//     sessions.forEach(session => {
//         let sessionItem = document.createElement('div');
//         sessionItem.textContent = 'Дата та час відвідування: ' + session;
//         sessionsList.appendChild(sessionItem);
//     });
// }
// getSessions();

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let items = [];
for (let i = 0; i < 100; i++) {
    items.push({ id: i + 1, name: `Елемент ${i + 1}` });
}

let itemsContainer = document.getElementById('itemsContainer');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');


displayItems(0, 10);

function displayItems(start, end) {
    itemsContainer.innerHTML = '';
    for (let i = start; i < end; i++) {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `ID: ${items[i].id}, Назва: ${items[i].name}`;
        itemsContainer.appendChild(itemDiv);
    }
}
prevButton.addEventListener('click', function() {
    let currentIndex = items.findIndex(item => item.id === parseInt(itemsContainer.firstChild.textContent.split(':')[1]));
    if (currentIndex - 10 >= 0) {
        displayItems(currentIndex - 10, currentIndex);
    }
});
nextButton.addEventListener('click', function() {
    let currentIndex = items.findIndex(item => item.id === parseInt(itemsContainer.lastChild.textContent.split(':')[1]));
    if (currentIndex + 10 < items.length) {
        displayItems(currentIndex + 1, currentIndex + 11);
    }
});

//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
function hideElement() {
    // Отримання посилання на елемент з id="text"
    let element = document.getElementById('text');
    // Перевірка, чи елемент існує
    if (element) {
        // Приховуємо елемент
        element.style.display = 'none';
    } else {
        // Якщо елемент не знайдено, виводимо повідомлення про помилку
        console.error('Елемент з id="text" не знайдено.');
    }
}
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
