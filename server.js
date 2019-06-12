let User = require('./user/user');
let phrases = require('./db');
phrases.connect();

let run = function() {
    let first_user = new User("Olia");
    let second_user = new User("Daniel");
    first_user.message(second_user);
};

if(module.parent){
    module.exports.run = run;
} else {
    run();
}