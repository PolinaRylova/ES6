'use strict';

// в ES6 появилась возможность указывать значение аргументов по умолчанию
// указывается после аргумента через равно
// если функция вызывается без параметров, то подставится значение по умолчанию
{
  let sayHello = function(name = 'Everyone') {
    console.log(`Hello ${name}!`);
  };

  sayHello(); // Hello Everyone!
  sayHello('Vasya'); // Hello Vasya!
}

// в параметрах по умолчанию могут использоваться не только значения,
// но и какие-либо выражения, н-р вызов функции:
{
  let getDefaultName = () => 'Noname';

  let sayHello = function( name = getDefaultName() ) {
    console.log(`Hello ${name}`);
  };

  sayHello();
  sayHello('Vasya');
}

// для аргументов функции можно использовать spread оператор
{
  // вместо аргумента мы пишем три точки и имя переменной и тогда
  // все переданные аргументы будут записаны в массив people
  let sayHello = function(...people) {
    console.log(`Hello ${people.join(', ')}!`);
  };
  // в отличие от ...args, это будет полноценный массив, со всеми методами, доступными на массивах
  // поэтому мы сможем применить метод .join
  sayHello('Katya', 'Vasya', 'Andrew'); // Hello Katya, Vasya, Andrew
}

// также мы можем получить первое значение, а все оставшиеся поместить в массив
{
  let sayHello = function(firstPerson, ...people) {
    console.log(`Hello ${firstPerson} and ${people.join(', ')}!`);
  };

  sayHello('Polina', 'Vasya', 'Ivan');
}
// NB: данный оператор забирает все оставшиеся аргументы, поэтому всегда должен быть последним!

// также spread можно использовать при вызове функции
{
  let numbers = [1, 5, 7, 10, 3, 9, 16];
  let max = Math.max(...numbers); // находим максимальное из массива numbers

  console.log(max); // 16
}

// использование параметров по умолчанияю и деструктуризации для аргументов функции
{
  // если функция получает на входе объект, можно тут же разбить его на переменные
  // и при необходимости присвоить им значения по умолчанию
  let describePerson = function({ name = 'Noname', age = 0, city = 'Nowhere'}) {
    console.log(`Hello from ${city}! My name is ${name}, I am ${age} years old.`)
  };

  let me = {
    name: 'Polina',
    age: 29
  };

  // при вызове функции в передаваемом объекте не указали поле city, поэтому получили в результате значение по умолчанию
  describePerson(me); // Hello from Nowhere! My name is Katya, I am 20 years old.
}