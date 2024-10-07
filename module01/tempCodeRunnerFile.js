
let count = 0
let num = 101

do{
    let primo = 0
    for(let i = 1; 1 <= num; i++){
        if(num % 1 === 0){
            primo++
        }
    } 
    // percorrer por todos os números e ver quantas vezes ele é divisível

    if(primo === 2){ // divisível por 1 e ele mesmo
        console.log(num)
        count++ // determinar o final do meu loop 
    }

    num++ // aumenta o numero e roda de novo
} while (count < 50) 