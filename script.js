const navTopLeft = document.getElementById('top_left');
const navTopRight = document.getElementById('top_right');
const navBottom = document.getElementById('bottom');
const anchorWelcome = document.getElementById('welcome');
const anchorProjects = document.getElementById('projects');
const anchorContact = document.getElementById('contact');
let mobile_active = false;

const setCurNavDesktop = (targetNav, dataSource) => {
    targetNav.innerText = dataSource.dataset.name;
    targetNav.href = dataSource.dataset.pointer;
};

const setCurNavMobile = (current, next) => {
    current.classList.remove('navigation_button-current');
    next.classList.add('navigation_button-current');
};

const closeMobileMenu = () => {
    $('.mobile_menu-icon').css({'clip-path':'polygon(0 0, 0 100%, 100% 50%)', 'background-color':'var(--light-green)'});
    $('#mobile_menu-menu').css({'display':'none'});
    mobile_active = false;
}

$(window).scroll( () => {
    if( $(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
        setCurNavDesktop(navBottom, anchorContact);
        setCurNavDesktop(navTopLeft, anchorWelcome);
        setCurNavDesktop(navTopRight, anchorProjects);

        if(document.getElementsByClassName('navigation_button-current')[0] !== document.getElementById('mobile_menu-contact')) {
            setCurNavMobile(document.getElementsByClassName('navigation_button-current')[0], document.getElementById('mobile_menu-contact'));
        }
    } else if($(window).scrollTop() < ($('#welcome').offset().top * 2)) {
        setCurNavDesktop(navBottom, anchorWelcome);
        setCurNavDesktop(navTopLeft, anchorProjects);
        setCurNavDesktop(navTopRight, anchorContact);

        if(document.getElementsByClassName('navigation_button-current')[0] !== document.getElementById('mobile_menu-welcome')) {
            setCurNavMobile(document.getElementsByClassName('navigation_button-current')[0], document.getElementById('mobile_menu-welcome'));
        }
    } else {
        setCurNavDesktop(navBottom, anchorProjects);
        setCurNavDesktop(navTopLeft, anchorContact);
        setCurNavDesktop(navTopRight, anchorWelcome);

        if(document.getElementsByClassName('navigation_button-current')[0] !== document.getElementById('mobile_menu-projects')) {
            setCurNavMobile(document.getElementsByClassName('navigation_button-current')[0], document.getElementById('mobile_menu-projects'));
        }
    }
});

$('#mobile_menu-button').click( ()=> {
    if(!mobile_active) {
        $('.mobile_menu-icon').css({'clip-path':'polygon(100% 0, 0 0, 50% 100%)', 'background-color':'var(--dark-green)'});
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