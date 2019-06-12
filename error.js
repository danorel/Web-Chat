let util = require('util');
let eng = require('./db/eng');
let db = require('db');
db.connect();

function PhraseError(status, msg){
    this.msg = msg;
    this.status = status;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

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
       return util.format('%s, %s!', db.getPhrase("Hello"), db.getPhrase("world"));
    }
}

try{
    let page = makePage("index");
    console.log(page);
} catch(exception){
    if(exception instanceof HttpError){
        console.log(exception.status, exception.msg);
    } else {
        console.error(exception.name, exception.msg, exception.stack);
    }
}
