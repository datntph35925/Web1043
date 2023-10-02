// Câu 1:
// let sum = 0;

// let i = 1;

// do{
//     sum += i;
//     i += 2;
// }while(i<=1000)

// console.log("Tổng các số lẻ từ 1 - 1000 là: " + sum)

//Câu 2:
// var a;
// a = prompt("Nhập số: ")

// if(a >= 0 && a <= 9 ){
//     document.write(a)
// }else(
//     document.write("Phím bạn nhập không phải là số!")
// )

// Câu 3:
function nguoi(ten, tuoi, diachi, nghenghiep, SDT) {
    this.ten = ten
    this.tuoi = tuoi
    this.diachi = diachi
    this.nghenghiep = nghenghiep
    this.SDT = SDT
}

nguoi[0] = new nguoi("Đạt", 19, "Hà Nội", "Sinh Viên", "099999888")
nguoi[1] = new nguoi("Ngọc", 20, "Hưng Yên", "Sinh Viên", "0999944")
nguoi[2] = new nguoi("Ninh", 18, "Thái Bình", "Sinh Viên", "094499888")

var arr = [];
for (var item in nguoi) {
    arr.push(nguoi[item].ten)
}

console.log(arr)












