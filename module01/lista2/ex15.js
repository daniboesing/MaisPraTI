/* Objetivo: Crie um array de objetos transacoes, onde cada transação tem
tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
somando as entradas e subtraindo as saídas. */

let transacoes = [
    {
        tipo: 'entrada',
        valor: 300
    }, 

    {
        tipo: 'saída',
        valor: 500
    },

    {
        tipo: 'entrada',
        valor: 110
    }
]

let saldoFinal = 0 
let entradas = 0
let saídas = 0

transacoes.forEach(transacao => {
    if(transacao.tipo === 'entrada'){
        entradas += transacao.valor
    } else if(transacao.tipo === 'saída'){
        saídas += transacao.valor
    }
    saldoFinal = entradas - saídas
})

console.log(`As entradas tem valor de ${entradas}, enquanto as saídas tem valor de ${saídas}, totalizando um saldo final de ${saldoFinal}`)