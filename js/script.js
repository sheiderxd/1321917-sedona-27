var form = document.querySelector('.hotel-search-form');
var popupButton = document.querySelector('.popup-button');

popupButton.onclick = function() {
  form.classList.toggle('modal-close');
};
