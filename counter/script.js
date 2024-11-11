var count = 0;
let inc = document.querySelector(".inc");
let dec = document.querySelector(".dec");
let rst = document.querySelector(".rst");
let counter = document.querySelector(".counter");

inc.addEventListener("click", () => {
  count += 1;
});
dec.addEventListener("click", () => {
  count -= 1;
});
rst.addEventListener("click", () => {
  count = 0;
});
console.log(count);
