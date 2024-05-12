// let filters = document.getElementById("filters-wrapper");

// let filters_category = ["title","category","description","rating","price","oldPrice","image","material","brand","gender","sales","fit"]
// filters.addEventListener("onload",(e)=>{

// })


// from chaitanya
 
//  let obj={
//         url:`${baseURL}${element.url}`,
//         filterParams:element.url
//     }
//     object nama= filter

// to saifudddin
//     id
    // object=productId
    // productId={
    //     id:2
    // }

//    let obj= localStorage.setItem("productId", JSON.stringify(productId));
//     obj.id

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
// let products = JSON.parse(str);
// console.log(products);
// renderCards(products.products);
let MenCategorySet = new Set();
let WomenCategorySet = new Set();
let brandSet;
let materialSet;
let fitSet;
let genderSet;
let ratingSet = ["More than 1","More than 2","More than 3","More than 4"]
let sortBySet = ["Popular",'New','Price: high to low',"Price: low to high"];

let Gender = "";

// Fetch data function
const baseUrl = "http://localhost:3000/product";
let fetchParams='';
async function fetchData(fetchParams){
    try{
        let url = baseUrl+fetchParams;
        console.log(url);

        let res = await fetch(url);
        let data = await res.json();
        console.log(data.length);
        renderCards(data);
    }
    catch(error){
        console.log(error);
    }
    
}

//clear all filter
// let clearAll = document.getElementById("clear-all"){
//     continue
// }

//GEnder
let categoryGender = document.getElementById("gender-name");
let isGenderClicked = false;
categoryGender.addEventListener("click",(e)=>{
    let categoryDiv = document.getElementById("gender-filter");
    if(!isCategoryClicked){
        genderSet.forEach((element)=>{
            let cat = createLabel(element,"gender");
            categoryDiv.append(cat);
        })
        isCategoryClicked = true;
    }
    else{
        isCategoryClicked = false;
        categoryDiv.innerHTML = '';
    }
})

///function category list

let categoryEl = document.getElementById("category-name");
let isCategoryClicked = false;

categoryEl.addEventListener("click",(e)=>{
    let categoryDiv = document.getElementById("category-filter");
    if(!isCategoryClicked){
        if(Gender === "men"){
            MenCategorySet.forEach((element)=>{
                let cat = createLabel(element,"category");
                categoryDiv.append(cat);
            })
        }
        else if(Gender === "women"){
            WomenCategorySet.forEach((element)=>{
                let cat = createLabel(element,"category");
                categoryDiv.append(cat);
            })
        }
        else{
            MenCategorySet.forEach((element)=>{
                let cat = createLabel(element,"category");
                categoryDiv.append(cat);
            })
            WomenCategorySet.forEach((element)=>{
                let cat = createLabel(element,"category");
                categoryDiv.append(cat);
            })
        }
        isCategoryClicked = true;
    }
    else{
        isCategoryClicked = false;
        categoryDiv.innerHTML = '';
    }
})

//brand Event
let categoryBrand = document.getElementById("brand-name");
let isBrandClicked = false;

categoryBrand.addEventListener("click",(e)=>{
    let categoryDiv = document.getElementById("brand-filter");
    if(!isBrandClicked){
        brandSet.forEach((element)=>{
            let cat = createLabel(element,"brand");
            categoryDiv.append(cat)
        })
        isBrandClicked = true;
    }
    else{
        isBrandClicked = false;
        categoryDiv.innerHTML = '';
    }
})

// Event Material 
let categoryMaterial = document.getElementById("material-name");
let isMaterialClicked = false;

categoryMaterial.addEventListener("click",(e)=>{
    let categoryDiv = document.getElementById("material-filter");
    if(!isMaterialClicked){
        materialSet.forEach((element)=>{
            let cat = createLabel(element,"material");
            categoryDiv.append(cat)
        })
        isMaterialClicked = true;
    }
    else{
        isMaterialClicked = false;
        categoryDiv.innerHTML = '';
    }
})

// Event Fit 
let categoryFit = document.getElementById("fit-name");
let isFitClicked = false;

categoryFit.addEventListener("click",(e)=>{
    let categoryDiv = document.getElementById("fit-filter");
    if(!isFitClicked){
        fitSet.forEach((element)=>{
            let cat = createLabel(element,"fit");
            categoryDiv.append(cat)
        })
        isFitClicked = true;
    }
    else{
        isFitClicked = false;
        categoryDiv.innerHTML = '';
    }
})

