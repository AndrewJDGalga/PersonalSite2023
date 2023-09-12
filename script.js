const navTopLeft = document.getElementById('top_left');
const navTopRight = document.getElementById('top_right');
const navBottom = document.getElementById('bottom');
const anchorWelcome = document.getElementById('welcome');
const anchorProjects = document.getElementById('projects');
const anchorContact = document.getElementById('contact');
let mobile_active = false;

const setNav = (targetNav, dataSource) => {
    targetNav.innerText = dataSource.dataset.name;
    targetNav.href = dataSource.dataset.pointer;
};

const closeMobileMenu = () => {
    $('#mobile_menu-button').css({'clip-path':'polygon(0 0, 0 100%, 100% 50%)', 'background-color':'var(--light-green)'});
    $('#mobile_menu-menu').css({'display':'none'});
    mobile_active = false;
}

$(window).scroll( () => {
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

$('#mobile_menu-button').click( ()=> {
    if(!mobile_active) {
        $('#mobile_menu-button').css({'clip-path':'polygon(100% 0, 0 0, 50% 100%)', 'background-color':'var(--dark-green)'});
        $('#mobile_menu-menu').css({'display':'flex'});
        mobile_active = true;
    } else {
        closeMobileMenu();
    }
});

$('#mobile_menu-menu').click( (e)=> {
    const target = e.target.closest('a');
    if(target) {
        closeMobileMenu();
    }
});