const MIN_LENGTH = 2
const MAX_LENGTH = 40

function showError(form, errorSelector, i, text) {
  const labels = form.querySelectorAll(errorSelector);
  for (let j = 0; j < labels.length; ++j) {
    if (labels[j].getAttribute('data-number') == i + 1) {
      labels[j].innerHTML = text;
    }
  }
}


function validate(form, errorSelector, inputs, inputErrorClass) {
  let answer = true;
  for (let i = 0; i < inputs.length; ++i) {
    const value = inputs[i].value
    if (inputs[i].value == '') {
      inputs[i].classList.add(inputErrorClass);
      showError(form, errorSelector, i, "Вы пропустили это поле")
    } else if (inputs[i].classList.contains("url")) {
      if (! /^(http|https):\/\/[^ "]+$/.test(inputs[i].value) ) {
        const text = 'Введите адрес сайта';
        showError(form, errorSelector, i, text)
        inputs[i].classList.add(inputErrorClass);
      } else {
        showError(form, errorSelector, i, "")
        inputs[i].classList.remove(inputErrorClass);
      }
    } else if (value.length < MIN_LENGTH || value.length > MAX_LENGTH) {
      inputs[i].classList.add(inputErrorClass);
      const text = 'Минимальное количество символов: ' + MIN_LENGTH + '. Длина текста сейчас: ' + value.length + ' символ.'
      showError(form, errorSelector, i, text)
      answer = false;
    } else {
      showError(form, errorSelector, i, '')
      inputs[i].classList.remove(inputErrorClass);
    }
  }
  return answer
}

function enableValidation(settings) {
  const forms = document.querySelectorAll(settings.formSelector);
  for (let i = 0; i < forms.length; ++i) {
    const inputs = forms[i].querySelectorAll(settings.inputSelector);
    const submitButton = forms[i].querySelector(settings.submitButtonSelector);

    for (let j = 0; j < inputs.length; ++j) {
      inputs[j].oninput = (event) => {
        const validation = validate(forms[i], settings.errorClass, inputs, settings.inputErrorClass)
        if (!validation) {
          submitButton.disabled = true
          submitButton.classList.add('popup__submit_disabled')
        } else {
          submitButton.disabled = false
          submitButton.classList.remove('popup__submit_disabled')
        }
      }
    }
  }
}

window.onload = function() {
  enableValidation({
    formSelector: '.popup__form',
    inputSelector: '.popup__input-item',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: '.popup__submit_disabled',
    inputErrorClass: '.popup__input-item_type_error',
    errorClass: '.popup__error_visible'
  });
}
