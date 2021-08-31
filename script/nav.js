const iconBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const nav = document.querySelector("nav");
const openMenuHandler = () => {
  nav.classList.toggle("show");
  iconBars.classList.toggle("active");
  iconX.classList.toggle("active");
};

iconBars.addEventListener("click", openMenuHandler);
iconX.addEventListener("click", openMenuHandler);
