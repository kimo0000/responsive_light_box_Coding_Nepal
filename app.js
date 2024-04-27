const imgs = document.querySelectorAll(".card img"),
  popup = document.querySelector(".popup"),
  closeBtn = popup.querySelector(".close"),
  imgNumber = popup.querySelector("header p"),
  prevBtn = popup.querySelector(".prev"),
  nextBtn = popup.querySelector(".next"),
  popupImg = popup.querySelector(".images img");

// console.log(imgs);

let count = 0;
const arrImgs = ["01", "02", "03", "04", "05", "06"];

imgs.forEach((img, i) => {
  img.addEventListener("click", (e) => {
    count = i;
    popup.classList.add("show");
    imgNumber.innerHTML = `Image ${count + 1} Of 6`;
    popupImg.src = `imgs/${arrImgs[count]}.jpg`;

    count <= 0
      ? (prevBtn.style.display = "none")
      : (prevBtn.style.display = "block");

    count >= arrImgs.length - 1
      ? (nextBtn.style.display = "none")
      : (nextBtn.style.display = "block");
  });
});

closeBtn.addEventListener("click", (e) => popup.classList.remove("show"));

prevBtn.addEventListener("click", () => {
  slider(prevBtn);
});

nextBtn.addEventListener("click", () => {
  slider(nextBtn);
});

function slider(btn) {
  if (btn.classList.contains("prev")) {
    if (count > 0) {
      count--;

      count == 0
        ? (prevBtn.style.display = "none")
        : (nextBtn.style.display = "block");

      popupImg.src = `imgs/${arrImgs[count]}.jpg`;
      imgNumber.innerHTML = `Image ${count + 1} Of 6`;
    }
  } else {
    if (count <= arrImgs.length - 1) {
      count++;

      count >= arrImgs.length - 1
        ? (nextBtn.style.display = "none")
        : (prevBtn.style.display = "block");

      popupImg.src = `imgs/${arrImgs[count]}.jpg`;
      imgNumber.innerHTML = `Image ${count + 1} Of 6`;
    }
  }
}
