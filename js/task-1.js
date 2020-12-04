// Напиши функцию-конструктор Account, которая создает объект со свойствами login и email. В prototype функции-конструктора добавь метод getInfo(), который выводит в консоль значения полей login и email объекта который его вызвал.

// const Account = function (login, email) {
//   this.login = login;
//   this.email = email;
// }; // Створив функцію

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`);
// };
// // Присвоїв до функції конструктор - прототип

// const mango = new Account('Mangozedog', 'mango@dog.woof');
// // Створив новий об*єкт використовуючи функію конструктор

// console.log(mango); // obj
// console.dir(Account); // function
// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account('Poly', 'poly@mail.com');
// poly.getInfo(); // Login: Poly, Email: poly@mail.com

//===============================//
// Object create
// const animal = { eats: true };
// // const dog = { barks: true };
// const dog = Object.create(animal);
// const cat = Object.create(animal);
// console.log(cat);
// dog.barks = true;
// console.log(dog);
// console.log(dog.barks);
// console.log(dog.eats);
// // dog.eats = false;
// console.log(dog.eats);

// for (const key in dog) {
//   console.log(key);
// }

// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key);
// }

// const Guest = function (name, room) {
//   this.name = name;
//   this.room = room;
// };
// console.dir(Guest);

// Guest.prototype.showGuestInfo = function () {
//   console.log(`Name: ${this.name}, room: ${this.room}`);
// };
// console.dir(Guest);
// //=====================================//

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainedXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const mango = new Hero('mango', 1000);
// mango.gainedXp(2000);
// console.log(mango);

// const Warrior = function (name, xp, weapon) {
//   Hero.call(this, name, xp);
//   // add weapon
//   this.weapon = weapon;
// };

// console.dir(Hero);
// console.dir(Warrior);

// Warrior.prototype = Object.create(Hero.prototype); // Якщо змінити місцями помилка
// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };
// Warrior.prototype.constructor = Warrior; //

// const poly = new Warrior('poly', 800, 'knife');
// // poly.gainedXp(200);

// poly.attack();

//====================================/
// const animal = { eat: true };
// const dog = { barks: true };
// dog.__proto__ = animal;
// console.log(dog);

const Guest = function (name, room) {
  this.name = name;
  this.room = room;
};

console.dir(Guest);
console.log(Guest.prototype); // {constructor: ƒ}
Guest.prototype.sayHi = function () {
  return `${this.name} says good bye!`;
};

const poly = new Guest('poly', 1);
const chan = new Guest('chan', 5);
console.dir(poly);
console.dir(chan);
console.log(chan.sayHi());