//Event Rating
let categoryRating = document.getElementById("rating-name");
let isRatingClicked = false;

categoryRating.addEventListener("click",(e)=>{
    let categoryDiv = document.getElementById("rating-filter");
    if(!isRatingClicked){
        ratingSet.forEach((element)=>{
            let cat = createLabel(element,"rating_gte");
            categoryDiv.append(cat)
        })
        isRatingClicked = true;
    }
    else{
        isRatingClicked = false;
        categoryDiv.innerHTML = '';
    }
})

//Event Rating
let categorySortBy = document.getElementById("sortby-name");
let isSortByClicked = false;

categorySortBy.addEventListener("click",(e)=>{
    let categoryDiv = document.getElementById("sortby-filter");
    if(!isSortByClicked){
        sortBySet.forEach((element)=>{
            let cat = createLabel(element,"_sort");
            categoryDiv.append(cat)
        })
        isSortByClicked = true;
    }
    else{
        isSortByClicked = false;
        categoryDiv.innerHTML = '';
    }
})

//creating label
function createLabel(element,filterKey){
    let div = document.createElement("div");
    div.className = element;

    let label = document.createElement("label");
    label.innerText = element;
    label.setAttribute("for",element);
    let input = document.createElement("input");
    input.type="radio";
    input.setAttribute("id",element);
    input.setAttribute("name",filterKey);
    input.setAttribute("value",element);
    input.hidden=true;
            
    // let br = document.createElement("br");

    input.addEventListener("click",(e)=>{
        console.log("target.name: "+e.target.name);
        console.log("target.value:"+e.target.value);

        // ["More than 1","More than 2","More than 3","More than 4"]
        // ["Popular",'New','Price: high to low',"Price: low to high"];
        // let isSort = false;
        //sorting related variables
        let sortBasis;
        let sortOrder;
        if(e.target.name === '_sort'){
            // isSort = true;
            // console.log("sorting is applied");
            if(e.target.value === "Popular"){
                sortBasis = "sales";
                sortOrder = "desc"
                // console.log("sorting is applied");
            }
            if(e.target.value === "New"){
                sortBasis = "sales";
                sortOrder = "asc"
            }
            if(e.target.value === "Price: high to low"){
                sortBasis = "price";
                sortOrder = "desc"
            }
            if(e.target.value === "Price: low to high"){
                sortBasis = "price";
                sortOrder = "asc"
            }
        }


        // if(e.target.name === 'rating'){
        //     if(e.target.value === "More than 1"){
        //         e.target.
        //     }
        // }
        if(e.target.name && e.target.value){
            if(fetchParams.includes(e.target.name)){
                fetchParams = fetchParams.split("&");
                for(let i=0;i<fetchParams.length;i++){
                    // console.log(fetchParams(fetchParams[i]));
                    if(fetchParams[i].includes(e.target.name)){
                        if(e.target.name === "_sort"){
                            // console.log(fetchParams[i]);
                            // console.log(fetchParams[i+1]);
                            fetchParams[i] = `_sort=${sortBasis}`;
                            fetchParams[i+1] = `_order=${sortOrder}`;
                            break;
                        }
                        if(e.target.name == "rating_gte"){
                            // console.log("for"+e.target.value.slice(-1));
                            fetchParams[i] = `${e.target.name}=${e.target.value.slice(-1)}`
                            break;
                        }
                        fetchParams[i] = `${e.target.name}=${e.target.value}`;
                        break;
                    }
                }
                fetchParams = fetchParams.join("&");
            }
            else if(fetchParams.split('&')[0] !== ''){
                console.log(fetchParams.split('&'));
                if(e.target.name === "_sort"){
                    fetchParams += `&_sort=${sortBasis}&_order=${sortOrder}`;
                }
                else if(e.target.name === "rating_gte"){
                    fetchParams += `&${e.target.name}=${e.target.value.slice(-1)}`;
                }
                else{
                    fetchParams += `&${e.target.name}=${e.target.value}`;
                }
                console.log("inside >=1:"+fetchParams);
            }
            else if(fetchParams.split('&')[0] === ''){
                if(e.target.name === "_sort"){
                    fetchParams += `_sort=${sortBasis}&_order=${sortOrder}`;
                }
                else if(e.target.name === "rating_gte"){
                    fetchParams += `${e.target.name}=${e.target.value.slice(-1)}`
                }
                else{
                    fetchParams += `${e.target.name}=${e.target.value}`;
                }
            }
            // console.log(baseUrl+"?"+fetchParams);
            fetchData(`?${fetchParams}`);
        }
        e.stopImmediatePropagation();
    })

    div.append(label,input);

    return div;
}

