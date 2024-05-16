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
Users.push (new User ('9', 'Oleg', '@Pegas', 'Pgas@gmail.com','+380677777777'));
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
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
const Clients  = [];
Clients.push(new Client ('1', 'Vanya', '@Crezy_bees', "Crezy_bees@gmail.com",'+380675261456',['milk', 'egg']));
Clients.push (new Client('2', 'Lana', '@SnuSmumric', 'Lana.S@gmail.com','+380950658924', ['tomato', 'apple', 'banana']));
Clients.push (new Client ('3', 'Alex', '@Alex27$', 'my.litle.ponny@gmail.com','+380502568472', ['Coconut', 'Blackberry', 'Lemon', 'Mango']));
Clients.push (new Client ('4', 'Petya', '@PinkRabbit', 'PinkRabbit@ukr.net','+380662581592', ['Grapes', 'Pineapple', 'Watermelon']));
Clients.push (new Client ('5', 'Vasya', '@Vasya.M', 'mongoose.vasya@gmail.com','+380985261456', ['Orange', 'Grapes', 'Blueberries']));
Clients.push (new Client ('6', 'Andrew', '@Saburo_Sakai', 'Saburo_Sakai@ukr.net','+380990858324', ['Pear', 'Apricot', 'Avocado']));
Clients.push (new Client ('7', 'Valya', '@interior+', 'interior_plus@i.ua','+380967425867', ['Papaya', 'Pineapple']));
Clients.push (new Client ('8', 'Nikita', '@Nikitos', 'Nikita_ne_@gmail.com','+380632511511', ['Blueberries', 'Lemon', 'egg']));
Clients.push (new Client ('9', 'Oleg', '@Pegas', 'Pgas@gmail.com','+380677777777', ['Banana', 'Apple', 'Pineapple']));
Clients.push (new Client ('10', 'Paskal', '@jolly_gnome', 'jolly_gnome@gmail.com','+380677952244', ['Mango', 'Kiwi', 'Raspberry', 'Cherry']));

console.log(Clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

Clients.sort((a, b) => a.order.length - b.order.length);
console.log(Clients);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


function Car (model, manufacturer, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
}

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
this.driver = function (){
    console.log(`Їдемо зі швидкістю : $(this.maxSpeed) км/год`);
}

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

this.info = function() {
    for (let key in this) {
        console.log(`${key} - ${this[key]}`);
    }
};

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

this.increaseMaxSpeed = function(newSpeed){
    this.MaxSpeed +=newSpeed;
}

// -- changeYear (newValue) - змінює рік випуску на значення newValue

this.changeYear = function(newValue) {
    this.year = newValue;
}

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

this.addDriver = function(driver) {
    this.driver = driver;
};

let myCar = new Car("Camry", "Toyota", 2022, 220, 2.5);
myCar.info();
myCar.drive();
myCar.increaseMaxSpeed(20);
myCar.drive();
myCar.changeYear(2023);
myCar.addDriver({name: "John", age: 35});
myCar.info();

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
class car{
}
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`


// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed


// -- changeYear (newValue) - змінює рік випуску на значення newValue


// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car



// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку