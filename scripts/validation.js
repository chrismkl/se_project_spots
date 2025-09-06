const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error",
};

function showInputError(formEl, inputEl, errorMsg) {
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  if (errorMsgEl) errorMsgEl.textContent = errorMsg;
  inputEl.classList.add(settings.inputErrorClass);
}

function hideInputError(formEl, inputEl) {
  const errorMsgEl = formEl.querySelector(`#${inputEl.id}-error`);
  if (errorMsgEl) errorMsgEl.textContent = "";
  inputEl.classList.remove(settings.inputErrorClass);
}

function checkInputValidity(formEl, inputEl) {
  if (!inputEl.validity.valid) {
    showInputError(formEl, inputEl, inputEl.validationMessage);
  } else {
    hideInputError(formEl, inputEl);
  }
}

function hasInvalidInput(inputList) {
  return inputList.some((inputEl) => !inputEl.validity.valid);
}

function disableButton(buttonEl) {
  if (!buttonEl) return;
  buttonEl.disabled = true;
  buttonEl.classList.add(settings.inactiveButtonClass);
}

function enableButton(buttonEl) {
  if (!buttonEl) return;
  buttonEl.disabled = false;
  buttonEl.classList.remove(settings.inactiveButtonClass);
}

function toggleButtonState(inputList, buttonEl) {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonEl);
  } else {
    enableButton(buttonEl);
  }
}

function setEventListeners(formEl) {
  const inputList = Array.from(formEl.querySelectorAll(settings.inputSelector));
  const buttonEl = formEl.querySelector(settings.submitButtonSelector);

  toggleButtonState(inputList, buttonEl);

  inputList.forEach((inputEl) => {
    inputEl.addEventListener("input", () => {
      checkInputValidity(formEl, inputEl);
      toggleButtonState(inputList, buttonEl);
    });
  });
}

function enableValidation() {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((formEl) => setEventListeners(formEl));
}

function resetValidation(formEl) {
  const inputs = Array.from(formEl.querySelectorAll(settings.inputSelector));
  inputs.forEach((input) => hideInputError(formEl, input));
  const btn = formEl.querySelector(settings.submitButtonSelector);
  if (inputs.some((i) => !i.validity.valid)) {
    disableButton(btn);
  } else {
    enableButton(btn);
  }
}

enableValidation();
