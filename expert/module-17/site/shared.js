var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var selectPlanButtons = document.querySelectorAll(".plan button");
var modalButton = document.querySelector(".modal button");
var toggleButton = document.querySelector(".toggle-button");
var mobileNav = document.querySelector(".mobile-nav");
var ctaButton = document.querySelector(".main-nav__item--cta");

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.style.display = 'block';
    setTimeout(() => {
      backdrop.classList.add("open");  
    }, 10);
  });
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
  setTimeout(() => {
    backdrop.style.display = "none";
  }, 200);
  
}

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  setTimeout(() => {
    mobileNav.style.display = 'none';
  }, 500);
  
  closeModal();
});

if (modalButton) {
  modalButton.addEventListener("click", closeModal);
}

toggleButton.addEventListener("click", function () {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
  setTimeout(() => {
    mobileNav.classList.add("open");
    backdrop.classList.add("open");  
  }, 10);
  
});

ctaButton.addEventListener("animationstart", () => {
  console.log('Animation Started', event);
});

ctaButton.addEventListener("animationend", () => {
  console.log('Animation Ended', event);
});

ctaButton.addEventListener("animationiteration", () => {
  console.log('Animation Iteration', event);
});