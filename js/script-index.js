//Секция сервисов

const deliveryButton = document.querySelector(".services-pager__item-delivery");
const guaranteeButton = document.querySelector(".services-pager__item-guarantee");
const creditButton = document.querySelector(".services-pager__item-credit");

const deliveryBlock = document.querySelector(".services-pager__card--first-service");
const guaranteeBlock = document.querySelector(".services-pager__card--second-service");
const creditBlock = document.querySelector(".services-pager__card--third-service");

deliveryButton.addEventListener("click", function (evt){
  evt.preventDefault();
  console.log("Клик по доставке");
  deliveryButton.classList.add("services-pager__item--active");
  guaranteeButton.classList.remove("services-pager__item--active");
  creditButton.classList.remove("services-pager__item--active");

  deliveryBlock.classList.add("services-pager__card--active");
  guaranteeBlock.classList.remove("services-pager__card--active");
  creditBlock.classList.remove("services-pager__card--active");
})

guaranteeButton.addEventListener("click", function (evt){
  evt.preventDefault();
  console.log("Клик по гарантии");
  guaranteeButton.classList.add("services-pager__item--active");
  deliveryButton.classList.remove("services-pager__item--active");
  creditButton.classList.remove("services-pager__item--active");

  guaranteeBlock.classList.add("services-pager__card--active");
  deliveryBlock.classList.remove("services-pager__card--active");
  creditBlock.classList.remove("services-pager__card--active");
})

creditButton.addEventListener("click", function (evt){
  evt.preventDefault();
  console.log("Клик по кредиту");
  creditButton.classList.add("services-pager__item--active");
  deliveryButton.classList.remove("services-pager__item--active");
  guaranteeButton.classList.remove("services-pager__item--active");


  creditBlock.classList.add("services-pager__card--active");
  deliveryBlock.classList.remove("services-pager__card--active");
  guaranteeBlock.classList.remove("services-pager__card--active");
})

//Секция слайдера

const previousSlideButton = document.querySelector(".detailed-offers-card__slider-button--prev");
const nextSlideButton = document.querySelector(".detailed-offers-card__slider--button--next");

const slides = document.querySelectorAll(".detailed-catalog-offers__item");
const dots = document.querySelectorAll(".slider-controls__button");
let current = 0;

slides[current].classList.add("detailed-catalog-offers__item--current");

nextSlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  slides[current].classList.remove("detailed-catalog-offers__item--current");
  dots[current].classList.remove("slider-controls__button--current");
  let newCurrent;
  if (current === slides.length - 1) {
    newCurrent = 0;
  } else {
    newCurrent = current + 1;
  }
  slides[newCurrent].classList.add("detailed-catalog-offers__item--current");
  dots[newCurrent].classList.add("slider-controls__button--current");
  current = newCurrent;

})

previousSlideButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  slides[current].classList.remove("detailed-catalog-offers__item--current");
  dots[current].classList.remove("slider-controls__button--current");
  let newCurrent;
  if (current === 0) {
    newCurrent = slides.length - 1;
  } else {
    newCurrent = current - 1;
  }
  slides[newCurrent].classList.add("detailed-catalog-offers__item--current");
  dots[newCurrent].classList.add("slider-controls__button--current");
  current = newCurrent;
})

// Форма обратной связи

const contactsButton = document.querySelector(".contacts__button");
const contactsModal = document.querySelector(".contacts__modal");

contactsButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.toggle("contacts__modal--visible");
})

const contactsModalCloseButton = contactsModal.querySelector(".contacts__modal-close");

contactsModalCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  contactsModal.classList.toggle("contacts__modal--visible");
})

// Интерактивная карта

const contactsMap = document.querySelector(".contacts__map-photo");
const modalMap = document.querySelector(".modal__map");

contactsMap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.toggle("modal__map--visible");
})

const contactsMapCloseButton = document
  .querySelector(".modal__map")
  .querySelector(".modal__map-close");

contactsMapCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.toggle("modal__map--visible");
})
