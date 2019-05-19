// $(window).on('load', function(){
//     $('#preloader').fadeOut(1000);
// })
let preloader = document.getElementById('preloader');

window.onload = function(){
    setTimeout(()=>{
        preloader.style.transition = "opacity 1s ease-out";
        preloader.style.opacity = '0';
    }, 2000);
};