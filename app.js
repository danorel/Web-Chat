// let server = require('./server');


while(true){
    let answer = prompt("Enter the number greater than 100: ", "Here...");
    if(answer <= 100){
        break;
    } else {
        console.log(answer);
    }
}