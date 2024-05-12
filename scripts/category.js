
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

let loginToken = JSON.parse(localStorage.getItem("loginToken"));

// Fetch data function
const baseUrl = "http://localhost:3000/product?";
let fetchParams='';
let page = 1;
let total_data_count;
async function fetchData(fetchParams,page){
    try{
        fetchParams=fetchParams;
        let url = baseUrl+`_page=${page}&_limit=${6}&`+fetchParams;
        console.log(url);

        let res = await fetch(url);
        total_data_count = res.headers.get('X-Total-Count');
        let data = await res.json();

        console.log(data.length);
        renderCards(data);
    }
    catch(error){
        console.log(error);
    }
    
}

let initialFetchDataParams = localStorage.getItem("filter") || false;
if(initialFetchDataParams){
    initialFetchDataParams = JSON.parse(initialFetchDataParams).filterParams.slice(1,);
    console.log(initialFetchDataParams);
}
else{
    initialFetchDataParams = "gender=men";
}
//onload function
window.addEventListener("load",(e)=>{
    fetchData(initialFetchDataParams,1);
})

let MenCategorySet = new Set();
let WomenCategorySet = new Set();
let brandSet;
let materialSet;
let fitSet;
let genderSet;
let ratingSet = ["More than 1","More than 2","More than 3","More than 4"]
let sortBySet = ["Popular",'New','Price: high to low',"Price: low to high"];


//scrollbar
window.addEventListener("scroll",(e)=>{
    console.log(page);
    let scrollHeight = document.documentElement.scrollHeight;
    let clientHeight = document.documentElement.clientHeight;
    let scrollTop = document.documentElement.scrollTop;

    if(scrollHeight-clientHeight <= scrollTop+clientHeight/2){
        fetchData(fetchParams,page++);
    }
})
//clear-all filter
let clearAll = document.getElementById("clear-all");
clearAll.addEventListener("click",(e)=>{
    page=1;
    fetchParams='';
    fetchData(initialFetchDataParams,page);
});

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
            page=1;
            fetchData(fetchParams,page);
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
    brand_div.innerHTML = `<span class="brand">${obj.brand}</span>`;
    
    // <span class="wishlist"><i class="fa-regular fa-heart fa-lg" style="color: #a39f9f;"></i></span>
    let wishlist = document.createElement('span');
    wishlist.className = "wishlist";
    wishlist.innerHTML = `<i class="fa-regular fa-heart fa-lg" style="color: #a39f9f;"></i>`;

    //wishlist evenlistener
    wishlist.addEventListener("click",(e)=>{
        if(loginToken){
            let getWishlistItem = JSON.parse(localStorage.getItem("addToWishlistArr")) || [];
            getWishlistItem.push(obj);

            localStorage.setItem("addToWishlistArr",JSON.stringify(getWishlistItem));

            //change to red heart image;
            wishlist.innerHTML = `<i class="fa-solid fa-heart" style="color: #f50f1b;"></i>`;
        }
        else{
            alert("Please Login First !");
            window.open("./login.html","_self");
        }
    })

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
    //Event listener to redirect and save the card object
    div.addEventListener("click",(e)=>{
        localStorage.setItem("productId",JSON.stringify({id:obj.id}));
        window.open("./product.html","_self");
    });
    return div;
}

function renderCards(data){
    let dataListWrapper = document.getElementById("data-list-wrapper");
    let totalCountTag = document.getElementById("total-count-products");

    let dataListTitle = document.getElementById("data-list-title-wrapper");
    let params = fetchParams.split("&");
    let filterTitle = params.map((element)=>{
        return element.split("=")[1];
    })

    if(page==1){
        dataListWrapper.innerHTML = '';
        totalCountTag.innerHTML = `(${total_data_count})`;
        // dataListTitle.innerHTML = `<h2>PRODUCTS FILTERED BY ${filterTitle.join(" | ")}</h2>`;
        dataListTitle.innerHTML = "PRODUCTS";
    }
   

    if(data.length){
        data.forEach((element,index) => {
            let card  = createCard(element,index);
            dataListWrapper.append(card);
        });
    }
    else{
        dataListWrapper.innerHTML = `<div style="text-align=center"><h4>Sorry, No Products Available Right Now For This Filter</h4><p>Please Change Filter Or Clear All Filter And Browse Other Options...Thanks</p></div>`
    }
    
}
