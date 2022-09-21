// const taxRate = 0.18;
// const shippingPrice = 15;
// const shippingFreePrice = 300;

window.addEventListener("load", () => {
  //   // set iterms to LocalStorage
  //   localStorage.setItem("taxRate", taxRate);
  //   localStorage.setItem("shippingPrice", shippingPrice);
  //   localStorage.setItem("shippingFreePrice", shippingFreePrice);
  //   // set iterms to sessionStorage
  //   localStorage.setItem("taxRate", taxRate);
  //   localStorage.setItem("shippingPrice", shippingPrice);
  //   localStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
//Capturing vs. Bubbling
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    //console.log("minus btn is clicked!");
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice(event.target);
      calculateCartPrice();
    } else {
      if (confirm("Product will be removed???")) {
        //remove
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
      }
    }
  } else if (event.target.classList.contains("fa-plus")) {
    //console.log("plus btn is clicked!");
    event.target.previousElementSibling.innerText++;
    calculateProductPrice(event.target);
    calculateCartPrice();
  } else if (event.target.className == "remove-product") {
    //console.log("remove btn is clicked!");
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartPrice();
  } else {
    //console.log("other element is clicked!");
  }
});

const calculateProductPrice = (clickedBtn) => {
  const productInfoDiv = clickedBtn.parentElement.parentElement;
  //console.log(productInfoDiv);
  const price = productInfoDiv.querySelector(".product-price strong").innerText;
  const quantity = productInfoDiv.querySelector(".quantity").innerText;
  const productTotalDiv = productInfoDiv.querySelector(".product-line-price");
  productTotalDiv.innerText = (price * quantity).toFixed(2);
};

const calculateCartPrice = () => {
  const productsTotalPricesDivs = document.querySelectorAll(
    ".product-line-price"
  );
  //* foreach ==> NodeList, Array
  //*   const productsTotalPricesDivs = document.getElementsByClassName(
  //*     ".product-line-price"
  //*   );

  let subtotal = 0;
  productsTotalPricesDivs.forEach((div) => {
    subtotal += parseFloat(div.innerText);
  });
  const taxPrice = subtotal * localStorage.getItem("taxRate");
  const shippingPrice =
    subtotal > 0 && subtotal < localStorage.getItem("shippingFreePrice")
      ? localStorage.getItem("shippingPrice")
      : 0;
  console.log(shippingPrice);
};