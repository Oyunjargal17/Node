// Даалгавар 1: Файл үүсгэж, текст бичих
// Зорилго
// fs модулийг ашиглаж энгийн файл үүсгэж сурах.
// Алхам
// message.txt файл үүсгэнэ
// "Сайн байна уу, Node.js!" гэсэн текст бичнэ
// fs.writeFile ашиглана
// Консолд "Файл амжилттай үүсгэгдлээ" гэж хэвлэнэ

const { error } = require("console");
const fs = require("fs");
// fs.mkdir("./bodlogo", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder amjilttai uusgegdlee");
//   }
// });

// const data = "sain bna uu? Node.js!";
// fs.writeFile("./bodlogo/message.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File amjilttai uusgegdlee");
//   }
//   fs.readFile("./bodlogo/message.txt", { encoding: "utf-8" }, (err, data) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("File amjiltta neegdlee: End tanii bichsen text bna");
//       console.log(data);
//     }
//     const text = "\nUnuudur saihan udur bna.";
//     fs.appendFile("./bodlogo/message.txt", text, "utf-8", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("File amjilttai nemegdlee");
//         console.log(text);
//       }
//       fs.readFile("./bodlogo/message.txt", "utf-8", (err, data) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("Filiin aguulga ni:");
//           console.log(data);
//         }

//         fs.unlink("./bodlogo/message.txt", (err) => {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("File amjilttai ustlaa");
//             // console.log(data);
//           }
//         });
//       });
//     });
//   });
// });

// Даалгавар 2: Файл унших
// Зорилго
// Файлын агуулгыг уншиж сурах.
// Алхам
// message.txt файлыг уншина
// fs.readFile ашиглана
// Агуулгыг консолд хэвлэнэ
// Жишээ гаралт
// Сайн байна уу, Node.js!

// fs.readFile("./bodlogo/message.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File amjiltta neegdlee: End tanii bichsen text bna");
//     console.log(data);
//   }
// });

// Даалгавар 3: Файлд нэмэлт текст бичих
// Зорилго
// Одоо байгаа файлд текст нэмэх (append) үйлдлийг сурах.
// Алхам
// message.txt файлыг ашиглана
// "Өнөөдөр сайхан өдөр." гэсэн текст нэмнэ
// fs.appendFile ашиглана
// Файлыг уншиж консолд хэвлэнэ

// const text = "\nUnuudur saihan udur bna.";
// fs.appendFile("./bodlogo/message.txt", text, "utf-8", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File amjilttai nemegdlee");
//     console.log(text);
//   }
// });

// fs.readFile("./bodlogo/message.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Filiin aguulga ni:");
//     console.log(data);
//   }
// });

// Даалгавар 4: Файл устгах
// Зорилго
// Файл устгах үйлдлийг сурах.
// Алхам
// message.txt файлыг устгана
// fs.unlink ашиглана
// Консолд "Файл устлаа" гэж хэвлэнэ

// fs.unlink("./bodlogo/message.txt", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("File amjilttai ustlaa");
//     // console.log(data);
//   }
// });

// Даалгавар 5: Хавтас үүсгэж, файл дотор нь текст бичих
// Зорилго
// Фолдер ба файлын бүтэцтэй ажиллах.
// Алхам
// data нэртэй хавтас үүсгэнэ
// data/info.txt файлыг үүсгэн "Энэ бол өгөгдөл" гэж бичнэ
// fs.mkdir болон fs.writeFile ашиглана
// Консолд "Хавтас болон файл амжилттай үүсгэгдлээ" гэж хэвлэнэ

// fs.mkdir("./data", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Folder amjilttai uuslee");
//     console.log(data);
//   }
// });

// const data = "Ene bol ugugdul";
// fs.writeFile("./data/info.txt", data, (err) => {
//   if (err) {
//     console.log(err);
//   } else console.log("File amjilttai uuslee");
// });

const data1 = "Ene bol uuriin bichsen ugugdul";
fs.mkdir("./datas", { recursive: true }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Хавтас амжилттай үүсгэгдлээ");
  }
  fs.writeFile("./datas/info1.txt", data1, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Хавтас bolon file амжилттай үүсгэгдлээ");
    }
  });
});
