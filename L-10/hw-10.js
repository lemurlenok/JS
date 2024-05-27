
// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

function submitForm() {

    let name = document.getElementById("myForm").elements["name"].value;
    let surname = document.getElementById("myForm").elements["surname"].value;
    let age = document.getElementById("myForm").elements["age"].value;
    let obj = { name, surname, age };
    let outputDiv = document.getElementById("output");
    outputDiv.innerText = JSON.stringify(obj, null, 2);
}

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let number = localStorage.getItem('number') || 2;
number++;
document.getElementById('numberBlock').textContent = number;
localStorage.setItem('number', number);

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

let currentDate = new Date();
let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
sessions.push(currentDate);
localStorage.setItem('sessions', JSON.stringify(sessions));

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

let items = [];
for (let i = 0; i < 100; i++) {
    items.push({ id: i + 1, name: `Щось за номером -  ${i + 1}` });
}

let itemsContainer = document.getElementById('itemsContainer');
let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton');

displayItems(0, 10);

function displayItems(start, end) {
    itemsContainer.innerHTML = '';
    for (let i = start; i < end; i++) {
        let itemDiv = document.createElement('div');
        itemDiv.setAttribute('id', items[i].id);
        itemDiv.textContent = `${items[i].id}. ${items[i].name}`;
        itemsContainer.appendChild(itemDiv);
    }
}
prev.addEventListener('click', function() {
    let firstItemId = parseInt(itemsContainer.firstChild.getAttribute('id'));
    if (firstItemId - 10 >= 1) {
        displayItems(firstItemId - 10 - 1, firstItemId - 1);
    }
});
next.addEventListener('click', function() {
    let lastItemId = parseInt(itemsContainer.lastChild.getAttribute('id'));
    if (lastItemId + 10 <= items.length) {
        displayItems(lastItemId, lastItemId + 10);
    }
});
//
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
function hideElement() {
    let element = document.getElementById('text');
    if (element) {
        element.style.display = 'none';
    }
}
//
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

function checkAge (){
    let ageInput = document.getElementById("ageInput").value;
    if(ageInput<18){
        document.getElementById("message").innerText = "Іди грайся у шахи.";
    }else {
        document.getElementById("message").innerText = "Заходь, в нас є пундики."
    }
}
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
function createTable() {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);
    let content = document.getElementById("content").value;

    let table = document.createElement("table");
    for (let i = 0; i < rows; i++) {
        let row = table.insertRow();
        for (let x = 0; x < cols; x++) {
            let cell = row.insertCell();
            let textNode = document.createTextNode(content);
            cell.appendChild(textNode);
        }
    }

    let tableContainer = document.getElementById("tableContainer");
    while (tableContainer.firstChild) {
        tableContainer.removeChild(tableContainer.firstChild);
    }
    tableContainer.appendChild(table);
}
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається
// let priceBlock = document.getElementById("priceBlock");
//
// function updatePrice() {
//
//     let currentPrice = parseInt(priceBlock.textContent);
//     let newPrice = currentPrice + 10;
//     priceBlock.textContent = newPrice + " грн";
//     localStorage.setItem("lastUpdateTime", Date.now());
// }
// function checkAndUpdatePrice() {
//     let lastUpdateTime = localStorage.getItem("lastUpdateTime");
//     if (!lastUpdateTime || (Date.now() - lastUpdateTime > 10000)) {
//         updatePrice();
//     }
// }
//
// checkAndUpdatePrice();