const burger = document.querySelector(".header__burger");
const trigger = document.querySelectorAll(".faq__trigger");
const lettersTrigger = document.querySelectorAll(".letters__trigger");
const burgerLinks = document.querySelectorAll(".header__elem");
const burgerList = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  burgerList.classList.toggle("active");
});

burgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    burgerList.classList.remove("active");
    burger.classList.remove("active");
  });
});

function checker(trigger) {
  const infoBlock = trigger.nextElementSibling;

  if (infoBlock.textContent === "") return;

  infoBlock.classList.toggle("active");
}

trigger.forEach((trigger) => {
  trigger.addEventListener("click", () => {
    checker(trigger);
    console.log("Вызван триггер");
    const currentArrow = trigger.querySelector(".faq__arrow");
    currentArrow.classList.toggle("active");
  });
});

lettersTrigger.forEach((lTrigger) => {
  lTrigger.addEventListener("click", () => checker(lTrigger));
});
