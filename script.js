"use strict";

const taskContainer = document.querySelector(".todo__list");

taskContainer.addEventListener("keydown", function (e) {
  const newTask = `<li class="todo__item">
      <input type="text" class="todo__task" value="${e.target.value}"/>
      <input type="checkbox" class="todo__checkbox" />
      <button class="todo__delete"></button>
    </li>`;

  if (e.key === "Enter" && e.target.classList.contains("todo__new-task")) {
    //очищаем введеное значение
    e.target.value = "";
    //добавляем дело в список
    taskContainer.insertAdjacentHTML("beforeend", newTask);
  }
});

taskContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("todo__checkbox")) {
    //выбираем ближайшего сиблинга
    const clicked = e.target.previousElementSibling;
    //и на него вешаем класс
    clicked.classList.toggle("todo__task--done");
  }

  if (e.target.classList.contains("todo__delete")) {
    //выбираем ближайшего сиблинга
    const clicked = e.target.parentElement;
    //и на него вешаем класс
    clicked.remove();
  }
});
