const body = document.querySelector('body');
const container = document.createElement('div');
    container.className = "container";
    body.appendChild(container);

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