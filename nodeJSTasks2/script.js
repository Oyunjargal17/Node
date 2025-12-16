// 1️⃣ Файл үүсгэх
// task1.txt нэртэй файл үүсгэ
// Дотор нь "Sync Task 1" гэж бич
// Файл бичихээс өмнө ба дараа console.log ашигла

// const fs = require("fs");
// console.log("File bicheh gej bna");
// const data = fs.writeFileSync("task1.txt", "Sync Task 1");
// console.log("File amjilttai uuslee");

// 2️⃣ Файл унших
// task1.txt-ийг readFileSync-ээр унш
// Уншсан текстийг console.log-оор хэвлэ
// Уншихын өмнө ба дараа console.log ашигла

// const fs = require("fs");
// const data = fs.readFileSync("task1.txt", "utf-8");
// console.log("Ur dun:", data);
// console.log("Amjilttai unshigdlaa");

// 3️⃣ Файлд текст нэмэх
// task1.txt файлд "Added from task 3" гэж нэм
// Нэмэхийн өмнө ба дараа console.log ашигла

// const fs = require("fs");
// console.log("Text nemeh gej bna");
// const data = fs.appendFileSync("task1.txt", "\nAdded from task 3");
// console.log("Tanii text nemegldee");

// 4️⃣ Файл устгах ба алдаа шалгах
// Байхгүй файл устгах гэж оролд (жишээ: no_file.txt)
// Устгахаас өмнө ба дараа console.log ашигла
// Алдааг ажигла

// const fs = require("fs");
// console.log("ustgahiin umnu :");
// fs.unlinkSync("task.txt", "utf-8", (err) => {
//   if (err) {
//     console.log("Aldaa garlaa", err);
//   } else {
//     console.log("Amjilttai usdlaa");
//   }
// });
// console.log("ustgahiin daraa:");

// 5️⃣ Дараалсан Sync үйлдэл
// console.log("Start")
// Файл үүсгэх
// console.log("After write")
// Файлд нэмэх
// console.log("After append")
// Файл унших
// console.log("After read")
// console.log("End")

const fs = require("fs");
console.log("Start");
fs.writeFileSync("text.txt", "Text uuslee");
console.log("After write");
fs.appendFileSync("text.txt", "\n Uuniig nemlee");
console.log("After append");
fs.readFileSync("text.txt", "utf-8");
console.log("After read");
console.log("End");
