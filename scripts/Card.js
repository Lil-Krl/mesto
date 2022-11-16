import { openPopup, imgZoomPopup, imgZoomPopupDescription, imgZoomPopupImage } from './index.js'

export class Card {
  constructor(object, templateSelector) {
    this._name = object.name
    this._link = object.link
    this._templateSelector = templateSelector
    this._elemCard = this._generateCard()
    this._elemImg = this._elemCard.querySelector('.cards__img')
    this._elemName = this._elemCard.querySelector('.cards__title')
    this._likeIcon = this._elemCard.querySelector('.cards__like')
    this._deleteIcon = this._elemCard.querySelector('.cards__delete')
  }

  
  _generateCard() {
    const _elemCard = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);

    return _elemCard;
  }







  _getZoomImgs() {
    imgZoomPopupDescription.textContent = this._name
    imgZoomPopupImage.src = this._link
    imgZoomPopup.alt = this._name
    openPopup(imgZoomPopup)
  }

  _likeCard = (event) => {
    event.target.classList.toggle('cards__like_active')
  }

  _deleteCard() {
    this._elemCard.remove()
  }

  makeCard() {
    this._elemName.textContent = this._name
    this._elemImg.src = this._link
    this._elemImg.alt = this._name

    this._addEventHandlers()

    return this._elemCard
  }

  _addEventHandlers = () => {
    this._likeIcon.addEventListener('click', event => this._likeCard(event))
    this._deleteIcon.addEventListener('click', () => this._deleteCard())
    this._elemImg.addEventListener('click', () => this._getZoomImgs())
  }
}