let btn_add = document.querySelectorAll('button');
let table_cart = document.querySelector('.cart');
let emty = document.querySelector('.emty');
let price = document.querySelector('.price');
function addProduct(item) {
    emty.style.display = 'none';
    let row = item.parentElement.parentElement.cloneNode(true);
    let element_btn = row.querySelector('button');
    element_btn.innerText = 'Xóa';
    element_btn.setAttribute('onclick', 'removeProduct(this)');
    table_cart.appendChild(row);
    tinhTien();
}
for (const item of btn_add) {
    item.onclick = function () {
        addProduct(this);
    };
}
function removeProduct(item) {
    table_cart.removeChild(item.parentElement.parentElement);
    tinhTien();
}
function tinhTien() {
    let tr = table_cart.getElementsByTagName('tr');
    var tong = 0;
    for (const item of tr) {
        let td = item.getElementsByTagName('td');
        let price = td[1].innerText.substr(1);
        tong += price * 1;
    }
    price.innerText = `$${tong}`;
}
