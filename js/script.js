
// ------Показать/скрыть документы------

function showQualification() {
    document.querySelector('.advantages_qualification').classList.toggle('hide')

    if (document.querySelector(".qualification_more").textContent == "Подробнее") {
        document.querySelector(".qualification_more").textContent = "Скрыть"
    } else {
        document.querySelector(".qualification_more").textContent = "Подробнее"
    }
}

//------Прокрутка до элемента------

function slowScroll(place) {


    document.querySelector(place).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

let body = document.querySelector("body");
let bHeight = body.getBoundingClientRect().height;
let screenY = window.innerHeight / 1.01;
let btn = document.querySelector("#menu");

window.onscroll = function() {
  if (pageYOffset > screenY) {
    btn.classList.remove("hide");
    document.querySelector('.menu-bg').classList.remove("hide");
  } else {
    btn.classList.add("hide");
    document.querySelector('.menu-bg').classList.add("hide");
  }
}


//------Отправка формы-----

/*const form = document.getElementById("form");
form.addEventListener('submit', formSend);

async function formSend(e) {

    e.preventDefault();

    let error = formValidate(form);
    console.log(error)

    let formData = new FormData(form);

    if (error === 0) {

        form.classList.add('_sending');

        let responce = await fetch('sendmail.php', {
            method: 'POST',
            body: formData
        });

        if (responce.ok) {
            let result = await responce.json();
            alert('result.message');
            formPreview.innerHtml = '';
            form.reset();
        } else {
            alert('Упс, что-то пошло не так :(');
        }

    } else {
        alert('Заполните обязательные поля')
    }
}

function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        if (input.classList.contains('_email')) {
            if (emailTest(input)){
                formAddError(input);
                error++;
            }   
        } else if (input.getAttribute('type') === 'checkbox' && input.checked === 'false') {
            formAddError(input);
            error++;
        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }


    }
}

function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error')
}

function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error')
}

function emailTest(input) {
   return !/^\w+([\.-]?\w+)@\w+([\.-]?\w+)*(\. \w{2,8})+$/.test(input.value);
}*/


