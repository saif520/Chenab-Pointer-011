// let filters = document.getElementById("filters-wrapper");

// let filters_category = ["title","category","description","rating","price","oldPrice","image","material","brand","gender","sales","fit"]
// filters.addEventListener("onload",(e)=>{

// })
let str= `{
    "products": [
        {
            "title": "Men's Casual Cargo Pants",
            "category": "cargo",
            "description": "Stay cool and comfortable with our Women's Casual Linen Pants.",
            "rating": "4.0",
            "price": "699",
            "oldPrice": "899",
            "image": "https://images.bewakoof.com/t640/men-s-brown-boxer-628781-1707976186-1.jpg",
            "material": "premium blended fabric",
            "brand": "Bushirt",
            "gender": "men",
            "sales": "2389",
            "fit": "Regular Fit"
        },
        {
            "title": "Women's Floral Dress",
            "category": "dress",
            "description": "Stay cool and comfortable with our Women's Casual Linen Pants.",
            "rating": "4.8",
            "price": "1299",
            "oldPrice": "1499",
            "image": "https://images.bewakoof.com/t640/men-s-chocolate-brown-printed-oversized-hooded-vest-627843-1710335791-1.jpg",
            "material": "100% cotton",
            "brand": "Rigo",
            "gender": "women",
            "sales": "3856",
            "fit": "Slim Fit"
        },
        {
            "title": "Women's Cropped Denim Jacket",
            "category": "jackets",
            "description": "Stay cool and comfortable with our Women's Casual Linen Pants.",
            "price": "1199",
            "oldPrice": "1399",
            "image": "https://images.bewakoof.com/t640/men-printed-co-ord-set-7-619985-1709805508-1.jpg",
            "material": "denim fabric",
            "brand": "Bewakoof®",
            "gender": "women",
            "sales": "14200",
            "fit": "Regular Fit"
        },
        {
            "title": "Men's Classic Crewneck T-Shirt",
            "category": "t-shirt",
            "description": "Keep it simple and stylish with our Men's Classic Crewneck T-Shirt. This t-shirt features a classic crewneck design and soft cotton fabric, perfect for everyday wear.",
            "price": "599",
            "oldPrice": "699",
            "image": "https://images.bewakoof.com/t640/men-s-brown-striped-oversized-polo-t-shirt-617096-1707200102-1.jpg",
            "material": "soft cotton fabric",
            "brand": "Rigo",
            "gender": "men",
            "sales": "15678",
            "fit": "Regular Fit"
        },
        {
            "title": "Women's Casual Linen Pants",
            "category": "pants",
            "description": "Stay cool and comfortable with our Women's Casual Linen Pants.",
            "price": "899",
            "oldPrice": "999",
            "image": "https://images.bewakoof.com/t640/men-s-white-striped-oversized-polo-t-shirt-617090-1707200069-1.jpg",
            "material": "linen fabric",
            "brand": "Campus Sutra",
            "gender": "women",
            "sales": "16900",
            "fit": "Regular Fit"
        }
    ]
}`;
let products = JSON.parse(str);
console.log(products);
renderCards(products.products);

function createCard(obj,ind){
    console.log(obj);
    let div = document.createElement("div");
    div.className = "card";

    let img_div = document.createElement("div");
    div.setAttribute("id","image-div");

    let image = document.createElement("img");
    image.setAttribute("src",obj.image);
    image.style.display = "block";
    image.className="product-image";

    let fit = document.createElement("span");
    fit.className="fit";
    fit.innerText = obj.fit;

    let rating = document.createElement("span");
    rating.className = "rating";
    rating.innerHTML = `<i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i>${obj.rating}`;

    //appending image,fit and rating into img_div;
    img_div.append(image,fit,rating);

    let brand = document.createElement("div");
    brand.className = "title";
    brand.innerHTML = `<span class="title">${obj.title}</span><span class="wishlist"><i class="fa-regular fa-heart fa-lg" style="color: #a39f9f;"></i></span>`;
    

    let category = document.createElement("p");
    category.className = "category";
    category.innerText = `${obj.category}`;

    let price = document.createElement("p");
    price.className = "price";
    price.innerHTML = `${obj.price}<s class="old-price">999</s>`

    let material = document.createElement("p");
    material.className = "material";
    material.innerText = `${obj.material}`;

    div.append(img_div,brand,category,price,material);
    return div;
}

function renderCards(data){
    let dataListWrapper = document.getElementById("data-list-title-wrapper");
    data.forEach((element,index) => {
        let card  = createCard(element,index);
        dataListWrapper.append(card);
    });
}