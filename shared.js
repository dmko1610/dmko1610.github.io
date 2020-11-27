let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButton = document.querySelectorAll(".plan button");
let negativeButton = document.querySelector(".modal__action--negative");

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", function () {
    backdrop.style.display = "block";
    modal.style.display = "block";
  });
}

negativeButton.addEventListener("click", () => {
  backdrop.style.display = "none";
  modal.style.display = "none";
});
