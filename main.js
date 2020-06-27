const elementsPhone = document.querySelectorAll(".input-phone");
const maskOptions = {
  mask: "+{380}(00)000-00-00",
};
elementsPhone.forEach((element) => {
  IMask(element, maskOptions);
});

const choices = new Choices(".select", {
  searchEnabled: false,
});

flatpickr("#date", {
  dateFormat: "m/d",
});

flatpickr("#time", {
  enableTime: true,
  noCalendar: true,
  dateFormat: "H:i",
  time_24hr: true,
});

var mySwiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  autoHeight: true,
});

const onTabClick = function (idContainer, idElement) {
  let dataAttribute = `[data-${idContainer}`;
  for (let item of document.querySelectorAll(`${dataAttribute}-name`)) {
    item.classList.remove("active");
  }
  for (let item of document.querySelectorAll(`${dataAttribute}-tab`)) {
    item.classList.remove("active");
  }
  document
    .querySelector(`${dataAttribute}-name=${idElement}]`)
    .classList.add("active");
  document
    .querySelector(`${dataAttribute}-tab=${idElement}]`)
    .classList.add("active");
};

let tabsName = document.querySelectorAll(".tab-name");
tabsName.forEach((tab) => {
  tab.addEventListener("click", (event) => {
    console.log(event.target.dataset.menuTabsName);
    onTabClick(
      event.target.parentElement.id,
      event.target.dataset.menuTabsName
    );
  });
});

const lightbox = GLightbox({
  selector: ".gallery-image",
  touchNavigation: true,
  loop: true,
});

const mobileMenuButton = document.querySelector(".header-navigation-menu");
const mobileMenuClose = document.querySelector(".header-navigation-close");
const mobileMenu = document.querySelector(".header-navigation");
mobileMenuButton.addEventListener("click", function () {
  mobileMenu.classList.add("active");
});
mobileMenuClose.addEventListener("click", function () {
  mobileMenu.classList.remove("active");
});

const scroll = new SmoothScroll('.header-navigation__link[href*="#"]');
