const input = document.querySelector("#input");
const counterCharactersWithSpace = document.querySelector(".charactersWithSpace");
const counterCharactersNoSpace = document.querySelector(".charactersNoSpace");
const counterWords = document.querySelector(".words");

input.addEventListener("input", () => {
  let valueCharactersWithSpace = 0;
  valueCharactersWithSpace = input.value.length;
  counterCharactersWithSpace.textContent = valueCharactersWithSpace;

  let valueCharactersNoSpace = 0;
  valueCharactersNoSpace = input.value.replace(/\s/g,'').length;
  counterCharactersNoSpace.textContent = valueCharactersNoSpace;

  let valueWords = 0;
  const words = input.value.trim().split(/\s+/);
  valueWords = input.value.trim() === "" ? 0 : words.length;
  counterWords.textContent = valueWords;
});