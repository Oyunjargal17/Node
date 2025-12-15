// Даалгавар 2: Greeting модуль
// Зорилго
// Функц параметр авч ажилладгийг ойлгох.
// Алхам
// greeting.js файл үүсгэнэ
// sayHello(name) функц бичнэ
// Дараах текст буцаана:
// Функцийг экспортлоно
// app.js-д ашиглана
// Жишээ гаралт
// Сайн байна уу, Бат
const sayHello = (name) => {
  return `sain bna uu? ${name}`;
};

module.exports = {
  sayHello: sayHello,
};
