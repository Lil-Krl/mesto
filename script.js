let editProfileIcon = document.querySelector('.profile__editor');
let formElement = document.querySelector('.popup__edit');
let Name = document.querySelector('.profile__name');
let job = document.querySelector('.profile__activity');
let nameInput = document.querySelector('popup-edit__input_item_name');
let jobInput = document.querySelector('.popup-edit__input_item_activity');

console.log("Pizda");
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function popupOpen() {
  formElement.classList.add('popup-edit_opened');
  nameInput.value = Name.textContent;
  jobInput.value = job.textContent;
}

function popupClose () {
  formElement.classList.remove('popup-edit_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  Name.textContent = nameInput.value;
  job.textContent = jobInput.value;
  popupClose();
}

editProfileIcon.addEventListener('click', popupOpen);
formElement.addEventListener('submit', formSubmitHandler);