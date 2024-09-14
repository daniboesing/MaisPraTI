/* Objetivo: Crie um objeto livro com propriedades titulo, autor,
anoPublicacao e genero. Verifique se a propriedade editora existe no
objeto usando for in. Se não existir, adicione essa propriedade ao objeto. */

let livro = {
    Título: 'Memórias Póstumas de Brás Cubas',
    Autor: 'Machado de Assis',
    AnoDePublicação: 1881,
    Genero: 'realismo'
}

let editora = false 

for(let key in livro) {
    if(key === 'editora'){
        editora = true
        break
    }
    if(editora = true){
    livro.editora = 'Garnier'
    console.log(livro)
    } 
}