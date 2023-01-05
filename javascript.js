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

const button2 = document.createElement('button');
    button.className = "button2"
    control.appendChild(button2);
    button2.innerText = "16×16";    

const button3 = document.createElement('button');
    button.className = "button3"
    control.appendChild(button3);
    button3.innerText = "32×32";

const button4 = document.createElement('button');
    button.className = "button4"
    control.appendChild(button4);
    button4.innerText = "64×64";        

const squarediv = document.createElement('div');
    squarediv.className = "squarebox";
    container.appendChild(squarediv);    


for (let i=0; i<256; i++) {
    const smalldiv = document.createElement('div');
    smalldiv.className = "smalldiv";
    squarediv.appendChild(smalldiv);
    smalldiv.addEventListener('mouseover', function() {
        smalldiv.style.backgroundColor = 'rgba(0, 0, 0, 0.92)';
    });
}