const input = document.querySelector("input");
const response = document.querySelector(".search-engine-error");
let elements = document.querySelectorAll(".container-ul li");

input.addEventListener("input", (e) => {
  const search = e.target.value.toUpperCase();
  elements.forEach((el) => {
    el.textContent.toUpperCase().indexOf(search) !== -1
      ? el.classList.remove("hidden")
      : el.classList.add("hidden");
  });
  const res = Array.from(elements);
  let check = res.every((item) => item.classList.contains("hidden"));

  check
    ? response.classList.add("active-rep")
    : response.classList.remove("active-rep");
});
