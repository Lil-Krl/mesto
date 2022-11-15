import { openPopup, imgZoomPopup, imgZoomPopupDescription, imgZoomPopupImage } from './index.js'

export class Card {
  constructor(object, templateSelector) {
    this._name = object.name
    this._img = object.link
    this._template = templateSelector
    this._elemCard = document
      .querySelector(this._template)
      .content
      .querySelector('.cards__item')
      .cloneNode(true)
    this._elemImgs = this._elemCard.querySelector('.cards__img')
    this._elemName = this._elemCard.querySelector('.cards__title')
    this._likeIcon = this._elemCard.querySelector('.cards__like')
    this._deleteIcon = this._elemCard.querySelector('.cards__delete')
  }

  _getZoomImgs() {
    imgZoomPopupDescription.textContent = this._name
    imgZoomPopupImage.src = this._img
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
    this._elemImgs.src = this._img
    this._elemImgs.alt = this._name

    this._addEventHandler()

    return this._elemCard
  }

  _addEventHandler = () => {
    this._likeIcon.addEventListener('click', event => this._likeCard(event))
    this._deleteIcon.addEventListener('click', event => this._deleteCard(event))
    this._elemImgs.addEventListener('click', () => this._getZoomImgs())
  }
}