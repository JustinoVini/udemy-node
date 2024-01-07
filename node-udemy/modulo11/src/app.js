const Reader = require("./leituracsv/Reader");
const path = require('path');
const Processor = require("./leituracsv/Processor")
const Table = require("./leituracsv/Table")
const HtmlParser = require("./leituracsv/HtmlParser")
const Writer = require("./leituracsv/Writer")
const PDFWriter = require("./leituracsv/PdfWriter")

let leitor = new Reader();
let escritor = new Writer();

const filePath = path.resolve(__dirname, '../files/users.csv');

async function main() {
    let dados = await leitor.read(filePath);

    let dadosProcessados = Processor.Process(dados);

    let usuarios = new Table(dadosProcessados);

    let html = await HtmlParser.Parse(usuarios);

    escritor.Write(Date.now() + ".html", html);

    PDFWriter.WritePDF(Date.now() + ".pdf", html)

}

main();