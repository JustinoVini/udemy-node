const Reader = require("./leituracsv/Reader");
const path = require('path');

let leitor = new Reader();

const filePath = path.resolve(__dirname, '../files/users.csv');

async function main() {
    let dados = await leitor.read(filePath);
}

main();