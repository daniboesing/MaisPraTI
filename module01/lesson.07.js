// estrutrua de controle de repeticao ()
// FOR <variável>; <condicao>; <incremento>

// const prompt = require('prompt-sync')()
let multiplier = Number(prompt('número tabuada: '))

for(let i = 0; i <= 10; i++) { // 10 somente como exemplo, poderia ser qq coisa
    console.log(`${i} * ${multiplier} =`, i * multiplier)
}

// imprimir os valores pares entre 1 e 20

for(let counter = 0; counter <= 20; counter+=2) {
    console.log(counter)
}

// calcular a soma dos números de 1 a 100 

let calculatore = 0

for(let j = 1; j <= 100; j++){
    calculatore += j
}
console.log(calculatore)

// imprimir os valores de 1 até 10 em ordem decrescente

for(let k = 10; k >= 1; k--){
    console.log(k)
}

// WHILE 

let h = 10

while(h > 0){
    console.log(h)
    h--
}

// calcular a soma dos números de 1 a 100 

let u = 0
let calculatore1 = 0

while(u <= 100){
    calculatore =+ u
    u++
}

console.log(contador)

// fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a media aritimetica desses numeros 

// const prompt = require('prompt-sync')()
let num1 = Number(prompt('escolha seu primeiro numero: '))
let counter = 0 
let sum = 0 


while(num1 !== 0) {
    sum += num1
    counter++
    let num1 = Number(prompt('escolha seu segundo numero: '))
}
console.log('a média é: ', sum/counter)

// do { while() } faça enquanto algo for veradeiro 

// do executa pelo menos uma vez (teste lógico no final)

// solicitar número ao usuários até que ele insira um valor negativo 

const prompt = require('prompt-sync')()
let numeroQualquer 
do { 
    numeroQualquer = Number(prompt('digite um número: '))
} while(numeroQualquer >= 0)