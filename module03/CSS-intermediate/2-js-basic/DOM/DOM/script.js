let titulo = document.getElementById('título')
console.log(titulo.textContent)

titulo.textContent = 'aula de JS básico' // modifica o titulo
console.log(titulo.textContent)

titulo.innerHTML = 'Mudei o conteúdo do título novamente' // modifica o titulo

titulo.style.color = "blue" // css através do js

let botao = document.getElementById('botao')

function alertaClique(){
    alert('você clicou no botao')
}

botao.addEventListener('click', alertaClique())

botao.addEventListener('click', () => {
    alert('você clicou no botao')
}) 
// dom interage com eventos/movimentos (passada de mouse)
// funcao que sempre estará de olho nos movimentos

// dom consegue inserir 

let novoParagrafo = document.createElement('p')
novoParagrafo.innerHTML = 'Este é um parágrafo criado via JS' // nao aparece ainda no site
document.body.appendChild(novoParagrafo) // adicionando no site

// e retirar elementos

let paragrafo = document.querySelector('.paragrafo') //getNameByClasses
paragrafo.remove()

