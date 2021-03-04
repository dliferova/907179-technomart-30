// Модальное окно добавление товара в корзину

const buttonsAddedToCart = document.querySelectorAll(".good__add-to-cart");
const modalAddedToCart = document.querySelector(".modal-good-in-cart");

buttonsAddedToCart.forEach(function (el) {
  el.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalAddedToCart.classList.toggle("modal-good-in-cart--visible");
  })
})

const AddededToCartModalCloseButton = modalAddedToCart.querySelector(".contacts__modal-close");

AddededToCartModalCloseButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalAddedToCart.classList.toggle("modal-good-in-cart--visible");
})
