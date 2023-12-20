(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const logo = document.querySelector(".header__logo")
  const hr_header = document.querySelector(".header hr")

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || false;

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    logo.classList.toggle("is-open");
    document.body.classList.toggle("modal-body-open");
    hr_header.classList.toggle("is-open");

    document.querySelector(".header__head").classList.toggle("flex-end");

    mobileMenuRef.classList.toggle("is-open");
  });
})();