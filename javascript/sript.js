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
    // Шаг 2 отправка после формы паспорта
    const pasport = document.querySelector('.btn__form_step2');
    const formStep2 = document.querySelector('.form_step_2');


    function step2() {
        document.querySelector('.form_3').style.display = 'none';
        formStep2.style.display = 'none';
        document.querySelector('.form__content_1').classList.add('step3');
        document.querySelector('.step3').classList.remove('form__content_1');
        document.querySelector('.row_2_step').style.display = 'grid';
        document.querySelector('.conset__step3').style.display = 'grid';
    }

    pasport.addEventListener('click', step2);
    // шаг 3 отправка после всей формы 
    const step4_btn = document.querySelector('.btn__form_step3');
    
    function stepFour() {
        document.querySelector('.step3').classList.add('step4');
        document.querySelector('.step4').classList.remove('step3');
        document.querySelector('.row_1').style.display = 'none';
        document.querySelector('.row_2_step').style.display = 'none';
        document.querySelector('.conset__step3').style.display = 'none';
        document.querySelector('.zayvka').style.display = 'grid';
    }

    step4_btn.addEventListener('click', stepFour);

})

function border_b() {
    let chec1 = document.querySelector('.check1');
    const ch1 = document.querySelector('.form__contetn__chebox_1');
    if (chec1.checked) {
        ch1.style.border = "2px solid #0061d9";
        ch1.style.backgroundColor = "#ffffff";
    } else {
        ch1.style.border = "none";
        ch1.style.backgroundColor = "#f5f5f7";
    }
}
function border_b2() {
    let chec2 = document.querySelector('.check2');
    const ch2 = document.querySelector('.form__contetn__chebox_2');
    if (chec2.checked) {
        ch2.style.border = "2px solid #0061d9";
        ch2.style.backgroundColor = "#ffffff";
    } else {
        ch2.style.border = "none";
        ch2.style.backgroundColor = "#f5f5f7";
    }
}
