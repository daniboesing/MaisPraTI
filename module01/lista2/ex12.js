/*Objetivo: Crie um array de objetos estoque, onde cada objeto tem
produto, quantidade e minimo. Use forEach para atualizar a quantidade
dos produtos que estão abaixo do mínimo, duplicando suas quantidades.*/

let estoque = [
    {
        produto: 'whey',
        quantidade: 5,
        mínimo: 7
    },

    {
        produto: 'barrinha de proteina',
        quantidade: 30,
        mínimo: 29
    },

    {
        produto: 'caixa de tâmaras',
        quantidade: 10,
        mínimo: 15
    }
]

let duplicando = 1

estoque.forEach(estoqu => {
    if(estoqu.mínimo > estoqu.quantidade){
       estoqu.quantidade *= 2 
    } else if(estoqu.mínimo > estoqu.quantidade) {
        estoqu.quantidade *= 2 
    } else if(estoqu.mínimo > estoqu.quantidade){
        estoqu.quantidade *= 2 
    }
    console.log(`A quantidade: ${estoqu.quantidade} é maior que a quantidade mínima`)
})
