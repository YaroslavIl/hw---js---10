

window.onload = () => {
    let pass = document.querySelector('.pass');
    let passConf = document.querySelector('.cpass');
    let formEl = document.querySelector('form');
    let mod = document.querySelector('.modal');
    let inputTrue = 0;
    let inputFalse = 0;

 
    let [...inputs] = formEl.elements;
    let sub = document.querySelector('.btn');
    let rem = inputs.splice(5, 2);
    
  

    sub.onclick = function (e) {
        e.preventDefault();
        
        for (i = 0; i < inputs.length; i++) {
            let index = inputs[i];

            if (index.value == '') {
                index.classList.add('error');
                inputTrue = false;

                
            };
            
            if (index.value !== '') {
                index.classList.remove('error');
                inputTrue = true;

                if (pass.value !== passConf.value || index.value == '') {
                    pass.classList.add('error');
                    passConf.classList.add('error');
                    inputFalse = false;
                };

                if (pass.value == passConf.value && index.value !== '') {
                    pass.classList.remove('error');
                    passConf.classList.remove('error');
                    inputFalse = true;
                };
            };
            
        };

        if (inputFalse == true && inputTrue == true) {
            formEl.classList.add('off');
            mod.classList.add('on');
        };
    };
    

    
    
}