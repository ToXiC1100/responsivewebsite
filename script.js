let searchbtn = document.querySelector('#search-btn');
let searchbar = document.querySelector('.search-bar-cont');
let formBtn = document.querySelector('#login-btn');
let loginForm= document.querySelector('.login-form-cont');
let formClose= document.querySelector('#close');
let menu = document.querySelector("#menu-bar");
let navbar= document.querySelector('.navbar');
let videoBtn= document.querySelectorAll('.video-btn');

window.onscroll = () =>{
    searchbtn.classList.remove('fa-times');
    searchbar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    loginForm.classList.remove('active')
}

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
searchbtn.addEventListener('click',() =>{
    searchbtn.classList.toggle('fa-times');
    searchbar.classList.toggle('active');
});

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active')
});
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.control .active') .classList.remove('active');
        btn.classList.add('active');
        let src= btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});
