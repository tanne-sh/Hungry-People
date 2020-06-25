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
