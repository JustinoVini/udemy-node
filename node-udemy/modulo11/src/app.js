const Reader = require("./leituracsv/Reader");
const path = require('path');

let leitor = new Reader();

const filePath = path.resolve(__dirname, '../files/users.csv');
leitor.read(filePath);