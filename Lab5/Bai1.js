let label = document.getElementById('pro');
let inputAmount = document.getElementById('qty');
let button = document.getElementsByTagName('button');
let name = document.getElementById('name');
let amount = document.getElementById('amount');
function display() {
    name.innerHTML = label.innerText;
    amount.innerHTML = label.getAttribute('data-price') * inputAmount.value;
}
button[0].onclick = function () {
    display();
};
