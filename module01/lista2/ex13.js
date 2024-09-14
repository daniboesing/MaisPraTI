/* Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
array de objetos. Cada objeto dentro de itens deve representar um
produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
para calcular o valor total do carrinho. */

let carrinho = {
    itens: [
        {
            nome: 'uva',
            quantidade: 10,
            precoUnitario: 7
        },

        {
            nome: 'maça',
            quantidade: 20,
            precoUnitario: 1.5
        },

        {
            nome: 'laranja',
            quantidade: 7,
            precoUnitario: 4
        }
    ]
}

valorTotal = 0

carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario
})

console.log(valorTotal)