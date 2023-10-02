// Khai báo Object
var sv = new Object();

// Nhập giá trị lên cửa sổ
sv.hoTen = prompt('Nhập họ tên: ');
sv.diem = parseFloat(prompt('Nhập điểm: '));

// Chuyển điêmr về 1 số sau ,
sv.diem = sv.diem.toFixed(1);

// Hàm hiển thị thông tin
function hienThi() {
    if (sv.diem >= 5) {
        this.hocLuc = "Đậu";
    } else {
        this.hocLuc = "Rớt";
    }

    document.write("<h3>Họ và tên: " + sv.hoTen + "</h3>");
    document.write("<h3>Điểm TB: " + sv.diem + "</h3>");
    document.write("<h3>Học lực: " + this.hocLuc + "</h3>");
}

// Tạo sự kiện click vào nút hiển thị
document.getElementById("hienThiButton").addEventListener("click", hienThi);