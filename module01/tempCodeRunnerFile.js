
const prompt = require('prompt-sync')()
let option = Number(prompt('escolha o primeiro ou o segundo ou o terceiro caso: '))

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