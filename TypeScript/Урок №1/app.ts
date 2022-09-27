class User {
  name: string;
  surname: string;
  constructor(_name: string, _surname: string) {
    this.name = _name;
    this.surname = _surname;
  }
}
const tom: User = new User("Михаил", "Кохновец");
const header: HTMLElement | null = document.getElementById("header");
header!.innerHTML = "Привет, " + tom.name + " " + tom.surname;

let x = 10;
console.log(x); // 10

var y = 20;
console.log(y); // 20

const t = 50;
console.log(t); // 50

let isEnabled: boolean = true;
let isAlive: boolean = false;

console.log(isEnabled);
console.log(isAlive);

let firstname: string = "Михаил";
let lastname: string = "Кохновец";
let age: number = 22;
let fullname: string = `Меня звать ${name} ${lastname}, мне ${age}`;
const someArray: any[] = [24, "Tom", false];

// function sum(a: number, b: number) {
//   return a + b;
// }
console.log(sum(10, 5));

let koef: number = 1.5;

function add(a: number) {
  let result = a * koef;
  console.log(result);
}

console.log(add(20)); // 30
console.log(add(10)); //15
// тип nuтmber - возвращает значение number (со строками также)
function ads(a: number, b: number): number {
  return a + b;
}
let result = ads(1, 20);
console.log(result);

// тип void - ничего не возвращает
function adds(a: number, b: number): void {
  console.log(a + b);
}

adds(10, 20);

function addd(a: number, b: number) {
  return a + b;
}
let resultat = addd(10, 20);
console.log(resultat);
// Необязательные параметры функции устанавливаются через a?: type
function getName(firstname: string, lastname?: string): string {
  if (lastname) {
    return firstname + " " + lastname;
  } else {
    return firstname;
  }
}
console.log(getName("Михаил"));
console.log(getName("Михаил", "Кохновец"));

// Установка значений параметров по умолчанию
function getNameTwo(firstname: string, lastname: string = "Петров") {
  return firstname + " " + lastname;
}
console.log(getNameTwo("Михаил"));
console.log(getNameTwo("Михаил", "Кохновец"));

function defaultLastName(): string {
  return "Smith";
}

function getNameThree(firstName: string, lastName: string = defaultLastName()) {
  return firstName + " " + lastName;
}
console.log(getNameThree("Tom")); // Tom Smith

// Функции

function funcWelcome() {
    console.log("Welcome");
}
let message: () => void = funcWelcome;
message();
function operation(a: number, b: number): number {
    return a + b;
}
console.log(operation(2, 2));
let opnew: (a: number, b: number) => number = operation;
console.log(opnew(3, 3));

// Функции как параметры других функций
function sum(a: number, b: number): number {
    return a + b;
}
function multiply(a: number, b: number): number {
    return a * b;
}
function mathOp(x: number, y: number, op: (a: number, b: number) => number): number {
    return op(x, y);
}

console.log(mathOp(10, 10, sum));
console.log(mathOp(10, 10, multiply));

type Operation = (x: number, y: number) => number;
function mathOpTwo(x: number, y: number, op: Operation): number {
    return op(x, y);
}
let sumNew: Operation = function (x: number, y: number): number { return x + y };
let multiplyNew: Operation = function (x: number, y: number): number { return x * y };
console.log(mathOpTwo(10, 20, sumNew));
console.log(mathOpTwo(10, 20, multiplyNew));

function mathOpThree(x: number, y: number, op: (a: number, b: number) => number): number {
    return op(x, y);
}
console.log(mathOpThree(5, 5, (x, y) => x * y));

// Объединение union

let id: number | string;
id = 20;
console.log(id);
id = 'fgf20';
console.log(id);

function showId(id: number | string) {
    return 'Ваш id: ' + id;
}
console.log(showId(100));
console.log(showId('#100'));

function printSwntence(words: string | string[]) {
    if (typeof words !== 'string') {
        console.log(words.join(' '));
    } else {
        console.log(words);
    }
}
printSwntence('Збс язык TypeScript');
printSwntence(['Да', 'это', 'массив']);

// null and undefined

let usersID: number | string | null = null;
function checkId(id: number | string | null) {
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
let user: {name: string, firstname: string, age?: number} = { name: 'Mikhail', firstname: 'Kokhnovets', age: 22 };
console.log(user);
user = { name: 'Petr', firstname: 'Petrov' };
// console.log(user.age);
console.log(user);
if (user.age !== undefined) {
    console.log(user.age);
}
// Оператор in
let userInfo: { name: string; age?: number } = { name: 'Mikhail', age: 40 };
let userInfoTwo: { name: string; age?: number } = { name: 'Gleb' };

function printUser(user: {name: string; age?: number }) {
    if ('age' in user) {
        console.log(`My name is ${user.name}, i\`m age is ${user.age}`);
    } else {
        console.log(`My name is ${user.name}`);
    }
}
printUser(userInfo);
printUser(userInfoTwo);

// Декомпозиция объектов-параметров

function printCar({ name, model  = '?'}: { name: string, model?: string }) {
    return console.log(`It\`s car ${name}, model: ${model}`);
}
let car: { name: string; model?: string } = { name: 'BMW', model: 'X6' };
printCar(car);
car = { name: 'Lada' };
printCar(car);

// Псевдонимы типов

type car = { name: string; model?: string };
let car_1: car = { name: 'BMW' };
console.log(car_1);
let car_2: car = { name: 'Lada', model: 'Kalina' };
console.log(car_2);

// Заимствование и расширение псевдонимов

type additional = car & { year?: number; price?: string };
//Заимствование псесдонима (в данном случае carLada заимствует псевдоним у car):
let carLada: additional = { name: 'Lada', model: 'X-Ray' };
console.log(carLada);
// Расширение псевдонима
let carTesla: additional = { name: 'Tesla', model: 'X', year: 2021, price: `45000$` };
console.log(carTesla);

// Type assertion. Преобразование к типу. Два способа:

// const header = <HTMLElement>document.querySelector('#header');

// const header = document.querySelector('#header') as HTMLElement;


