const trigger = document.querySelectorAll(".faq__trigger");
const lettersTrigger = document.querySelectorAll('.letters__trigger')
const burger = document.querySelector('.header__burger')
const burgerList = document.querySelector('.header__list')

burger.addEventListener('click', () => {
  burgerList.classList.toggle('active')
})

trigger.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const infoBlock = trigger.nextElementSibling;
    if (infoBlock) {
      if (infoBlock.textContent === "") {
        console.log("В разделе нет информации");
      } else {
        infoBlock.classList.toggle("active");
      }
    }

    const currentArrow = trigger.querySelector(".faq__arrow");
    currentArrow.classList.toggle("active");
  });
});

lettersTrigger.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    const infoBlock = trigger.nextElementSibling;
    if (infoBlock) {
      if (infoBlock.textContent === "") {
        console.log("В разделе нет информации");
      } else {
        infoBlock.classList.toggle("active");
      }
    }
  });
});


