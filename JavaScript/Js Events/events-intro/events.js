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

h1.addEventListener("click", () => {
  alert("H1 Pressed");
});

//* EXAMPLE-2 (addEventListener())
//* -------------------------------------------------
