let editProfileIcon = document.querySelector('.profile__edit');

let editProfilePopup = document.querySelector('.popup-edit');

let closeIconPopup = editProfilePopup.querySelector('.popup-edit__close');

let name = document.querySelector('.profile__name');

let activity = document.querySelector('.profile__activity');

let nameInput = editProfilePopup.querySelector('.popup-edit__input-item_type_name');

let activityInput = editProfilePopup.querySelector('.popup-edit__input-item_type_activity');

function popupOpen() {
  editProfilePopup.classList.add('popup-edit_opened');
  nameInput.value = name.textContent;
  activityInput.value = activity.textContent;
}

function popupClose() {
  editProfilePopup.classList.remove('popup-edit_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  name.textContent = nameInput.value;
  activity.textContent = activityInput.value;
  popupClose();
}

editProfileIcon.addEventListener('click', popupOpen);

editProfilePopup.addEventListener('submit', formSubmitHandler);

closeIconPopup.addEventListener('click', popupClose);