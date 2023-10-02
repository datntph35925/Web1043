// Máy tính sinh số bí mật ngẫu nhiên từ 10 đến 15
var x = 10 + Math.round(5 * Math.random());

// Người dùng nhập số từ bàn phím
var a = prompt("Nhập số bạn đoán:");

// Kiểm tra số đoán và hiển thị thông báo tương ứng
if (parseInt(a) === x) {
    alert("Chúc mừng, bạn đã đoán đúng!");
} else if (parseInt(a) > x) {
    alert("Giá trị của bạn lớn hơn số bí mật.");
} else if (parseInt(a) < x) {
    alert("Giá trị của bạn nhỏ hơn số bí mật.");
} else {
    alert("Vui lòng nhập một số hợp lệ.");
}

//  // Máy tính sinh số bí mật ngẫu nhiên từ 10 đến 15
//  var x = 10 + Math.round(5 * Math.random());

//  var doanDung = false;

//  while (!doanDung) {
//      // Người dùng nhập số từ bàn phím
//      var a = prompt("Nhập số bạn đoán (Nhập 'exit' để thoát trò chơi):");

//      if (a === 'exit') {
//          break; // Thoát khỏi vòng lặp nếu người chơi muốn dừng
//      }

//      // Kiểm tra số đoán và hiển thị thông báo tương ứng
//      if (parseInt(a) === x) {
//          alert("Chúc mừng, bạn đã đoán đúng!");
//          doanDung = true;
//      } else if (parseInt(a) > x) {
//          alert("Giá trị của bạn lớn hơn số bí mật.");
//      } else if (parseInt(a) < x) {
//          alert("Giá trị của bạn nhỏ hơn số bí mật.");
//      } else {
//          alert("Vui lòng nhập một số hợp lệ.");
//      }
//  }