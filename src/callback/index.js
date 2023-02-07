function suma(num1, num2) {
    return num1 + num2;
}

function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}

console.log(calculadora(6,1, suma));

console.log(" ");

setTimeout(function() {
    console.log("Hola Javascript");
},2000);

function saludo(name){
    console.log("Hola " + name);
}

setTimeout(saludo,2000, "Java");