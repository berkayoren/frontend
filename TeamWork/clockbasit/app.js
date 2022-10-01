let showTime = document.querySelector(".digital-clock");

function time() {
  let date = new Date().toLocaleTimeString();
  showTime.textContent = date;
}
setInterval(time, 1000);
