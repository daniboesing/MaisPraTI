/*Objetivo: Crie um array de objetos clientes, cada um com propriedades
nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
de 30 anos.*/

let clientes = [
    {
        nome: 'Daniela',
        idade: '18',
        cidade: 'Porto Alegre'
    },

    {
        nome: 'Tiago',
        idade: '45',
        cidade: 'Floripa'
    },

    {
        nome: 'Fernanda',
        idade: '36',
        cidade: 'Rio de janeiro'
    }
]

let counterCliente = 0

clientes.forEach(cliente => {
    if(cliente.idade > 30){
        counterCliente++
    }
})
console.log(counterCliente)
