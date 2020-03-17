//Necesitamos que la calculadora responda las operaciones básicas
//Suma, Resta, Multiplicación, División.
//Tomar los operadores desde los argumentos de la terminal.
// tomar la operacion.
const [,,operador,...operandos] = process.argv;
const calculadora = require ('./calculadora');

//guardar un string que va a representar la operación que se hizo
//JSON
//Leer el archivo,
//Convertir los contenidos de JSON a ARRAY,
//guardar el log nuevo,


const fs = require('fs');
const logJSON = fs.readFileSync("logs.json",{encoding:"utf-8"});
const logs = JSON.parse(logJSON);

switch(operador){
    case "sumar": {
        let resultado = calculadora.sumar (...operandos);
        console.log(resultado);
        logs.push(operandos.reduce((red, elem) => {
             return red + "+" + elem;
        }) + "=" + resultado);
        
    }break;
    case "restar": {
        let resultado = calculadora.restar (...operandos);
        console.log(resultado);
        logs.push(operandos.reduce((red, elem) => {
            return red + "-" + elem;
        }) + "=" + resultado);
        
    }break;
    case "multiplicar": {
        let resultado = calculadora.multiplicar (...operandos);
        console.log(resultado);
        logs.push(operandos.reduce((red, elem) => {
            return red + "*" + elem;
        })+ "=" + resultado);
        
    }break;
    case "dividir": {
        let resultado = calculadora.dividir (...operandos);
        console.log(resultado);
        logs.push(operandos.reduce((red, elem) => {
            return red + "/" + elem;
        })+ "=" + resultado);
        
    }break;
    case "historial":{
        logs.forEach((elem, i) => {
            console.log("["+i+"]->"+elem);
        });
        break;
    }
    default: {
        console.log("No se ingreso operacion");
    }

}

//Convertir el array a JSON,
//Escribir el Archivo.
const stringfied =  JSON.stringify(logs,null,4);
fs.writeFileSync("logs.json",stringfied);
