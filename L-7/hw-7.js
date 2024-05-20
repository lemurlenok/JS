// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    console.log(this);

}
const Users= [];

Users.push(new User ('1', 'Vanya', '@Crezy_bees', 'Crezy_bees@gmail.com','+380675261456'));
Users.push (new User('2', 'Lana', '@SnuSmumric', 'Lana.S@gmail.com','+380950658924'));
Users.push (new User ('3', 'Alex', '@Alex27$', 'my.litle.ponny@gmail.com','+380502568472'));
Users.push (new User ('4', 'Petya', '@PinkRabbit', 'PinkRabbit@ukr.net','+380662581592'));
Users.push (new User ('5', 'Vasya', '@Vasya.M', 'mongoose.vasya@gmail.com','+380985261456'));
Users.push (new User ('6', 'Andrew', '@Saburo_Sakai', 'Saburo_Sakai@ukr.net','+380990858324'));
Users.push (new User ('7', 'Valya', '@interior+', 'interior_plus@i.ua','+380967425867'));
Users.push (new User ('8', 'Nikita', '@Nikitos', 'Nikita_ne_@gmail.com','+380632511511'));
Users.push (new User ('9', 'Oleg', '@Pegas', 'Pegas@gmail.com','+380677777777'));
Users.push (new User ('10', 'Paskal', '@jolly_gnome', 'jolly_gnome@gmail.com','+380677952244'));

// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const UsersNew = Users.filter(user => parseInt(user.id) % 2 === 0);
console.log(UsersNew);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

Users.sort((a,b)  => parseInt (a.id) - parseInt (b.id));
console.log(Users);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client


class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
        console.log(this);
    }
}

const clients = [];

// Наповнення масиву 10 об'єктами Client
clients.push(new Client('1', 'Vanya', '@Crezy_bees', "Crezy_bees@gmail.com", '+380675261456', ['milk', 'egg']));
clients.push(new Client('2', 'Lana', '@SnuSmumric', 'Lana.S@gmail.com', '+380950658924', ['tomato', 'apple', 'banana']));
clients.push(new Client('3', 'Alex', '@Alex27$', 'my.litle.ponny@gmail.com', '+380502568472', ['Coconut', 'Blackberry', 'Lemon', 'Mango']));
clients.push(new Client('4', 'Petya', '@PinkRabbit', 'PinkRabbit@ukr.net', '+380662581592', ['Grapes', 'Pineapple', 'Watermelon']));
clients.push(new Client('5', 'Vasya', '@Vasya.M', 'mongoose.vasya@gmail.com', '+380985261456', ['Orange', 'Grapes', 'Blueberries']));
clients.push(new Client('6', 'Andrew', '@Saburo_Sakai', 'Saburo_Sakai@ukr.net', '+380990858324', ['Pear', 'Apricot', 'Avocado']));
clients.push(new Client('7', 'Valya', '@interior+', 'interior_plus@i.ua', '+380967425867', ['Papaya', 'Pineapple']));
clients.push(new Client('8', 'Nikita', '@Nikitos', 'Nikita_ne_@gmail.com', '+380632511511', ['Blueberries', 'Lemon', 'egg']));
clients.push(new Client('9', 'Oleg', '@Pegas', 'Pgas@gmail.com', '+380677777777', ['Banana', 'Apple', 'Pineapple']));
clients.push(new Client('10', 'Paskal', '@jolly_gnome', 'jolly_gnome@gmail.com', '+380677952244', ['Mango', 'Kiwi', 'Raspberry', 'Cherry']));

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

const sortedClients = clients.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufacturer, year, maxSpeed, engineVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;

    this.drive = function() {
        console.log`Їдемо зі швидкістю ${this.maxSpeed} км/год`;
    };

    this.info = function() {
        for (let model in this) {
            if (typeof this[model] !== 'function') {
                console.log(`${model} - ${this[model]}`);
            }
        }
    };

    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function(newValue) {
        this.year = newValue;
    };

    this.addDriver = function(driver) {
        this.driver = driver;
    };
}

// Приклад використання:
const myCar = new Car('Mercedes', ' Germany', 2022, 310, '3L');
myCar.drive();
myCar.info();
myCar.increaseMaxSpeed(20);
console.log(myCar.maxSpeed);
myCar.changeYear(2022);
console.log(myCar.year);
myCar.addDriver({ name: 'Andrew', age: 45, license: true });
console.log(myCar.driver);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarTwo {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        for (let x in this) {
            if (typeof this[x] === 'function') {
                console.log(`${x} - ${this[x]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

const myCarTwo = new CarTwo('Dodge', 'Canada', 2023, 220, '3L');
myCarTwo.drive();
myCarTwo.info();
myCarTwo.increaseMaxSpeed(20);
console.log(myCarTwo.maxSpeed);
myCarTwo.changeYear(2020);
console.log(myCarTwo.year); // Виведе: 2022
myCarTwo.addDriver({ name: 'Tanya', age: 23, license: true });
console.log(myCarTwo.driver);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
const cinderellas = [
    new Cinderella('Cinderella Manyunya (1)', 16, 34),
    new Cinderella('Cinderella Flipper (2)', 22, 46),
    new Cinderella('Cinderella Fluff (3)', 20, 38),
    new Cinderella('Cinderella of the foolish laugh (4)', 20, 37),
    new Cinderella('Cinderella Crooked-Eyed (5)', 21, 38),
    new Cinderella('Cinderella Ugly (6)', 25, 39),
    new Cinderella('Cinderella Belle (7)', 22, 39),
    new Cinderella('Cinderella is the best wife (8)', 18, 37),
    new Cinderella('Cinderella is a glutton (9)', 31, 40),
    new Cinderella('Cinderella is an old woman', 93, 36)
];
console.log(cinderellas);
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}

const prince = new Prince('Prince Fool', 21, 36);
console.log(prince);

let foundCinderella = null;
for (let i = 0; i < cinderellas.length; i++) {
    if (cinderellas[i].shoeSize === prince.foundShoe) {
        foundCinderella = cinderellas[i];
        break;
    }
}

if (foundCinderella) {
    console.log(`Принц ${prince.name} знайшов свою "молоду" наречену" : ${foundCinderella.name}`);
} else {
    console.log(`${prince.name} не дуже й хтів.`);
}


const foundCinderella2 = cinderellas.find(cinderella => cinderella.shoeSize === prince.foundShoe);

if (foundCinderella2) {
    console.log(`Принц ${prince.name} знайшов своє не довге щастя: ${foundCinderella2.name}`);
} else {
    console.log(`Принц ${prince.name} втрати не відчує.`);
}

// Через Array.prototype. створити власний foreach, filter, map

Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

const arr1 = [1, 2, 3, 4, 5];
arr1.myForEach(element => {
    console.log(`Елемент: ${element}`);
});

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
};

const arr2 = ['apple', 'banana', 'orange', 'kiwi', 'grape'];
const filteredArr = arr2.myFilter(fruit => fruit.length > 5);
console.log(arr2);
console.log(filteredArr);


Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
};

const arr3 = [15, 3, 85, 14, 69];
const multipliedArr = arr3.myMap(num => num * 3);
console.log(arr3);
console.log(multipliedArr);