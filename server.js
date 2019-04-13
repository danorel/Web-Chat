let user = require('./user/user');

let users = [];
let first_user = new user.User("Petya");
let second_user = new user.User("Daniel");
users.push(first_user);
users.push(second_user);
broadcast(users);

function broadcast(users){

}