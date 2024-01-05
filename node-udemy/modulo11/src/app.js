const Reader = require("./leituracsv/Reader");
const path = require('path');
const Processor = require("./leituracsv/Processor")
const Table = require("./leituracsv/Table")
const HtmlParser = require("./leituracsv/HtmlParser")

let leitor = new Reader();

const filePath = path.resolve(__dirname, '../files/users.csv');

async function main() {
    let dados = await leitor.read(filePath);

    let dadosProcessados = Processor.Process(dados);

    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios);

    console.log(html);
}

main();