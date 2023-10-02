// Tạo mảng
var inventoryArray = [];

// Tạo Object
const item1 = {
    name : 'Điện thoại',
    model : 'Iphone 15 pro',
    cost : 1235,
    quantity: 4000
};

const item2 = {
    name : 'Tai nghe',
    model : 'Havit i62',
    cost : 20000,
    quantity: 1222
};

const item3 = {
    name : 'Loa',
    model : 'JBL Extra 3',
    cost : 4999000,
    quantity: 2
};

// Push Object vào mảng
inventoryArray.push(item1,item2,item3);

// In mảng ra console
console.log(inventoryArray);

// Lấy quantity của item 3
console.log('Quantity của item 3:' + inventoryArray[2].quantity);

const item4 = {
    name : 'Laptop',
    model : 'Asus TUF',
    cost : 2222333,
    quantity: 40
};

inventoryArray.push(item4);

console.log(inventoryArray);

console.log(inventoryArray[3]);