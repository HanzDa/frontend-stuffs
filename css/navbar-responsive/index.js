const toggleMenu = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

toggleMenu.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu-open')

    if (navMenu.classList.contains('nav-menu-open')) {
        toggleMenu.setAttribute('aria-label', 'close menu')
    }else {
        toggleMenu.setAttribute('aria-label', 'open menu')
    }
})