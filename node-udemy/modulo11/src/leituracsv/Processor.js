class Processor {
    static Process(data) {
        const rows = data.split("\n"); // Separa as linhas

        const processedRows = rows
            .filter(row => row.trim() !== '') // Filtra as linhas vazias
            .map(row => {
                // Remove as aspas extras e divide as colunas pelo separador ','
                return row.replace(/"/g, '').split(",");
            });

        console.log(processedRows);
        return processedRows;
    }
}

module.exports = Processor;
