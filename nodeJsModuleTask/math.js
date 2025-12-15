// Даалгавар 1: Math модуль
// Зорилго
// Өөрийн модуль үүсгэж, өөр файлд ашиглах.
// Алхам
// math.js файл үүсгэнэ
// Дараах функцууд бичнэ:
// add(a, b) – нэмэх
// subtract(a, b) – хасах
// module.exports ашиглан гаргана
// app.js-д require ашиглан дуудна
// Үр дүнг консолд хэвлэнэ
let a, b;
const add = (a, b) => {
  return a + b;
};
const subtract = (a, b) => {
  return a - b;
};
// console.log(add(3, 5));
module.exports = {
  add: add,
  subtract: subtract,
};
