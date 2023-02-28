const form = document.querySelector('form')
const logout = document.querySelector('.img-header')
const modalAdd = document.querySelector('.background')
const fechar = document.querySelector('.fechar')
const adicionar = document.querySelector('.add')
const addNoModal = document.querySelector('#add')
const modalTrash = document.querySelector('.backgrd')
const addModalTrash = document.querySelector('.trash')
const close = document.querySelector('#fechar')
const deletar = document.querySelector('#del')
const cancelar = document.querySelector('#cancel')



logout.addEventListener('click', (event) => {
    window.location = '../Login/index.html'
})

adicionar.addEventListener('click', (event) => {
    modalAdd.classList.remove('hidden')
})

fechar.addEventListener('click', (event) => {
    modalAdd.classList.add('hidden')
})

addModalTrash.addEventListener('click', (event) => {
    modalTrash.classList.remove('hide')
})

close.addEventListener('click', (event) => {
    modalTrash.classList.add('hide')
})

deletar.addEventListener('click', (event) => {
    modalTrash.classList.add('hide')
})

cancelar.addEventListener('click', (event) => {
    modalTrash.classList.add('hide')
})

addNoModal.addEventListener('click', (event) => {
    modalAdd.classList.add('hidden')
})

clean.addEventListener('click', (event) => {
    nome.value = ''
    email.value = ''
    phone.value = ''

})