function fetchCategoryData(){ 
    fetch("http://localhost:3000/product").then((res)=>res.json()).then((data)=>{
        // console.log(data);
        function createFilter(data){
            let catogry_filters = [];
            let brand_filters = [];
            let material_filters = [];
            let fit_filters = [];
            let gender_filters = [];
            // console.log(data);
            data.forEach((element)=>{
                let f = `${element.gender}.${element.category}`;
                element.gender
                catogry_filters.push(f);
                brand_filters.push(element.brand);
                material_filters.push(element.material);
                fit_filters.push(element.fit);
                gender_filters.push(element.gender);

            });
            let categorySet = new Set(catogry_filters);
            
            categorySet.forEach((element)=>{
                let gender = element.split(".")[0];
                let cat = element.split(".")[1];
                // console.log(gender+" "+cat);
                if(gender === "men"){
                    MenCategorySet.add(cat);
                }
                if(gender === "women"){
                    WomenCategorySet.add(cat);
                }
            })

            brandSet = new Set(brand_filters);
            materialSet = new Set(material_filters);
            fitSet = new Set(fit_filters);
            genderSet = new Set(gender_filters);
            // console.log(categorySet);
            // console.log(MenCategorySet);
            // console.log(WomenCategorySet);
            // console.log(brandSet);
            // console.log(materialSet);
            // console.log(fitSet);
            // console.log(genderSet);
        }
        createFilter(data)
    }).catch((error)=>{
    console.log(error);
})
}

fetchCategoryData();

function createCard(obj,ind){
    // console.log(obj);
    let div = document.createElement("div");
    div.className = "card";

    let img_div = document.createElement("div");
    img_div.setAttribute("id","image-div");

    let image = document.createElement("img");
    image.setAttribute("src",obj.image);
    image.setAttribute("alt","Image Unavailable");
    image.style.display = "block";
    image.className="product-image";

    let fit = document.createElement("span");
    fit.className="fit";
    fit.innerText = obj.fit;

    let rating = document.createElement("span");
    rating.className = "rating";
    rating.innerHTML = `<i class="fa-solid fa-star fa-xs" style="color: #FFD43B;"></i><span class="rate">${obj.rating || 3.5}</span>`;

    //appending image,fit and rating into img_div;
    img_div.append(image,fit,rating);

    let content_div = document.createElement("div");
    content_div.className = "content_div";

    let brand_div = document.createElement("div");
    brand_div.className="brand_div";
    brand_div.innerHTML = `<span class="brand">${obj.brand}</span><span class="wishlist"><i class="fa-regular fa-heart fa-lg" style="color: #a39f9f;"></i></span>`;
    

    let title = document.createElement("p");
    title.className = "title";
    title.innerText = `${obj.title}`;

    let price = document.createElement("p");
    price.className = "price";
    price.innerHTML = `<i class="fa-solid fa-indian-rupee-sign fa-2xs"></i>${obj.price}<s class="old-price"><i class="fa-solid fa-indian-rupee-sign fa-2xs"></i>${(Number(obj.price)+599)}</s>`

    let tribe = document.createElement("p");
    tribe.className = "tribe";
    tribe.innerHTML = `<i class="fa-solid fa-indian-rupee-sign fa-2xs"></i>${Math.floor(Number(obj.price)-Number(obj.price)/20)} For TriBe Members`;
    
    let material = document.createElement("p");
    material.className = "material";
    material.innerText = `${obj.material}`;

    content_div.append(brand_div,title,price,tribe,material)
    
    div.append(img_div,content_div);
    return div;
}

function renderCards(data){
    let dataListTitle = document.getElementById("data-list-title-wrapper");
    let params = fetchParams.split("&");
    let filterTitle = params.map((element)=>{
        return element.split("=")[1];
    })
    dataListTitle.innerHTML = `<h2>PRODUCTS FILTERED BY ${filterTitle.join(" | ")} (${data.length})</h2>`

    let dataListWrapper = document.getElementById("data-list-wrapper");
    dataListWrapper.innerHTML = '';

    data.forEach((element,index) => {
        let card  = createCard(element,index);
        dataListWrapper.append(card);
    });
}
