const rateButtons = document.querySelectorAll(".rate");
const subButton = document.querySelector(".action-button");
const rate = document.querySelector("span");
const ratingComponent = document.querySelector(".none");
let rateValue = null;
// Returns the number that was clicked 
const catchRate = (e) => {
  for (let i = 0; i < rateButtons.length; i++) {
    rateButtons[i].classList.remove("active");
  }
  e.target.classList.add("active");
  rateValue = e.target.innerText;
};
// Sends the value
const submitValue = () =>{
    rate.innerText = rateValue;
    document.querySelector(".rating-component").style.display = 'none';
    ratingComponent.classList.remove("none")
}
// Sets eventListeners
for (let button = 0; button < rateButtons.length; button++) {
  rateButtons[button].addEventListener("click", catchRate);
}
subButton.addEventListener("click", submitValue);