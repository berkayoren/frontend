const form = document.getElementById("form");
const result = document.getElementById("result");
const select = document.getElementById("select");
let funct = "";
select.onchange = (e) => {
  funct = e.target.value;
  form.unsubmit = () => {
    b.preventDefault();
    console.log(b);
  };
};
console.log(funct);

const reverseWord = (str) => {
  let arr = str.split("").reverse().join("");
  return arr;
};

const reverseStr = (str) => {
  let arr = str.split(" ").reverse().join(" ");
  return arr;
};
