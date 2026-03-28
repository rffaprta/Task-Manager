// Drag logic
const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  // logic for dragging the card
  card.addEventListener("dragstart", () => {
    card.classList.add("dragging");
    console.log("i've been clicked!");
  });
  // logic for dropping the card
  card.addEventListener("dragend", () => {
    card.classList.remove("dragging");
  });
});

// logic for the task lists drop zones
const taskLists = document.querySelectorAll(".taskList");
taskLists.forEach((taskList) => {
  taskList.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  taskList.addEventListener("drop", (e) => {
    const draggingCard = document.querySelector(".dragging");
    taskList.appendChild(draggingCard);
  });
});

// Local Storage Logic
