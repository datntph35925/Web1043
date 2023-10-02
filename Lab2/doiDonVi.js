//Nhập giá trị
var a = prompt('Nhập số mét vuông cần đổi: ')

//Tính số sào
var sao = a / 360;

//Chuyển kết quả về 2 só sau số 0
var kq = parseFloat(sao).toFixed(2);

//In ra kết quả cuối cùng
document.write(a, 'm' + '<sup>2</sup> = '+ kq + 'sào = ' + kq/10 + 'mẫu(Nam Bộ) = ' + kq/10 + 'ha' );