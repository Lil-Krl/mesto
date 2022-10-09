let editProfileIcon = document.querySelector('.profile__edit');

let addCardIcon = document.querySelector('profile__add-btn');

let editProfilePopup = document.querySelector('#popup-profile');

let closeIconPopup = editProfilePopup.querySelector('.popup__close');

let cardAddPopup = document.querySelector('#popup-cards');

let imgZoomPopup = document.querySelector('#image-popup');

let imgZoomPopupDescription = imgZoomPopup.querySelector('.popup__description');

let imgZoomPopupImage = imgZoomPopup.querySelector('.popup__image');

let profileName = document.querySelector('.profile__name');

let profileActivity = document.querySelector('.profile__activity');

let nameInput = editProfilePopup.querySelector('.popup__input-item_type_name');

let activityInput = editProfilePopup.querySelector('.popup__input-item_type_activity');

let cardNameInput = cardAddPopup.querySelector('.popup__input-item_type_name');

let cardLinkInput = cardAddPopup.querySelector('.popup__input-item_type_activity');

let cardsArea = document.querySelector('.cards');

function popupOpen() {
  editProfilePopup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
}

function popupClose() {
  editProfilePopup.classList.remove('popup_opened');
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  popupClose();
}

editProfileIcon.addEventListener('click', popupOpen);

editProfilePopup.addEventListener('submit', formSubmitHandler);

closeIconPopup.addEventListener('click', popupClose);