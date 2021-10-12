let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('active');
    loginBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
}
let shoppingCart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () =>{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('active');
    loginBtn.classList.remove('active');
}
let loginBtn = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
    loginBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    menuBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
}
let menuBtn = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    menuBtn.classList.toggle('active');
    searchForm.classList.remove('active');
    loginBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    menuBtn.classList.remove('active');
    loginBtn.classList.remove('active');
    shoppingCart.classList.remove('active');
}
/*var swiper = new Swiper(".product-slider",{
    loop: true,
    spaceBetween: 30,
    autoplay:{
        delay:7500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1020:{
            slidesPerView: 3,
        },
    },
});
var swiper = new Swiper(".review-slider",{
    loop: true,
    spaceBetween: 30,
    autoplay:{
        delay:5500,
        disableOnInteraction: false,
    },
    centeredSlides:true,
    breakpoints:{
        0:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2,
        },
        1020:{
            slidesPerView: 3,
        },
    },
});*/
$('.product-slider,.review-slider').mhSlider({
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive:{
        0:{
            items: 1
        },
        768:{
            items: 2
        },
        1020:{
            items: 3
        },
    },
});