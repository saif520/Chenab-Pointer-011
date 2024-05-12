let containerMain = document.querySelector(".container-main");
//localstorage
let wishlistData = JSON.parse(localStorage.getItem("addToWishlistArr"));

function createCard(obj) {
  let card = document.createElement("div");
  card.className = "card";
  let rmCard = document.createElement("span");
  rmCard.className = "rm-card";
  let rmIcon = document.createElement("i");
  rmIcon.classList.add("fa-regular", "fa-circle-xmark", "fa-lg");
  let cardImg = document.createElement("img");
  let cardContent = document.createElement("div");
  cardContent.className = "card-content";
  let cardBrand = document.createElement("h5");
  cardBrand.className = "card-brand";
  let cardTitle = document.createElement("p");
  cardTitle.className = "card-title";
  let priceDiv = document.createElement("div");
  priceDiv.className = "price-div";
  let price = document.createElement("span");
  price.className = "price";
  let strongPrice = document.createElement("strong");
  strongPrice.className = "strong-price";
  let oldPrice = document.createElement("span");
  oldPrice.className = "old-price";
  let discount = document.createElement("span");
  discount.className = "discount";
  let bag = document.createElement("div");
  bag.className = "bag";
  let addToCartBtn = document.createElement("button");
  addToCartBtn.className = "add-to-cart";
  //add svg

  rmIcon.value = obj.id;
  cardImg.src = obj.image;
  cardBrand.innerText = obj.brand;
  cardTitle.innerText = obj.title;
  strongPrice.innerText = `₹${obj.price}`;
  oldPrice.innerText = `₹ ${obj.oldPrice}`;
  let calculateDiscount = ((obj.oldPrice - obj.price) / obj.oldPrice) * 100;
  discount.innerText = `${calculateDiscount.toFixed(0)}% OFF`;
  addToCartBtn.innerText = `ADD TO BAG`;

  function removeItem() {
    let localData = JSON.parse(localStorage.getItem("addToWishlistArr"));
    for (let i = 0; i <= localData.length - 1; i++) {
      if (rmIcon.value == localData[i].id) {
        item = localData[i];
        localData.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("addToWishlistArr", JSON.stringify(localData));
    appendData(localData);
  }

  //remove method
  rmIcon.addEventListener("click", removeItem);

  //move to cart
  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let moveData = JSON.parse(localStorage.getItem("addToWishlistArr"));
    let cartData = JSON.parse(localStorage.getItem("cartData")) || [];
    for (let i = 0; i <= moveData.length - 1; i++) {
      if (rmIcon.value == moveData[i].id) {
        let item = moveData[i];
        moveData.splice(i, 1);
        cartData.push(item);
        break;
      }
    }
    localStorage.setItem("cartData", JSON.stringify(cartData));
    localStorage.setItem("addToWishlistArr", JSON.stringify(moveData));
    appendData(moveData);
  });

  rmCard.append(rmIcon);
  price.append(strongPrice);
  priceDiv.append(price, oldPrice, discount);
  cardContent.append(cardBrand, cardTitle, priceDiv);
  bag.append(addToCartBtn);
  card.append(rmCard, cardImg, cardContent, bag);

  return card;
}

function appendData(data) {
  containerMain.innerHTML = "";
  data.forEach((elem) => {
    let card = createCard(elem);
    containerMain.append(card);
  });
}

appendData(wishlistData);
