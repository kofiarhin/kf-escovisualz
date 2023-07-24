const modal = document.querySelector("#modal");
const close = document.querySelector("#modal button");
const thumbWrapper = document.querySelector(".thumb-wrapper");

close.addEventListener("click", function (event) {
  modal.classList.remove("show");
});

thumbWrapper.addEventListener("click", function (event) {
  modal.classList.add("show");
  const position = event.target.getAttribute("data-target");

  modal.style.backgroundImage = `url("/img/marie/${position}.jpg")`;
});
