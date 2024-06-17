const user1 = document.querySelector(".user1");
const user2 = document.querySelector(".user2");
const introduce = document.querySelector("#introduce");
const introduce2 = document.querySelector("#introduce2");

user1.addEventListener("click", () => {
  introduce.classList.toggle("hidden");
});
user2.addEventListener("click", () => {
  introduce2.classList.toggle("hidden");
});
