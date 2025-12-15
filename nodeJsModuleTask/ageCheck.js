// Даалгавар 5: Age checker модуль
// Зорилго
// Бодит амьдралын жишээгээр модуль хийх.
// Алхам
// ageCheck.js файл үүсгэнэ
// isAdult(age) функц бичнэ
// 18-аас дээш бол "Насанд хүрсэн", доош бол "Хүүхэд" гэж буцаана
// Экспортлоно
// app.js-д ашиглана
// Жишээ гаралт
// Насанд хүрсэн
const isAdult = (age) => {
  if (age > 18) {
    return "Nasand hursen";
  } else {
    return "Huuhed";
  }
};
// console.log(isAdult(16));
module.exports = {
  isAdult: isAdult,
};
