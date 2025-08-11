const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileClosedBtn =
  editProfileModal.querySelector(".modal__close-btn");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostClosedBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostImageInput = newPostModal.querySelector("#card-image-input");
const newPostCaptionInput = newPostModal.querySelector("#card-caption-input");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");
const newPostImageEl = document.querySelector(".card__image");
const newPostCaptionEl = document.querySelector(".card__title");

editProfileBtn.addEventListener("click", function () {
  editProfileModal.classList.add("modal_is-opened");
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
});

editProfileClosedBtn.addEventListener("click", () => {
  closeModal(editProfileModal);
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostClosedBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}
function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageInput.value);
  console.log(newPostCaptionInput.value);
  newPostModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);
newPostForm.addEventListener("submit", handleNewPostSubmit);
editProfileBtn.addEventListener("submit", handlEeditProfileBtn);
