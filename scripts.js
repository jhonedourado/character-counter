const input = document.querySelector("#input");
const counterCharactersWithSpaces = document.querySelector(".charactersWithSpaces");
const counterCharactersNoSpaces = document.querySelector(".charactersNoSpaces");
const counterWords = document.querySelector(".words");

input.addEventListener("input", () => {
  let countCharactersWithSpaces = 0;
  countCharactersWithSpaces = input.value.length;
  counterCharactersWithSpaces.textContent = countCharactersWithSpaces;

  let countCharactersNoSpaces = 0;
  countCharactersNoSpaces = input.value.replace(/\s/g,'').length;
  counterCharactersNoSpaces.textContent = countCharactersNoSpaces;

  let countWords = 0;
  const words = input.value.trim().split(/\s+/);
  countWords = input.value.trim() === "" ? 0 : words.length;
  counterWords.textContent = countWords;
})
