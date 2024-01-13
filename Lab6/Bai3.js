var arr = ['../Image/slide1.jpg', '../Image/slide2.jpg', '../Image/slide3.jpg', '../Image/slide4.jpg', '../Image/slide5.jpg'];
var index = 0;
var a = document.getElementById('slider');

var l = document.getElementById('last');
var f = document.getElementById('first');


// var timeOut = setTimeout(anHien(),1500);


function next() {
    if (index < 4) {
        index++;
        a.src = arr[index];
        // anHien();
    } else if (index == 4) {
        index = 0
        a.src = arr[index];
        // timeOut();
    }
}
function pre() {
    if (index > 0) {
        index--;
        a.src = arr[index];
    }
}
function start() {
    st - setInterval(next(),1500)
}
function stop() {
    clearInterval(st);
}
function last() {
    index = 4;
    a.src = arr[index];
}

function first() {
    index = 0;
    a.src = arr[index];
}


