/* Objetivo: Crie um objeto carro com propriedades como marca, modelo,
ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
valores no console. */
let carros = {
    Marca: 'Ford',
    Modelo: 'Polo',
    Ano: 2020,
    Cor: 'azul marinho'
}

for(let key in carros){
    console.log(`${key}: ${carros[key]}`)
}
