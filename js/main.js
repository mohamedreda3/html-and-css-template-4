var menu = document.querySelector('.menu');
menu.onclick = () => {
    document.querySelector('nav ul').classList.toggle('active');
}

window.onscroll = () => {
    document.documentElement.scrollTop > document.querySelector('header').offsetHeight ? document.querySelector('nav').classList.add('sticky') : document.querySelector('nav').classList.remove('sticky')
}

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq, index) => {
    faq.onclick = (e) => {
        faqs.forEach((faq_1, i) => index != i ? faq_1.classList.remove('active') : null);
        e.currentTarget.classList.contains('active')
            ? e.currentTarget.classList.remove('active')
            : e.currentTarget.classList.add('active')
    }
})