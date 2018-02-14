'use strict';

// новые возможности работы со строками
// строки можно использовать со скошенными кавычками ``
// с их помощью, можно писать многострочные строки
{
  console.log(`This
        is
        multiline
        string`);
  // это аналогично записи console.log("This\nis\nmultiline\nstring");
}

// а с помощью ${} использовать переменные внутри них
{
  let name = 'Katya';

  console.log(`Hello, ${name}!`); // Hello, Katya!
}

{
  let a = 2;
  let b = 5;

  // также можно вставлять вычисляемые значения
  console.log(`${a} + ${b} = ${a + b}`); // 2 + 5 = 7
}