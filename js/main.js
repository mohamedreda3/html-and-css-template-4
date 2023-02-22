var menu = document.querySelector('.menu');
menu.onclick = () => {
    document.querySelector('nav ul').classList.toggle('active');
}

window.onscroll = () => {
    document.documentElement.scrollTop > document.querySelector('header').offsetHeight ? document.querySelector('nav').classList.add('sticky') : document.querySelector('nav').classList.remove('sticky')
}