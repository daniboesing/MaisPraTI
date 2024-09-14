/* Objetivo: Crie um objeto empresa com uma propriedade departamentos,
que é um array de objetos. Cada departamento tem um nome e uma lista
de funcionarios. Use for in e for of para iterar sobre os departamentos
e seus funcionários, exibindo o nome de cada funcionário junto com o
departamento ao qual pertence.*/

let empresa = {
    departamentos: [
        {
            nome: 'administrativo',
            listaFuncionarios: 'Pedro, Artur, Rafael',
        }, 

        {
            nome: 'financeiro',
            listaFuncionarios: 'João, Paola, Renato',
        },

        {
            nome: 'marketing',
            listaFuncionarios: 'Fabiana, Mariana, Duda',
        }
    ]
}

for(let key in empresa){
    console.log(`Os ${key} eixstentes são divividos em: `)
    for(let departamento of empresa.departamentos){
        console.log(`${departamento.nome}: ${departamento.listaFuncionarios}`)
    }
}