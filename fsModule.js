const fs = require("fs");

// below sync operations

fs.writeFileSync("file2.txt");

fs.readFileSync("file2.txt");

fs.unlinkSync("file2.txt");

// these below are async operations
// writing file 1
// fs.writeFile("file.txt", "Hello file 1", (err) => {
//   if (err) {
//     console.log("File error", err);
//   } else {
//     console.log("File created");
//   }
// });

// writing file 2
fs.writeFile("file2.txt", "Hello file 2", (err) => {
  if (err) {
    console.log("File error", err);
  } else {
    console.log("File created");
  }
});
// update file async
fs.appendFile("file.txt", "\n updating file in the new line", (err) => {
  if (err) {
    console.log("File error", err);
  } else {
    console.log("File updated");
  }
});

// read file async
fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File error", err);
  } else {
    console.log("File data:", data);
  }
});

fs.unlink("file2.txt", (err) => {
  if (err) {
    console.log("File error", err);
  } else {
    console.log("File deleted");
  }
});
