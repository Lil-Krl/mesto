const editProfileIcon = document.querySelector('.profile__edit');

const addCardIcon = document.querySelector('.profile__add-btn');

const editProfilePopup = document.querySelector('#popup-profile');

const closeBtns = document.querySelectorAll('.popup__close');

const cardAddPopup = document.querySelector('#popup-cards');

const imgZoomPopup = document.querySelector('#image-popup');

const imgZoomPopupDescription = imgZoomPopup.querySelector('.popup__description');

const imgZoomPopupImage = imgZoomPopup.querySelector('.popup__image');

const profileName = document.querySelector('.profile__name');

const profileActivity = document.querySelector('.profile__activity');

const nameInput = editProfilePopup.querySelector('.popup__input-item_type_name');

const activityInput = editProfilePopup.querySelector('.popup__input-item_type_activity');

const cardNameInput = cardAddPopup.querySelector('.popup__input-item_type_name');

const cardLinkInput = cardAddPopup.querySelector('.popup__input-item_type_activity');

const cardsArea = document.querySelector('.cards');

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}

const openPopupProfile = function () {
  nameInput.value = profileName.textContent;
  activityInput.value = profileActivity.textContent;
  openPopup(editProfilePopup);
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

const createCard = function (name, link) {
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
    openPopup(imgZoomPopup);
  }

  cardsImg.addEventListener('click', getZoomImages);

  return copyCardTemplate;
}

const addNewCard = function (evt) {
  evt.preventDefault();
  cardsArea.prepend(createCard(cardNameInput.value, cardLinkInput.value));
  evt.target.reset()
  closePopup(cardAddPopup);
}

const renderInitialCards = function () {
  initialCards.forEach(function (card) {
    cardsArea.append(createCard(card.name, card.link));
  });
}

renderInitialCards();

const handleProfileFormSubmit = function (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileActivity.textContent = activityInput.value;
  closePopup(editProfilePopup);
}

editProfileIcon.addEventListener('click', openPopupProfile);

addCardIcon.addEventListener('click', () => openPopup(cardAddPopup));

closeBtns.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

editProfilePopup.addEventListener('submit', handleProfileFormSubmit);

cardAddPopup.addEventListener('submit', addNewCard);