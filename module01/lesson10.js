let thingsList = Array()

thingsList['hardware'] = Array()
thingsList['fruits'] = Array()

thingsList['hadware'][0] = 'notebook'
thingsList['hadware'][1] = 'mouse'
thingsList['fruits'][0] = 'laranja'
thingsList['fruits'][1] = 'maça'

console.table(thingsList) // posicoes sao hardware e fruits - nao funciona se colocar [0]

let fruitsList = Array() // ou []

fruitsList[0] = 'maça'
fruitsList[1] = 'banana'
fruitsList[2] = 'melancia'
fruitsList[3] = 'uva'
fruitsList[4] = 'morango'

console.log(fruitsList.sort()) // ordenacao de array

let numberList = []

numberList[0] = 10
numberList[1] = 12
numberList[2] = 0 
numberList[3] = 16
numberList[4] = 7
numberList[5] = 9 

console.log(numberList.sort((a,b) => a - b)) // se a for maior que b retornará true, compara continuamente

// como pesquisar dentro de um array? 

console.log(fruitsList.indexOf('morango')) // me retorna a posicao que o morango está 
// se o elemento nao existir retorna -1

let index = fruitsList.indexOf('morango')

if(index === -1){
    console.log('elemento nao existe')
} else {
    console.log(`o elemento existe e está na posicao ${index}`)
}

function calculateArea(num1, num2){ // so repassa o valor de referencia
    let area = num1 * num2
    return area 
}

let altura = 10
let largura = 200 

let teste = calculateArea(altura, largura) // nao vai p linha de baixo, vai p funcao 
// num1 = altura = 10
// num2 = largura = 200

console.log(teste)

// funcao que ordene um array

let alfabeto = ['a', 'd', 'c', 'f', 'e']

function ordenamento(ordena){
    return ordena.sort // sempre precisa estar no final, sai da funcao, parecido com o break
}

console.log(ordenamento(alfabeto))
