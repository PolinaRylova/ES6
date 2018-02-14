'use strict';
// arrow-functions - новый сокращенный синтаксис объявления функций

// короткая запись функций с одним аргументом
{
  let inc = x => x+1;
  // объявляем функцию, которая в качестве аргумента принимает x и возвращает x+1
  // Аналогично let inc = function(x) { return x + 1; };

  console.log( inc(1) ); // 2
}

// если нужно передать несколько аргументов,
// то они записываются в круглых скобках
{
  let sum = (a, b) => a + b;
  // Аналогично let inc = function(a, b) { return a + b; };

  console.log( sum(5, 2) ); // 7
}

// при отсутствии аргументов записываются пустые скобки
{
  let sayHello = () => 'Hello!';
  // Аналогично let sayHello = function() { return 'Hello!'; };

  console.log( sayHello() ); // Hello!
}

// если тело функции достаточно большое, то заключаем его в фигурные скобки
{
  let sayHello = () => {
    let name = 'Katya';
    // в многосточном теле функции обязательно использовать
    // ключевое слово return для возвращаемого значения
    return `Hello, ${name}!`;
  };

  console.log( sayHello() ); // Hello, Katya!
}

// очень удобно использовать стрелочные функции в качестве callback
{
  let a = [
    "Hydrogen",
    "Helium",
    "Lithium",
    "Beryl­lium"
  ];

  let a2 = a.map( s => s.length );
  // Аналогично let a2 = a.map(function(s){ return s.length });
}

// важное преимущество стрелочных функций - они сохраняют контекст
// c ES5 для использования родительского контекста
// приходилось записывать ссылку на него в переменную

  function Person1() {
    // записываем контекст в переменную, чтобы
    // он был доступен внутри вложенных функций
    let self = this;
    self.age = 0;

    let life = setInterval(function growUp() {
      self.age++;
    }, 100);

    self.die = function() {
      clearInterval(life);
    };
  }

  let person = new Person1();
  console.log('Person1', person.age); // 0

  setTimeout(() => {
    console.log('Person1', person.age); // 9
    person.die();
  }, 1000);


// в ES6 уже такой необходимости нет

  function Person2() {
    this.age = 0;

    let life = setInterval(() => {
      this.age++;
    }, 100);

    this.die = () => {
      clearInterval(life);
    };
  }

  let person2 = new Person2();
  console.log('Person2', person2.age); // 0

  setTimeout(() => {
    console.log('Person2', person2.age); // 9
    person2.die();
  }, 1000);
