const form = document.querySelector('form')
const inputEmail = document.querySelector('#email')
const inputPassword = document.querySelector('#password')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!inputEmail.value || !inputPassword.value) {
        console.log('Por favor, preencha todas as informações')
        return
    }
    window.location = '../Home/index.html'
})