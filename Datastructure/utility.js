module.exports = {
    fileCall(path) {
        var fileStream = require('fs');
        var f = fileStream.readFileSync(path, 'utf8');
        var arr = f.split(" ");

        return arr;
    },

    writeFile(filename, Data) {
        const fs = require('fs')
        fs.writeFile(filename, Data, function(err) {
            if (err) {
                return console.log(err);
            }

        });
    },

}