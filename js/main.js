const options = document.querySelectorAll(".voting__option");

function addCounterOnOption(option) {
  const voitingImage = option.querySelector(".voting__option-img")
  const votingText = option.querySelector(".voting__option-text");
  voitingImage.addEventListener("click", function () {
    votingText.innerText++;
  })
}

options.forEach(addCounterOnOption);
