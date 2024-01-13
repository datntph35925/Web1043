const products = [
  {
    id: 1,
    name: 'Bread',
    image: '../images/sp1.jpg',
    price: '3,400,000'
  },
  {
    id: 2,
    name: 'Cake',
    image: '../images/sp9.jpg',
    price: '2,500,000'
  },
  {
    id: 3,
    name: 'Cookie',
    image: '../images/sp3.jpg',
    price: '1,600,000'
  },
  {
    id: 4,
    name: 'Pie',
    image: '../images/sp10.jpg',
    price: '470,000'
  },
  {
    id: 5,
    name: 'Tart',
    image: '../images/sp5.jpg',
    price: '470,000'
  },
  {
    id: 6,
    name: 'Pastry',
    image: '../images/sp6.jpg',
    price: '470,000'
  },
  {
    id: 7,
    name: 'Crepe',
    image: '../images/sp7.jpg',
    price: '470,000'
  },
  {
    id: 8,
    name: 'Pancake',
    image: '../images/sp8.jpg',
    price: '470,000'
  }
];

let productInCart = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];

function saveToLocalStorage() {
  localStorage.setItem('products', JSON.stringify(productInCart));
}

// Index page
function renderProducts() {
  let data = '';
  products.forEach(value => {
    data += `
      <div class='col col-xl-3 col-md-4 col-sm-4 col-12 mt-5' style="text-align: center;">
        <div class='card'>
          <img src='${value.image}' class='card-img-top' alt=''>
          <div class='card-body'>
            <h5 class='card-title'>${value.name}</h5>
            <p class='card-text'>${value.price}$</p>
            <button onclick='addToCart(${value.id})' class='btn btn-primary'>Đặt hàng</button>
          </div>
        </div>
      </div>
    `;
  });
  const productsElement = document.getElementById('products');
  if (productsElement) {
    productsElement.innerHTML = data;
  }
}

function addToCart(id) {
  let checkProduct = productInCart.some(value => value.id === id);

  if (!checkProduct) {
    let product = products.find(value => value.id === id);
    productInCart.unshift({
      ...product,
      quantity: 1
    });
    saveToLocalStorage();
    calculatorTotal();
  } else {
    let product = productInCart.find(value => value.id === id);
    let getIndex = productInCart.findIndex(value => value.id === id);
    productInCart[getIndex] = {
      ...product,
      quantity: ++product.quantity
    };
    saveToLocalStorage();
  }
}

function calculatorTotal() {
  let totalElement = document.getElementById('total');
  if (totalElement) {
    totalElement.innerHTML = productInCart.length;
  }
}

function indexLoadPage() {
  renderProducts();
  calculatorTotal();
}

// Cart page
function renderProductsToTable() {
  let data = '';
  productInCart.forEach((value, index) => {
    data += `
      <tr>
        <td>${value.name}</td>
        <td><img width='100' src='${value.image}' alt=''></td>
        <td>${value.price}</td>
        <td>
          <button onclick='plusQuantity(${index})' class='btn btn-secondary'>+</button>
          <span class='mx-2'>${value.quantity}</span>
          <button onclick='minusQuantity(${index}, ${value.quantity})' class='btn btn-secondary'>-</button>
        </td>
        <td>${(value.quantity * value.price.replace(/,/g, '')).toLocaleString()}</td>
        <td><button onclick='deleteProductInCart(${index})' class='btn btn-danger'>Delete</button></td>
      </tr>
    `;
  });
  const productsCartElement = document.getElementById('products-cart');
  if (productsCartElement) {
    productsCartElement.innerHTML = data;
  }
}

function totalMoney() {
  let total = 0;
  productInCart.forEach((product) => {
    const price = parseInt(product.price.replace(/,/g, ''), 10); // Convert the price to an integer
    total += price * product.quantity;
  });

  const totalMoneyElement = document.getElementById("total-money");
  if (totalMoneyElement) {
    totalMoneyElement.innerHTML = total.toLocaleString();
  }
}

function plusQuantity(index) {
  productInCart[index].quantity++;
  saveToLocalStorage();
  renderProductsToTable();
  totalMoney();
}

function minusQuantity(index, quantity) {
  if (quantity > 1) {
    productInCart[index].quantity--;
    saveToLocalStorage();
    renderProductsToTable();
    totalMoney();
  } else {
    alert('Quantity min is 1');
  }
}

function deleteProductInCart(index) {
  productInCart.splice(index, 1);
  saveToLocalStorage();
  renderProductsToTable();
  totalMoney();
}


function cartLoadPage() {
  renderProductsToTable();
  totalMoney();
}

indexLoadPage();
cartLoadPage();
