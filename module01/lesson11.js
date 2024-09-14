let funcaoAnonima = function (){
    console.log('olá mundo')
}

funcaoAnonima()

function showFunction(sucessCallback, errorCallback) {
    if(true){
        sucessCallback('sucesso')
    } else {
        errorCallback('erro')
    }
}

let sucessCallback = function(message) {
    console.log(message)
}
let errorCallback = function(message) {
    console.log(message)
}

showFunction(sucessCallback, errorCallback) // () rodar

// atividades criando funcoes dos arrays 

// soma dos elementos de um array 

function somaArrays(arr) {
    let sum 
    for(let i = 0; i < arr.length; i++){
        sum += arr[1] 
    }
    return sum
}
let arr = [10, 20, 30, 40]

console.log(somaArrays(arr))

// encontre o maior número de um array 

let maiorNumArray = fuction()
let max = arr[0] // 0 é valor de referencia (posicao zero do array)

for(let j = 0; j < arr.length; j++){
    if(arr[j] > max){
        max = arr[j] // Atualiza o valor máximo se encontrar um maior
    }
}
console.log(max)

// Reverter um Array            
let reverso = [];

for(let k = arr.length - 1; k >= 0; k--){
    reverso.push(arr[k]); // Adiciona os elementos na ordem inversa
}

console.log(reverso); // Imprime o array revertido

// Criem um novo array contendo apenas os números pares
let pares = [];

for(let m = 0; m < arr.length; m++){
    if(arr[m] % 2 === 0){
        pares.push(arr[m]); // Adiciona o número ao novo array se for par
    }
}

console.log(pares); // Imprime o array contendo apenas os números pares

// Contar Ocorrências de um Valor
const prompt = require('prompt-sync')();
let vet = [10, 10, 7, 5, 10];
let valor = Number(prompt('Insira o valor a ser pesquisado: '));
let contador = 0;

for(let l = 0; l < vet.length; l++){
    if(vet[l] === valor){
        contador++; // Incrementa o contador se o valor for encontrado
    }
}

console.log(`O valor ${valor} ocorre ${contador} vezes no vetor.`); // Imprime o número de ocorrências
