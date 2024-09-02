length // retorna o tamanho do meu array 

// soma dos elementos de um array 

let sum = 0 
let arr = [10, 20, 30, 40]

for(let i = 0; i < arr.length; i++){ // enquanto meu i for menor doq 4 (tamanho do array)
    sum += arr[1]
}

console.log(sum)

// encontre o maior número de um array 

let max = arr[0] // 0 é valor de referencia (posicao zero do array)

for(let j = 0; j <arr.length; j++){
    if(arr[j] > max){
        max = arr[j]
    }
}
console.log(max)
