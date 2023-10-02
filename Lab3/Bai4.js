var arr = ['Búa', 'Bao', 'Kéo'];

function MyGame(userChoice) {
    //tạo một index ngẫu nhiên
    var serverChoice = Math.floor(Math.random() * arr.length);
    var kq;

    if (userChoice === serverChoice) {
        kq = 'Hòa';
    } else if ((userChoice === 0 && serverChoice === 2) || (userChoice === 1 && serverChoice === 0) || (userChoice === 2 && serverChoice === 1)) {
        kq = 'Chúc mừng bạn đã thắng!';
    } else {
        kq = 'Thua';
    }

    document.getElementById('kq').innerText = 'Máy chọn ' + arr[serverChoice];

    alert(kq);

}