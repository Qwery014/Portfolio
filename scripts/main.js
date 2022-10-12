// Slider Start
const sliderItem = document.querySelectorAll(".project__slider-item");
const sliderBtn = document.querySelectorAll(".project__slider-btn");

let sAmount = 300;
let s = [0, sAmount * 1, sAmount * 2, sAmount * 3, sAmount * 4];
console.log(s.slice(-1));

sliderItem.forEach((e, i) => {
  e.style.left = `${s[i]}px`;
});

sliderBtn.forEach((e, j) => {
  e.addEventListener("click", () => {
    if (j == 0) {
      for (let i = 0; i < sliderItem.length; i++) {
        let newLeft = parseInt(sliderItem[i].style.left) + 300;
        if (i == 0 && newLeft == 300) {
          console.log("Позиция" + newLeft + "Индекс" + i);
          let lll = document.querySelectorAll(".project__slider-item");

          lll.forEach((e) => {
            let newN = parseInt(e.style.left);
            newN -= s.slice(-1).pop();

            e.style.left = `${newN}px`;
          });

          return;
        }
        sliderItem[i].style.left = `${newLeft}px`;
      }
    } else if (j == 1) {
      for (let i = 0; i < sliderItem.length; i++) {
        let newLeft = parseInt(sliderItem[i].style.left) - 300;
        if (i == 4 && newLeft == -300) {
          console.log("Позиция" + newLeft + "Индекс" + i);
          console.log(s[i]);
          let lll = document.querySelectorAll(".project__slider-item");

          lll.forEach((e, i) => {
            e.style.left = `${s[i]}px`;
          });

          return;
        }
        newLeft == s[i];
        sliderItem[i].style.left = `${newLeft}px`;
      }
    }
  });
});

// Slider End
