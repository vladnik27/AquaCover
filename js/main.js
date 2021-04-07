$(document).ready(function () {
    const navBurger = document.querySelector('.nav__movil-burger');
    navBurger.classList.remove('activ');
    navBurger.addEventListener('click', function(){
        this.classList.toggle('activ');
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 5,
        autoplay: true,
        smartSpeed: 1000,
        // autoplayTimeout:2000,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav: false,
                touchDrag: true,
                dots: true,
                loop:true
            },
            600:{
                items: 2,
                touchDrag:true,
                nav: false,
                dots: true,
                loop:true
            },
            1000:{
                items: 3,
                touchDrag:true,
                nav: false,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<svg width="50" height="50" viewBox="0 0 24 24" fill="#61619a"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>',
                    '<svg width="50" height="50" viewBox="0 0 24 24" fill="#61619a"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>'
                ]
            }
        }
    });
});
console.log("ddddd");