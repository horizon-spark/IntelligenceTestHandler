document.addEventListener("DOMContentLoaded", function () {
  const burgerBtn = document.querySelector(".burger-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  console.log(mobileNav.style.display);

  burgerBtn.addEventListener("click", function () {
    const isVisible = !mobileNav.classList.contains("hidden");

    if (isVisible) {
      mobileNav.classList.add("hidden");
      burgerBtn.setAttribute("aria-expanded", "false");
    } else {
      mobileNav.classList.remove("hidden");
      burgerBtn.setAttribute("aria-expanded", "true");
    }
  });

  const mobileLinks = document.querySelectorAll(".mobile-nav-link");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileNav.classList.add("hidden");
      burgerBtn.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      mobileNav.classList.add("hidden");
      burgerBtn.setAttribute("aria-expanded", "false");
    }
  });
});
