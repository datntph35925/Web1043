var a = null;
var b = null;
var o = null;

function toanHang(x) {
    if (a == null)
        a = x;
    else
        b = x;
}

function toanTu(tt) {
    o = tt;
}

function ketQua() {
    switch (o) {
        case '+':
            alert(`${a} + ${b} = ${a + b}`);
            _clear();
            break;
        case '-':
            alert(`${a} - ${b} = ${a - b}`);
            _clear();
            break;
        case '*':
            alert(`${a} * ${b} = ${a * b}`);
            _clear();
            break;
        case '/':
            alert(`${a} / ${b} = ${a / b}`);
            _clear();
            break;
    }
}
function _clear() {
    a = null;
    b = null;
    o = null;
}