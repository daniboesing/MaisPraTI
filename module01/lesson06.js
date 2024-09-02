console.log(10 >= 5) // true
console.log(10 <= 5) // false
console.log(10 == 5) // false
console.log(10 == '10') // true nao compara tipo
console.log(10 === '10') // false
console.log(10 != '10') // false
console.log(10 !== '10') // true

// lógicos comparam duas expressões 

console.log((10 < 5) && (10 > 2)) // E false pq a primeira é false 
console.log((10 > 5) || (10 < 2)) // OU true 
console.log((10 > 5) || !(10 < 2)) // OU true 
            // true       !false (vira true) 
console.log(!(10 > 5) || (10 < 2)) // false

// condicionais: impõe condições ao nosso código que podem definir ou não um desvio na execução 

// if ( <condicao> ) 
// {instruções para condição verdadeira}
// else {instruções para condição falsa}

const grade = 60 // constante nota do aluno n mudará 
if(grade >= 60) {
    console.log('you are approved') 
} else { 
    console.log('you are reproved') 
} 

let idade = 50 
if((idade >= 18) && (idade<= 32)) { 
    console.log('pode realizar concurso público') 
} else {
    console.log('nao pode realizar concurso público') 
}

// ex 1: verificar número par ou ímpar 
 
let num1 = 1 

if((num1 % 2 === 0) && (num1 != 0)){
    console.log('número par')
}else {
    console.log('número ímpar')
}
// outra maneira 

num1 % 2 === 0 ? console.log('par') : console.log('ímpar')

// ex 2: comparacao três números

let num2 = 2
let num3 = 3
let num4 = 4

if((num2 > num3) && (num2 > num4)) {
    console.log(`o maior número é ${num2}`)
} else if((num3 > num2) && (num3 > num4)){
    console.log(`o maior número é ${num3}`)
    } else {
        console.log(`o maior número é ${num4}`)
    }

// ex 3: calculadora simples 

// const prompt = require('prompt-sync')()

let primerioNum = Number(prompt('insira o primeiro valor: '))
let segundoNum = Number(prompt('insira o segundo valor: '))
let operation = prompt('+, -, *, /: ')

result = primerioNum + segundoNum

console.log('o resultado é: ', result) // + result

// escolha os casos 

let option = 0 

switch(option) {
    case 1: 
        console.log('selecionou primeira opcao')
        break
    case 2: 
        console.log('selecionou segunda opcao')
        break
    default: // entra sempre que nenhuma das opcoes for satisfeita
        console.log('não escolheu nenhuma opcao')
        break // p separar as opcoes 
}

const prompt = require('prompt-sync')()
diaSemana = Number(prompt('qual caso voce quer?: '))

switch(diaSemana) {
    case 1: 
        console.log('domingo')
        break
    case 2: 
        console.log('segunda')
        break
    case 3: 
        console.log('terça')
        break
    case 4: 
        console.log('quarta')
        break
    case 5: 
        console.log('quinta')
        break
    case 6: 
        console.log('sexta')
        break
    case 7: 
        console.log('sabado')
        break
    default:
        console.log('esse dia não existe na semana')
}
