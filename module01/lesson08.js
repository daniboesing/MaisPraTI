// const prompt = require('prompt-sync')()

// // exercicio 1
// const num1 = 0

if (num1 > 0){     
    console.log('O número informado é positivo')
} else if (num1 < 0) {  // se não se 
     console.log('O número informado é negativo')
 } else {
    console.log('O número é zero')
}

// exercicio 2 ano bissexto
// const prompt = require('prompt-sync')()
const year = Number(prompt('informe um número: '))

if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    console.log(`o ano ${year} é um ano bissexto`)
}

// exercicio 3 - Calcule a média de três números e determine o conceito

// const prompt = require('prompt-sync')()
let grade1 = Number(prompt('Informe a primeira nota:'))
let grade2 = Number(prompt('Informe a segunda nota:'))
let grade3 = Number(prompt('Informe a terceira nota:'))

let avg = (grade1 + grade2 + grade3) / 3
let concept

if (avg >= 90){
    console.log(`A média das notas é ${avg.toFixed(2)}`) // necesário crase p usar $ 
    // toFixed fixando o número de casas decimais
    concept = "A"
} else if (avg <= 80){
    console.log(`A média das notas é ${avg.toFixed(2)}`)
    concept = 'B'
}else {
   console.log('Outra nota')
}

console.log('O seu conceito é: ', concept)

// exercicio 9:  Escreva um programa que leia a idade de uma pessoa e use uma estrutura if/else para determinar a faixa etária:
//             Criança: 0 - 12 anos
//             Adolescente: 13 - 17 anos
//             Adulto: 18 - 59 anos
//             Idoso: 60 anos ou mais

// Dica: Utilize uma estrutura switch dentro do bloco if/else para imprimir uma mensagem específica para cada faixa etária.

// const prompt = require('prompt-sync')()
let age = Number (prompt('Informe a sua idade: '))
let ageRange 

if(age >= 0 && age <= 12){
    ageRange = 'Criança'
} else if(age >= 13 && age <= 17){
    ageRange = 'Adolescente'
} else if(age >= 18 && age <= 60){
    ageRange = 'Adulto'
} else {
    ageRange = 'Idade inválida'
}

switch(ageRange) {
    case 'Criança':
        console.log('vocé é uma crianca')
        break 
    case 'Adolescente':
        console.log('você é um adoelescente')
        break 
    case 'Adulto':
        console.log('você é um adulto')
        break 

}

// exercicio 10 
// Encontre o maior divisor comum (MDC) de dois números
// Escreva um programa que use um loop do while para encontrar o maior divisor comum (MDC) de dois números fornecidos (por exemplo, 56 e 98).

// Dica: Utilize o algoritmo de Euclides, onde você repete o processo de substituir o maior número pela diferença dos dois números até que ambos sejam iguais.

const prompt = require('prompt-sync')()
let num1 = Number(prompt('informe o primeiro valor: '))
let num2 = Number(prompt('informe o segundo valor: '))

let a = num1
let b = num2

do {  // vou fazer isso até o resto ser zero 
    let temp = b
    b = a % b
    a = temp
} while(b !== 0){
    const MDC = a 
    console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)
}
// exercicio primo: verificar se um número é primo

let prime = Number(prompt('Qual número que deseja verificar? '))

for(let i = 1; 1 < prime ; i++){
    if((prime % i === 0) && (i!== 1)){
        console.log('não é primo')
        break
    }

    if(i === (prime - 1)){
        console.log('é primo')
    }
}

// primeiros 50 números primos

let count = 0
let num = 101

do{
    let primo = 0
    for(let i = 1; 1 <= num; 1++){
        if(num % 1 === o){
            primo++
        }
    } 
    // percorrer por todos os números e ver quantas vezes ele é divisível

    if(primo === 2){ // divisível por 1 e ele mesmo
        console.log(num)
        count++ // determinar o final do meu loop 
    }

    num++ // aumenta o numero e roda de novo
} while (count < 50) 

// conteudo novo arrays

let carros = Array()

carros[0] = 'Civic'
carros[1] = 10 // js nao se importa em relacao ao tipo
carros[2] = true 
carros['daniela'] = '10'

console.log(carros)

let livros = ['senhor dos aneis', 'o hobbit', 'harry potter']
livros.push('sherlock holmes') // add no final do array 
livros.unshift('1984') // add no comeco 

livros.pop() // retira do final 
livros.shift() // retira do comeco 

livros.splice(2) // retirar o item 2 

