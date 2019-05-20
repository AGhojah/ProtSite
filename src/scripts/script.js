// $(window).on('load', function(){
//     $('#preloader').fadeOut(1000);
// })
let preloader = document.getElementById('preloader');

// Time in seconds for fadeout effect
let j = 2;

window.onload = function(){
    setTimeout(()=>{
        preloader.style.transition = `opacity ${j}s ease-out`;
        preloader.style.opacity = '0';
        setTimeout(()=>{
            preloader.style.display = 'none';
        }, j*1000);
    }, 10);
};