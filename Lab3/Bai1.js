
        var a = Number(prompt('Nhập vào toán hạng a: '));
        var b = Number(prompt('Nhập vào toán hạng b: '));
        var o = prompt('Nhập vào toán tử: ');

        var ketQua = 0;

        if(o === '+' || o === '-' || o === '*' || o === '/'){
            switch (o) {
                case '+':
                    ketQua = a + b;
                    alert('Tổng: ' + a + ' + ' + b + ' = ' + ketQua);
                    break;
                case '-':
                    ketQua = a - b;
                    alert('Hiệu: ' + a + ' - ' + b + ' = ' + ketQua);
                    break;
                case '*':
                    ketQua = a * b;
                    alert('Tích: ' + a + ' x ' + b + ' = ' + ketQua);
                    break;
                case '/':
                    while (b == 0) {
                        alert('b phải khác 0');
                        b = Number(prompt('Nhập vào toán hạng b: '));
                    }
                    ketQua = a / b;
                    alert('Thương: ' + a + ' : ' + b + ' = ' + ketQua);
                    break;
            }
        }else{
            alert('Toán tử không hợp lệ. Vui lòng nhập lại +, -, *, hoặc /.');
        }
        
