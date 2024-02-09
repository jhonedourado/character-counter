const textarea = document.querySelector("#textarea");
const counterCharactersWithSpaces = document.querySelector(".characters-with-spaces");
const counterCharactersNoSpaces = document.querySelector(".characters-no-spaces");
const counterWords = document.querySelector(".words");

textarea.addEventListener("input", () => {
  let countCharactersWithSpaces = 0;
  countCharactersWithSpaces = textarea.value.length;
  counterCharactersWithSpaces.textContent = countCharactersWithSpaces;

  let countCharactersNoSpaces = 0;
  countCharactersNoSpaces = textarea.value.replace(/\s/g,'').length;
  counterCharactersNoSpaces.textContent = countCharactersNoSpaces;

  let countWords = 0;
  const words = textarea.value.trim().split(/\s+/);
  countWords = textarea.value.trim() === "" ? 0 : words.length;
  counterWords.textContent = countWords;
})
