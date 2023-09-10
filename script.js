const btnTopLeft = document.getElementById('top_left');
const btnTopRight = document.getElementById('top_right');
const btnBottom = document.getElementById('bottom');
const anchorWelcome = document.getElementById('welcome');
const anchorProjects = document.getElementById('projects');
const anchorContact = document.getElementById('contact');

console.log(anchorWelcome.getBoundingClientRect().y);
console.log(anchorProjects.getBoundingClientRect().y);
console.log(anchorContact.getBoundingClientRect().y);

window.addEventListener('scroll', () => {
    if(window.scrollY >= anchorContact.getBoundingClientRect().y){
        btnBottom.innerText = anchorContact.dataset.name;
        btnBottom.href = anchorContact.dataset.pointer;


    }
});
