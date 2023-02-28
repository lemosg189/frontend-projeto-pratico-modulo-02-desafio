const form = document.querySelector('form');

const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

form.addEventListener('submit', event => {
    event.preventDefault()
    event.stopPropagation()

    if (!nome.value || !email.value || !password.value) {
        console.log("Por favor, preencha os dados solicitados")
        return
    }

    window.location = '../Login/index.html'
})