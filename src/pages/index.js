import {
  iconEditProfile, iconAddCard,
  formCards, formProfile,
  nameInput, activityInput
} from '../components/utils/elements.js'
import { initialCards, validationConfig } from '../components/utils/constants.js'
import { UserInfo } from '../components/UserInfo.js'
import { Section } from '../components/Section.js'
import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { PopupWithImage } from '../components/PopupWithImage.js'
import { PopupWithForm } from '../components/PopupWithForm.js'
import '../pages/index.css'


const imgZoomPopup = new PopupWithImage('#image-popup')
imgZoomPopup.setEventListeners()

const userInfo = new UserInfo({
  usernameSelector: '.profile__name',
  userActivitySelector: '.profile__activity'
})

const popupEditeProfile = new PopupWithForm('#popup-profile', {
  callbackFormSubmit: (profileData) => {
    userInfo.setUserInfo({
      username: profileData.username,
      activity: profileData.activity
    })
    popupEditeProfile.close()
  }
})
popupEditeProfile.setEventListeners()

const handleOpenPopup = function (name, img) {
  imgZoomPopup.open(name, img)
}

const renderCard = function (cardData) {
  const renderCardItem = new Card(cardData, '#card-template', handleOpenPopup)
  return renderCardItem.makeCard()
}

const renderInitialCards = new Section({
  items: initialCards,
  renderer: (cardData) => {
    renderInitialCards.addItem(renderCard(cardData))
  }
}, '.cards')
renderInitialCards.renderItems()

const popupAddCard = new PopupWithForm('#popup-cards', {
  callbackFormSubmit: (formValues) => {
    renderInitialCards.addItem(renderCard({
      name: formValues.placename,
      link: formValues.placeimage
    }))
    popupAddCard.close()
  }
})
popupAddCard.setEventListeners()

const addCardValidate = new FormValidator(validationConfig, formCards)
addCardValidate.enableValidationCheck()
const editProfileValidate = new FormValidator(validationConfig, formProfile)
editProfileValidate.enableValidationCheck()

iconEditProfile.addEventListener('click', function () {
  popupEditeProfile.open()
  const actualUserInfo = userInfo.getUserInfo()
  nameInput.setAttribute('value', actualUserInfo.username)
  activityInput.setAttribute('value', actualUserInfo.activity)
})

iconAddCard.addEventListener('click', function () {
  popupAddCard.open()
  addCardValidate.disableSubmitButton()
})