const toggleMenu = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.nav-menu')

toggleMenu.addEventListener('click', () => {
    let open = true
    navMenu.classList.toggle('nav-menu-open')
})