//forEach

let taskList = document.getElementById('task-list')
let taskInput = document.getElementById('task-input')
let addTaskBtn = document.getElementById('add-task-btn')
let filters = document.querySelectorAll('.filter-btn')

addTaskBtn.addEventListener('click', () => {
    let taskTest = document.taskInput.value.trim() // funcao trim remove os espacos em branco

    if(taskTest) {
        let li = createTaskElement(taskTest)
        taskList.appendChild(li)
        taskInput.value = ''
    }
})

function createTaskElement(text) {
    let li = document.createElement('li')

    li.textContent = text

    let removeBtn = document.createElement('span') // nao é um botao em si 
    removeBtn.textContent = 'Remover'
    removeBtn.classList.add('remove-btn')

    removeBtn.addEventListener('click', li.remove()) // () vai chamar automaticamente a funcao

    li.appendChild(removeBtn) // adiciona o elemento da tarefa na funcao

    let editBtn = document.createElement('span')
    editBtn.textContent = 'Editor'
    editBtn.classList.add('edit-btn')

    editBtn.addEventListener('click', () => editTask(li))

    li.appendChild(editBtn)

    li.addEventListener('click', () => {
        if(!li.classList.contains('editing')){
            li.classList.toggle('completed')
        }
    })

    return li
}

function editTask(li) {
    if(!li.classList.contains('editing')){
        li.classList.add('editing')

    let input = document.createElement('input')
    input.type = 'text' 
    input.value = li.firstChild.textContent //conteúdo atual do primeiro filho da minha li

    li.firstChild.replaceWith(input)

    input.addEventListener('blur',() => { // quando perde o foco 
        li.classList = remove('editing')

        let newText = input.value.trim()

        if(newText) {
            input.replaceWith(document.createTextNode(newText))
        } else {
            li.remove()
        }
    })

        input.focus
    }
}

filters.forEach(filter => {
    filter.addEventListener('click', () => {
        filters.forEach(f => f.classList.remove('active-filter'))
        filter.classList.add('active-filter')

        let filterType = filter.id
        let allTasks = task.list.querySelectorAll('li')

        allTasks.forEach(task => {
            switch(filterType){
                case 'filter-all':
                    task.style.display = ''
                    break
                case 'filter-completed':
                    task.style.display = task.classList.contains('completed') ? '' : 'none'
                    break
                case 'filter-not-completed':
                    task.style.display = task.classList.contains('completed')? 'none' : ''
                    break
            }

        })
    })
})