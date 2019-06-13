let util = require('util');
let db = require('db');
db.connect();

function HttpError(status, msg){
    this.msg = msg;
    this.status = status;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function makePage(url){
    if(url !== "index.html"){
        throw new HttpError(404, "Error. Could not found the page!");
    } else {
       return util.format('%s, %s!', db.getPhrase("Hell"), db.getPhrase("world"));
    }
}

try{
    let page = makePage('index.html');
} catch(exception){
    if(exception instanceof HttpError){
        console.warn(exception.status, exception.msg);
    } else {
        console.error(exception.name, exception.msg, exception.stack);
    }
}
