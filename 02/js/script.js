

let form = document.querySelector('form');
let [...inputs] = form.elements;
let btn = document.querySelector('.button');
let sum = document.querySelector('.sum');
let num = Number(sum);
console.log(sum);
let select = document.querySelectorAll('.select');
console.log(typeof sum);
let arr = Array.from(select);
console.log(arr);
let b = 0;
for (let i = 0; i < arr.length; i++){
    b = arr[i];
    b.addEventListener('change', function (e) {
        if (e.target.value > 0) {
            sum.innerHTML = sum.innerHTML + e.target.value;
        }
        // else {
        //     sum.innerHTML = +sum.innerHTML - e.target.value;
        // }
    });
}



// btn.onclick = function (e) {
//     e.preventDefault();

//     for (let i = 0; i < inputs.length; i++) {
//         let a = inputs[i];
//         console.log(a.type);
//         if (a.type == 'checkbox') {
//             if (a.checked) {
//                 console.log(typeof a.value);
//                 let num = a.value
//                 sum.innerText = +sum.innerText + num;
//             }
//         }
//     }
// }