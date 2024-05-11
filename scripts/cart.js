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
  removeCartBtn.value = obj.title;

  removeCartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let cart = JSON.parse(localStorage.getItem("cartData"));
    for (let i = 0; i <= cart.length - 1; i++) {
      if (cart[i].title == removeCartBtn.value) {
        cart.splice(i, 1);
        break;
      }
    }
    localStorage.setItem("cartData", JSON.stringify(cart));
    appendData(cart);
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
