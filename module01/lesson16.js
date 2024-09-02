class Node{
    constructor(data){
        this.data = data
        this.next = null // next: próximo 
        this.previous = null // previous: anterior
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null // primeiro elemento
        this.tail = null // último elemento
        this.size = 0 // tamanho 
    }

    add(data){
        let newNode = new Node(data)

        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail 
            this.tail = newNode
        }

        this.size++
    }

}


insertAt(data, index)
    if(index < 0 || index > this.size){
        return console.log('index fora dos limites')
    }

    let newNode = new Node(data)
    let current = this.head // primeiro elemento é current

    if(index === 0){
        if(this.head === null){ 
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.previous = newNode
            this.head = newNode
        }
    } else if(index === this.size){
        this.tail.next = newNode
        newNode.previous = this.tail 
        this.tail = newNode
    } else {
        for(let i = 0; i < index; i++){
            current = current.next
        }

        newNode.next = current
        newNode.previous = current.previous 
        current.previous.next = newNode
        current.previous = newNode
    }

    this.size++


removeAt(index) 
    if(index < 0 || index >= this.size){
        return console.log('index fora dos limites')

    }
    let current1 = this.head 

    if(index === 0){
        this.head = this.head.next

        if(this.head === null){ // p ver se não era o último elemento
           this.head.previous = null  
        } else {
            this.taill = null 
        }
    } else if(index === this.size - 1){
        this.tail = this.tail.previous
        this.tail.next = null 
    } else {
        for(let i = 0; i < index; i++){
            current = current.next 
        }

        current.previous.next = current.next
        current.next.previous = current.previous
    }

    this.size--


getData(index)
    if(index < 0 || index >= this.size){
        return console.log('index fora dos limites')
        }

        let current2 = this.head 

        for(let i = 0; i < index; i++){
            current = current.next
        }

        return current.data 


print()
    let current3 = this.head // primeiro elemento
    let result = [] // armazena cada dado num array 

    while(current !== null){
        result.push(current.data)
        current = current.next
    }

    console.log(result.join(' <=> '))


getSize()
    return this.size




let lista = new DoublyLinkedList()

lista.add(10)
lista.add(20)
lista.add(30)
lista.add(40)
lista.add(50)

lista.print()

lista.insertAr(5, 0) // index = posicao 
lista.print()

lista.insertAr(15, 3)
lista.print()

lista.insertArt(55, lista.getSize()) // nos mesmos fizemos getSize
lista.print()

lista.removeAt(lista.getSize() - 1)

console.log('elemento na posição 2:', lista.getData(2)) // 15
console.log('a lista está vazia?', lista.isEmpty()) // false
console.log('tamanho da lista:', lista.getSize()) // 5