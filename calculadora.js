const sumar = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) + Number(elem);
    })
};
const restar = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) - Number(elem);
    })
};
const multiplicar = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) * Number(elem);
    })
};
const dividir = (...operandos) => {
    return operandos.reduce((res, elem) => {
        return Number(res) / Number(elem);
    })
}
module.exports = {
    "sumar": sumar,
    "restar": restar,
    "multiplicar": multiplicar,
    "dividir": dividir
}