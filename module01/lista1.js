// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()
let numeroInt = Number(prompt('digite um número: '))
if(numeroInt % 2 === 0){
    console.log(`o número ${numeroInt} é par`)
} else if(numeroInt % 2 !== 0){
    console.log(`o número ${numeroInt} é impar`)
}

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()
let idade = Number(prompt('digite sua idade: '))

if(idade >= 0 && idade <= 12){
    console.log('você é considerado uma criança')
} else if(idade >= 13 && idade <= 17){
    console.log('você é considerado um adolescente')
} else if(idade >= 18 && idade <= 59){
    console.log('você é considerado um adulto')
} else{
    console.log('você é considerado um idoso')
}

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()
let nota = Number(prompt('digite sua nota(0 a 10): '))

if(nota >= 7){
    console.log('você está aprovado')
} else if(nota >= 4){
    console.log('você está de recuperação e ainda tem uma chance')
} else{
    console.log('você está reprovado')
}

//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. 

const prompt = require('prompt-sync')()
let option = Number(prompt('escolha o caso 1 ou o caso 2 ou o caso 3: '))

switch(option) {
    case 1: 
        console.log('você selecionou primeira opcao')
        break
    case 2: 
        console.log('você selecionou segunda opcao')
        break
    case 3: 
        console.log('você selecionou a terceira opção')
        break
    default:
        console.log('não escolheu nenhuma opcao')
        break 
}

//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')()
let peso = Number(prompt('digite o seu peso: '))
let altura = prompt('digite sua altura: ')
let IMC = peso / (altura * altura)

if(IMC <= 18.5){
    console.log(`você possui baixo pesoe o seu IMC é ${IMC}`)
} else if(IMC >= 18.6 && IMC <= 24.9){
    console.log(`você possui peso normal e o seu IMC é ${IMC}`)
} else if(IMC >= 25 && IMC <= 29.9){
    console.log(`você possui sobrepeso e o seu IMC é ${IMC}`)
} else{
    console.log(`você possui obesidade e o seu IMC é ${IMC}`)
}

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')()
let num1 = Number(prompt('digite o primeiro lado do triângulo: '))
let num2 = Number(prompt('digite o segundo lado do triângulo: '))
let num3 = Number(prompt('digite o terceiro lado do triângulo: '))
let triangulo = 0 

if((num1 < (num2 + num3)) && (num2 < (num1 + num3)) && (num3 < (num1 + num2))){
    console.log('essas medidas formam um triângulo')
    triangulo
} else {
    console.log('essas medidas não formam um triângulo')
}

if((num1 == num2) || (num2 == num3) || (num3 == num1) && (num1 !== num2 !== num3)){
    console.log('triângulo considerado isósceles')
} else if((num1 != num2) && (num2 != num3) && (num1 != num3)){
    console.log('triângulo considerado escaleno')
} else if((num1 = num2 = num3)){
    console.log('triângulo considerado equilátero')
}

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')()
let numMaças = Number(prompt('digite a quantidade de maça: '))
let sum = 0

if(numMaças > 12){
    sum = numMaças * 0.3
} else if(numMaças <= 12){
    sum = numMaças * 0.25
}

console.log(`a quantidade de maças é ${numMaças}, e o valor total da compra é`, sum)

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

// const prompt = require('prompt-sync')()
// let num1 = Number(prompt('digite o primeiro número: ')) 
// let num2 = Number(prompt('digite o segundo número: ')) 

if(num1 > num2){
console.log(num1, num2) 
} else if(num2 > num1) {
console.log(num2, num1) 
}

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for.

let i = 10
for(i = 10; i >= 1; i--) {
    console.log(i)
} 
// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// const prompt = require('prompt-sync')()
// let numQualquer = Number(prompt('digite aqui um número: ')) 

for(let i = 1; i <=10; i++){
    console.log(numQualquer) 
}

// 11. Escreva um programa em js que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

// const prompt = require('prompt-sync')()
let sum = 0

for(let i = 1; i <= 5; i++){
    let numero = Number(prompt('digite um número: '))
    sum += numero 
}
console.log('a soma dos cinco números é', sum)

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()
let numQualquer = Number(prompt('digite aqui um número: '))
let tabuada = 0

for(let i = 1; i <= 10; i++){
    tabuada = numQualquer * i 
    console.log(`a tabuada do ${numQualquer} vezes ${i} é igual a:`, tabuada)
}

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')()
let numQualquer = Number(prompt('digite aqui um número: '))
let soma = 0
let counter = 1

while(numQualquer !== 0){
    soma += numQualquer
    counter++ 
    numQualquer = Number(prompt('digite aqui um número: '))
}
console.log('a média aritmética é', soma / counter)

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')()
let num1 = Number(prompt('digite um número: '))
let fatorial = 1

while(num1 > 1){
    num1-- 
    fatorial *= num1
}
console.log(`o fatorial é`, fatorial)

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.

let primeiroTermo = 0 
console.log(primeiroTermo)
let segundoTermo = 1
console.log(segundoTermo)
let próximo 

for(let i = 2; i < 10; i++){
    próximo = primeiroTermo + segundoTermo
    console.log(próximo)
    primeiroTermo = segundoTermo
    segundoTermo = próximo
}