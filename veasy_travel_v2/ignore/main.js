let openMark = document.getElementById('open-mark')
let slideMenu = document.getElementById('slide-menu')
let closeMark = document.getElementById('close-mark')
let body = document.getElementById('body')

openMark.onclick = () => {
    slideMenu.style.left = '0'
    document.body.style.overflow = 'hidden'
}

slideMenu.onclick = () => {
    document.body.style.overflow = 'auto'
    slideMenu.style.left = '-100%'
}

closeMark.onclick = () => {
    slideMenu.style.left = '-100%'
}