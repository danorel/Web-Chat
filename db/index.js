let phrases;

exports.connect = function(){
    phrases = require('./ru');
};

exports.getPhrase = function(name) {
    if(!phrases[name]){
        throw new Error("Such phrase is undefined in the db!");
    } else {
        return phrases[name];
    }
};