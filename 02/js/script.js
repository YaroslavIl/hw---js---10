

let form = document.querySelector('form');
let btn = document.querySelector('.button');
let sum = document.querySelector('.sum');
let select = document.querySelectorAll('.select');
let arr = Array.from(select);

let input = document.querySelectorAll('input');
let inputArr = Array.from(input);
let inputSum = 0;
let arr1 = 0;
let arr2 = 0;
let arr3 = 0;


// ---------випадашки

form.addEventListener('change', function (e) {
    for (let i = 0; i < arr.length; i++) {
    }

        if (arr[0]) {

            if (arr[0].value > 0) {
                sum.innerHTML = +sum.innerHTML + +arr[0].value;
                sum.innerHTML = +sum.innerHTML - arr1;
            }
            if (arr[0].value == 0) {
                sum.innerHTML = +sum.innerHTML - arr1;
                 arr1 = 0;;
            }
            arr1 = arr[0].value;
        }

        if (arr[1]) {
            sum.innerHTML = +sum.innerHTML + +arr[1].value;

            if (arr[1].value > 0) {
                sum.innerHTML = +sum.innerHTML - arr2;
            }
            if (arr[1].value == 0) {
                sum.innerHTML = +sum.innerHTML - arr2;
                arr2 = 0;
            }
            arr2 = arr[1].value;
        }

        if (arr[2]) {
            sum.innerHTML = +sum.innerHTML + +arr[2].value;

            if (arr[2].value > 0) {
                sum.innerHTML = +sum.innerHTML - arr3;
            }
            if (arr[2].value == 0) {
                sum.innerHTML = +sum.innerHTML - arr3;
                 arr3 = 0;;
            }
            arr3 = arr[2].value;
        }

        if (arr[0].value > 0 && arr[1].value > 0 && arr[2].value > 0) {
            btn.disabled = false;
        }
        if (arr[0].value == 0 || arr[1].value == 0 || arr[2].value == 0) {
            btn.disabled = true;
        }
    });




//  ------------- чекбокси
function p() {
    if (this.checked) {
        sum.innerHTML = +sum.innerHTML + 10;
    }
    else {
        sum.innerHTML = +sum.innerHTML - 10;
    };
};

for (let j = 0; j < inputArr.length; j++) {
    inputSum = inputArr[j];
    inputSum.addEventListener('change', p);
}
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
