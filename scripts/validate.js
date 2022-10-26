const formList = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input-item',
  submitButtonSelector: '.popup__submit',
  inactiveButtonClass: 'popup__submit_disabled',
  inputErrorClass: 'popup__input-item_type_error',
  errorClass: 'popup__input-item_type_visible'
})

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.add(settings.inputErrorClass)
  errorElement.textContent = errorMessage
  errorElement.classList.add(settings.errorClass)
}

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
  inputElement.classList.remove(settings.inputErrorClass)
  errorElement.classList.remove(settings.errorClass)
  errorElement.textContent = ''
}

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings)
  }
  else {
    hideInputError(formElement, inputElement, settings)
  }
}

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  toggleButtonState(formElement, buttonElement, settings);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(formElement, buttonElement, settings);
    });
  });
}

const enableValidation = function (settings) {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputElement, buttonElement, settings) {
  const inputList = Array.from(inputElement.querySelectorAll(settings.inputSelector));
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true)
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.removeAttribute('disabled')
  }
}

enableValidation(formList);