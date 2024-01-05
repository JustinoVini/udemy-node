const fs = require("fs");

class Reader {

    read(filePath) {

        fs.readFile(filePath, "utf-8", (err, data) => {

            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }

        })

    }

}

module.exports = Reader;