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

let sections = document.querySelectorAll('section');
window.onscroll = () => {
    sections.forEach((section, index) => {
        document.documentElement.scrollTop >= section.offsetTop && document.documentElement.scrollTop <= (section.offsetTop + section.offsetHeight) ? addActiveClass(index) : console.log("No-Sections");
    })
}


