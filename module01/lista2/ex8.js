/*Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
diretor, e anoLancamento. Use forEach para criar um novo array
contendo apenas os títulos dos filmes.*/

let filmes = [
    {
        título: 'A coisa',
        diretor: 'Matthijs van ',
        anoLancamento: 2011
    },

    {
        título: 'Alice no país das trevas',
        diretor: 'Richard John Taylor',
        anoLancamento: 2020
    },

    {
        título: 'Sobreviventes',
        diretor: 'Adam MacDonald',
        anoLancamento: 2015
    }
]

filmes.forEach(filme => {
    let somenteTitulos = [filme.título]
    console.log(somenteTitulos)
})