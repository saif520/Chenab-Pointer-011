let arr=[
    {
      "id":1,
      "title": "Bewakoof®",
      "category": "cargo",
      "description": "Men's Black Create Good Stories Typography T-shirt",
      "rating": "4.6",
      "price": "429",
      "oldPrice": "1099",
      "discountPercentage":"60",
      "image": {
        "img1":"https://images.bewakoof.com/t1080/men-s-black-create-good-stories-typography-t-shirt-283013-1706003517-1.jpg",
        "img2":"https://images.bewakoof.com/t1080/create-good-stories-half-sleeve-t-shirt-black-283013-1655749410-2.jpg",
        "img3":"https://images.bewakoof.com/t1080/create-good-stories-half-sleeve-t-shirt-black-283013-1655749416-3.jpg",
        "img4":"https://images.bewakoof.com/t1080/create-good-stories-half-sleeve-t-shirt-black-283013-1655749421-4.jpg",
        "img5":"https://images.bewakoof.com/t1080/create-good-stories-half-sleeve-t-shirt-black-283013-1655749426-5.jpg",
        "img6":"https://images.bewakoof.com/t1080/create-good-stories-half-sleeve-t-shirt-black-283013-1655749431-6.jpg",
        "img7":"https://images.bewakoof.com/t1080/create-good-stories-half-sleeve-t-shirt-black-283013-1655749437-7.jpg"
      },
      "video":{
        "video1":"https://media.bewakoof.com/videos/283013/create-good-stories-half-sleeve-t-shirt-black-283013-1642762382-video-1.mp4#t=0.1",
      },
      "material": "premium blended fabric",
      "brand": "Bushirt",
      "gender": "men",
      "sales": "2389",
      "fit": "Regular Fit"
    }
]



let productPathTitle=document.getElementById("product-path-title");


let imageContainer=document.getElementById("p-image-container");
let showcaseContainer=document.getElementById("p-image-showcase-container");
let productInfo=document.getElementById("p-details");

let recentlyViewedContainer=document.getElementById("p-recently-viewed-container");


function appendProductData(arr){
  imageContainer.innerHTML="";
  arr.forEach((ele)=>{
      productPathTitle.innerText=ele.description;
      let pImageCard=createProductImage(ele);
      imageContainer.append(pImageCard);
      showcaseImage1(ele);
      recentlyViewProduct(ele);
      productDetails(ele);
  })
}
function showcaseImage1(ele){
  console.log(ele.image);
  let img1=document.createElement("img");
  img1.src=ele.image.img1;
  console.log(img1);
  showcaseContainer.append(img1);
}

appendProductData(arr);

function createProductImage(ele){
  imageContainer.innerHTML="";
  let innerContainer=document.createElement("div");
  let img1=document.createElement("img");
  let img2=document.createElement("img");
  let img3=document.createElement("img");
  let img4=document.createElement("img");
  let img5=document.createElement("img");
  let img6=document.createElement("img");
  let img7=document.createElement("img");

  let video = document.createElement('video');
  let source = document.createElement('source');
    source.src =ele.video;
    source.type = 'video/mp4';
    video.appendChild(source);
    video.controls = true;

  
  innerContainer.classList.add("p-image-innerContainer");
  img1.src=ele.image.img1;
  img2.src=ele.image.img2;
  img3.src=ele.image.img3;
  img4.src=ele.image.img4;
  img5.src=ele.image.img5;
  img6.src=ele.image.img6;
  img7.src=ele.image.img7;
  

  img1.addEventListener("click",()=>{
    showcaseImage(img1);
  })
  img2.addEventListener("click",()=>{
    showcaseImage(img2);
  })
  img3.addEventListener("click",()=>{
    showcaseImage(img3);
  })
  img4.addEventListener("click",()=>{
    showcaseImage(img4);
  })
  img5.addEventListener("click",()=>{
    showcaseImage(img5);
  })
  img6.addEventListener("click",()=>{
    showcaseImage(img6);
  })
  img7.addEventListener("click",()=>{
    showcaseImage(img7);
  })
  showcaseContainer.append(img3);
  innerContainer.append(img1,img2,img3,img4,img5);
  return innerContainer;
}

function showcaseImage(img){
  showcaseContainer.innerHTML="";
  console.log("saifuddin");
  console.log(img);
  showcaseContainer.append(img);
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
  discountPercentage.innerText=`${ele.discountPercentage}% OFF`;
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
}





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

  image.src=ele.image.img1;
  discountedPrice.innerText=`₹${ele.price}`;
  actualPrice.innerText=`₹${ele.oldPrice}`;
  starIcon.style.color="#FFD43B";
  ratingValue.innerText=ele.rating;
  card.append(image,rating,discountedPrice,actualPrice);
  recentlyViewedContainer.append(card);
// ₹
}