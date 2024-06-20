function Colore(N) {
    const colors = ['#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#800080', '#FFC0CB', '#808080', '#000000'];

    const squaresContainer = document.getElementById('div');
    squaresContainer.innerHTML = ''; 

    for (let i = 0; i < N; i++) {
        const randomColorIndex = Math.floor(Math.random() * colors.length);
        const color = colors[randomColorIndex];

        const square = document.createElement('div1');
        square.classList.add('square');
        square.style.backgroundColor = color;

        squaresContainer.appendChild(square);
    }
}

const N = 7;
Colore(N);

setInterval(() => {
    Colore(N);
}, 1000);