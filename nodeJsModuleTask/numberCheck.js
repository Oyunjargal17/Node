// Даалгавар 3: Number checker модуль
// Зорилго
// Нөхцөл шалгах логик (if) бүхий модуль хийх.
// Алхам
// numberCheck.js файл үүсгэнэ
// isEven(number) функц бичнэ
// Тэгш бол true, сондгой бол false буцаана
// Функцийг экспортлоно
// app.js-д шалгаж хэвлэнэ
const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
};
module.exports = {
  isEven: isEven,
};
