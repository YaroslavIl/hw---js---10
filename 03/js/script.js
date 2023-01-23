



// Створити блок на сторінці який переміщужться на 10рх в сторону стрілки яку натиснули.
let right = 0;
let down = 0;
window.onkeydown = function move() {
    if (event.keyCode == 39) {
        right -= 10;
        document.querySelector('.block').style.right = right + 'px';
    }
    else if (event.keyCode == 37) {
        right += 10;
        document.querySelector('.block').style.right = right + 'px';
    }
    else if (event.keyCode == 38) {
        down += 10;
        document.querySelector('.block').style.bottom = down + 'px';
    }
    else if (event.keyCode == 40) {
        down -= 10;
        document.querySelector('.block').style.bottom = down + 'px';
    }
}

