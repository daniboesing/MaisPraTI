/* Objetivo: Crie um array de objetos funcionarios, onde cada objeto
contém informações como nome, cargo, e salario. Use for of para filtrar
e exibir apenas os funcionários cujo salário seja maior que um valor
específico.
*/

let funcionarios = [
    {
        nome: 'Fernando',
        cargo: 'Psicólogo',
        salario: 20000, 
    },
    {
        nome: 'Adriana',
        cargo: 'faxineira',
        salario: 2500, 
    },
    {
        nome: 'Bárbara',
        cargo: 'Médica',
        salario: 35000, 
    }
]

for(let funcionario of funcionarios){
    if(funcionario.salario >= 3000){
        console.log(`O funcionário ${funcionario.nome} cujo cargo é ${cargo} recebe um salário superior a 3.000 reais`)
    }
}