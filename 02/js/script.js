

let form = document.querySelector('form');
let btn = document.querySelector('.button');
let sum = document.querySelector('.sum');
let select = document.querySelectorAll('.select');
let arr = Array.from(select);

let input = document.querySelectorAll('input');
let inputArr = Array.from(input);
let inputCheck = 0;
let arrValue = 0;
let checkValue = 0;
// ---------випадашки

form.addEventListener('change', function () {
    arrValue = 0;
    for (let i = 0; i < arr.length; i++) {
        arrValue += +arr[i].value;
    }
    checkValue = 0;
    for (let j = 0; j < inputArr.length; j++) {
        inputCheck = inputArr[j];
        if (inputCheck.checked) {
            checkValue += 10;
        }
    };
    sum.innerHTML = arrValue + checkValue;
    
        if (arr[0].value > 0 && arr[1].value > 0 && arr[2].value > 0) {
            btn.disabled = false;
        }
        if (arr[0].value == 0 || arr[1].value == 0 || arr[2].value == 0) {
            btn.disabled = true;
        }
});

// --------------- відправка форми + модальне вікно
const elemModal = document.querySelector("#modal");
const modal = new bootstrap.Modal(elemModal);

function sec() {

    modal.hide();
};

btn.onclick = function (e) {
    e.preventDefault()
    setInterval(sec, 5000);

};
