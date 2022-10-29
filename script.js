let squares = document.querySelectorAll(".colorSquare");
console.log(squares)

numberClicks = {
    'red': 0,
    'yellow': 0,
    'green': 0
}

squares.forEach(square => {
    square.onclick = () => {
        numberClicks[square.value]++;
        square.innerHTML = `<p>${numberClicks[square.value]}</p>`;
    }
});

let clearGame = document.getElementById('clear-game');

clearGame.onclick = () => {
    for(let square in numberClicks) {
        numberClicks[square] = 0;
    }
    squares.forEach(square => {
        square.innerHTML = `<p></p>`;
    });
}