const toggleClassActive = (a, b) => {
  a.addEventListener("click", () => {
    b.classList.toggle("active");
  });
};

const removeClassActive = (a, b) => {
  a.addEventListener("mouseleave", () => {
    b.classList.remove("active");
  });
};

const taskList = document.querySelector(".task__list");
const taskAction = document.querySelector("#task__action");
toggleClassActive(taskList, taskAction);

document.querySelector("#btn__setting").addEventListener("click", () => {
  document.querySelector("#header__setting").classList.add("active");
});

document.querySelector(".close__setting").addEventListener("click", () => {
  document.querySelector("#header__setting").classList.remove("active");
});

const value = document.querySelector("#sound_number");
const input = document.querySelector("#sound_range");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});
const value2 = document.querySelector("#ticking_number");
const input2 = document.querySelector("#ticking_range");
value2.textContent = input2.value;
input2.addEventListener("input", (event) => {
  value2.textContent = event.target.value;
});

const defaultSound = document.querySelector("#default_sound");
const listSound = document.querySelector(".list--sound");
toggleClassActive(defaultSound, listSound);
removeClassActive(document.querySelector(".list-sound-setting-1"), listSound);

const defaultTicking = document.querySelector("#default_ticking");
const listTicking = document.querySelector(".ticking-list");
toggleClassActive(defaultTicking, listTicking);
removeClassActive(document.querySelector(".list-sound-setting-2"), listTicking);

const defaultHour = document.querySelector(".setting-hour");
const listHour = document.querySelector(".hour--list");
toggleClassActive(defaultHour, listHour);

const defaultNoti = document.querySelector(".default--noti");
const listNoti = document.querySelector(".list--noti");
toggleClassActive(defaultNoti, listNoti);

const autoBreak = document.querySelector("#auto__break");
const autoPomodoro = document.querySelector("#auto__pomodoro");
const autoSwitch = document.querySelector("#auto__switch");
const darkMode = document.querySelector("#dark__mode");
const arrClass = ["switch--btn", "auto--btn"];
const arrBtnAuto = [autoBreak, autoPomodoro, autoSwitch, darkMode];
const arrBtnSwitch = document.querySelectorAll(".btn__switch");
arrBtnAuto.map((item, index) => {
  item.addEventListener("click", () => {
    arrBtnSwitch.item(index).classList.toggle(arrClass[0]);
    item.classList.toggle(arrClass[1]);
  });
});

const listColorBgr = document.querySelectorAll(".chose-color");
const header = document.querySelector(".header");
listColorBgr.forEach((item, index) =>
  item.addEventListener("click", () => console.log(index))
);
console.log(listColorBgr);
