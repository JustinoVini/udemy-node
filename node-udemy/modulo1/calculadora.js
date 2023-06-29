function soma (a, b) {
    return a + b;
}

function subtracao (a, b) {
    return a - b;
}

function divisao (a, b) {
    return a / b;
}

function multiplicacao (a, b) {
    return a * b;
}

/* modulos são feitos para exportar as classes ou funcoes 
    ou seja, caso isso fosse uma "classe" poderiamos exporta-lá e fazer a chamada em outras classes.
*/ 

/*
exportação simples.
module.exports = soma;
*/

/* multipla exportaçãa */
module.exports = {
    soma,
    subtracao,
    divisao,
    multiplicacao
}