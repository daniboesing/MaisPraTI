/* Objetivo: Dado um objeto produto com várias propriedades, crie uma função que retorna 
um novo objeto contendo apenas as propriedades cujo valor seja maior que um valor específico. 
Use for in para filtrar as propriedades. */ 

let produto = {
    oQueÉ: 'xícara',
    quantoCusta: 20,
    quantoCabe: 250,
    quantidadeParaVenda: 30,
    feitoDe: 'cerâmica'
}

function algumasPropriedades(produto, limitante) {
    let resultado = {}

    for(let key in produto){
        if(produto[key] < limitante){
            resultado[key] = produto[key]
        }
    }
    return resultado
}

let limitante = 45
let produtoAlgumasPropriedades = algumasPropriedades(produto, limitante)

console.log(produtoAlgumasPropriedades)