/* Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
uma pessoa com nome, idade, e cidade. Use for of para exibir as
informações de cada pessoa no console. */ 
let pessoas = [
    {
        nome: 'Daniela',
        idade: 19,
        cidade: 'Porto Alegre'

    },

    {
        nome: 'Pedro',
        idade: 18,
        cidade: 'Porto Alegre'
    },
    
    {
        nome: 'Iva',
        idade: 50,
        cidade: 'Florianópolis'
    }
]

for(let pessoa of pessoas){
    console.log(`Nome: ${pessoa.nome}`)
    console.log(`Idade: ${pessoa.idade}`)
    console.log(`Cidade: ${pessoa.cidade}`)  
}