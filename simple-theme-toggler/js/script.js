toggler.addEventListener('click', toggleDarkMode)

function toggleDarkMode(){
    document.querySelector('#toggler').classList.toggle('on')
    document.querySelector('body').classList.toggle('dark')
}