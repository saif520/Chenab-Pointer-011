let id=2;
async function fetchData(id){
  let res=await fetch(`http://localhost:3000/product/${id}`,{
    "method":"GET",
    "headers":{
      "content-type":"application/json"
    }
  });
  let data=await res.json();
  console.log(data);
  appendProductData(data);
}
fetchData(id);


let productPathTitle=document.getElementById("product-path-title");

let imageShowcaseContainer=document.getElementById("p-image-showcase-container");
let productInfo=document.getElementById("p-details");

let recentlyViewedContainer=document.getElementById("p-recently-viewed-container");


function appendProductData(ele){
  productPathTitle.innerText=ele.title;
  productDetails(ele);
  // recentlyViewProduct(ele);
  showcaseProductImage(ele);
}


function showcaseProductImage(ele){
  imageShowcaseContainer.innerHTML="";
  let productImage=document.createElement("img");
  productImage.src=ele.image;
  imageShowcaseContainer.append(productImage);
}

function productDetails(ele){
  productInfo.innerHTML="";
  let title=document.createElement("h3");
  let description=document.createElement("h1");
  let rating=document.createElement("p");
  let starIcon=document.createElement("i");
  let ratingValue=document.createElement("span");
  let priceSection=document.createElement("ul");
  let offerPrice=document.createElement("li");
  let actualPrice=document.createElement("li");
  let discountPercentage=document.createElement("li");
  let tax=document.createElement("p");
  let fitAndQuality=document.createElement("ul");
  let fit=document.createElement("li");
  let quality=document.createElement("li");
  let horizontalBorder1=document.createElement("div");
  let discountmessage=document.createElement("p");
  let extraDiscount=document.createElement("span");
  let learnMore=document.createElement("span");
  let horizontalBorder2=document.createElement("div");
  let sizeAndGuide=document.createElement("ul");
  let selectSize=document.createElement("li");
  let sizeGuide=document.createElement("li");
  let sizeButton=document.createElement("ul");
  let sizeS=document.createElement("button");
  let sizeM=document.createElement("button");
  let sizeL=document.createElement("button");
  let sizeXL=document.createElement("button");
  let size2X=document.createElement("button");
  let size3X=document.createElement("button");
  let sizeNotification=document.createElement("p");
  let notFindText=document.createElement("span");
  let bellIcon=document.createElement("i");
  let bagAndWishlist=document.createElement("ul");
  let addToBag=document.createElement("button");
  let bagIcon=document.createElement("i");
  let addToBagText=document.createElement("span");
  let wishlist=document.createElement("button");
  let wishlistIcon=document.createElement("i");
  let wishlistText=document.createElement("span");
  let horizontalBorder3=document.createElement("div");

  title.classList.add("pd-title");
  description.classList.add("pd-description");
  rating.classList.add("pd-rating");
  starIcon.classList.add("fa-solid","fa-star")
  ratingValue.classList.add("pd-rating-value")
  priceSection.classList.add("pd-price-section");
  offerPrice.classList.add("pd-offer-price");
  actualPrice.classList.add("pd-actual-price");
  discountPercentage.classList.add("pd-discount-percentage");
  tax.classList.add("pd-tax-message");
  fitAndQuality.classList.add("pd-fit-quality");
  fit.classList.add("pd-fit");
  quality.classList.add("pd-quality");
  horizontalBorder1.classList.add("pd-border-1");
  horizontalBorder2.classList.add("pd-border-2");
  horizontalBorder3.classList.add("pd-border-3");
  discountmessage.classList.add("pd-discount-message");
  extraDiscount.classList.add("pd-extra-discount");
  learnMore.classList.add("pd-learn-more");
  sizeAndGuide.classList.add("pd-size-guide");
  selectSize.classList.add("pd-select-size");
  sizeGuide.classList.add("pd-guide");
  sizeButton.classList.add("pd-size-button");
  sizeS.classList.add("pd-size-s","pd-size-btn");
  sizeM.classList.add("pd-size-m","pd-size-btn");
  sizeL.classList.add("pd-size-l","pd-size-btn");
  sizeXL.classList.add("pd-size-xl","pd-size-btn");
  size2X.classList.add("pd-size-2xl","pd-size-btn");
  size3X.classList.add("pd-size-3xl","pd-size-btn");
  sizeNotification.classList.add("pd-size-notification");
  notFindText.classList.add("pd-not-find-text");
  bellIcon.classList.add("fa-regular","fa-bell","pd-bell-icon");
  bagAndWishlist.classList.add("pd-bag-wishlist");
  addToBag.classList.add("pd-add-to-bag-btn");
  addToBag.id="pd-add-to-bag-btn";
  bagIcon.classList.add("fa-solid","fa-bag-shopping","pd-bag-icon");
  addToBagText.classList.add("pd-add-to-bag-text");
  wishlist.classList.add("pd-add-to-wishlist-btn");
  wishlist.id="add-to-wishlist-btn";
  wishlistIcon.classList.add("fa-regular","fa-heart","pd-wishlist-icon");
  wishlistText.classList.add("pd-wishlist-text");
  
  starIcon.style.color="#FFD43B";

  rating.append(starIcon,ratingValue);
  priceSection.append(offerPrice,actualPrice,discountPercentage);
  fitAndQuality.append(fit,quality);
  discountmessage.append(extraDiscount,learnMore);
  sizeAndGuide.append(selectSize,sizeGuide);
  sizeButton.append(sizeS,sizeM,sizeL,sizeXL,size2X,size3X);
  sizeNotification.append(notFindText,bellIcon);
  addToBag.append(bagIcon,addToBagText);
  wishlist.append(wishlistIcon,wishlistText);
  bagAndWishlist.append(addToBag,wishlist);

  productInfo.append(title,description,rating,priceSection,tax,fitAndQuality,horizontalBorder1,discountmessage,horizontalBorder2,sizeAndGuide,sizeButton,sizeNotification,bagAndWishlist,horizontalBorder3);


  title.innerHTML=ele.title;
  description.innerText=ele.description;
  ratingValue.innerText=ele.rating;
  offerPrice.innerText=`₹${ele.price}`;
  actualPrice.innerText=`₹${ele.oldPrice}`;
  let cp=ele.price;
  let op=ele.oldPrice;
  let discountPer=Math.floor(((op-cp)/op)*100);
  discountPercentage.innerText=`${discountPer}% OFF`;
  tax.innerText=`inclusive of all taxes`;
  fit.innerText=ele.fit;
  quality.innerText=`100% COTTON`;
  extraDiscount.innerText=`TriBe members get an extra discount of ₹40 and FREE shipping.`;
  learnMore.innerText=`Learn more`;
  selectSize.innerText=`SELECT SIZE`;
  sizeGuide.innerText="Size Guide";
  sizeS.innerHTML="S";
  sizeM.innerText="M";
  sizeL.innerText="L";
  sizeXL.innerText="XL";
  size2X.innerText="2XL";
  size3X.innerText="3XL";
  notFindText.innerText=`Couldn’t find your size?`;
  addToBagText.innerText=`ADD TO BAG`;
  wishlistText.innerText=`WISHLIST`;


  addToBag.addEventListener("click",()=>{
    addToBagText.innerText=`GO TO BAG`;
    let arr=JSON.parse(localStorage.getItem("addToBagArr")) || [];
    arr.push(ele);
    localStorage.setItem("addToBagArr",JSON.stringify(arr));
  })

  wishlist.addEventListener("click",()=>{
    wishlistIcon.classList.add("fa-solid","fa-heart");
    wishlistIcon.style.color="#ff3d3d";
    wishlistText.innerText="WISHLISTED";
    wishlistText.style.color="black";
    let arr=JSON.parse(localStorage.getItem("addToWishlistArr"))||[];
    arr.push(ele);
    localStorage.setItem("addToWishlistArr",JSON.stringify(arr));
  })
}

