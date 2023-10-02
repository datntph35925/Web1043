const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']];
theList.shift(); // Xoá phần tử đầu tiên
theList.pop();   // Xoá phần tử cuối cùng

// Thêm 'FIRST' vào đầu mảng
theList.unshift('FIRST');

// Thêm 'hello world' vào vị trí thứ 4 của mảng
theList.splice(3, 0, 'hello world');

// Thêm 'middle' vào vị trí thứ 3 của mảng
theList.splice(2, 0, 'middle');

// Thêm 'LAST' vào cuối mảng
theList.push('LAST');

// Xuất kết quả
console.log(theList);