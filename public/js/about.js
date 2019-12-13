

const burger_menu = document.querySelector('.burger');
const nav_links = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links ul li');
const ul = document.querySelector('.nav-links ul')

console.log(links);


burger_menu.addEventListener('click', () => {

    nav_links.classList.toggle('toggle');

    burger_menu.classList.toggle('toggles')
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navlinksfade ${index/4}s ease-in-out forwards .7s`;
        }
    })

})
