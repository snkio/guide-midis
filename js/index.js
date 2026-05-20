const trigger = document.querySelectorAll(".faq__trigger");

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
