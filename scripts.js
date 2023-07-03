const input = document.querySelector("#input");
const counterCharSpace = document.querySelector(".charSpace");
const counterCharNoSpace = document.querySelector(".charNoSpace");
const counterWords = document.querySelector(".words");

input.addEventListener("input", () => {
  let countCharSpace = 0;
  countCharSpace = input.value.length;
  counterCharSpace.textContent = countCharSpace;

  let countCharNoSpace = 0;
  countCharNoSpace = input.value.replace(/\s/g,'').length;
  counterCharNoSpace.textContent = countCharNoSpace;

  let countWords = 0;
  const words = input.value.trim().split(/\s+/);
  countWords = input.value.trim() === "" ? 0 : words.length;
  counterWords.textContent = countWords;
});