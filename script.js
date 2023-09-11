const navTopLeft = document.getElementById('top_left');
const navTopRight = document.getElementById('top_right');
const navBottom = document.getElementById('bottom');
const anchorWelcome = document.getElementById('welcome');
const anchorProjects = document.getElementById('projects');
const anchorContact = document.getElementById('contact');

const setNav = (targetNav, dataSource) => {
    targetNav.innerText = dataSource.dataset.name;
    targetNav.href = dataSource.dataset.pointer;
};

$(window).scroll(function() {
    if(($(window).scrollTop() + $(window).height()) > ($(document).height() - $('#contact').height() * 2)){
        setNav(navBottom, anchorContact);
        setNav(navTopLeft, anchorWelcome);
        setNav(navTopRight, anchorProjects);
    } else if($(window).scrollTop() < ($('#welcome').offset().top * 2)) {
        setNav(navBottom, anchorWelcome);
        setNav(navTopLeft, anchorProjects);
        setNav(navTopRight, anchorContact);
    } else {
        setNav(navBottom, anchorProjects);
        setNav(navTopLeft, anchorContact);
        setNav(navTopRight, anchorWelcome);
    }
});