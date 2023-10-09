var arr = ["Image/slide1.jpg", "Image/slide2.jpg", "Image/slide3.jpg", "Image/slide4.jpg"];
var index = 0;
var a = document.getElementById("slider");
function next() {
    if (index < 3) {
        index++;
        a.src = arr[index];
    }
}
function pre() {
    if (index > 0) {
        index--;
        a.src = arr[index];
    }
}