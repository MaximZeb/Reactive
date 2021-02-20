document.addEventListener('DOMContentLoaded', function () {
    // первый шаг выбор
    const Row_4 = document.querySelector('.row_4');
    const Row_6 = document.querySelector('.row_6');
    const Btn__form = document.querySelector('.btn__form');

    function variant1() {
        Row_6.classList.add('white');
        document.querySelector('.row_6_c').classList.remove('black');
        document.querySelector('.row_4_c').classList.add('black');
        Row_4.classList.add('grey');
    }

    function variant2() {
        Row_4.classList.remove('grey');
        document.querySelector('.row_6_c').classList.add('black');
        document.querySelector('.row_4_c').classList.remove('black');
        Row_6.classList.remove('white');
    }

    Row_4.addEventListener('click', variant2);

    Row_6.addEventListener('click', variant1);


    Btn__form.addEventListener('click', function () {
        document.querySelector('.form_1').style.display = 'none';
        document.querySelector('.form__content').classList.add('form__content_1');
        document.querySelector('.form__content').classList.remove('form__content');
        document.querySelector('.row_1').style.display = 'grid';
        document.querySelector('.form_2').style.display = 'none';
        document.querySelector('.form_step_2').style.display = 'grid';
    })






})


