const fs = require('fs');
const util = require('util');

fs.readFile('titles.json', (err, data) => {
    if(err){
        console.error(err);
    } else {
        console.log(data.toString());
    }
});

fs.rename('titles.json', 'title.json', (err => {
    if(err){
        throw new RenameError(
            500,
            "Error! Cannot rename the file due to the lack of such file in the searching engine."
        )
    } else {
        console.log("Renamed!");
    }
}));

function RenameError(status, msg){
    this.status = status;
    this.msg = msg;
    console.error(this.msg, this.status, this.stack);
}
util.inherits(RenameError, Error);