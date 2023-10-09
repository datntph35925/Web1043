var arr = ['Image/slide1.jpg', 'Image/slide2.jpg', 'Image/slide3.jpg', 'Image/slide4.jpg', 'Image/slide5.jpg'];
var index = 0;
var a = document.getElementById('slider');

var l = document.getElementById('last');
var f = document.getElementById('first');

var isRunning  = false;

// var timeOut = setTimeout(anHien(),1500);

anHien();

function next() {
    if (index < 4) {
        index++;
        a.src = arr[index];
        // anHien();
    }else if (index == 4){
        index = 0
        a.src = arr[index];
        // timeOut();
    }
    anHien();
}
function pre() {
    if (index > 0) {
        index--;
        a.src = arr[index];
    }
    anHien();
}
function start() {
    if(!isRunning){
        isRunning = true;
        st = setInterval(function(){
            next();
            start();
        },3000);
    }
}
function stop() {
    isRunning = false;
    clearInterval(st);
}
function last() {
    index = 4;
    a.src = arr[index];
    anHien();
}

function first() {
    index = 0;
    a.src = arr[index];
    anHien();
}

function anHien() {
    if (index == 0) {
        f.style.visibility = 'hidden';
        l.style.visibility = 'visible';
    }
    else if (index == 4) {
        f.style.visibility = 'visible';
        l.style.visibility = 'hidden';
    }
    else {
        f.style.visibility = 'visible';
        l.style.visibility = 'visible';
    }
}
