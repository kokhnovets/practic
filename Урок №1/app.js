"use strict";
class User {
    name;
    surname;
    constructor(_name, _surname) {
        this.name = _name;
        this.surname = _surname;
    }
}
const tom = new User("Михаил", "Кохновец");
const header = document.getElementById("header");
header.innerHTML = "Привет, " + tom.name + " " + tom.surname;
let x = 10;
console.log(x); // 10
var y = 20;
console.log(y); // 20
const t = 50;
console.log(t); // 50
let isEnabled = true;
let isAlive = false;
console.log(isEnabled);
console.log(isAlive);
let firstname = "Михаил";
let lastname = "Кохновец";
let age = 22;
let fullname = `Меня звать ${name} ${lastname}, мне ${age}`;
const someArray = [24, "Tom", false];
// function sum(a: number, b: number) {
//   return a + b;
// }
console.log(sum(10, 5));
let koef = 1.5;
function add(a) {
    let result = a * koef;
    console.log(result);
}
console.log(add(20)); // 30
console.log(add(10)); //15
// тип number - возвращает значение number (со строками также)
function ads(a, b) {
    return a + b;
}
let result = ads(1, 20);
console.log(result);
// тип void - ничего не возвращает
function adds(a, b) {
    console.log(a + b);
}
adds(10, 20);
function addd(a, b) {
    return a + b;
}
let resultat = addd(10, 20);
console.log(resultat);
// Необязательные параметры функции устанавливаются через a?: type
function getName(firstname, lastname) {
    if (lastname) {
        return firstname + " " + lastname;
    }
    else {
        return firstname;
    }
}
console.log(getName("Михаил"));
console.log(getName("Михаил", "Кохновец"));
function printUsers(firstname, lastname, patronymic) {
    if (lastname && !patronymic) {
        return firstname + " " + lastname;
    }
    else if (patronymic && !lastname) {
        return firstname + " " + patronymic;
    }
    else if (lastname && patronymic) {
        return firstname + " " + lastname + " " + patronymic;
    }
    else {
        return firstname;
    }
}
console.log(printUsers('Михаил', 'Кохновец'));
console.log(printUsers('Михаил', 'Николаевич'));
console.log(printUsers('Михаил', 'Николаевич', 'Кохновец'));
console.log(printUsers('Михаил'));
// Установка значений параметров по умолчанию
function getNameTwo(firstname, lastname = "Петров") {
    return firstname + " " + lastname;
}
console.log(getNameTwo("Михаил"));
console.log(getNameTwo("Михаил", "Кохновец"));
function defaultLastName() {
    return "Smith";
}
function getNameThree(firstName, lastName = defaultLastName()) {
    return firstName + " " + lastName;
}
console.log(getNameThree("Tom")); // Tom Smith
// Функции
function funcWelcome() {
    console.log("Welcome");
}
let message = funcWelcome;
message();
function operation(a, b) {
    return a + b;
}
console.log(operation(2, 2));
let opnew = operation;
console.log(opnew(3, 3));
// Функции как параметры других функций
function sum(a, b) {
    return a + b;
}
function multiply(a, b) {
    return a * b;
}
function mathOp(x, y, op) {
    return op(x, y);
}
console.log(mathOp(10, 10, sum));
console.log(mathOp(10, 10, multiply));
function mathOpTwo(x, y, op) {
    return op(x, y);
}
let sumNew = function (x, y) { return x + y; };
let multiplyNew = function (x, y) { return x * y; };
console.log(mathOpTwo(10, 20, sumNew));
console.log(mathOpTwo(10, 20, multiplyNew));
// Стрелочные функции (в даннном случае в качестве аргумента функции идет стрелочная функция)
function mathOpThree(x, y, op) {
    return op(x, y);
}
console.log(mathOpThree(5, 5, (x, y) => x * y));
// Объединение union
let id;
id = 20;
console.log(id);
id = 'fgf20';
console.log(id);
function showId(id) {
    return 'Ваш id: ' + id;
}
console.log(showId(100));
console.log(showId('#100'));
function printSwntence(words) {
    if (typeof words !== 'string') {
        console.log(words.join(' '));
    }
    else {
        console.log(words);
    }
}
printSwntence('Збс язык TypeScript');
printSwntence(['Да', 'это', 'массив']);
// null and undefined
let usersID = null;
function checkId(id) {
    if (id != null) {
        console.log(`Пользователь с id: ${id} туть`);
    }
    else {
        console.log('Пользователь отсутствует');
    }
}
checkId(usersID);
usersID = 25;
checkId(usersID);
usersID = '#25';
checkId(usersID);
// Оператор ! позволяет указать, что объект не представляет значение null и undefined.
// const tom: User = new User("Михаил", "Кохновец");
// const header: HTMLElement | null = document.getElementById("header");
// header!.innerHTML = "Привет, " + tom.name + " " + tom.surname;
// Объекты
// ? - необязательные свойства
let user = { name: 'Mikhail', firstname: 'Kokhnovets', age: 22 };
console.log(user);
user = { name: 'Petr', firstname: 'Petrov' };
console.log(user);
if (user.age !== undefined) {
    console.log(user.age);
}
// Объекты в функциях
function print1(user) {
    return `My name is ${user.name}, i\`m ${user.age}`;
}
let users = { name: 'Петр', age: 120 };
console.log(print1(users));
// Объект как результат функции
function print2(user) {
    return { name: user.name, email: user.email };
}
let us = { name: '1', email: '1' };
let newprint2 = print2(us);
console.log(newprint2);
// Оператор in
let userInfo = { name: 'Mikhail', age: 40 };
let userInfoTwo = { name: 'Gleb' };
function printUser(user) {
    if ('age' in user) {
        console.log(`My name is ${user.name}, i\`m age is ${user.age}`);
    }
    else {
        console.log(`My name is ${user.name}`);
    }
}
printUser(userInfo);
printUser(userInfoTwo);
// Декомпозиция (декструктуризация) объектов-параметров
function printcar2({ name, email = 'none' }) {
    return `${name} ${email}`;
}
let car2 = { name: '10' };
console.log(printcar2(car2));
car2 = { name: '10', email: '10' };
console.log(printcar2(car2));
// Без параметра по умолчанию
// function printcar2({ name, email }: { name: string; email?: string }): string {
//   if (email) {
//     return `${name} ${email}`;
//   }
//   return name;
// }
// let car2: { name: string; email?: string } = { name: '10' };
// console.log(printcar2(car2));
// car2 = { name: '10', email: '10' };
// console.log(printcar2(car2));
function printCar({ name, model = '?' }) {
    console.log(`It\`s car ${name}, model: ${model}`);
}
let car = { name: 'BMW', model: 'X6' };
printCar(car);
car = { name: 'Lada' };
printCar(car);
let a = '10 тыщь';
console.log(a);
a = 10;
console.log(a);
let car_1 = { name: 'BMW' };
console.log(car_1);
let car_2 = { name: 'Lada', model: 'Kalina' };
console.log(car_2);
//Заимствование псесдонима (в данном случае carLada заимствует псевдоним у car):
let carLada = { name: 'Lada', model: 'X-Ray' };
console.log(carLada);
// Расширение псевдонима
let carTesla = { name: 'Tesla', model: 'X', year: 2021, price: `45000$` };
console.log(carTesla);
// Type assertion. Преобразование к типу. Два способа:
// const header = <HTMLElement>document.querySelector('#header');
// const header = document.querySelector('#header') as HTMLElement;
// Массивы:
let listStr = ['1', '2', '3', '4', '5'];
let listNum = [1, 2, 3, 4, 5];
let listAny = [1, '2', true, { name: '1', value: 2 }, ['1', 2, true]];
let listObj = [{ name: '1' }, { name: '1' }];
// ReadonlyArray - определение массивов, которые нельзя изменять
const people = ['1', '2']; // Массив доступен только для чтения
const people2 = [1, 2, 3];
// Декомпозиция массивов
let count = [1, 2, 3];
const [one, two, three] = count;
console.log(one);
console.log(two);
console.log(three);
// Оператор "...":
const people1 = ["Tom", "Bob", "Sam"];
const [first, ...rest] = people1;
console.log(first);
console.log(rest[0]);
console.log(rest[1]);
// Кортежи
// определение кортежа - кортеж состоит из двух элементов - строки и числа
let userTuples = ["Tom", 28];
// Кортежи в функциях и как результат функции
function azaza(us) {
    return `${us[0]} and ${us[1]}`;
}
console.log(azaza(['one', 1]));
const za = ['two', 2];
console.log(azaza(za));
function azaza1(name) {
    return [name];
}
console.log(azaza1('Михаил'));
const za1 = 'Василий';
console.log(azaza1(za1));
// Необязательные элементы кортежей: "?" после типа элемента (после обязательных эл-тов):
let tuplesBlaBla = ['1', 1];
console.log(tuplesBlaBla);
tuplesBlaBla = ['2', 2, '3'];
console.log(tuplesBlaBla);
// Заполнение кортежа:
let num = ['1', 2, 3, 4, 5, 6];
function printMarks(marks) {
    for (const mark of marks) {
        console.log(mark);
    }
}
let math = ["Math", 5, 4, 5, 4, 4];
let physics = ["Physics", 5, 5, 5];
printMarks(math);
printMarks(physics);
// В начале, в конце и в середине можно определять неопределенное кол-во эл-тов:
// let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
// let physics: [...number[], string] = [5, 5, 5, "Physics"];
// let chemistry: [string, ...number[], boolean] = ["Chemistry", 3, 3, 4, 5, false];
// Кортеж для чтения:
let readTuples = ['1', 1];
// Неопределенный набор параметров
// Классы:
// Если необходимо, чтобы функция принимала набор однотипных параметров,
// то используется знак многоточия, после которого идет массив:
function addNumbers(firstNumber, ...numberArray) {
    let result = firstNumber;
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i];
    }
    return result;
}
let num1 = addNumbers(3, 7, 8);
console.log(num1); // 18
let num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2); // 31
// class Users {
//   name: string = 'Default user';
//   age: number = 22;
//   constructor(_name: string, _age: number) {
//     this.name = _name;
//     this.age = _age;
//   }
//   print() {
//     console.log(this.name + ': ' + this.age);
//   }
//   toString() {
//     return `${this.name}: ${this.age}`;
//   }
// }
// let kokhnovets: Users = new Users('Мишка', 20);
// let kokhnovets1 = new Users('Мишка', 20);
// kokhnovets.print();
// console.log(kokhnovets.toString());
// let kokhnovets: Users = new Users();
// let kokhnovets1 = new Users();
// // kokhnovets.name = 'Kokhnovets';
// kokhnovets.name = "Tom";
// kokhnovets.age = 36;
// console.log(`name: ${kokhnovets.name}  age: ${kokhnovets.age}`);
// console.log(kokhnovets);
// Поля для чтения
// class User {
//     readonly name: string = "Default user";
//     age: number;
//     constructor(userName: string, userAge: number) {
//         this.name = userName;
//         this.age = userAge;
//     }
//     print(){
//         console.log(`name: ${this.name}  age: ${this.age}`);
//     }
// }
// Наследование
// class newUser extends Users {
//   company: string;
//   constructor(_name: string, _age: number, _company: string) {
//     super(_name, _age);
//     this.company = _company;
//   }
//   work(): void {
//     console.log(`My name is ${this.name}, i\`m ${this.age}, i\`m work company: ${this.company}`);
//   }
// }
// const newUs: newUser = new newUser('Mikhail', 20, 'Simpl');
// newUs.work();
// class Person {
//     name: string;
// }
// class Employee extends Person {
//     company: string;
//     constructor(name: string, company: string) {
//         super();    // вызов конструктора базового класса
//         this.name = name;
//         this.company = company;
//     }
//     work(): void {
//         console.log(`${this.name} работает в компании ${this.company}`);
//     }
// }
// let bob: Employee = new Employee("Bob", "Microsoft");
// bob.work();     // Bob работает в компании Microsoft
// Предопределение методов и конструктора:
class Us {
    name;
    age;
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    print() {
        console.log(`My name is ${this.name} and age is ${this.age}`);
    }
    printAge() {
        return `I\`m age ${this.age}`;
    }
}
// const usw: Us = new Us('Михаил', 22);
// usw.print();
// console.log(usw.printAge());
class newUs extends Us {
    company;
    constructor(_name, _age, _company) {
        super(_name, _age);
        this.company = _company;
    }
    print() {
        super.print();
        console.log(`My name is ${this.name} and age is ${this.age}, i\`m work ${this.company}`);
    }
    printAge() {
        return super.printAge();
    }
}
const newusw = new newUs('Mikhail', 40, 'Microsoft');
newusw.print();
console.log(newusw.printAge());
// Абстрактные классы
// abstract class Figure {
// // Абстрактные методы:
//   abstract getArea(): void;
// }
// class Rectangle extends Figure {
//   constructor(public x: number, public y: number) {
//     super();
//   }
//   getArea(): void {
//     let square = this.x * this.y;
//     console.log("area = ", square);
//   }
// }
// let someFigure: Figure = new Rectangle(30, 20);
// someFigure.getArea();
// console.log(someFigure.x);
// console.log(someFigure.y);
class Figure {
}
class Rectangle extends Figure {
    x;
    y;
    width;
    height;
    //x: number;
    //y: number;
    constructor(x, y, width, height) {
        super();
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
    getArea() {
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
let someFigure = new Rectangle(10, 10, 20, 25);
someFigure.getArea();
class Usr {
    id;
    name;
    age;
    constructor(userId, userName, userAge) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }
    getFullName(surname) {
        return this.name + " " + surname;
    }
}
let tom1 = new Usr(1, "Tom", 23);
console.log(tom1.getFullName("Simpson"));
// При этом объект tom является как объектом User, так и объектом IUser:
// let tom :IUser = new User(1, "Tom", 23);
// //или
// let tom :User = new User(1, "Tom", 23);
// Расширение интерфейса
// interface IUser {
//     id: number;
//     name: string;
// }
// interface IUser{
//     age: number;
// }
// let employee: IUser = {
//     id: 1,
//     name: "Alice",
//     age: 31
// }
// function printUser(user: IUser): void {
//     console.log(`id: ${user.id}  name: ${user.name}  age: ${user.age}`);
// }
// printUser(employee);
// Наследование интерфейсов
// interface IMovable {
//     speed: number;
//     move(): void;
// }
// interface ICar extends IMovable {
//     fill(): void;
// }
// class Car implements ICar {
//     speed: number;
//     move(): void {
//         console.log("Машина едет со скоростью " + this.speed + " км/ч");
//     }
//     fill(): void {
//         console.log("Заправляем машину топливом");
//     }
// }
// let auto = new Car();
// auto.speed = 60;
// auto.fill();
// auto.move();
// Интерфейсы функций
// interface FullNameBuilder {
//     (name: string, surname: string): string;
// }
// let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
//         return "Mr. " + name + " " + surname;
// }
// let fullName = simpleBuilder("Bob", "Simpson");
// console.log(fullName); // Mr. Bob Simpson
// Интерфейсы массивов
// interface StringArray {
//     [index: number]: string;
// }
// let phones: StringArray;
// phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
// let myPhone: string = phones[0];
// console.log(myPhone);
// interface Dictionary {
//     [index: string]: string;
// }
// var colors: Dictionary = {};
// colors["red"] = "#ff0000";
// colors["green"] = "#00ff00";
// colors["blue"] = "#0000ff";
// console.log(colors["red"]);
// Гибридные интерфейсы
// interface PersonInfo {
//     (name: string, surname: string):void;
//     fullName: string;
//     password: string;
//     authenticate(): void;
// }
// function personBuilder(): PersonInfo {
//     let person = <PersonInfo>function (name: string, surname: string): void{
//         person.fullName = name + " " + surname;
//     };
//     person.authenticate = function () {
//         console.log(person.fullName + " входит в систему с паролем " + person.password);
//     };
//     return person;
// }
// let tom = personBuilder();
// tom("Tom", "Simpson");
// tom.password = "qwerty";
// tom.authenticate();
// Преобразование типов:
class Person {
    name;
    constructor(userName) {
        this.name = userName;
    }
}
class Employee extends Person {
    company;
    constructor(userName, company) {
        super(userName);
        this.company = company;
    }
}
function printPerson(user) {
    console.log(`Person ${user.name}`);
}
function personFactory(userName) {
    return new Employee(userName, "не установлено");
}
let tom2 = new Employee("Tom", "Microsoft");
printPerson(tom2);
let bob = personFactory("Bob");
printPerson(bob);
