const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

NavMenu.addEventListener('click', animarMenu)

function animarMenu() {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
}

const btn = document.getElementById("btn-topo")

btn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

function ocultar() {
    if (window.scrollY > 10) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()