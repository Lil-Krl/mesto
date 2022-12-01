import { Popup } from './Popup.js'

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupDescription = document.querySelector('.popup__description')
    this._popupImg = document.querySelector('.popup__image')
  }

  open(description, image) {
    this._popupDescription.textContent = description
    this._popupImg.src = image
    super.open()
  }
}