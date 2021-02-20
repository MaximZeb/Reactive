document.addEventListener('DOMContentLoaded', function (){
// первый шаг выбор
const White = document.querySelector('.white');
const Grey = document.querySelector('.grey');
const Btn__form = document.querySelector('.btn__form');


White.addEventListener('click',function (){
    White.classList.remove('white');
    White.classList.add('grey');
});

Grey.addEventListener('click',function (){
    Grey.classList.remove('grey');
    Grey.classList.add('white');
});

Btn__form.addEventListener('click', function () {
    document.querySelector('.form_1').style.display = 'none';
})


})


