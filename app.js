const logo = document.querySelector(".logo");
const menuOpner = document.querySelector(".menu-opnerr");
const menuCloser = document.querySelector(".menu-closerr");
const sideBar = document.querySelector("ul");
const silds = document.querySelectorAll(".slide");
const silds1 = document.querySelectorAll(".slide1");
const lightbox = document.querySelector(".lightbox");

const slideBtnRight = document.querySelector(".right-btn");
const slideBtnleft = document.querySelector(".left-btn");
const slideBtnRight1 = document.querySelector(".right-btn1");
const slideBtnleft1 = document.querySelector(".left-btn1");
const plusBtn = document.querySelector(".plus-btn");
const minusBtn = document.querySelector(".minus-btn");
const totleItems = document.querySelector(".counter");
const cartBtn = document.querySelector(".cart-btn");
const cart = document.querySelector(".show-cart-items");
const cartAdd = document.querySelector(".btn-add");
const cartB = document.querySelector(".btn-checkout");
const cartCount = document.querySelector(".cart-count");
const tumbnailImg = document.querySelectorAll(".tumbmail-img");
const lightBox2 = document.querySelector(".lightbox2");
const overlay = document.querySelector(".overlay");
const lightbox2Thunbnail = document.querySelector(".tumbnail1");
const thu = lightbox2Thunbnail.querySelectorAll("div");
const lightboxCloser = lightBox2.querySelector("p");
const empty = document.querySelector(".empty");
let cartTotelItem = parseInt(cartCount.innerHTML);
let counter = 0;
menuOpner.addEventListener("click", function () {
  sideBar.classList.add("sidebar-show");
  overlay.classList.add("show-overlay");
  logo.style.marginLeft = "-2rem";
});
menuCloser.addEventListener("click", function () {
  sideBar.classList.remove("sidebar-show");
  overlay.classList.remove("show-overlay");
  logo.style.marginLeft = "0";
});
slideBtnRight.addEventListener("click", function () {
  counter++;

  ittrate(silds);
});
slideBtnleft.addEventListener("click", function () {
  counter--;
  ittrate(silds);
});
slideBtnRight1.addEventListener("click", function () {
  counter++;

  ittrate(silds1);
});
slideBtnleft1.addEventListener("click", function () {
  counter--;
  ittrate(silds1);
});

plusBtn.addEventListener("click", function () {
  let plusItem = parseInt(totleItems.textContent);

  totleItems.textContent = plusItem + 1;
});
minusBtn.addEventListener("click", function () {
  let plusItem = parseInt(totleItems.textContent);
  if (plusItem == 0) {
    totleItems.textContent = 0;
  } else {
    totleItems.textContent = plusItem - 1;
  }
});

cartBtn.addEventListener("click", function () {
  if (cartTotelItem == "0") {
    empty.classList.remove("display-none");
  }
  cart.classList.toggle("show-cart");
});
cartAdd.addEventListener("click", function () {
  const check = parseInt(totleItems.textContent);
  // console.log(check)
  if (totleItems.textContent == 0) {
    alert("atleast buy one unit");
  } else {
    const productCart = document.createElement("div");
    productCart.classList.add("items");
    productCart.innerHTML = `   
        <span class="tumbnail-cart"
          ><img src="./images/image-product-1-thumbnail.jpg" alt=""
        /></span>
        <div class="product-des">
          <div class="d">
            <p>Fall Limited Edition...</p>
            <span class="unit-amount">$125</span>
            <span class="totel-items">
              <span 
                ><img
                  height="10px"
                  width="10px"
                  src="./images/icon-close.svg"
                  alt=""
              /></span>
              ${parseInt(totleItems.textContent)}</span
            >
            <span class="totle-bill">${parseInt(
              125 * totleItems.textContent
            )}$</span>
          </div>
          <img class="delete-item" src="./images/icon-delete.svg" alt="" />
        </div>
      `;

    empty.classList.add("display-none");
    cartB.classList.add("show-btn");
    cart.insertBefore(productCart, cartB);

    const deleteBtn = cart.querySelectorAll(".delete-item");
    deleteBtn.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        const deleteItem = e.currentTarget;
        const itemParent = deleteItem.parentElement.parentElement;

        cart.removeChild(itemParent);
        if (cartTotelItem == 1) {
          cartCount.classList.remove("cart-count-show");
          cart.classList.remove("show-cart");
          cartB.classList.remove("show-btn");
          empty.classList.remove(".display-none");
        }
        cartTotelItem--;
        cartCount.textContent = cartTotelItem;
      });
    });

    cartTotelItem++;
    cartCount.classList.add("cart-count-show");
    cartCount.textContent = cartTotelItem;
  }
});
tumbnailImg.forEach(function (img) {
  img.addEventListener("click", function (e) {
    const curent = e.currentTarget;
    showLightBox();
    thu.forEach(function (img1) {
      img1.addEventListener("click", function (e) {
        const curent = e.currentTarget;
        console.log(curent);
        lightboxThumnailSlider(curent);
      });
    });
  });
});
lightboxCloser.addEventListener("click", () => {
  lightBox2.classList.remove("lightbox-show");
  overlay.classList.remove("show-overlay");
});

function ittrate(silds) {
  if (counter > silds.length - 1) {
    counter = 0;
  }
  if (counter < 0) {
    counter = silds.length - 1;
  }
  silds.forEach(function (slid) {
    slid.style.transform = `translateX(-${counter * 100}%)`;
  });
}
function lightboxThumnailSlider(img) {
  if (img == thu[0]) {
    counter = 0;
    slidesMove();
  }
  if (img == thu[1]) {
    counter = 1;
    slidesMove();
  }
  if (img == thu[2]) {
    counter = 2;
    slidesMove();
  }
  if (img == thu[3]) {
    counter = 3;
    slidesMove();
  }
}
function slidesMove() {
  silds1.forEach(function (slid) {
    slid.style.transform = `translateX(-${counter * 100}%)`;
  });
}
function showLightBox() {
  lightBox2.classList.add("lightbox-show");
  overlay.classList.add("show-overlay");
}
