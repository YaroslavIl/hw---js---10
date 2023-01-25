

let form = document.querySelector('form');
let btn = document.querySelector('.button');
let sum = document.querySelector('.sum');
let select = document.querySelectorAll('.select');
let arr = Array.from(select);

let inedxArr = 0;
let input = document.querySelectorAll('input');
let inputArr = Array.from(input);
let inputSum = 0;

// ---------випадашки
for (let i = 0; i < arr.length; i++){
    inedxArr = arr[i];
    // console.log(inedxArr);
    inedxArr.addEventListener('change', function (e) {
        if (e.target.value > 0) {
            sum.innerHTML = +sum.innerHTML + +e.target.value;
            console.log(e.target.value);
        }
        
        if (arr[0].value > 0 && arr[1].value > 0 && arr[2].value > 0) {
            btn.disabled = false;
        }
        if (arr[0].value == 0 || arr[1].value == 0 || arr[2].value == 0) {
            btn.disabled = true;
        }
    });
  
    
}
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
