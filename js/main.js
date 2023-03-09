
window.onscroll = () => {
    document.documentElement.scrollTop > document.querySelector('header').offsetHeight + 10 ?
        document.querySelector('nav').classList.add('sticky')
        : document.querySelector('nav').classList.remove('sticky');
}

document.querySelector('.menu').onclick = () => {
    document.querySelector('nav ul').classList.toggle('active');
}


var questionBoxess = document.querySelectorAll('.question-box');

questionBoxess.forEach((box, index) => {
    box.onclick = (e) => {
        questionBoxess.forEach((box, _i) => index == _i ? null : questionBoxess[_i].classList.remove('active'))
        e.currentTarget.classList.toggle('active');
    }
})

