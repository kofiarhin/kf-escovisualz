const url = window.location.href;
const searchParams = new URLSearchParams(new URL(url).search);
const category = searchParams.get("category") || "marie";
const modalImage = document.querySelector("#modal img");
console.log(modalImage);

const loadImages = (category) => {
  const thumbUnits = document.querySelectorAll(".thumb-unit");
  const banner = document.querySelector("#view .banner");

  // load banner image
  banner.style.backgroundImage = `url("/img/${category}/banner.jpg")`;
  thumbUnits.forEach((item, index) => {
    const position = index + 1;
    item.style.backgroundImage = `url("/img/${category}/${position}.jpg")`;
  });
};

const handleModal = () => {
  const modal = document.querySelector("#modal");
  const close = document.querySelector(".overlay button");
  const thumbWrapper = document.querySelector(".thumb-wrapper");
  const overlay = document.querySelector(".overlay");

  close.addEventListener("click", function (event) {
    modal.classList.remove("show");
    overlay.classList.remove("show");
  });

  thumbWrapper.addEventListener("click", function (event) {
    modal.classList.add("show");
    overlay.classList.add("show");
    const position = event.target.getAttribute("data-target");
    modalImage.src = `./img/${category}/${position}.jpg`;
    // modal.style.backgroundImage = `url("/img/${category}/${position}.jpg")`;
  });
};

loadImages(category);
handleModal();
