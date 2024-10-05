const productsHolder = document.querySelector('.productsHolder')
const productsSwiperFooter = document.getElementById('productsSwiperFooter')
let viewingMainPage = true; viewingLikedPage = false; viewingBasketPage = false; let showXProducts; let productBulks;

class Product {
    constructor(name, type, price, isOffer, image) {
        this._name = name;
        this._type = type;
        this._price = price;
        this._isOffer = isOffer;
        this._image = image;
    }
    get name() { return this._name; }
    set name(newName) { this._name = newName; }

    get type() { return this._type; }
    set type(newType) { this._type = newType; }

    get price() { return this._price; }
    set price(newPrice) {
        if (newPrice < 0) {
            console.error("Price cannot be negative");
        } else {
            this._price = newPrice;
        }
    }

    get isOffer() { return this._isOffer; }
    set isOffer(newIsOffer) {
        if (typeof newIsOffer === "boolean") {
            this._isOffer = newIsOffer;
        } else {
            console.error("Ensure isOffer Type is Boolean")
        }
    }

    get image() { return this._image; }
    set image(newImage) { this._image = newImage; }
}

function chunkArray(array, chunkSize) {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
}

function createPageProducts(productObject, addIcons) {
    let pageProduct = document.createElement('div');
    pageProduct.classList.add('product', 'centerMiddle');

    let pageProductBox = document.createElement('div');
    pageProductBox.classList.add('productInfoBox');

    let productPageImageBox = document.createElement('div');
    productPageImageBox.classList.add('productImgBox');
    let productImage = document.createElement('img');
    productImage.src = productObject.image;
    productImage.alt = productObject.name;
    productPageImageBox.appendChild(productImage);
    pageProductBox.appendChild(productPageImageBox);

    let productPageTextBox = document.createElement('div');
    productPageTextBox.classList.add('productTextBox');
    let productInfoList = document.createElement('ul');
    productInfoList.classList.add('productInfo', 'centerMiddle', 'column');

    for (let key in productObject) {
        if (key !== '_image') {
            let infoItem = document.createElement('li');
            let productText = productObject[key];
            if (key === '_isOffer') {
                productText = productText ? 'ONSALE' : '';
            }
            infoItem.innerText = productText;
            productInfoList.appendChild(infoItem);
        }
    }
    productPageTextBox.appendChild(productInfoList);

    if (addIcons) {
        let likeCartBox = document.createElement('div');
        likeCartBox.classList.add('likeCartBox', 'centerMiddle');
        let heartIcon = document.createElement('i');
        let basketIcon = document.createElement('i');
        heartIcon.classList.add('fa-solid', 'fa-heart', 'like-icon', 'shoppingIcon', 'heart');
        basketIcon.classList.add('fa-solid', 'fa-basket-shopping', 'shoppingIcon', 'basket');
        likeCartBox.appendChild(heartIcon);
        likeCartBox.appendChild(basketIcon);
        productPageTextBox.appendChild(likeCartBox);
    }

    pageProductBox.appendChild(productPageTextBox);
    pageProduct.appendChild(pageProductBox);

    productsHolder.appendChild(pageProduct);
}

function createSliderButtons() {
    productsSwiperFooter.innerHTML = '';
    if (window.innerWidth < 1100) {
        showXProducts = 3;
    } else {
        showXProducts = 6;
    }

    productBulks = chunkArray(products, showXProducts);
    productBulks.forEach((productSet, index) => {
        let swiperIcon = document.createElement('i');
        swiperIcon.classList.add('fa-solid', 'fa-circle', 'swiperIcon');
        swiperIcon.addEventListener('click', function () {
            productsHolder.classList.add('fade-out');
            setTimeout(() => {
                productsHolder.innerHTML = '';
                productSet.forEach((p) => createPageProducts(p, !viewingBasketPage));
                productsHolder.classList.remove('fade-out');
            }, 500); // Fade-out transition duration
        });
        productsSwiperFooter.appendChild(swiperIcon);
    });
}

window.addEventListener('resize', function () {
    if (viewingMainPage) {
        showPageProducts();
        createSliderButtons();
    }
});

window.onload = function () {
    createSliderButtons();
    showPageProducts();
};

function showPageProducts() {
    productsHolder.innerHTML = "";
    if (window.innerWidth < 1100) {
        showXProducts = 3;
    } else {
        showXProducts = 6;
    }
    for (let p = 0; p < showXProducts; p++) {
        createPageProducts(products[p], !viewingBasketPage);
    }
}

const products = [
    new Product('1', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('2', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('3', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('4', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('5', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('6', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('7', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('8', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('9', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg"),
    new Product('10', 'Organs', '$5000000', true, "imgs/japan1TSHIRT.jpg")
];
