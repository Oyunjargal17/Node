// Даалгавар 4: Text utils модуль
// Зорилго
// Текст дээр ажилладаг функцтэй модуль үүсгэх.
// Алхам
// textUtils.js файл үүсгэнэ
// Дараах функцууд бичнэ:
// toUpper(text) – том үсэг болгох
// textLength(text) – уртыг буцаах
// Экспортлоно
// app.js-д ашиглана
const toUpper = (text) => {
  return text.toUpperCase();
};
const textLength = (text) => {
  return text.length;
};
// console.log(toUpper("hello world"));
// console.log(textLength("hello world"));
module.exports = {
  toUpper: toUpper,
  textLength: textLength,
};
