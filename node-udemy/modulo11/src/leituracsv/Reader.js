const fs = require("fs");
const util = require("util");

class Reader {
    constructor() {
        this.reader = util.promisify(fs.readFile);
    }

    async read(filePath) {
        try {
            const data = await this.reader(filePath, "utf-8");
            console.log(data);
            return data;
        } catch (error) {
            console.log(error);
            return undefined;
        }
    }
}

module.exports = Reader;
