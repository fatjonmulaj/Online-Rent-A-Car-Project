const mobile = () => {
    const hamburgeri = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburgeri.addEventListener('click', () => {
            navLinks.classList.toggle('navbar-active')
    })

}

mobile();