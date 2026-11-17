let form = document.querySelector("#requestForm");
let nameInput = document.querySelector("#nameInput");
let eventInput = document.querySelector("#eventInput");
let error = document.querySelector("#errorMessage");
let requestList = document.querySelector("#requestList");
let totalCounter = document.querySelector("#totalCount");
let confirmedCounter = document.querySelector("#confirmedCount");
let emptyText = document.querySelector("#emptyMessage");
let clearButton = document.querySelector("#clearAllBtn");

function updateStats() {
  let total = requestList.querySelectorAll(".card").length;
  let confirmed = requestList.querySelectorAll(".card.confirmed").length;

  totalCounter.textContent = total;
  confirmedCounter.textContent = confirmed;

  if (total === 0) {
    emptyText.classList.remove("hidden");
  }
  else {
    emptyText.classList.add("hidden");
  }
}

function addRequest(event) {
  event.preventDefault();

  let name = nameInput.value.trim();
  let eventName = eventInput.value.trim();

  if (name === "" || eventName === "") {
    error.textContent = "Заповніть обидва поля: ім'я учасника та назву події.";
    return;
  }
  error.textContent = "";

  let card = document.createElement("div");
  card.classList.add("card");

  let info = document.createElement("div");

  let nameText = document.createElement("div");
  nameText.classList.add("card-name");
  nameText.textContent = name;

  let eventText = document.createElement("div");
  eventText.classList.add("card-event");
  eventText.textContent = eventName;

  let status = document.createElement("span");
  status.classList.add("badge", "pending");
  status.textContent = "Очікує";

  info.append(nameText, eventText, status);

  let actions = document.createElement("div");
  actions.classList.add("card-actions");

  let confirmButton = document.createElement("button");
  confirmButton.textContent = "Підтвердити";
  confirmButton.classList.add("btn-confirm");

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Видалити";
  deleteButton.classList.add("btn-delete");

  confirmButton.addEventListener("click", function () {
    card.classList.toggle("confirmed");
    status.classList.toggle("confirmed");
    status.classList.toggle("pending");

    if (card.classList.contains("confirmed")) {
      status.textContent = "Підтверджено";
      confirmButton.textContent = "Скасувати";
    }
    else {
      status.textContent = "Очікує";
      confirmButton.textContent = "Підтвердити";
    }
    updateStats();
  });

  deleteButton.addEventListener("click", function () {
    card.remove();
    updateStats();
  });

  actions.append(confirmButton, deleteButton);
  card.append(info, actions);
  requestList.append(card);

  nameInput.value = "";
  eventInput.value = "";
  updateStats();
}

function clearAll() {
  if (requestList.children.length === 0) {
    return;
  }
  if (confirm("Видалити всі заявки?")) {
    requestList.innerHTML = "";
    updateStats();
  }
}

form.addEventListener("submit", addRequest);
clearButton.addEventListener("click", clearAll);
updateStats();