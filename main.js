const page = document.getElementById('page')
const pageContent = document.getElementById('page-content')
const loader = document.getElementById('loader')
const animation = document.getElementById('animation')



// change loading time...
page.onload = () => {
    setTimeout(() => {
        loader.style.display = 'none'
        pageContent.style.display = 'block'
    }, 0);
}



