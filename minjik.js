const surpriseButton = document.querySelector("#surpriseButton");
const surpriseMessage = document.querySelector("#surpriseMessage");

surpriseButton.addEventListener("click", () => {
  surpriseMessage.classList.toggle("show");

  if (surpriseMessage.classList.contains("show")) {
    surpriseButton.textContent = "Yana bir bor o‘qi 💗";
  } else {
    surpriseButton.textContent = "Kichkina syurprizni och ✨";
  }
});