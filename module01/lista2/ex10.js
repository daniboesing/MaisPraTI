/*Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
quantidade e valor. Use forEach para calcular o valor total de vendas de
todos os produtos.*/

let vendas = [
    {
        produto: 'whey',
        quantidade: 5,
        valor: 50
    },

    {
        produto: 'barrinha de proteina',
        quantidade: 30,
        valor: 15
    },

    {
        produto: 'caixa de tâmaras',
        quantidade: 10,
        valor: 70
    }
]

let valorTotal = 0
vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor
})

console.log(`O valor total da compra foi de:`, valorTotal)