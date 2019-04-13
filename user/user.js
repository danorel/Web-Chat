let ukr_answer = require('./json/ukr');
let ru_answer = require('./json/ru');
let eng_answer = require('./json/eng');


function User(name){
    this.name = name;
}

User.prototype.saysTo = function (who) {
    console.log(ru_answer.Hello + ", " + who.name);
};

exports.User = User;