const body = document.querySelector('body');
const container = document.createElement('div');
    container.className = "container";
    body.appendChild(container);

const control = document.createElement('div');
    control.className = "control";
    container.appendChild(control);
    control.innerText = "Select the Grid Size";

const button = document.createElement('button');
    button.className = "button1";
    control.appendChild(button);
    button.innerText = "8×8";
    button.addEventListener('click', onclicking1);

const button2 = document.createElement('button');
    button2.className = "button2";
    control.appendChild(button2);
    button2.innerText = "16×16";
    button2.addEventListener('click', onclicking2);
    button2.addEventListener('click', toggleBiggerClass);
    function toggleBiggerClass() {
    const onbutton2 = document.querySelector('.squarebox');
    onbutton2.classList.toggle('bigger16by16');
}

const button3 = document.createElement('button');
    button3.className = "button3";
    control.appendChild(button3);
    button3.innerText = "32×32";
    button3.addEventListener('click', onclicking3);
    button3.addEventListener('click', toggleBiggerClass2);
    function toggleBiggerClass2() {
    const onbutton3 = document.querySelector('.squarebox');
    onbutton3.classList.toggle('bigger32by32');
    }

const button4 = document.createElement('button');
    button4.className = "button4";
    control.appendChild(button4);
    button4.innerText = "64×64";        

const squarediv = document.createElement('div');
    squarediv.className = "squarebox";
    container.appendChild(squarediv);    

function onclicking1() {
    for (let i=0; i<64; i++) {
        const smalldiv = document.createElement('div');
        smalldiv.className = "smalldiv";
        squarediv.appendChild(smalldiv);
        smalldiv.addEventListener('mouseover', function() {
        smalldiv.style.backgroundColor = 'rgba(0, 0, 0, 0.92)';
    });
}   }

function onclicking2() {
    for(i=0; i<256; i++) {
        const smalldiv = document.createElement('div');
        smalldiv.className = "smalldiv";
        squarediv.appendChild(smalldiv);
        smalldiv.addEventListener('mouseover', function() {
        smalldiv.style.backgroundColor = 'rgba(0, 0, 0, 0.92)';
    });
}    }  

function onclicking3() {
    for(i=0; i<1024; i++) {
    const smalldiv = document.createElement('div');
    smalldiv.className = "smalldiv";          
    squarediv.appendChild(smalldiv);
    smalldiv.addEventListener('mouseover', function() {
    smalldiv.style.backgroundColor = 'rgba(0, 0, 0, 0.92)';
    });
}
}



// for (let i=0; i<256; i++) {
//     const smalldiv = document.createElement('div');
//     smalldiv.className = "smalldiv";
//     squarediv.appendChild(smalldiv);
//     smalldiv.addEventListener('mouseover', function() {
//         smalldiv.style.backgroundColor = 'rgba(0, 0, 0, 0.92)';
//     });
