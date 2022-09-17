document.querySelector(".products").onclick = (e) => {
  if (e.target.className === "fas fa-minus") {
    if (e.target.parentElement.nextElementSibling.innerText > 1) {
      e.target.parentElement.nextElementSibling.innerText--;
      productTotal(
        e.target.parentElement.nextElementSibling.innerText,
        e.target.parentElement.parentElement.parentElement
      );
    } else {
      if (confirm("Are you sure to delete this product")) {
        e.target.parentElement.parentElement.parentElement.parentElement.remove();
        cartTotal();
      }
    }
    console.log(e.target.parentElement.nextElementSibling.innerText);
  } else if (e.target.className === "fas fa-plus") {
    e.target.parentElement.previousElementSibling.innerText++;
    productTotal();
  } else if (e.target.className === "removeProduct") {
    e.target.parentElement.parentElement.parentElement.remove();
    cartTotal();
  }
};

const productTotal = (e, b) => {
  let productPrice = b.children[1].children[0].firstChild.innextext;
  let productTotal = b.children[4];
  let amount = e;
  productTotal.innerText = console.log(productPrice);
  cartTotal();
};
const cartTotal = () => {};
