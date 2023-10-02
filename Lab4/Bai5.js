var newWindow;

function openNewWindow() {
    // Kiểm tra trình duyệt để xác định kích thước của cửa sổ mới
    var width, height;
    if (navigator.userAgent.indexOf("MSIE") !== -1) {
        // Nếu đang sử dụng Internet Explorer
        width = 100;
        height = 100;
    } else {
        // Nếu đang sử dụng trình duyệt khác
        width = 150;
        height = 150;
    }

    // Mở cửa sổ mới với kích thước và các đặc điểm khác
    newWindow = window.open("", "_blank", "toolbar=yes,menu=yes,width=" + width + ",height=" + height);
}

function closeNewWindow() {
    if (newWindow) {
        // Đóng cửa sổ đã mở lại
        newWindow.close();
    }
}

function checkNewWindowClosed() {
    if (newWindow && newWindow.closed) {
        alert("Cửa sổ mới đã đóng");
    } else {
        alert("Cửa sổ mới chưa đóng");
    }
}