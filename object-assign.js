'use strict';

// Метод Object.assign(target, ...sources) используется для копирования значений
// всех перечисляемых свойств из одного или более исходных объектов
// в целевой объект.
// После копирования он возвращает целевой объект.

let obj1 = {a: 1};
let obj2 = {b: 2};
let obj3 = {c: 3};

let obj = Object.assign({}, obj1, obj2, obj3);
console.log('obj = ' + JSON.stringify(obj)); // копируем поля трёх объектов в новый объект, ссылку на который сохраняем в obj
// при этом исходные объекты остаются неизменными

let newObj = Object.assign(obj1, obj2, obj3);
console.log('newObj = ' + JSON.stringify(newObj)); // копируем поля 2-го и 3-го объектов в 1-ый, затем сохраняем ссылку на него в newObj
console.log('obj1 = ' + JSON.stringify(obj1)); // но при такой реализации меняется объект obj1
