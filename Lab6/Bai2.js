let flat = true;
let counter = 0;
let btn = document.querySelectorAll('button');
for (let index = 1; index <= btn.length; index++) {
    const element = btn[index - 1];
    element.addEventListener('click', () => {
        counter++;
        if (flat) {
            element.style.backgroundColor = 'red';
            element.innerText = 'X';
            flat = false;
        } else {
            element.style.backgroundColor = 'blue';
            element.innerText = 'O';
            flat = true;
        }
        if (counter == 8) {
            confirm('Game Over');
            location.reload();
        }
        element.style.pointerEvents = 'none';
    });
}
