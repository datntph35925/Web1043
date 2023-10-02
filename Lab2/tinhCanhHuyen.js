//Nhập giá trị a
var a = prompt('Nhập vào a : ');

//validate giá trị a
while(a <= 0){
    alert('Độ dài cạnh a phải lơn hơn 0');
    a = prompt('Nhập vào a : ');
}

//in ra giá trị
    document.write('Cạnh a = ' + a + '<br>');


//Nhập giá trị b
var b = prompt('Nhập vào b : ');

//validate giá trị b
while(b <= 0){
    alert('Độ dài cạnh b phải lơn hơn 0');
    b = prompt('Nhập vào b : ');
}

//in ra giá trị
    document.write('Cạnh b = ' + b + '<br>');

//tính toán
var c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

//in ra giá trị c
document.write('Cạnh huyền c = ' + c );