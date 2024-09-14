/*Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
cliente, produto, e quantidade. Use forEach para criar um objeto que
agrupa a quantidade total de produtos por cliente.*/

let pedidos = [
    {
        cliente: 'Pedro',
        produto: 'whey',
        quantidade: 3
    },

    {
        cliente: 'Adriane',
        produto: 'barrinha de proteina',
        quantidade: 15
    },

    {
        cliente: 'Amanda',
        produto: 'caixa de tâmaras',
        quantidade: 5
    }
]

let agrupador = {}
let agrupador2 = {}

pedidos.forEach(pedido => {
    if(agrupador[pedido.cliente]) {
        agrupador[pedido.cliente] += pedido.quantidade
    } else {
        agrupador[pedido.cliente] = pedido.quantidade
    }
})

console.log(agrupador)
