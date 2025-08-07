const editprofilebtn = document.querySelector(".profile__edit-btn");
const editprofilemodal = document.querySelector("#edit-profile-modal");
const editprofileclosedbtn =
  editprofilemodal.querySelector(".modal__close-btn");

const newpostbtn = document.querySelector(".profile__add-btn");
const newpostmodal = document.querySelector("#new-post-modal");
const newpostclosedbtn = newpostmodal.querySelector(".modal__close-btn");

editprofilebtn.addEventListener("click", function () {
  editprofilemodal.classList.add("modal_is-opened");
});

editprofileclosedbtn.addEventListener("click", function () {
  editprofilemodal.classList.remove("modal_is-opened");
});

newpostbtn.addEventListener("click", function () {
  newpostmodal.classList.add("modal_is-opened");
});

newpostclosedbtn.addEventListener("click", function () {
  newpostmodal.classList.remove("modal_is-opened");
});
