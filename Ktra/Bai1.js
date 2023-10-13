var arr = ['../Image/slide1.jpg', '../Image/slide2.jpg', '../Image/slide3.jpg', '../Image/slide4.jpg', '../Image/slide5.jpg'];
var index = 0;
var a = document.getElementById('slide');



function next() {
    if (index < 4) {
        index++;
        a.src = arr[index];
    } else if (index == 4) {
        index = 0;
        a.src = arr[index];
    }

}

function pre() {
    if (index > 0) {
        index--;
        a.src = arr[index];
    }

}
function start() {
    st = setInterval(next, 1500)
}
function stop() {

    clearInterval(st);
}
function anh1() {
    index = 0;
    a.src = arr[index];
}

function anh2() {
    index = 1;
    a.src = arr[index];
}
function anh3() {
    index = 2;
    a.src = arr[index];
}
function anh4() {
    index = 3;
    a.src = arr[index];
}
function anh5() {
    index = 4;
    a.src = arr[index];
}
