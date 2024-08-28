

function productItem(productName,category,image,price,gender,sold){
    this.productName = productName;
    this.category = category;
    this.image = image;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}

function addLocalstorage(productItem){
    let product1 = JSON.parse(localStorage.getItem('Products')) || [];
    product1.push(productItem);
    localStorage.setItem('Products', JSON.stringify(product1));
}

document.getElementById("product-form").addEventListener("submit",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value;
    let category = document.getElementById('category').value;
    let image = document.getElementById('image').value;
    let price = document.getElementById('price').value;
    let gender = document.getElementById('gender').value;
    let sold = document.getElementById('sold').checked;

    let newProduct = new productItem(name, category, image, price, gender, sold);

    addLocalstorage(newProduct);

    document.getElementById('product-form').reset();

    alert('Product added successfully!');
});

