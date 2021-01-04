const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  greeting_delete = document.querySelector(".js-greetings-delete");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function deleteName(text) {
  localStorage.removeItem(text);
  greeting_delete.classList.remove(SHOWING_CN);
  greeting.classList.remove(SHOWING_CN);
  form.classList.add(SHOWING_CN);
}

function handleDelete(event) {
  event.preventDefault();
  deleteName(USER_LS);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
  input.value = null;
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting_delete.classList.add(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    // she is not
    askForName();
  } else {
    // she is
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  greeting_delete.addEventListener("click", handleDelete);
}
init();
