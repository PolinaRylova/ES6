'use strict';

// Синтаксис объявлениея класса
// на самом деле это синтаксический сахар, а не классы в их классическом представлении
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

let point = new Point(2, 1); // создание экземпляра класса
console.log( point.toString() ); // (2, 1)

// Синтаксис наследования

// создаём класс ColorPoint, который наследуем от класса Point
class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); // вызываем конструктор родителя
    this.color = color;
  }
  toString() {
    // сначала вызываем метод .toString родителя, затем передаём значение для потомка
    return `${super.toString()} in ${this.color}`;
  }
}

let colorPoint = new ColorPoint(4, 2, 'red'); // создание экземпляра класса
console.log( colorPoint.toString() ); // (4, 2) in red

// проверяем принадлежность классу с помощью оператора instanceof
console.log(colorPoint instanceof ColorPoint); // true
console.log(colorPoint instanceof Point); // true, т.к ColorPoint - наследник Point

// У классов ES6 есть Статические методы
// как правило, они используются для операций, которые не требуют наличия объекта
// не меняются в зависимости от экземпляра объекта
class Button {
  static getElementType() {
    return 'button';
  }
  constructor(name) {
    this.color = color;
  }
  click() {
    console.log('Button clicked!');
  }
}

// такие методы являются свойствами класса и вызываются просто через точку
console.log( Button.getElementType() ); // button

// Доступны геттеры и сеттеры
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // геттер - получаем имя при вызове fullName без параметров
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // сеттер - устанавливаем новое имя при вызове fullName с присваиванием
  set fullName(newValue) {
    [this.firstName, this.lastName] = newValue.split(' '); // используем деструктуризацию и динамическое вычисление значений
  }
}

let user = new User('Георгий', 'Победоносец');
console.log( user.fullName ); // Георгий Победоносец

user.fullName = 'Иван Петров';
console.log( user.fullName ); // Иван Петров