$(document).ready(function(){

    let ham = document.querySelector('.hamburger');
    let mnav= document.querySelector('.mobile-nav');
    let times = document.querySelector('.times');

    ham.addEventListener('click',function(){
        mnav.classList.add('open');
        console.log('yo babe ! go ahead');
    });

    times.addEventListener('click',function(){
        mnav.classList.remove('open');
    });
});

