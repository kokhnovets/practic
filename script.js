'use strict';

// let admin, name;
// name = 'Джон';
// admin = name;
// alert(admin);

// let name = "Ilya";

// alert( `hello ${1}` ); //  'hello 1'

// alert( `hello ${"name"}` ); // 'hello name'

// alert(`hello ${name}`); // hello Ilya

// const userName = prompt('Имя?', '');
// alert(userName);

// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1


// let a = 2;

// let x = 1 + (a *= 2); // 5

// "" + 1 + 0 // '10'
// "" - 1 + 0 // -1
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // 9px
// "$" + 4 + 5 // $45
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 //' -9 5'
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

// let a = +prompt("Первое число?", 1);
// let b = +prompt("Второе число?", 2);

// alert(a + b); // 12

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // fasle
// null == "\n0\n" // false
// null === +"\n0\n" // false

// if ("0") {  - да, выведется
//   alert( 'Привет' );
// }

// const questionJS = prompt('Какое «официальное» название JavaScript?', '');

// (questionJS == 'ECMAScript') ? alert('Верно!') : alert('Не знаете? "ECMAScript"!');

// const a = +prompt('Число?');

// (a > 0) ? alert(1) : (a < 0) ? alert(-1) : alert(0);

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message = (login == 'Сотрудник') ? 'Привет' :
//     (login == 'Директор') ? 'Здравствуйте' :
//     (login == '') ? 'Нет логина' : '';

// alert(null || 2 || undefined); // 2

// alert(alert(1) || 2 || alert(3)); // 2

// alert(1 && null && 2); // null

// alert(alert(1) && alert(2)); // undefined



// alert( null || 2 && 3 || 4 ); // 3

// let age;
// // if (age >= 14 && age <= 90) {}

// if (!(age >= 14 && age <= 90)) {}

// if (-1 || 0) alert( 'first' ); // true
// if (-1 && 0) alert( 'second' ); // false
// if (null || -1 && 1) alert( 'third' ); // true

// let userName = prompt('Кто там?');

// if (userName == 'Админ') {
//     let password = prompt('Пароль?');
//     if (password == 'Я Главный') {
//         alert('Здравствуйте!');
//     } else if (password == '' || password == null) {
//         alert('Отменено!');
//     } else alert('Неверный пароль!');
// } else if (userName == '' || userName == null) {
//     alert('Отменено!');
// } else alert('Я вас не знаю');

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) console.log(i);
// }

// let i = 0;
// while (i < 3) {
//     alert(`number ${i}!`);
//     i++;
// }


// реализация через способ for():
// for (let i = 0; i <= 1; i++) {
//     let promptNum = prompt('Введите число', '');

//     if (promptNum > 100 || promptNum === null) break;
//     else i--;
// }

// реализация через способ do.. while():

// do {
//     let promptNum = prompt('Введите число', '');
// } while (promptNum < 100 && promptNum || promptNum === null);

// реализация через способ while():

// let i = 0;
// while (i < 1) {
//     let promptNum = prompt('Введите число', '');
//     if (promptNum > 100 || promptNum === null) break;
//     else i--;
// }

// let n = 10;

// next: for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue next;
//     }
//     alert(i);
// }

// let browser = prompt('', '');
// (browser == 'Edge') ? alert("You've got the Edge!") :
//     (browser == 'Chrome' || browser == 'Firefox' ||
//     browser == 'Safari' || browser == 'Opera') ? alert('Okay we support these browsers too') :
//     alert('We hope that this page looks ok!');

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     default:
//         alert('Вы ввели не число');
// }

// function checkAge(age) {
//     return (age > 18) ? true : confirm('Родители разрешили?');
// }


// function checkAge(age) {
//     return (age > 18) || confirm('Родители разрешили?');
// }
// checkAge(prompt('', ''));

// function min(a, b) {
//     if (a < b) return a;
//     else b;
// }
// alert(min(2, 5));

// через рекурсию:
// function pow(x, n) {
//     if (n == 1) return x;
//     else return x * pow(x, n - 1);
// }
// alert(pow(2, 5));

// через цикл:
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// alert(pow(2, 5));

// const ask = (question, yes, no) => {
//     if (confirm(question)) yes();
//     else no();
// };
// ask(
//     "Вы согласны?",
//     () => alert("Вы согласились."),
//     () => alert("Вы отменили выполнение.")
// );

// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;

// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// alert( isEmpty(schedule) );

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) );

// const user = {
//     name: "John"
// };

// это будет работать? Да!
// user.name = "Pete";

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };

// let sumTotal = 0;
// for (let key in salaries) {
//     sumTotal += salaries[key];
// }
// alert(sumTotal);

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }
// multiplyNumeric(menu);
// console.log(menu);

// const calculator = {
//     read() {
//         this.a = +prompt('a?', '');
//         this.b = +prompt('b?', '');

//     },
//     sum() {
//         return this.a + this.b;
//     },
//     mul() {
//         return this.a * this.b;
//     }
// }
// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() {
//         alert( this.step );
//     }
// };
// ladder.up().up().down().showStep().down().showStep(); // return this возвращается к объекту

// function Calculator() {
//     this.read = function() {
//         this.a = +prompt('a?', '');
//         this.b = +prompt('b?', '');
//     };
//     this.sum = function() {
//         return this.a + this.b;
//     };
//     this.mul = function() {
//         return this.a * this.b;
//     };
// }
// let calculator = new Calculator();
// calculator.read();

// alert("Sum=" + calculator.sum());
// alert("Mul=" + calculator.mul());

