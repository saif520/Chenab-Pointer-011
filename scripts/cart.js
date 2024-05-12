let cartCount = document.querySelector(".cart-count");

//card container

let container = document.querySelector(".container-main");
let leftMain = document.querySelector(".left-main");
let cartData = JSON.parse(localStorage.getItem("cartData"));

//summary box

let summaryPrice = document.querySelector(".summary-price");
let summaryDiscount = document.querySelector(".summary-discount");
let summarySubtotal = document.querySelector(".summary-subtotal");
let summaryTotal = document.querySelector(".summary-total");

//address form
let addAddress = document.querySelector(".add-address");
let addressFormDiv = document.querySelector(".address-form-div");
let placeOrder = document.querySelector(".place-order");
let closeForm = document.querySelector(".close-form");
let formName = document.querySelector(".form-name");
let formMobile = document.querySelector(".form-mobile");
let formZip = document.querySelector(".form-zip");
let formCity = document.querySelector(".form-city");
let formState = document.querySelector(".form-state");
let formFlatno = document.querySelector(".form-flatno");
let formLocality = document.querySelector(".form-locality");

function createCard(obj) {
  let card = document.createElement("div");
  card.className = "card";
  let cartProdRow = document.createElement("div");
  cartProdRow.className = "cart-prod-row";
  let cardBottomAction = document.createElement("div");
  cardBottomAction.className = "card-bottom-action";
  let cartProdLeft = document.createElement("div");
  cartProdLeft.className = "cart-prod-left";
  let cartProdTitle = document.createElement("h5");
  cartProdTitle.className = "cart-prod-title";
  let price = document.createElement("span");
  price.className = "price";
  let oldPrice = document.createElement("span");
  oldPrice.className = "old-price";
  let savedAmount = document.createElement("p");
  savedAmount.className = "saved-amount";
  let cardImg = document.createElement("img");
  //   cardImg.classname = "";
  let removeCartBtn = document.createElement("button");
  removeCartBtn.className = "remove-cart";
  let moveToWishlistBtn = document.createElement("button");
  moveToWishlistBtn.className = "move-to-wishlist";

  cartProdTitle.innerText = obj.title;
  price.innerText = `₹${obj.price}`;
  oldPrice.innerText = `₹${obj.oldPrice}`;
  savedAmount.innerText = `You saved ${obj.oldPrice - obj.price}!`;
  cardImg.src = obj.image;
  removeCartBtn.innerText = "Remove";
  moveToWishlistBtn.innerText = "Move to Wishlist";
  removeCartBtn.value = obj.id;
  moveToWishlistBtn.value = obj.id;
  //remove from cart
  removeCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cartData"));
    for (let i = 0; i <= cart.length - 1; i++) {
      if (cart[i].id == removeCartBtn.value) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cartData", JSON.stringify(cart));
    appendData(cart);
  });

  //move to wishlist
  moveToWishlistBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let moveData = JSON.parse(localStorage.getItem("addToWishlistArr")) || [];
    let cartMoveData = JSON.parse(localStorage.getItem("cartData"));
    for (let i = 0; i <= cartMoveData.length - 1; i++) {
      if (moveToWishlistBtn.value == cartMoveData[i].id) {
        let item = cartMoveData[i];
        cartMoveData.splice(i, 1);
        moveData.push(item);
        break;
      }
    }
    localStorage.setItem("cartData", JSON.stringify(cartMoveData));
    localStorage.setItem("addToWishlistArr", JSON.stringify(moveData));
    appendData(cartMoveData);
  });

  cartProdLeft.append(cartProdTitle, price, oldPrice, savedAmount);
  cartProdRow.append(cartProdLeft, cardImg);
  cardBottomAction.append(removeCartBtn, moveToWishlistBtn);
  card.append(cartProdRow, cardBottomAction);

  return card;
}

function appendData(data) {
  leftMain.innerHTML = "";
  let mrp = 0;
  let total = 0;
  let count = 0;
  data.forEach((elem) => {
    //card appending
    let card = createCard(elem);
    leftMain.append(card);
    count++;

    //summary box elements
    mrp += Number(elem.oldPrice);
    total += Number(elem.price);
  });

  cartCount.innerText = `${count} items(s)`;
  summaryPrice.innerText = `₹${mrp}`;
  summaryDiscount.innerText = `-₹${mrp - total}`;
  summarySubtotal.innerText = `₹${total}`;
  summaryTotal.innerText = `₹${total}`;
}

appendData(cartData);

// ADDRESS FORM
addAddress.addEventListener("click", (e) => {
  e.preventDefault();
  addressFormDiv.style.display = "block ";
});

closeForm.addEventListener("click", (e) => {
  e.preventDefault();
  addressFormDiv.style.display = "none";
});

placeOrder.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    formName.value &&
    formMobile.value &&
    formZip.value &&
    formCity.value &&
    formState.value &&
    formFlatno.value &&
    formLocality.value
  ) {
    localStorage.setItem("cartData", JSON.stringify([]));
    alert("Order Placed!");
    window.location.href =
      "file:///home/tehreem/Downloads/weekProject/Chenab-Pointer-011/html/index.html";
  } else {
    alert("Fill in all the Fields!");
  }
});
