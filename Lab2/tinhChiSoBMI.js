var canNang = prompt("Nhập trọng lượng cơ thể: ");
while (canNang <= 0){
    alert('Cân nặng không đc bằng và nhỏ hơn 0.');
    canNang = prompt("Nhập trọng lượng cơ thể: ");
}
    // alert('Cân nặng vừa nhập là: ' + canNang + 'kg' + '<br>');

var chieuCao = prompt("Nhập chiêu cao cơ thể (cm): ");
while (chieuCao <= 0){
    alert('Chiều cao không đc bằng và nhỏ hơn 0.');
    chieuCao = prompt("Nhập chiêu cao cơ thể (cm): ");
}

var chieuCaoM = chieuCao / 100;
    // alert('Chiều cao vừa nhập là: ' + chieuCao +'cm' + '<br>');  
    
var BMI = (canNang)/(Math.pow(chieuCaoM,2));

// alert('Chi số BMI là: ' + BMI + '<br>');

if(BMI < 18.5){
    alert('Thiếu cân')
}else if(BMI >= 18.5 && BMI <= 24.99){
    alert('Bình thường')
}else if(BMI >= 25 && BMI <= 29.99){
    alert('Thừa cân')
}else{
    alert('Béo phì')
}