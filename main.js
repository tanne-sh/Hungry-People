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
