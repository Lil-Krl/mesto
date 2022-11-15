import { initialCards, formList } from './initialCards.js'
import { Card } from './Card.js'
import { FormValidator } from './FormValidator.js'

const iconEditProfile = document.querySelector('.profile__edit')

const iconAddCard = document.querySelector('.profile__add-btn')

const popupEditProfile = document.querySelector('#popup-profile')

const formProfile = popupEditProfile.querySelector('.popup__form')

const cardAddPopup = document.querySelector('#popup-cards')

const formCards = cardAddPopup.querySelector('.popup__form')

export const imgZoomPopup = document.querySelector('#image-popup')

export const imgZoomPopupDescription = imgZoomPopup.querySelector('.popup__description')

export const imgZoomPopupImage = imgZoomPopup.querySelector('.popup__image')

const profileName = document.querySelector('.profile__name')

const profileDescription = document.querySelector('.profile__activity')

const nameInput = popupEditProfile.querySelector('.popup__input-item_type_name')

const activityInput = popupEditProfile.querySelector('.popup__input-item_type_activity')

const cardNameInput = cardAddPopup.querySelector('.popup__input-item_type_name')

const cardLinkInput = cardAddPopup.querySelector('.popup__input-item_type_activity')

const cardsArea = document.querySelector('.cards')

const popupElems = document.querySelectorAll('.popup')

export const openPopup = function (popup) {
  popup.classList.add('popup_opened')
  document.addEventListener('keydown', closePopupEsc)
  popup.addEventListener('click', closePopupOverlay)
}

const openPopupProfile = function () {
  nameInput.value = profileName.textContent
  activityInput.value = profileDescription.textContent
  openPopup(popupEditProfile)
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened')
  document.removeEventListener('keydown', closePopupEsc)
  popup.removeEventListener('click', closePopupOverlay)
}

function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened')
    closePopup(popup)
  }
}

function closePopupOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
}

const renderCard = function (object, template) {
  const card = new Card(object, template)
  return card.makeCard()
}
const addNewCard = function (evt) {
  evt.preventDefault()
  cardsArea.prepend(renderCard({
    name: cardNameInput.value,
    link: cardLinkInput.value
  }, '#card-template'))
  evt.target.reset()
  closePopup(cardAddPopup)
  addCardValidate.disableSubmitButton()
}

const renderInitialCards = function () {
  initialCards.forEach(function (card) {
    cardsArea.append(renderCard(card, '#card-template'))
  })
}

renderInitialCards()

const handleProfileFormSubmit = function (evt) {
  evt.preventDefault()
  profileName.textContent = nameInput.value
  profileDescription.textContent = activityInput.value
  closePopup(popupEditProfile)
}


const addCardValidate = new FormValidator(formList, cardAddPopup)
addCardValidate.enableValidationCheck()
const editProfileValidate = new FormValidator(formList, formProfile)
editProfileValidate.enableValidationCheck()

iconEditProfile.addEventListener('click', openPopupProfile)

iconAddCard.addEventListener('click', () => openPopup(cardAddPopup))

popupElems.forEach(popupElem => {
  popupElem.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close')) {
      closePopup(popupElem)
    }
  })
})

formProfile.addEventListener('submit', handleProfileFormSubmit)

formCards.addEventListener('submit', addNewCard)