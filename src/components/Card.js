export class Card {
  constructor(dataObject, templateElem, handleOpenPopup) {
    this._name = dataObject.name
    this._img = dataObject.link
    this._template = templateElem
    this._handleOpenPopup = handleOpenPopup
  }

  _createCard() {

    return document.querySelector(this._template).content.querySelector('.cards__item').cloneNode(true)
  }

  _likeCard = (event) => {
    event.target.classList.toggle('cards__like_active')
  }

  _deleteCard() {
    this._cardElement.remove()
  }

  makeCard() {
    this._cardElement = this._createCard()
    this._elementImgs = this._cardElement.querySelector('.cards__img')
    this._elementName = this._cardElement.querySelector('.cards__title')
    this._likeIcon = this._cardElement.querySelector('.cards__like')
    this._deleteIcon = this._cardElement.querySelector('.cards__delete')
    this._elementName.textContent = this._name
    this._elementImgs.src = this._img
    this._elementImgs.alt = this._name

    this._addEventHandlers()

    return this._cardElement
  }

  _addEventHandlers = () => {
    this._likeIcon.addEventListener('click', evt => this._likeCard(evt))
    this._deleteIcon.addEventListener('click', evt => this._deleteCard(evt))
    this._elementImgs.addEventListener('click', () => this._handleOpenPopup(this._name, this._img))
  }
}