// https://github.com/john-smilga/javascript-basic-projects/tree/master/04-navbar

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function(){
    // if(links.classList.contains('show-links')){
    //     links.classList.remove('show-links');
    // }
    // else{
    //     links.classList.add('show-links');
    // }
    links.classList.toggle('show-links');
})