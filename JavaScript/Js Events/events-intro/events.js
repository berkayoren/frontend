//* ======================================================
//*                        EVENTS
//* ======================================================

console.log("****** EVENTS *******");

//* EXAMPLE-1 (Mouse Over, Mouse Out )
//* -------------------------------------------------------

const h1 = document.querySelector("#header h1");

h1.onmouseover = function () {
  h1.style.color = "red";
  h1.style.fontWeight = "300";
  h1.style.cursor = "pointer";
};

h1.onmouseout = () => {
  h1.style.color = "black";
  h1.style.fontWeight = "900";
};

//? 4. Metod (addEventListener)
h1.addEventListener("click", () => {
  alert("H1 Pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------

document.getElementById("btn").addEventListener("click", function () {
  const input = document.querySelector("#input");
  !input.value
    ? alert("Please enter an item")
    : alert(`${input.value} entered`);
  //   if (!input.value) {
  //     alert("Please Enter an Item");
  //   } else {
  //     alert(`${input.value} entered`);
  //   }

  //?Add yaptıktan sonra silme
  input.value = "";
});

//* EXAMPLE-3
//*--------------------------------------------
const list = document.querySelectorAll(".list"); //?Nodelist

list.forEach((li) => {
  li.onmouseover = () => {
    li.style.fontSize = "2rem";
  };

  li.onmouseout = () => {
    li.style.fontSize = "1rem";
  };
});

const print = () => {
  console.log("starting");
};

print();
