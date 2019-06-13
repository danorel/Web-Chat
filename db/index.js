let util = require('util');
let phrases;

exports.connect = function(){
    phrases = require('./eng');
};

exports.getPhrase = function(name) {
    if(!phrases[name]){
        throw new PhraseError(500, "Such phrase is undefined in the db!");
    } else {
        return phrases[name];
    }
};

function PhraseError(status, msg){
    this.msg = msg;
    this.status = status;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";