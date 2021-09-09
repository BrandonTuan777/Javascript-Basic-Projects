const open1 = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


open1.addEventListener('click',()=>{
    container.classList.add('show-nav');
})