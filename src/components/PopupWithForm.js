import { Popup } from './Popup.js'

export class PopupWithForm extends Popup {
  constructor(popupSelector, { formSubmit }) {
    super(popupSelector)
    this._formSubmit = formSubmit
    this._popupFormItem = this._popupItem.querySelector('.popup__form')
    this._inputList = Array.from(this._popupFormItem.querySelectorAll('.popup__input-item'))
  }

  _getInputValues() {
    const formValues = {}
    this._inputList.forEach(inputItem => {
      formValues[inputItem.name] = inputItem.value
    })
    return formValues
  }

  setEventListeners() {
    super.setEventListeners()
    this._popupFormItem.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._formSubmit(this._getInputValues())
    })
  }

  close() {
    super.close()
    this._popupFormItem.reset()
  }
}

