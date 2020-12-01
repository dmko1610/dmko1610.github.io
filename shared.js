let backdrop = document.querySelector(".backdrop");
let modal = document.querySelector(".modal");
let selectPlanButton = document.querySelectorAll(".plan button");
let negativeButton = document.querySelector(".modal__action--negative");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");

function openModal() {
  modal.classList.add("open");
  backdrop.classList.add("open");
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

function openSidebar() {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
}

function closeSidebar() {
  mobileNav.classList.remove("open");
  closeModal();
}

for (let i = 0; i < selectPlanButton.length; i++) {
  selectPlanButton[i].addEventListener("click", openModal);
}
if (negativeButton) {
  negativeButton.addEventListener("click", closeModal);
}

backdrop.addEventListener("click", closeSidebar);

toggleButton.addEventListener("click", openSidebar);
