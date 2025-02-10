console.log("Hello world!");

function adio(num1, num2) {
    bag = num1 + num2;
    return bag;
}

console.log( adio(1, 2))

//Operators
//ternary operator

let age = 17;
const canDrive = age >= 18? true: false;

console.log(canDrive);

//logical operator
// ( ||, &&, !, ?? )

function scream(n){
    let str = "";
    for(let i = 1; i <= n; i++){
        const remainder = i % 2;
        const isEven = remainder == 0;
        if(isEven){
            str += "A";
        } else {
            str += "a";
        }  
    }
    return str; 
}

console.log(scream(10));
