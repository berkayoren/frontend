document.querySelector(".products").onclick = (e) => {
  if (e.target.className === "fas fa-minus") {
    console.log(e.target.parentElement.nextElementSibling.innerText);
  } else if (e.target.className === "fas fa-plus") {
    console.log("plusa tıklandi");
  } else if (e.target.className === "removeProduct") {
    console.log("remove tiklandi");
  }
};
