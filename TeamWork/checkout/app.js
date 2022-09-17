const tax = 0.18;
const shipping = 15;

document.querySelector(".products").onclick = (e) => {
  if (e.target.className === "fas fa-minus") {
    if (e.target.parentElement.nextElementSibling.innerText > 1) {
      e.target.parentElement.nextElementSibling.innerText--;

      productTotal(
        e.target.parentElement.nextElementSibling.innerText,
        e.target.parentElement.parentElement.parentElement
      );
    } else {
      if (confirm("Do you wanna remove this product?")) {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
        cartTotal();
      }
    }
  } else if (e.target.className === "fas fa-plus") {
    e.target.parentElement.previousElementSibling.innerText++;
    productTotal(
      e.target.parentElement.previousElementSibling.innerText,
      e.target.parentElement.parentElement.parentElement
    );
  } else if (e.target.className === "removeProduct") {
    e.target.parentElement.parentElement.parentElement.remove();
    cartTotal();
  }
};

const productTotal = (e, b) => {
  let productPrice = b.children[1].children[0].firstChild.innerText;
  let productTotal = b.children[4];
  let amount = e;
  productTotal.innerText = (productPrice * amount).toFixed(2);

  cartTotal();
};
const cartTotal = () => {
  let productTotalDivs = document.querySelectorAll(".productLinePrice");
  let subTotal = 0;
  productTotalDivs.forEach((e) => {
    subTotal += parseFloat(e.innerText);
  });
  let taxTotal = parseFloat(subTotal * tax).toFixed(2);
  let overallTotal = parseFloat(subTotal + taxTotal + shipping).toFixed(2);
  console.log(overallTotal);
};
