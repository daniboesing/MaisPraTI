// Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

let alunos =[
    {
        nome: 'Daniela',
        nota1: 9.5,
        nota2: 9.7

    },
    {
        nome: 'Adriane',
        nota1: 7,
        nota2: 6

    },
    {
        nome: 'Sofia',
        nota1: 4,
        nota2: 8

    },
]

for(let aluno of alunos){
    let average = (aluno.nota1 + aluno.nota2) / 2
    console.log(`A média do estudante ${aluno.nome} é`, average)
}