// function Accumulator(startingValue) {
//     this.value = startingValue;
//     this.read = function () {
//         return this.value += +prompt('?', '20');
//     };
// }
// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read();
// accumulator.read();
// alert(accumulator.value);

// const a = +prompt('a?', '');
// const b = +prompt('b?', '');
// let sum = a + b;
// alert(sum.toFixed(2));

// alert(Math.round(6.35 * 10) / 10);

// function readNumber() {
//     let num;
//     do {
//         num = prompt('?', ' ');
//     } while (!isFinite(num));

//     if (num === null || num === '') return null;

//     return +num;
// }
// readNumber();


// Задача не решена
// function random(a, b) {
//     return a + Math.random() * (b - a);
// }
// alert(random(1, 5));
// function randomInteger(a, b) {
//     return
// }

// function ucFirst(str) {
//     return str = str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst("миша"));

// function checkSpam(str) {
//     let strNew = str.toLowerCase();
//
//     return strNew.includes('viagra') || strNew.includes('xxx');
// }
// alert(checkSpam('buy ViAgRA now'));

// function trucnate(str, maxLength) {
//     if (str.length > maxLength) {
//         return str.slice(0, maxLength) + '...';
//     }
//     return str;
// }
// alert(trucnate("Вот, что мне хотелось бы сказать на эту тему:", 21));

// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }
// alert( extractCurrencyValue('$120') === 120 );

// Задачки с ?. (самостоятельно):
// const key = 'name';
// let  x = 0;
// const user = {
//     address: {
//         street: {
//             name: 'simpl'}
//     },
//     sayHi(a) {
//         return alert(++a);
//     }
// };
// console.log(user.sayHi?.(x));
// console.log(user.address?.street?.name);
// console.log(user.address?.street?.['name']);
// delete user.address?.street?.name;
// console.log(user);

//Массивы:
// const styles = ['Джаз', 'Блюз'];

// styles.push('Рок-н-ролл');
// styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// function sumInput() {
//     let arr = [];
//     let result = 0;
//     let a;
//     do {
//         a = prompt('Введите значение', '');
//         if (a == null || a == '' || isNaN(a)) break;
//         arr.push(+a);
//     } while (true);
//     for (let item of arr) {
//         result += item;
//     }
//     return result;
// }
// alert(sumInput());

// function camelize(str) {
//     return str.split('-').map((item, i) => {
//         if (i == 0) {
//             return item;
//         } else {
//             return item[0].toUpperCase() + item.slice(1);
//         }
//     }).join('');
// }
// camelize("background-color");
// camelize("list-style-image");

// function camelize(str) {
//     return str.split('-').map((item, i) => (i == 0) ? item : item[0].toUpperCase() + item.slice(1)).join('');
// }
// camelize("background-color");

// function filterRange(arr, a, b) {
//     return arr.filter(item => (item >= a && item <= b));
// }
// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);
// alert( filtered );
// alert( arr );

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr[i].splice(i, 1);
//             i--;
//         }
//     }
// }
// let arr = [5, 3, 8, 1];

// function unique(arr) {
//     return Array.from(new Set(arr));
// }

// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"];

// alert( unique(values) ); // Hare,Krishna,:-O

// function count(obj) {
//     return Object.keys(obj).length;
// }
// let user = {
//   name: 'John',
//   age: 30
// };

// alert( count(user) ); // 2

// Декструризация объекта и массивов:
// let user = {
//   name: "John",
//   years: 30
// };
// let { name, years: age, isAdmin = false } = user;
// console.log(name);
// console.log(age);
// console.log(isAdmin);

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };
// function topSalary(obj) {
//     let max = 0;
//     let maxName = null;
//     for (let [key, value] of Object.entries(obj)) {
//         if (max < value) {
//             max = value;
//             maxName = key;
//         }
//     }
//     return maxName;
// }
// console.log(topSalary(salaries));

// let user = {
//   name: "Василий Иванович",
//   age: 35
// };
// let json = JSON.stringify(user);
// let newObjectUser = JSON.parse(json);
// console.log(newObjectUser);
// newObjectUser.skills = 'junior';
// console.log(newObjectUser);

//Рекурсия:
// function sumTo(n) {
//     if (n == 1) {
//         return n;
//     } else {
//         return n + sumTo(n - 1);
//     }
// }
// sumTo(100);

//Через цикл:
// function sumTo(n) {
//     let result = 0;
//     for (let i = 1; i <= n; i++) {
//         result += i
//     }
//     return result;
// }
// sumTo(100);

// function sumTo(n) {
//   return n * (n + 1) / 2;
// }

// alert( sumTo(100) );

// function factorial(n) {
//     if (n == 1) return n;
//     else return n * factorial(n - 1);
// }
// alert( factorial(10) );

// function sum(a) {
//     return function(b) {
//         return a + b;
//     }
// }
// sum(1)(2);
// sum(5)(-1)

// function printNumbers(from, to) {
//     let current = from;
//     let timeId = setInterval(function() {
//         console.log(current);
//         if(current == to) {
//             clearInterval(timeId);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(5, 10);

// function printNumbers(from, to) {
//     let current = from;
//     let timeId = setTimeout(function go() {
//         console.log(current);
//         if(current < to) {
//             setTimeout(go, 1000);
//         }
//         current++;
//     }, 1000);
// }
// printNumbers(5, 10);

//Прототипное наследование
// let heade = {
//     glasses: 1
// };

// let table = {
//     pen: 3,
//     __proto__: heade
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: table
// };

// let pockets = {
//     money: 2000,
//     __proto__: bed
// };
// console.log(pockets.pen);