var lis = document.querySelectorAll('nav ul li');

const addActiveClass = (i = -1) => {
    lis.forEach((item, index) => {
        item.onclick = (e) => {
            lis.forEach(item => item.classList.remove('active'));
            e.currentTarget.classList.add('active');
        }
    })
    if (i == -1) {
        return null
    } else {
        lis.forEach(item => item.classList.remove('active'));
        return lis[i].classList.add('active');
    }
}
addActiveClass();
//  ===============================================================

let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach((section, index) => {
        document.documentElement.scrollTop >= section.offsetTop && document.documentElement.scrollTop <= (section.offsetTop + section.offsetHeight) ? addActiveClass(index) : console.log("No-Sections");
    })
}
//  ===============================================================

ScrollReveal().reveal('.info-box-c:nth-child(1)', {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.info-box-c:nth-child(2)', {
    distance: '200%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.info-box-c:nth-child(3)', {
    distance: '250%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);
//  ===============================================================

ScrollReveal().reveal('form input:nth-child(1)', {
    distance: '150%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('form input:nth-child(2)', {
    distance: '200%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('form textarea', {
    distance: '250%',
    origin: 'bottom',
    opacity: 0,
    reset: true

}, 800);

ScrollReveal().reveal('form button', {
    distance: '300%',
    origin: 'right',
    opacity: 0,
    reset: true
}, 1000);
//  ===============================================================

ScrollReveal().reveal('.serv-box:nth-child(1)', {
    distance: '250%',
    origin: 'left',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.serv-box:nth-child(2)', {
    distance: '250%',
    origin: 'right',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.serv-box:nth-child(3)', {
    distance: '250%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);
//  ===============================================================
ScrollReveal().reveal('.expr-box:nth-child(1)', {
    distance: '250%',
    origin: 'left',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.expr-box:nth-child(2)', {
    distance: '250%',
    origin: 'righ',
    opacity: 0,
    reset: true
}, 800);
// ================================================
// c4

ScrollReveal().reveal('.c4:nth-child(1)', {
    distance: '250%',
    origin: 'left',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.c4:nth-child(2)', {
    distance: '250%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.c4:nth-child(3)', {
    distance: '250%',
    origin: 'right',
    opacity: 0,
    reset: true
}, 800);
// ================================================

ScrollReveal().reveal('.c2 p:not(.c3 p)', {
    distance: '250%',
    origin: 'right',
    opacity: 0,
    reset: true
}, 1100);

ScrollReveal().reveal('.c2 a', {
    distance: '250%',
    origin: 'left',
    opacity: 0,
    reset: true
}, 800);
// ===============================================

// images

ScrollReveal().reveal('.images img:nth-child(1)', {
    distance: '250%',
    origin: 'left',
    opacity: 0,
    reset: true
}, 800);

ScrollReveal().reveal('.images img:nth-child(2)', {
    distance: '250%',
    origin: 'top',
    opacity: 0,
    reset: true
}, 900);

ScrollReveal().reveal('.images img:nth-child(3)', {
    distance: '250%',
    origin: 'right',
    opacity: 0,
    reset: true
}, 1000);
// ======================================

// .m1 .avatar img

document.querySelectorAll('.m1 ul li').forEach((li, index) => {
    ScrollReveal().reveal(`.m1 ul li:nth-child(${index + 1})`, {
        distance: `${250 + (index * 25)}%`,
        origin: 'top',
        opacity: 0,
        reset: true
    }, 800 + (25 * index));
})

// ==================================

ScrollReveal().reveal('.m1 .avatar img', {
    distance: '250%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 1000);
// ==================================

ScrollReveal().reveal('.srd', {
    distance: '250%',
    origin: 'top',
    opacity: 0,
    reset: true
}, 1000);
// ==================================

ScrollReveal().reveal('#home .btns a:nth-child(1)', {
    distance: '250%',
    origin: 'top',
    opacity: 0,
    reset: true
}, 1000);

ScrollReveal().reveal('#home .btns a:nth-child(2)', {
    distance: '300%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 1100);
// ==================================
// #home .home-information p 
// #home .home-information h2

ScrollReveal().reveal('#home .home-information p:nth-child(1)', {
    distance: '250%',
    origin: 'top',
    opacity: 0,
    reset: true
}, 1100);

ScrollReveal().reveal('#home .home-information h2', {
    distance: '220%',
    origin: 'top',
    opacity: 0,
    reset: true
}, 1000);

ScrollReveal().reveal('#home .home-information p:nth-child(2)', {
    distance: '210%',
    origin: 'top',
    opacity: 0,
    reset: true
}, 800);


ScrollReveal().reveal('footer', {
    distance: '210%',
    origin: 'bottom',
    opacity: 0,
    reset: true
}, 800);