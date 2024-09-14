/* Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
os produtos e exibir o novo preço. */

let produtos = [
    {
        nome: 'whey',
        preço: 50,
        desconto: 5
    },

    {
        nome: 'barrinha de proteina',
        preço: 15,
        desconto: 1.5
    },

    {
        nome: 'caixa de tâmaras',
        preço: 70,
        desconto: 7
    }
]

produtos.forEach(produto => {
    produto.preço = produto.preço - produto.desconto
    console.log(`O novo preço do produto ${produto.nome} é ${produto.preço}`)
})