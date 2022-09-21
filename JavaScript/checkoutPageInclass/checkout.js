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
//* Capturing vs. Bubbling
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    // console.log("minus btn is clicked");
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
      calculateProductPrice();
      calculateCartPrice();
    } else {
      if (confirm("Do you want to remove the product?")) {
        //* remove
        event.target.parentElement.parentElement.parentElement.remove();
        calculateCartPrice();
      }
    }
    event.target.parentElement.querySelector(".quantity").innerText--;
  } else if (event.target.classList.contains("fa-plus")) {
    // console.log("plus btn is clicked");
    event.target.previousElementSibling.innerText++;
    calculateProductPrice();
    calculateCartPrice();
  } else if (event.target.className == "remove-product") {
    event.target.parentElement.parentElement.parentElement.remove();
    calculateCartPrice();
    // console.log("remove btn is clicked");
  } else {
    // console.log("other element is clicked");
  }
});

const calculateProductPrice = () => {};

const calculateCartPrice = () => {};
