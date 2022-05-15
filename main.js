"use strict";

let submitPage = `<div class="container ty-cont">
<img src="/images/illustration-thank-you.svg" alt="Thank you" />
<p>You selected <span class="selected-number">4</span> out of 5</p>
<div class="text-box">
  <h1 class="ty">Thank you!</h1>
  <p>
    We appreciate you taking the time to give a rating. If you ever need
    more support, don't hesitate to get in touch!
  </p>
</div>
</div>`;
const btn = document.querySelectorAll(".btn");
const submitEl = document.querySelector(`.submit`);
const body = document.querySelector(`body`);

// On click of any rating button, we want to store the value(textcontent) in a variable
let selectedButton;
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener(`click`, function () {
    selectedButton = btn[i].textContent;
  });
}

// When submit button clicked, we want to change the inner HTML of body to the submitPage
submitEl.addEventListener(`click`, function () {
  if (selectedButton) {
    body.innerHTML = submitPage;

    // When this happens, we want to change the textcontent of 'selectedNumber' to the textcontent of the selected rating button
    const selectedNumber = document.querySelector(`.selected-number`);
    selectedNumber.textContent = selectedButton;
  }
});
