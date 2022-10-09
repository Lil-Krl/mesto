
let editProfileIcon = document.querySelector('.profile__edit');

let addCardIcon = document.querySelector('.profile__add-btn');

let editProfilePopup = document.querySelector('#popup-profile');

let closeBtn = document.querySelectorAll('.popup__close');

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

const popupOpen = function (popup) {
  popup.classList.add('popup_opened');
}

const popupOpenProfile = function () {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
  popupOpen(editProfilePopup);
}

const popupClose = function (popup) {
  popup.classList.remove('popup_opened');
}

const addCards = function (name, link) {
  const contentCardTemplate = document.querySelector('#cards-template').content;
  const copyCardTemplate = contentCardTemplate.querySelector('.cards__item').cloneNode(true);
  const cardsImg = copyCardTemplate.querySelector('.cards__img');
  const cardTitle = copyCardTemplate.querySelector('.cards__title');

  cardTitle.textContent = name;
  cardsImg.src = link;
  cardsImg.alt = name;


  copyCardTemplate.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  });

  copyCardTemplate.querySelector('.cards__delete').addEventListener('click', function (evt) {
    evt.target.closest('.cards__item').remove();
  });

  const getZoomImages = function () {
    imgZoomPopupDescription.textContent = name;
    imgZoomPopupImage.src = link;
    imgZoomPopupImage.alt = name;
    popupOpen(imgZoomPopup);
  }

  cardsImg.addEventListener('click', getZoomImages);

  return copyCardTemplate;
}

const addNewCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(addCards(cardNameInput.value, cardLinkInput.value));
  evt.target.reset()
  popupClose(cardAddPopup);
}

const renderInitialCards = function () {
  initialCards.forEach(function (card) {
    cardsArea.append(addCards(card.name, card.link));
  });
}

renderInitialCards();

const formSubmitHandler = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  popupClose(editProfilePopup);
}


editProfileIcon.addEventListener('click', popupOpenProfile);

addCardIcon.addEventListener('click', () => popupOpen(cardAddPopup));

closeBtn.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => popupClose(popup));
});

editProfilePopup.addEventListener('submit', formSubmitHandler);

cardAddPopup.addEventListener('submit', addNewCard);