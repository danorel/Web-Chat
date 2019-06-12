let phrases = require('./../db');
let logger = require('logger')(module);

function User(name){
    this.name = name;
}

User.prototype.message = function (who) {
    logger(phrases.getPhrase("Hello") + ", " + who.name);
};

module.exports = User;
