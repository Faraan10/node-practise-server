const fs = require("fs");

fs.appendFile("file.txt", "Hello file 1", (err) => {
  if (err) {
    console.log("File error", err);
  } else {
    console.log("File created");
  }
});

fs.readFile("file.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("File error", err);
  } else {
    console.log("File data:", data);
  }
});