let recentlyViewTitle=document.getElementById("p-recently-viewed-title");
// recentlyViewTitle.innerText=`Recently Viewed`;
function recentlyViewProduct(ele){
  
  let card=document.createElement("div");
  let image=document.createElement("img");
  let discountedPrice=document.createElement("span");
  let actualPrice=document.createElement("span");
  let rating=document.createElement("p");
  let starIcon=document.createElement("i");
  let ratingValue=document.createElement("span");
  card.classList.add("p-recently-viewed-card");
  discountedPrice.classList.add("p-discounted-price");
  actualPrice.classList.add("p-actual-price");
  rating.classList.add("rv-rating");
  starIcon.classList.add("fa-solid","fa-star")
  ratingValue.classList.add("rv-rating-value")

  rating.classList.add("rv-rating");
  starIcon.classList.add("fa-solid","fa-star")
  ratingValue.classList.add("rv-rating-value");
  
  rating.append(starIcon,ratingValue);

  image.src=ele.image;
  discountedPrice.innerText=`₹${ele.price}`;
  actualPrice.innerText=`₹${ele.oldPrice}`;
  starIcon.style.color="#FFD43B";
  ratingValue.innerText=ele.rating;
  card.append(image,rating,discountedPrice,actualPrice);
  recentlyViewedContainer.append(card);
}