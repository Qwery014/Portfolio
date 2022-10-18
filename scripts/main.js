// Slider Start
function slider(name) {
  const sliderItem = document.querySelectorAll(
    `.slider-${name}`
  );
  console.log(sliderItem)
  const sliderBtn = document.querySelectorAll(
    `.slider-btn-${name}`
  );

  let sAmount = 300;
  let s = [0];

  sliderItem.forEach((e, i) => {
    if(i != 0) {
      s.push(0+(sAmount*i))
    }
    e.style.left = `${s[i]}px`;
    console.log(s);
  });
  console.log(s + "end")
  sliderBtn.forEach((e, j) => {
    e.addEventListener("click", () => {
      if (j == 0) {
        for (let i = 0; i < sliderItem.length; i++) {
          let newLeft = parseInt(sliderItem[i].style.left) + 300;
          if (i == 0 && newLeft == 300) {
            let lll = document.querySelectorAll(
              `.slider-${name}`
            );

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
          if (i == s.length-1 && newLeft == -300) {
            let lll = document.querySelectorAll(
              `.slider-${name}`
            );

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

  // Slider timeout

  function slide() {
    let click = sliderBtn[1];
    click.click();
  }

  setInterval(() => {
    slide();
  }, 5000);
}

slider("store");
slider("znakomstva");

// Slider zoom

const sliderImg = document.querySelectorAll(".project__img");
const sliderOverlay = document.querySelector(".slider__overlay");
const sliderZoomImg = document.createElement("img");
const sliderOvCont = document.querySelector(".slider__overlay .container");

sliderOvCont.append(sliderZoomImg);

sliderImg.forEach((e) => {
  e.addEventListener("click", () => {
    sliderZoomImg.setAttribute("src", e.src);
    sliderOverlay.style.display = "block";
    console.log(e.src);
  });
});

sliderOverlay.addEventListener("click", () => {
  sliderZoomImg.setAttribute("src", "");
  sliderOverlay.style.display = "none";
});

// Slider End
